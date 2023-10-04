const express = require("express");
const router = express.Router(); 
const {renderIndex, renderCart, renderDetalle, registrarProducto, renderProductos, borrarProducto, renderProductosId, actualizarProducto} = require ("../controllers/productControllers");
const {validateProducto, validateActualizacion} = require("../middlewares/productValidations");


// router.get("/", renderIndex);
// router.get("/cart", renderCart);
// router.get("/detalle", renderDetalle);

router.post("/", validateProducto, registrarProducto);
router.get("/", renderProductos);
router.get("/:id", renderProductosId); 
router.delete("/:id", borrarProducto);
router.put("/:id", validateActualizacion, actualizarProducto)


module.exports = router