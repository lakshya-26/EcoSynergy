import express from "express";
import {getEnergyData, logEnergydata} from "../controllers/energy.controllers";
import { jwtCheck, jwtParse } from "../middlewares/auth.middlewares";
import { validateMyEnergyRequest } from "../middlewares/validation.middlewares";

const router = express.Router();



router.get("/", jwtCheck, jwtParse, getEnergyData);
router.post("/",
    validateMyEnergyRequest,
    jwtCheck,
    jwtParse,
    logEnergydata);

export default router;