import express from 'express'
import { createBlog, deleteBlog, getAllblogs, getBlog, updateBlog } from '../controllers/blogController.js'
const routes = express.Router()

routes.get('/', getAllblogs)
routes.get('/:id', getBlog)
routes.post('/', createBlog)
routes.put('/:id', updateBlog)
routes.delete('/:id', deleteBlog)

export default routes