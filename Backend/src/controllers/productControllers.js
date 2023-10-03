//const Product = require("../../models/productos").productos;
const Product = require("../../models/index").products;

// const renderIndex = (req, res) => {
//     res.send("index")
// };

// const renderCart = (req, res) => {
//     res.send("cart")
// };

// const renderDetalle = (req, res) => {
//     res.send("detalle")
// };



//OBTENER TODOS LOS PRODUCTOS:
const renderProductos = async (req, res) => {
    const products = await Product.findAll();
    res.json({ data: products })
};

//OBTENER UN PRODUCTO:
const renderProductosId = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    res.json({ data: product })
};

//CREAR UN PRODUCTO:
const registrarProducto = async (req, res) => {
    try {
        const { ...newProduct } = req.body;
        const { name, price, size, categorie, url } = newProduct;
        console.log(newProduct);
        if (!name || !price || !size || !categorie || !url) {
            return res.status(400).json({ error: "faltan datos" })
        }
        const product = await Product.create({ name, price, size, categorie, url })
        res.status(201).json({ message: "producto creado", data: product })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error en el servidor" })
    }
};

//ACTUALIZAR UN PRODUCTO:
const actualizarProducto = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    const { ...newProduct } = req.body;
    if (!product) {
        return res.status(404).json({ message: "producto no encontrado" });
    }
    await product.update(newProduct);
    return res.status(200).json({ message: "producto actualizado", data: product });
};

//BORRAR UN PRODUCTO:
const borrarProducto = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
        return res.status(404).json({ message: "producto no encontrado" });
    }
    await product.destroy();
    return res.status(200).json({ message: "producto eliminado", data: product });
};


module.exports = { registrarProducto, renderProductos, borrarProducto, renderProductosId, actualizarProducto }