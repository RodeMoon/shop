import { tesloApi } from "@/api/tesloAPI"
import type { AuthResponse } from "../interfaces"

interface RegisterError {
  ok: false;
  message: string;
}

interface RegisterSuccess {
  ok: true;
  message: string;
  token: string;
  user: AuthResponse["user"];
}

export const registerActions = async (fullName: string, email: string, password: string): Promise<RegisterError | RegisterSuccess> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
      fullName,
      email: email,
      password,
    });

    return {
      ok: true,
      message: 'Register successful',
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    console.error('Register error:', error);
    throw new Error('An unexpected error occurred during register');
  }
}
