import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async(req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    next();
}


export const validateMyUserRequest = [
    body("addressLine1").isString().notEmpty().withMessage("addressLine1 must be a string"),
    body("city").isString().notEmpty().withMessage("city must be a string"),
    body("country").isString().notEmpty().withMessage("country must be a string"),
    handleValidationErrors,

]

export const validateMyEnergyRequest = [
  body("month")
  .isInt({ min: 1, max: 12 })
  .withMessage("Month must be an integer between 1 and 12"),
body("year")
  .isInt({ min: 1900 }) // Assuming you don't want data before 1900
  .withMessage("Year must be a valid integer"),
body("usage")
  .isFloat({ min: 0 })
  .withMessage("Usage must be a positive number"),
body("carbonFootprint")
  .isFloat({ min: 0 })
  .withMessage("Carbon footprint must be a positive number"),
body("totalCarbonFootprint")
  .isFloat({ min: 0 })
  .withMessage("Total carbon footprint must be a positive number"),
body("difference")
  .isFloat()
  .withMessage("Difference must be a number"),
handleValidationErrors,
]