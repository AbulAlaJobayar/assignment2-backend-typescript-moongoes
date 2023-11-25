import express from 'express'
import { orderController } from '../controllers/order.controllers';
const router = express.Router();


router.post('/orders',orderController.createOrder);
export const orderRoute=router