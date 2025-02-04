import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;