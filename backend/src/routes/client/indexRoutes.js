import express from 'express';
import auth from '../../middlewares/auth.js';
const router = express.Router();

import { login, register } from '../../controllers/clientController.js';
import { getAllPosts, getPostByID} from '../../controllers/postController.js';
import { createComment, deleteComment, deleteCommentByPath, editCommentByID, getCommentByPostID} from '../../controllers/commentController.js'
import { createLike, deleteLike } from '../../controllers/likeController.js';
import { sendEmail } from '../../controllers/mailController.js';

router.post('/login', login);
router.post('/register', register);

router.get('/posts', getAllPosts);
router.get('/posts/:postId/comments', getCommentByPostID);
router.get('/posts/:id', getPostByID);

router.post('/comments', auth, createComment);
router.patch('/comments/:id', auth, editCommentByID);
router.delete('/comments/:path', auth, deleteCommentByPath);

router.post('/likes', auth, createLike);
router.delete('/likes/:locationId', auth, deleteLike);

router.post('/testsendmail', sendEmail);

export default router;