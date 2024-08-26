import multer from "multer";
import Tesseract from "tesseract.js";
import Energy from "../models/energy.models";
import { v2 as cloudinarySave } from "cloudinary";
import stream from 'stream';
import { Request, Response } from "express";
import mongoose from "mongoose";

cloudinarySave.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const CARBON_INTENSITY = 0.300;

const upload = multer();

// Function to upload image to Cloudinary
const uploadToCloudinary = (fileBuffer: Buffer, options: object): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinarySave.uploader.upload_stream(
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

const logEnergydata = async (req: Request, res: Response) => {
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
      const { data: { text } } = await Tesseract.recognize(uploadResponse.url);
      console.log('OCR Result:', text);
      const currentUsage = parseFloat(text.match(/\d+/)?.[0] || "0");  // Extract the first number from the text
  
      // Check if there's any previous entry for this user
      const latestEntry = await Energy.findOne({ user: req.userId }).sort({ year: -1, month: -1 });
  
      let difference: number = 0;
      let carbonFootprint: number = 0;
      let totalCarbonFootprint: number = 0;
  
      if (latestEntry && latestEntry.usage && latestEntry.totalCarbonFootprint) {
        // If there's a previous entry, calculate the difference in usage
        difference = currentUsage - latestEntry.usage;
        carbonFootprint = calculateCarbonFootprint(difference);
        totalCarbonFootprint = carbonFootprint + latestEntry.totalCarbonFootprint;
      } else {
        // If this is the first entry, calculate the carbon footprint based on the current usage
        difference = 0;
        carbonFootprint = 0;
        totalCarbonFootprint = 0;
      }
  
      const newData = new Energy({
        user: new mongoose.Types.ObjectId(req.userId),
        month,
        year,
        usage: currentUsage,
        carbonFootprint, // Save the calculated carbon footprint
        totalCarbonFootprint,
        difference,
        imageUrl: uploadResponse.url, // Save the Cloudinary image URL in the database
      });
  
      const data = await newData.save();
      return res.status(201).json(data);
    } catch (err: any) {
      console.error(err);
      return res.status(400).json({ message: err.message });
    }
  };
  
  // Helper function to calculate the carbon footprint
  const calculateCarbonFootprint = (usage: number): number => {
    return usage * CARBON_INTENSITY; // Carbon Footprint (kg CO2) = Energy Usage (kWh) * Carbon Intensity (kg CO2 per kWh)
  };
  
  export { logEnergydata };