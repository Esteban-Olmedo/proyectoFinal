const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = 4000;

// app.set("view engine");
app.use(express.static("public"));
app.use(express.urlencoded({ entended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/productos", require ("./src/routes/productRoutes.js"));
app.use("/api/usuarios", require ("./src/routes/userRoutes.js"));
app.use("/api/orders", require ("./src/routes/orderRoutes.js"));

// app.get("/", (req, res) => {
//     res.send("pagina principal")
// });

app.get("/api/test", (req, res) => {
    res.json([
        {id: 1, name: "prod1", price: 100, size: "L", categorie: "lisa"},
        {id: 2, name: "prod2", price: 555, size: "S", categorie: "dibujo"}
    ]);
});




app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`); 
});