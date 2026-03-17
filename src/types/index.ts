export type UserRole = 'BUYER' | 'SUPPLIER';

export type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PREPARING'
  | 'DELIVERING'
  | 'DELIVERED'
  | 'CANCELLED';

export type WreathCategory =
  | 'FUNERAL'
  | 'CONGRATULATION'
  | 'OPENING'
  | 'GRADUATION';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
}

export interface Product {
  id: number;
  name: string;
  category: WreathCategory;
  price: number;
  imageUrl: string;
  description: string;
  supplierId: number;
}

export interface Order {
  id: number;
  status: OrderStatus;
  product: Product;
  quantity: number;
  deliveryAddress: string;
  deliveryDateTime: string;
  recipientName: string;
  recipientPhone: string;
  message?: string;
  ribbonText?: string;
  totalPrice: number;
  buyer: User;
  supplier: User;
  createdAt: string;
}
