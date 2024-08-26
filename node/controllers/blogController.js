import { where } from "sequelize";
import blogModel from "../models/blogModels.js";

//Metodos para el crud

// Mostrar todos los registros 
 export const getAllblogs = async (req, res) =>{
    try {
        const Blogs = await blogModel.findAll()
        res.json(Blogs)
    } catch (error) {
        res.json( {message: error.message})
    }
}


export const getBlog = async (req, res) =>{
    try {
        blogModel.findAll({
            where:{
                id:{req:params.id}
            }
        })
        res.json(blogs)
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const createBlog = async (req, res) =>{
    try {
        await blogModel.create(req.body)
        res.json({
            "mesasage":"Registro creado"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

export const updateBlog = async (req, res) =>{
    try {
         await blogModel.update(req.body,{
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

export const deleteBlog = async (req, res) =>{
    try {
        await blogModel.destroy(req.body,{ 
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