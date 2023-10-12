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








app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`); 
});