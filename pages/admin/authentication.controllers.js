import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import Usuarios from "../js/main";

dotenv.config();

const authentication={}
//Inicio de sesion para encontrar un usuario
authentication.Login=async(req,res)=>{
    const{user,password}=req.body;

    if(!user|| !password){
        return res.status(400).json({status:"Eror",message:"Los campos estan incompletos"})
    }

    try{
        const usuarioARevisar = usuarios.find(usuario =>usuario.user === user);
        
        if(!usuarioARevisar){
        res.res.status(400).json({status:"Error",message:"No se encuentra el usuario"})
    }
    const loginCorrecto = await bcryptjs.compare(password, usuarioARevisar.password);

    if (!loginCorrecto) {
        return res.status(400).json({ status: "Error", message: "Contraseña incorrecta" });
    }
    const token = jsonwebtoken.sign(
        { user: usuarioARevisar.user },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
    );
    
    res.json({ status: "ok", message: "Usuario loggeado", token });
    }catch (error) {
        res.status(500).json({ status: "Error", message: "Error en el servidor", error });
    }
    
};
authentication.register = async (req, res) => {
    const { user, email, password } = req.body;
    if (!user || !email || !password) {
        return res.status(400).json({ status: "Error", message: "LOS CAMPOS ESTÁN INCOMPLETOS" });
    }
    try {
        const usuarioExistente = await Usuario.findOne({ user });
        if (usuarioExistente) {
            return res.status(400).json({ status: "Error", message: " El usuario ya existe" });
        }
        const salt = await bcryptjs.genSalt(10);
        const contraseñaHasheada = await bcryptjs.hash(password, salt);

        
        const nuevoUsuario = new Usuario({ user, email, password: contraseñaHasheada });
        await nuevoUsuario.save();

        res.json({ status: "ok", message: "Usuario registrado correctamente" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: "❌ Error al registrar usuario", error });
    }

};
export { authentication };

const usuarios=[{
    user:"a",
    email:"a@a.com",
    password:"a"

}]

import { error } from "console";

async function Login(req,res){
    console.log(req.body)
    const user=req.body.user;
    const password=req.body.password;
    if(!user  || !password)
        res.status(400).send({status:"Error",message:"LOS CAMPOS ESTAN INCOMPLETOS"})
    const usuarioARevisar = usuarios.find(usuario =>usuario.user === user);
    if(usuarioARevisar){
        res.status(400).send({status:"Error",message:"Este usuario ya existe"})
    }
    const loginCorrecto = await bcryptjs.compare(password,usuarioARevisar.password)
    if(!loginCorrecto){
        return res.status(400).send({status:"Error",message:"Error durante login"})
      }
      const token = jsonwebtoken.sign(
        {user:usuarioARevisar.user},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRATION});
    
        const cookieOption = {
          expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
          path: "/"
        }
        res.cookie("jwt",token,cookieOption);
        res.send({status:"ok",message:"Usuario loggeado",redirect:"/admin"});
    }


async function register(req,res){
    console.log(req.body)
    const user=req.body.user;
    const email=req.body.email;
    const password=req.body.password;
    

    if(!user || !email || !password)
        res.status(400).send({status:"Error",message:"LOS CAMPOS ESTAN INCOMPLETOS"})
    const usuarioARevisar = usuarios.find(usuario =>usuario.user === user);
    if(usuarioARevisar){
        res.status(400).send({status:"Error",message:"Este usuario ya existe"})
    }
}


export const methods = {
    Login: (req, res) => {
        // Lógica de inicio de sesión
        console.log(req.body);
        res.status(200).send("Login successful");
    },

    register: (req, res) => {
        // Lógica de registro
        console.log(req.body); 
        res.status(200).send("Registration successful");
    }
};

