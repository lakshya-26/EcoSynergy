import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

export const validateMyUserRequest = [
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("addressLine1 must be a string"),
  body("city").isString().notEmpty().withMessage("city must be a string"),
  body("country").isString().notEmpty().withMessage("country must be a string"),
  handleValidationErrors,
];

export const validateMyEnergyRequest = [
  body("month")
    .isString()
    .notEmpty()
    .withMessage("Month must be there"),
  body("year")
    .isString()
    .notEmpty()
    .withMessage("Year must be there"),
  body("usage")
    .isString()
    .notEmpty()
    .withMessage("Usage must be there"),
  handleValidationErrors,
];
