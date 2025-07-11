import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { AuthStatus, type User } from '../interfaces';
import { checkAuthActions, loginActions, registerActions } from '../actions';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', ''));

  const login = async (mail: string, password: string) => {
    try {
      const loginResponse = await loginActions(mail, password);
      if (!loginResponse.ok) {
        logout();
        return false;
      }
      user.value = loginResponse.user;
      token.value = loginResponse.token;
      authStatus.value = AuthStatus.Authenticated;
      return true;
    } catch (error) {
      return logout();
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    authStatus.value = AuthStatus.Unauthenticated;
    user.value = undefined;
    token.value = '';
    return false;
  };

  const register = async (fullName: string, email: string, password: string) => {
    try {
      const registerResponse = await registerActions(fullName, email, password);
      if (!registerResponse.ok) {
        logout();
        return { ok: false, message: registerResponse.message };
      }
      user.value = registerResponse.user;
      token.value = registerResponse.token;
      authStatus.value = AuthStatus.Authenticated;
      return { ok: true, message: '' };
    } catch (error) {
      return { ok: false, message: 'An unexpected error occurred during registration' };
      console.error('Registration failed:', error);
    }
  }

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const statusResponse = await checkAuthActions();
      if (!statusResponse.ok) {
        logout();
        return false;
      }
      authStatus.value = AuthStatus.Authenticated;
      user.value = statusResponse.user;
      token.value = statusResponse.token;
      return true;
    } catch (error) {
      logout();
      return false;
      console.error('Error checking authentication status:', error);
    }
  }

  return {
    user, token, authStatus,

    //getters
    isAdmin: computed(() => user.value?.roles.includes('admin') ?? false),
    isAuthenticaded: computed(() => authStatus.value === AuthStatus.Authenticated),
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    username: computed(() => user.value?.fullName),

    login,
    register,
    checkAuthStatus,
    logout,
  };
});
