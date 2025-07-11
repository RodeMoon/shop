import type { User } from '@/modules/auth/interfaces/user';


export interface AuthResponse {
  user: User;
  token: string;
}
