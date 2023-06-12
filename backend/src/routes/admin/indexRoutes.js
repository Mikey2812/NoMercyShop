import express from 'express';
import auth from '../../middlewares/auth.js';
const router = express.Router();

import { login } from '../../controllers/adminController.js';
import { getAllUsers } from '../../controllers/userController.js';
import { createCategory, getAllCategories, deleteCategory } from '../../controllers/categoryController.js';
import { createProduct, getAllProducts, deleteProduct  } from '../../controllers/productController.js';
import { createPost } from '../../controllers/postController.js';

router.post('/login', login);
router.get('/users', getAllUsers);

router.get('/categories', auth, getAllCategories);
router.post('/categories', auth, createCategory);
router.delete('/categories/:id', auth, deleteCategory);

router.get('/products', auth, getAllProducts);
router.post('/products', auth, createProduct);
router.delete('/products/:id', auth, deleteProduct);

router.post('/blogs', auth, createPost);
export default router;