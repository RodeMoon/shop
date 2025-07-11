import { tesloApi } from "@/api/tesloAPI"
import type { AuthResponse } from "../interfaces"
import { isAxiosError } from "axios";

interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  message: string;
  token: string;
  user: AuthResponse["user"];
}

export const loginActions = async (email:string, password:string): Promise <LoginError| LoginSuccess> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
      email, password,
    });
    return {
      ok: true,
      message: 'Login successful',
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return {
        ok: false,
        message: error.response.data.message || 'An error occurred during login',
      };
    }
    console.error('Login error:', error);
    throw new Error('An unexpected error occurred during login');
  }
}
