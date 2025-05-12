export interface Reservation {
    id: string;
    roomId: string;
    roomType: string;
    startDate: string;
    endDate: string;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    numberOfGuests: number;
    specialRequests?: string;
    status: 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
    totalAmount: number;
    createdAt: Date;
  }