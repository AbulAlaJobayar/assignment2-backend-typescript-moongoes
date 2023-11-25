import { z } from 'zod';
const fullNameValidationSchema = z.object({
  fastName: z.string(),
  lastName: z.string(),
});

const addressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});
const ordersValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userValidationSchema = z.object({
  userId: z.number(),
  userName: z.string(),
  password: z.string(),
  fullName: fullNameValidationSchema,
  age: z.number(),
  email: z.string().email('please provide valid email'),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: addressValidationSchema,
  orders: ordersValidationSchema.optional(),
});
export default userValidationSchema;
