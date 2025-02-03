import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import { methods as authentication } from './pages/admin/authentication.controllers.js';

// Arreglo del _dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Servidor
const app = express();
app.set('port', 4000);
app.listen(app.get('port'), () => {
    console.log("Servidor corriendo en puerto", app.get('port'));
});

// Configuración
app.use(express.static(path.join(__dirname, "pages")));  // Archivos estáticos (HTML, CSS, JS y assets) desde la carpeta pages
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
    // Asegúrate de que el archivo index.html está en la raíz del proyecto
    const filePath = path.join(__dirname, "index.html");  // Buscando index.html en la raíz
    console.log("Path to index.html:", filePath);
    res.sendFile(filePath);
});

app.get("/Login", (req, res) => res.sendFile(path.join(__dirname, "pages", "Login.html")));
app.get("/Register", (req, res) => res.sendFile(path.join(__dirname, "pages", "Register.html")));
app.get("/admin", (req, res) => res.sendFile(path.join(__dirname, "admin", "admin.html")));

app.post("/api/login", authentication.Login);
app.post("/api/register", authentication.register);
