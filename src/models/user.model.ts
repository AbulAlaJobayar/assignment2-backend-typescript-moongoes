import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

import {
  IAddress,
  IFullName,
  IOrders,
  IUser,
} from '../interface/user.inrerface';
import config from '../config';

const fullNameSchema = new Schema<IFullName>({
  firstName: {
    type: String,
    required: [true, 'please provide your first name'],
  },
  lastName: {
    type: String,
    required: [true, 'please provide last name'],
  },
});
const addressSchema = new Schema<IAddress>({
  street: {
    type: String,
    required: [true, 'please provide your street name'],
  },
  city: {
    type: String,
    required: [true, 'please provide your city name'],
  },
  country: {
    type: String,
    required: [true, 'please provide country name'],
  },
});
const OrderSchema = new Schema<IOrders>({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: [true, 'please provide unique id'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'please tell us you name'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please provide valid password'],
    trim: true,
  },
  fullName: {
    type: fullNameSchema,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'please provide valid email'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: addressSchema,
    required: [true, 'please provide your address'],
  },
  orders: {
    type: OrderSchema,
  },
});

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_sault_round),
  );
  next();
});
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<IUser>('User', userSchema);
