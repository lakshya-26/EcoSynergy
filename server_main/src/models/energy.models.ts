import mongoose from "mongoose";

const energySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  usage: {
    type: Number,
  },
  carbonFootprint: {
    type: Number,
  },
  totalCarbonFootprint: {
    type: Number,
  },
  difference: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Energy = mongoose.model("Energy", energySchema);

export default Energy;
