import { body } from "express-validator";

export const validateRegister= [
  body("name")
    .notEmpty()
    .withMessage("The field 'Name' is required")
    .isLength({ min: 3 })
    .withMessage("Title needs to have at least 3 characters"),

  body("name")
    .notEmpty()
    .withMessage("The field 'Name' is required")
    .isLength({ max: 20 })
    .withMessage("Title needs to have less than 20 characters"),

  body("email")
    .notEmpty()
    .withMessage("The field 'Email' is required")
    .isEmail(),

  body("password")
    .notEmpty()
    .withMessage("The field 'Password' is required")
    .isLength({ min: 6 })
    .withMessage("Password needs to at least 6 characters"),

  body("password")
    .notEmpty()
    .withMessage("The field 'Password' is required")
    .isLength({ max: 50 })
    .withMessage("Password needs to have less than 50 characters"),
];



export const validateLogin = [
  body("email")
    .notEmpty()
    .withMessage("The field 'Email' is required")
    .isEmail(),

    body("password")
    .notEmpty()
    .withMessage("The field 'Password' is required")
    .isLength({ max: 50 })
    .withMessage("Password needs to have less than 50 characters"),
];