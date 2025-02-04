import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();



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
/*
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();
const usuarios = [
    {
        user: "a",
        email: "a@a.com",
        password: "a"
    }
];

async function Login(req, res) {
    try {
        console.log(req.body);
        const { user, password } = req.body;
        if (!user || !password) {
            return res.status(400).json({ status: "Error", message: "LOS CAMPOS ESTAN INCOMPLETOS" });
        }

        const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
        if (!usuarioARevisar) {
            return res.status(400).json({ status: "Error", message: "Este usuario no existe" });
        }

        const loginCorrecto = await bcryptjs.compare(password, usuarioARevisar.password);
        if (!loginCorrecto) {
            return res.status(400).json({ status: "Error", message: "Error durante login" });
        }

        const token = jsonwebtoken.sign(
            { user: usuarioARevisar.user },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
        );

        const cookieOption = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            path: "/"
        };

        res.cookie("jwt", token, cookieOption);
        return res.json({ status: "ok", message: "Usuario loggeado", redirect: "/admin" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "Error", message: "Error en el servidor" });
    }
}

async function register(req, res) {
    try {
        console.log(req.body);
        const { user, email, password } = req.body;

        if (!user || !email || !password) {
            return res.status(400).json({ status: "Error", message: "LOS CAMPOS ESTAN INCOMPLETOS" });
        }

        const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
        if (usuarioARevisar) {
            return res.status(400).json({ status: "Error", message: "Este usuario ya existe" });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        usuarios.push({ user, email, password: hashedPassword });

        return res.status(201).json({ status: "ok", message: "Usuario registrado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "Error", message: "Error en el servidor" });
    }
}

export const methods = {
    Login,
    register
};
*/