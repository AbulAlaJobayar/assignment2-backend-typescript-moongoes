import { userController } from './../controllers/user.contoller';
import express from 'express';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.gateSingleUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);
router.put('/:userId/orders', userController.updateOrder);
router.get('/:userId/orders', userController.getAllOrder);
router.get('/:userId/orders/total-price', userController.totalPrice);

export const userRoutes = router;
