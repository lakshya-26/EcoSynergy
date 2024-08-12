import express from "express";
import myUserController from "../controllers/user.controllers";
import { jwtCheck, jwtParse } from "../middlewares/auth.middlewares";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, myUserController.getCurrentUser);
router.post("/", jwtCheck, myUserController.createCurrentUser);

export default router;