const { body, validationResult } = require('express-validator');

const validateCreateOrder = [
    body("user_id")
        .isNumeric()
        .withMessage("debe ser un numero"),
    body("total_price")
        .isNumeric()
        .withMessage("debe ser un numero"),
    body("shipping_address")
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

const validateUpdateOrder = [
    body("user_id")
        .isNumeric()
        .withMessage("debe ser un numero"),
    body("total_price")
        .isNumeric()
        .withMessage("debe ser un numero"),
    body("shipping_address")
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

module.exports = { validateCreateOrder, validateUpdateOrder };