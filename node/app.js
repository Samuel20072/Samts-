import express from 'express'
import cors from 'cors'

import db from './database/db.js'

import blogRoutes from './routes/routes.js'

const app = express()
app.use((cors))
app.use(express.json())
app.use('/samts', blogRoutes)

try {
    await db.authenticate()
    console.log("conexion exitosa a la db");
    
} catch (error) {
    console.log(`El error de conexión es:${error}`);
}
app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log("servidor esta corriendo en http://localhost:8000/");
    
})