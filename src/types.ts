export interface CartItem {
  format: 'Redonda' | 'Flor' | 'Estrela';
  size: '200g' | '300g' | '500g' | '1kg';
  quantity: number;
  price: number;
}

export interface OrderFormData {
  name: string;
  phone: string;
  cart: CartItem[];
  paymentMethod: 'pix-full' | 'pix-half' | 'whatsapp';
}

export interface SizePrice {
  size: string;
  price: number;
}

export const SIZES: SizePrice[] = [
  { size: '200g', price: 18.00 },
  { size: '300g', price: 27.00 },
  { size: '500g', price: 45.00 },
  { size: '1kg', price: 85.00 }
];

export const FORMATS = ['Redonda', 'Flor', 'Estrela'];