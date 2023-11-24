import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt'

import { IAddress, IFullName, IUser } from '../interface/user.inrerface';
import config from '../config';


const fullNameSchema = new Schema<IFullName>({
  fastName: {
    type: String,
    required: [true, 'please provide your first name'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'please provide last name'],
    trim: true,
  },
});
const addressSchema = new Schema<IAddress>({
  street: {
    type: String,
    required: [true, 'please provide your street name'],
    trim: true,
  },
  city: {
    type: String,
    required: [true, 'please provide your city name'],
    trim: true,
  },
  country: {
    type: String,
    required: [true, 'please provide country name'],
    trim: true,
  },
});
const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: [true, 'please provide unique id'],
    unique: true,
  },
  userName: {
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
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'please provide valid email'],
    trim: true,
  },
  isActive: {
    type: Boolean,
    enum: ['true', 'false'],
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: addressSchema,
    required: [true, 'please provide your address'],
  },
});
userSchema.pre('save', async function(next){
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user=this;
  user.password=await bcrypt.hash(user.password,Number(config.bcrypt_sault_round),)
  next()
})
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});


export const User = model<IUser>('User', userSchema);
