import { IUser } from '../interface/user.inrerface';
import { User } from '../models/user.model';

const createUser = async (userData: IUser): Promise<IUser> => {
    const result = await User.create(userData);
    return result;
};
const getAllUsers = async (): Promise<any> => {
    const result = await User.find().select({
        userName:1,
        fullName:1,
        age:1,
        email:1,
        address:1

    })
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

export const userServices = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
