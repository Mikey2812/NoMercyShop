import express from 'express';
const router = express.Router();

import adminRouter from './admin/indexRoutes.js';

router.use('/admin', adminRouter);

export default router;