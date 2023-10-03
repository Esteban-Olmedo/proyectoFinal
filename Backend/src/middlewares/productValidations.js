const { body, validationResult } = require("express-validator");

const validateActualizacion = [
  body("id")
    .isNumeric()
    .withMessage("el id debe ser un numero"),
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Debes completar el campo"),
  body("price")
    .isNumeric({ max: 10 })
    .withMessage("Debes ingresar un numero válido"),
  body("size")
    .isString()
    .notEmpty()
    .withMessage("Debes completar el campo"),
  body("categorie")
    .isString()
    .notEmpty()
    .withMessage("Debes completar el campo"),
  body("url")
    .isString()
    .optional(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.send(errors.array)
      return
    }
    next();
  },
];

const validateProducto = [
  body("id")
    .isNumeric()
    .withMessage("el id debe ser un numero"),
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Debes completar el campo"),
  body("price")
    .isNumeric({ max: 10 })
    .withMessage("Debes ingresar un numero valido y no mayor a 6 digitos"),
  body("size")
    .isString()
    .notEmpty()
    .withMessage("Debes completar el campo"),
  body("categorie")
    .isString()
    .notEmpty()
    .withMessage("Debes completar el campo"),
  
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.send(errors.array)
      return
    }
    next();
  },
];

module.exports = { validateProducto, validateActualizacion };