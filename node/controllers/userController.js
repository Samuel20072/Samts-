import { where } from "sequelize";
import userModels from '../models/UserModels.js'

//Metodos para el crud

// Mostrar todos los registros 
 export const getAllusers = async (req, res) =>{
    try {
        const users = await userModels.findAll()
        res.json(users)
    } catch (error) {
        res.json( {message: error.message})
    }
}


export const getUser = async (req, res) =>{
    try {
         await userModels.findAll({
            where:{
                id:{req:params.id}
            }
        })
        res.json(users)
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const createUser = async (req, res) =>{
    try {
        await userModels.create(req.body)
        res.json({
            "mesasage":"Registro creado"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const updateUser = async (req, res) =>{
    try {
         await userModels.update(req.body,{
            where:{
                id:{req:params.id}
            }
        })
        res.json({
            "mesasage":"Registro actulizado"
        })
      
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const deleteUser = async (req, res) =>{
    try {
        await userModels.destroy(req.body,{ 
            where:{
            id:{req:params.id}
        }})
        res.json({
            "mesasage":"Registro eliminado"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}