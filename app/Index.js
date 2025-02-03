import  express  from "express";

//Arreglo del _dirname
import path from 'path';
import { fileURLToPath } from "url";
const __dirname=path.dirname(fileURLToPath(import.meta.url));

//server
const app = express();
app.set('port',4000);
app.listen(app.get('port'),()=>{
    console.log("serveidor corriendo en puerto",app.get('port'));
});
//configuracion
app.use(express.static(path.join(__dirname,"app")))
//Rutas
app.get("/",(req,res)=>res.sendFile(__dirname +"/index.html"))