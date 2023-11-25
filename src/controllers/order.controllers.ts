import { Request, Response } from "express";
import { orderServices } from "../services/order.services";

const createOrder = async (req: Request, res: Response) => {
    try {
        const userId=req.params.userId
        const data = req.body
       const result=orderServices.createOrder(userId,data)
res.status(201).json({
    data:result
})
    } catch (error) {
        console.log(error)
    }
}

export const orderController={
    createOrder
}