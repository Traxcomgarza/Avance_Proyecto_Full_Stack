import mongoose from 'mongoose';

const uri = "mongodb://localhost:27017/control_usuarios";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', function() {
  console.log("Conexión exitosa a MongoDB");
});

export default db;