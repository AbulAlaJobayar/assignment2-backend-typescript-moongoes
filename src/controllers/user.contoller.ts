/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { userServices } from '../services/user.services';
import userValidationSchema from '../validation/validation.zod';

const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    // console.log({data})
    const zodValidation = userValidationSchema.parse(data);
    // console.log({zodValidation})
    const result = await userServices.createUser(zodValidation);
    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went to wrong',
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(201).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Users not found',
      error: {
        code: 404,
        description: 'Users not found!',
      },
    });
  }
};
const gateSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await userServices.getSingleUser(id);
    res.status(201).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const result = await userServices.updateUser(id, data);
    res.status(201).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    await userServices.deleteUser(id);
    res.status(201).json({
      success: true,
      message: 'User deleted successfully!!',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const result = await userServices.updateOrder(id, data);
    res.status(201).json({
      success: true,
      message: 'Order created successfully!"',
      data: null,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await userServices.getAllOrder(id);
    res.status(201).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const totalPrice = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await userServices.totalPrice(id);
    res.status(201).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
export const userController = {
  createUser,
  getAllUsers,
  gateSingleUser,
  updateUser,
  deleteUser,
  updateOrder,
  getAllOrder,
  totalPrice,
};
