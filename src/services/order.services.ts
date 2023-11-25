import { IOrder } from "../interface/order.interface";



const createOrder = async(userId:any,ordersData:IOrder):Promise<any> => {
    
    const id=userId 
    const data= ordersData
   console.log({id,data})
 };

 export const orderServices={
    createOrder
 }

//  const createReview = async (reviewData: IReview): Promise<IReview> => {
//     const result = await Review.create(reviewData)
  
//     if (result) {
//       Review.calcAverageRatings(result.tour)
//     }
  
//     return result
//   }