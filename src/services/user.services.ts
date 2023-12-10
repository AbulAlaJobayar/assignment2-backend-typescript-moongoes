import { IUser } from '../interface/user.inrerface';
import { User } from '../models/user.model';
import userValidationSchema from '../validation/validation.zod';

const createUser = async (userData: IUser): Promise<IUser> => {
  const zodValidation = userValidationSchema.parse(userData);
  const result = await User.create(zodValidation);
  return result;
};
const getAllUsers = async (): Promise<any> => {
  const result = await User.find().select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

const updateUser = async (
  id: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};
const updateOrder = async (
  id: string,
  orderData: IUser,
): Promise<IUser | any> => {
 

  const result = await User.findByIdAndUpdate(
    id,
    { $set: { orders: orderData } },
    {
      upsert: true,
    },
  );
  return result;
};

const getAllOrder = async (id: string): Promise<IUser | any> => {
  const result = await User.findById(id).select({
    orders: 1,
  });
  return result;
};
const totalPrice = async (id: string): Promise<IUser | any> => {
  const result = await User.aggregate([
    {
      $group: {
        _id: id,
        totalPrice: { $sum: '$price' },
      },
    },
  ]);
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  updateOrder,
  getAllOrder,
  totalPrice,
};
