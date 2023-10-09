const bcrypt = require("bcrypt");
const Users = require("../../models/index").users;

// const renderLogin = (req, res) => {
//     res.send("login")
// };

// const renderRegister = (req, res) => {
//     res.send("register")
// };




const registrarNuevo = (req, res) => {
    try {
      const { ...newUser } = req.body;
      bcrypt.hash(newUser.password, 10, async (error, hashedPassword) => {
        if (error) {
          console.error(error);
          res.status(500).send("Error al hashear la contraseña");
          return;
        }
        await Users.create({ ...newUser, password: hashedPassword });
        res.send({ mensaje: "usuario creado" });
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al crear el usuario");
    }
  };


const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({where: {email}});
    //const usuarios = fs.readFileSync("usuarios.json", "utf-8");
    //const usuariosParsed = JSON.parse(usuarios);

    // console.log({ email, password });
    // console.log(usuariosParsed);

   // let usuarioFinded; //buscar en el array de usuarios el que coincida con el email, si ninguno coincide, enviar un error

    if (user) {

        bcrypt.compare(password, user.password, (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).send("Error al comparar la contraseña");
            }
            // result solo va a ser TRUE o FALSE
            if (result) {
                //console.log("contraseña correcta");
                res.status(200).json({
                  message: "inicio de sesion exitoso",
                  data: {nombre: user.name},
                })
                // res.status(200).send("Logeado correctamente");
            } else {
                //console.log("contraseña incorrecta");
                res.status(500).send("Contraseña incorrecta");
            }
        });
    };
}


module.exports = { registrarNuevo, login }
