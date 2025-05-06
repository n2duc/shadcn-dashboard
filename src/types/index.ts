export type Auth = {
  username: string;
  fullname: string;
  email: string;
  avatar: string;
  bio?: string;
  phoneNumber?: string;
}

export type User = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  birthDate: string;
}

export type Contribute = {
  date: string;
  count?: number;
  color: string;
  intensity: number;
}

export type ContributeYear = {
  year: string;
  total: number;
  range: {
    start: string;
    end: string;
  }
}

export type TaskCols = "data-structures" | "algorithms" | "techniques";

export type TaskType = {
  id: string;
  title: string;
  column: TaskCols;
}

export type Product = {
  id: string;
  productNumber: string;
  cost: number;
  profit: number;
  revenue: number;
  customerEmail: string;
  merchantName: string;
  receiptStatus: 'not_received' | 'received';
  paymentStatus: 'not_paid' | 'paid';
  orderTime: string;
}