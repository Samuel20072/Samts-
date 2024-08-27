import blogModel from "../models/blogModels.js";

// Métodos para el CRUD

// Mostrar todos los registros 
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.findAll();
        res.json(blogs);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Mostrar un solo registro por id
export const getBlog = async (req, res) => {
    try {
        const blog = await blogModel.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(blog);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Crear un nuevo registro
export const createBlog = async (req, res) => {
    try {
        await blogModel.create(req.body);
        res.json({
            message: "Registro creado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Actualizar un registro existente
export const updateBlog = async (req, res) => {
    try {
        await blogModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Registro actualizado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        await blogModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Registro eliminado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
