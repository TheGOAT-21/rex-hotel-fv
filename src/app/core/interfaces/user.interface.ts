export interface User {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'staff';
    lastLogin?: Date;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    token: string | null;
  }