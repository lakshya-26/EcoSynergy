import express from "express";
import {getEnergyData, logEnergydata} from "../controllers/energy.controllers";
import { jwtCheck, jwtParse } from "../middlewares/auth.middlewares";
import multer from "multer";
import { validateMyEnergyRequest } from "../middlewares/validation.middlewares";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});


router.get("/", jwtCheck, jwtParse, getEnergyData);
router.post("/",
    upload.single("imageFile"),
    validateMyEnergyRequest,
    jwtCheck,
    logEnergydata);

export default router;