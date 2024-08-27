//importación de la base de datos
import db from "../database/db.js";

import { DataTypes } from "sequelize";


const UserModel = db.define('users', {
    nombreCompleto: { type: DataTypes.STRING },
    nombreUsuario: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},
    descripcion: { type: DataTypes.CHAR },
})

export default UserModel;