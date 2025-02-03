const usuarios=[{
    user:"a",
    email:"a@a.com",
    password:"a"

}]

import { error } from "console";

function Login(req,res){

}
function register(req,res){
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

