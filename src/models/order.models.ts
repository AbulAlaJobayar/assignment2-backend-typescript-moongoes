import { Schema, model } from "mongoose";
import { IOrder } from "../interface/order.interface";


const OrderSchema = new Schema<IOrder>({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    quantity: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

},
// {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   },
);
export const Order = model<IOrder>('Order', OrderSchema);