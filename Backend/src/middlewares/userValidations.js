const { body, validationResult } = require("express-validator");

const validateRegister = [
    // body("rol")
    //     .notEmpty()
    //     .withMessage("Debes completar el campo"),
    body("name")
        .notEmpty()
        .withMessage("Debes completar el campo"),
    body("surname")
        .notEmpty()
        .withMessage("Debes completar el campo"),
    body("address")
        .notEmpty()
        .withMessage("Debes completar el campo"),
    body("phone")
        .notEmpty()
        .withMessage("Debes completar el campo"),
        
    body("email")
        .notEmpty()
        .withMessage("Debes completar el campo email")
        .isEmail()
        .withMessage("Debes ingresar un email válido"),

    body("password")
        .notEmpty()
        .withMessage("Debes completar el campo contraseña")
        .isString({ min: 6 })
        .withMessage("La contraseña debe tener mas de 6 caracteres"),


    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.send(errors.array())
            return
          }
          next();
    },
];

module.exports = validateRegister;