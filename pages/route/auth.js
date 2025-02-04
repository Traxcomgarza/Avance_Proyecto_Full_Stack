import express from 'express';
import mongoose from 'mongoose';
import Usuario from '../models/usuario.js';

const router = express.Router();

// Ruta de registro
router.post('/register', async (req, res) => {
    try {
        const usuario = new Usuario({
            _id: new mongoose.Types.ObjectId(),
            nombre: req.body.nombre,
            correo: req.body.correo,
            contraseña: req.body.contraseña
        });
        await usuario.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Ruta de login
router.post('/login', async (req, res) => {
    try {
        const usuario = await Usuario.findOne({ correo: req.body.correo });
        if (!usuario) {
            return res.status(401).json({ message: 'Autenticación fallida' });
        }
        if (req.body.contraseña !== usuario.contraseña) {
            return res.status(401).json({ message: 'Autenticación fallida' });
        }
        res.status(200).json({ message: 'Autenticación exitosa' });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

export default router;