export interface IFullName {
  firstName: string;
  lastName: string;
}
export interface IAddress {
  street: string;
  city: string;
  country: string;
}
export interface IOrders {
  productName: string;
  price: number;
  quantity: number;
}

export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: IFullName;
  age: number;
  email: string;
  isActive: true | false;
  hobbies: string[];
  address: IAddress;
  orders?: IOrders;
}
