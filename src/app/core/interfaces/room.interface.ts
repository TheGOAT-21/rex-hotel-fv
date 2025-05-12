export interface Room {
    id: string;
    type: 'Standard' | 'Superior' | 'Executive' | 'Suite' | 'Presidential' | 'Penthouse';
    name: string;
    description: string;
    price: number;
    images: string[];
  }