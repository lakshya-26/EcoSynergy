import Energy from "../models/energy.models";
import { Request, Response } from "express";
import mongoose from "mongoose";


const CARBON_INTENSITY = 0.3;



const logEnergydata = async (req: Request, res: Response) => {
  const { month, year, usage } = req.body;

  try {
    const currentUsage = parseFloat(usage);
    const latestEntry = await Energy.findOne({ user: req.userId }).sort({
      year: -1,
      month: -1,
    });

    let difference: number = 0;
    let carbonFootprint: number = 0;
    let totalCarbonFootprint: number = 0;

    if (latestEntry) {
      // Make sure latestEntry.usage and latestEntry.totalCarbonFootprint are not null or undefined
      const previousUsage = latestEntry.usage ?? 0;
      const previousTotalCarbonFootprint = latestEntry.totalCarbonFootprint ?? 0;

      // If there's a previous entry, calculate the difference in usage
      difference = currentUsage - previousUsage;
      carbonFootprint = calculateCarbonFootprint(difference);
      totalCarbonFootprint = carbonFootprint + previousTotalCarbonFootprint;
    }

    // If this is the first entry, all values remain at 0
    // Save the new data
    const newData = new Energy({
      user: new mongoose.Types.ObjectId(req.userId),
      month,
      year,
      usage: currentUsage,
      carbonFootprint, // Save the calculated carbon footprint
      totalCarbonFootprint,
      difference,
      imageUrl: "", 
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

const getEnergyData = async (req: Request, res: Response) => {
  try {
    // Find the latest energy data entry for the user
    const latestEnergyData = await Energy.findOne({ user: req.userId }).sort({
      year: -1,
      month: -1,
    }); // Sort by year and month in descending order to get the latest entry

    if (!latestEnergyData) {
      return res
        .status(404)
        .json({ message: "No energy data found for this user." });
    }

    // Return the latest data, including the imageUrl
    return res.status(200).json(latestEnergyData);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

export { logEnergydata, getEnergyData };
