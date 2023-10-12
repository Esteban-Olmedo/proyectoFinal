const express = require("express");
const router = express.Router(); 
const { registrarProducto, renderProductos, borrarProducto, renderProductosId, actualizarProducto} = require ("../controllers/productControllers");
const {validateProducto, validateActualizacion} = require("../middlewares/productValidations");




router.post("/", validateProducto, registrarProducto);
router.get("/", renderProductos);
router.get("/:id", renderProductosId); 
router.delete("/:id", borrarProducto);
router.put("/:id", validateActualizacion, actualizarProducto)


module.exports = router