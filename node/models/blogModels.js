//importación de la base de datos
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const blogModel = db.define('articles', {
    titulo: { type: DataTypes.STRING },
    contenido: { type: DataTypes.TEXT },
    autor: { type: DataTypes.STRING },
    fecha_publicacion: { type: DataTypes.DATE },
    categoria: { type: DataTypes.NUMBER },
    categoria: { type: DataTypes.NUMBER },
    vistas: { type: DataTypes.NUMBER },
    destacado: { type: DataTypes.TINYINT },
    creado_en: { type: DataTypes.TIME },
})

export default blogModel;