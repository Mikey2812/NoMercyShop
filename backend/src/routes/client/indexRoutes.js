import express from 'express';
import auth from '../../middlewares/auth.js';
const router = express.Router();

import { login, register } from '../../controllers/clientController.js';

router.post('/login', login);
router.post('/register', register);

// router.get('/users', getAllUsers);

// router.get('/categories', auth, getAllCategories);
// router.post('/categories', auth, createCategory);
// router.delete('/categories/:id', auth, deleteCategory);

// router.get('/products', auth, getAllProducts);
// router.post('/products', auth, createProduct);
// router.delete('/products/:id', auth, deleteProduct);

// router.get('/posts', auth, getAllPosts);
// router.post('/posts', auth, createPost);

export default router;