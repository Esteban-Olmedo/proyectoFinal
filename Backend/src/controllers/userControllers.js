const bcrypt = require("bcrypt");
const Users = require("../../models/index").users;

// const renderLogin = (req, res) => {
//     res.send("login")
// };

// const renderRegister = (req, res) => {
//     res.send("register")
// };

const registrarNuevo = (req, res) => {
    //destructiring
    const { email, password } = req.body;

    // Generar un salt (valor aleatorio) para fortalecer el hashing 
    // const saltRounds = 1; // $2b$04$qXQ9W1gqwBTXfvGuZsxG9edctiC1i17pp/U49BgF69jyyyEqvociS
    const saltRounds = 10; // $2b$10$UEhs00CicTlcIc3K3Zjf4uKqyvw4F/iSrbzfFntfIk/W5qDGPu.2O
    // Aplicar el hashing de la contraseña utilizando bcrypt
    bcrypt.hash (password, saltRounds, async (error, hashedPassword) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error al hashear la contraseña");
            return;
        }
        // Crear un objeto con el email y la contraseña hasheada
        const nuevoUsuario = {
            email,
            password: hashedPassword, // Guardar la contraseña hasheada en lugar de la original
        };

        // const usuarios = readUsuarios();
        const user = await Users.create (nuevoUsuario)

        // usuarios.push(nuevoUsuario);
        // saveUsuarios(usuarios);

        //antes: res.send("Nuevo usuario registrado");

        //guardar el valor del usuario recien registrado en la sesion
        req.session.usuario = user;

        res.send({mensaje: "usuario creado"})
    });
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
                res.status(200).send("Logeado correctamente");
            } else {
                //console.log("contraseña incorrecta");
                res.status(500).send("Contraseña incorrecta");
            }
        });
    };
}


module.exports = { registrarNuevo, login }