import express from 'express';
import UserContoller from '../controllers/userController.js';

const router = express.Router();

// User routes
router.post('/users', UserContoller.createUser);
router.get('/users', UserContoller.getAllUsers);
router.get('/users/:id', UserContoller.getUserById);
router.put('/users/:id', UserContoller.updateUser);
router.delete('/users/:id', UserContoller.deleteUser);

export default router;