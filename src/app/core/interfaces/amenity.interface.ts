export interface Facility {
    id: string;
    name: string;
    type: 'Restaurant' | 'Bar' | 'Pool' | 'Conference' | 'Spa' | 'Fitness';
    description: string;
    capacity: number;
    images: string[];
    location: string; // Ex: "1st Floor", "Ground Floor"
  }
  
  export interface Restaurant extends Facility {
    type: 'Restaurant';
    openingHours: {
      open: string;
      close: string;
    };
  }
  
  export interface ConferenceRoom extends Facility {
    type: 'Conference';
    equipment: string[];
    availableForEvents: boolean;
  }
  
  export interface Bar extends Facility {
    type: 'Bar';
    openingHours: {
      open: string;
      close: string;
    };
    isLounge: boolean;
  }