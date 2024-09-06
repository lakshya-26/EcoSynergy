import express from "express";
import { logFoodData, getFoodData, getAllFoodItems } from "../controllers/food.controllers";
import { jwtCheck, jwtParse } from "../middlewares/auth.middlewares";
import { validateFoodRequest } from "../middlewares/validation.middlewares";

const router = express.Router();

router.get("/items", getAllFoodItems);

router.get("/", jwtCheck, jwtParse, getFoodData);
router.post("/", validateFoodRequest, jwtCheck, jwtParse, logFoodData);

export default router;