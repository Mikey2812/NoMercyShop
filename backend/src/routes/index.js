import express from 'express';
const router = express.Router();

import adminRouter from './admin/indexRoutes.js';
import clientRouter from './client/indexRoutes.js';

router.use('/admin', adminRouter);
router.use('/client', clientRouter);

export default router;