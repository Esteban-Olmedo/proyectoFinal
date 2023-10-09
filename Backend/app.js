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


// app.post("/api/login", (req, res) => {
//     if (req.body.username === "tebi15@hotmail.com" && req.body.password === "2648pkmn") {
//       return res.json({
//         username: "tebi15@hotmail.com",
//         name: "esteban",
//         role: "admin",
//       });
//     } else if (req.body.username === "user" && req.body.password === "user") {
//       return res.json({
//         username: "user",
//         name: "User",
//         role: "user",
//       });
//     } else {
//       return res.status(400).json({ message: "Username or password is invalid" });
//     }
//   });

app.get("/api/test", (req, res) => {
    res.json([
        {id: 1, name: "prod1", price: 100, size: "L", categorie: "lisa"},
        {id: 2, name: "prod2", price: 555, size: "S", categorie: "dibujo"}
    ]);
});




app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`); 
});