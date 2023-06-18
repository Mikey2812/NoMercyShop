import express from 'express';
import auth from '../../middlewares/auth.js';
const router = express.Router();

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { StatusCodes } from 'http-status-codes';
import path from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));


import { login } from '../../controllers/adminController.js';
import { getAllUsers } from '../../controllers/userController.js';
import { createCategory, getAllCategories, deleteCategory } from '../../controllers/categoryController.js';
import { createProduct, getAllProducts, deleteProduct  } from '../../controllers/productController.js';
import { createPost, deletePost, editPost, getAllPosts, getPostByID, changeStatus } from '../../controllers/postController.js';

router.post('/login', login);
router.get('/users', getAllUsers);

router.get('/categories', auth, getAllCategories);
router.post('/categories', auth, createCategory);
router.delete('/categories/:id', auth, deleteCategory);

router.get('/products', auth, getAllProducts);
router.post('/products', auth, createProduct);
router.delete('/products/:id', auth, deleteProduct);

router.get('/posts', auth, getAllPosts);
router.post('/posts', auth, createPost);
router.patch('/posts/status/:id', changeStatus);
router.get('/posts/:id', auth, getPostByID);
router.post('/posts/:id', auth, editPost);
router.delete('/posts/:id', auth, deletePost);

export default router;