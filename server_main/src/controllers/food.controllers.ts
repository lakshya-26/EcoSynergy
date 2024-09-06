import { Food, FoodItem } from "../models/food.models";
import { Request, Response } from "express";
import mongoose from "mongoose";

type foodProps = {
  name: string;
  quantity: number;
  co2: number;
};

const logFoodData = async (req: Request, res: Response) => {
  const { meal, foods } = req.body;

  try {
    const carbonFootprint: number = foods.reduce(
      (total: number, food: foodProps) => total + food.co2 * food.quantity,
      0
    );
    const latestEntry = await Food.findOne({ userId: req.userId }).sort({
      date: -1,
    });

    let totalCarbonFootprint: number = 0;

    if (latestEntry) {
      const previousTotalCarbonFootprint =
        latestEntry.totalCarbonFootprint ?? 0;
      totalCarbonFootprint = carbonFootprint + previousTotalCarbonFootprint;
    }
    const newData = new Food({
      userId: new mongoose.Types.ObjectId(req.userId),
      meal,
      foods,
      carbonFootprint,
      totalCarbonFootprint,
    });

    const data = await newData.save();
    return res.status(201).json(data);
  } catch (error: any) {
    console.log(error.message);
  }
};

const getFoodData = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const foodLogs = await Food.find({ userId }).sort({ date: -1 });
    if (!foodLogs) {
      return res
        .status(404)
        .json({ message: "No food data found for this user." });
    }

    return res.status(200).json(foodLogs);
  } catch (error: any) {
    console.log(error.message);
  }
};

const getAllFoodItems = async (req: Request, res: Response) => {
  try {
    const foodItems = await FoodItem.find({});

    if (!foodItems) {
      return res.status(404).json({ message: "No data found." });
    }

    return res.status(200).json(foodItems);
  } catch (error: any) {
    console.log(error.message);
  }
};

export {
    logFoodData,
    getFoodData,
    getAllFoodItems
}