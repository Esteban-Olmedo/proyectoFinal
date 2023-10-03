const express = require("express");
const router = express.Router(); 
const {renderLogin, renderRegister, registrarNuevo, login} = require("../controllers/userControllers");
const validateRegister = require("../middlewares/userValidations");




// router.get("/login", renderLogin);
router.post("/login", login);
// router.get("/register", renderRegister);
router.post("/register", validateRegister, registrarNuevo);


module.exports = router