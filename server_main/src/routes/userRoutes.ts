import express from "express";
import myUserController from "../controllers/user.controllers";
import { jwtCheck, jwtParse } from "../middlewares/auth.middlewares";
import { validateMyUserRequest } from "../middlewares/validation.middlewares";

const router = express.Router();



router.get("/", jwtCheck, jwtParse, myUserController.getCurrentUser);
router.post("/", jwtCheck, myUserController.createCurrentUser);
router.put(
    "/",
    jwtCheck,
    jwtParse,
    validateMyUserRequest,
    myUserController.updateCurrentUser
  );

export default router;