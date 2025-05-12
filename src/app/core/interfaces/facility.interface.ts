export interface Facility {
  id: string;
  name: string;
  type: 'Restaurant' | 'Bar' | 'Pool' | 'Conference' | 'WeddingHall' | 'KidsArea' | 'Terrace' | 'Parking';
  description: string;
  capacity: number;
  images: string[];
  location: string; // Ex: "1er étage", "RDC"
  features?: string[]; // Caractéristiques supplémentaires
}