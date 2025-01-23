import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { registerUser, authUser, getUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;

