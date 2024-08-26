const multer = require('multer');
const tesseract = require('tesseract.js');
const EnergyData = require('../models/energyData.models.js');
import asyncHandler from "../utils/asyncHandler.js";
import cloudinary from 'cloudinary';
import stream from 'stream';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
});

// Constants
const CARBON_INTENSITY = 0.233; // kg CO2 per kWh (example value, adjust based on your region)

// Multer setup to parse file uploads
const upload = multer();

// Function to upload image to Cloudinary
const uploadToCloudinary = (fileBuffer, options) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileBuffer);
    bufferStream.pipe(uploadStream);
  });
};

// Log Energy Data with OCR and Cloudinary
const logEnergydata = asyncHandler(async (req, res) => {
  const { month, year } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded!" });
    }

    // Upload the image to Cloudinary
    const uploadResponse = await uploadToCloudinary(req.file.buffer, {
      folder: "energy_data_images",
    });

    // Perform OCR on the uploaded image's Cloudinary URL
    const { data: { text } } = await tesseract.recognize(uploadResponse.url);
    console.log('OCR Result:', text);
    const currentUsage = parseFloat(text.match(/\d+/)[0]); // Extract the first number from the text

    // Check if there's any previous entry for this user
    const latestEntry = await EnergyData.findOne({ user: req.user.id }).sort({ year: -1, month: -1 });

    let difference = 0;
    let carbonFootprint = 0;

    if (latestEntry) {
      // If there's a previous entry, calculate the difference in usage
      difference = currentUsage - latestEntry.usage;
      carbonFootprint = calculateCarbonFootprint(currentUsage);
    } else {
      // If this is the first entry, calculate the carbon footprint based on the current usage
      carbonFootprint = calculateCarbonFootprint(currentUsage);
    }

    const newData = new EnergyData({
      user: req.user.id,
      month,
      year,
      usage: currentUsage,
      carbonFootprint, // Save the calculated carbon footprint
      difference,
      imageUrl: uploadResponse.url, // Save the Cloudinary image URL in the database
    });

    const data = await newData.save();
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// Helper function to calculate the carbon footprint
const calculateCarbonFootprint = (usage) => {
  return usage * CARBON_INTENSITY; // Carbon Footprint (kg CO2) = Energy Usage (kWh) * Carbon Intensity (kg CO2 per kWh)
};

export { logEnergydata };
