import express from 'express';
import cors from 'cors';

import db from './database/db.js';
import routes from './routes/routes.js';

const app = express();


app.use(cors()); 
app.use(express.json());

// Rutas
app.use('/samts', routes);

app.get('/', (req, res) => {
  res.send('HOLA MUNDO');
});

// Conexión a la base de datos y arranque del servidor
(async () => {
  try {
    await db.authenticate();
    console.log("Conexión exitosa a la base de datos");

    app.listen(8000, () => {
      console.log("Servidor corriendo en http://localhost:8000/");
    });
  } catch (error) {
    console.log(`El error de conexión es: ${error}`);
  }
})();
