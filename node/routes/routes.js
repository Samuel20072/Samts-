import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/blogController.js'
import { createUser, deleteUser, getAllusers, getUser, updateUser } from '../controllers/UserController.js'
const routes = express.Router()

routes.get('/', getAllBlogs)
routes.get('/:id', getBlog)
routes.post('/', createBlog)
routes.put('/:id', updateBlog)
routes.delete('/:id', deleteBlog)
routes.get('/User', getAllusers)
routes.get('/User/:id', getUser)
routes.post('/User', createUser)
routes.put('/User/:id', updateUser)
routes.delete('/User/:id', deleteUser)

export default routes