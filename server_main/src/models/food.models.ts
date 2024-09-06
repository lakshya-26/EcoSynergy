import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  co2: { type: String, required: true },
});

const foodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  meal: { type: String, required: true },
  foods: [foodItemSchema],
  carbonFootprint: { type: Number, required: true },
  totalCarbonFootprint: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Food = mongoose.model("Energy", foodSchema);
const FoodItem = mongoose.model('FoodItem', foodItemSchema);

export {
    Food,
    FoodItem
};
