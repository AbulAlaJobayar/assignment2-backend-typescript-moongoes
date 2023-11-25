import { Schema } from "mongoose";

export interface IOrder{
    productName: string,
    price: number,
    quantity: number,
    user:Schema.Types.ObjectId
}