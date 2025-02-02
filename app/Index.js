import  express  from "express";
//server
const app = express();
app.set('port',4000);
app.listen(app.get('port'));
console.log("serveidor corriendo en puerto",app.get('port'));

