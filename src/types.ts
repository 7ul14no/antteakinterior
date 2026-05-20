export interface Product {
  id: string;
  name: string;
  category: 'living' | 'dining' | 'bedroom' | 'workspace';
  price: string;
  dimensions: string;
  description: string;
  image: string;
  features: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface RoomStyle {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  activeProducts: string[]; // references of product names or ids
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  roomFocus: string;
  message: string;
}
