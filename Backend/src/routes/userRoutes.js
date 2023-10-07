const express = require("express");
const router = express.Router(); 
const { registrarNuevo, login} = require("../controllers/userControllers");
const validateRegister = require("../middlewares/userValidations");





router.post("/login", login);

router.post("/register", validateRegister, registrarNuevo);


module.exports = router