function Login(req,res){

}
function register(req,res){
    console.log(req.body)


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

