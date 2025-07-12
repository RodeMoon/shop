<template>
  <h1
    class="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg tracking-wide bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse"
  >
    The cat store!
  </h1>
  <h1 class="text-2xl">Login</h1>
  <form @submit.prevent="onLogin">
    <!-- Email Input -->
    <div class="mb-4" style="font-family: 'Poppins', sans-serif">
      <label for="mail" class="block text-white-600">Email</label>
      <input
      v-model="myForm.mail"
      type="text"
      id="mail"
      name="mail"
      class="w-full border border-white-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
      autocomplete="off"
      style="font-family: 'Poppins', sans-serif"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4" style="font-family: 'Poppins', sans-serif">
      <label for="password" class="block text-white-600">Password</label>
      <input
        v-model="myForm.password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
        autocomplete="off"
        style="font-family: 'Poppins', sans-serif"
      />
    </div>
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <input
        v-model="myForm.remember"
        type="checkbox"
        id="remember"
        name="remember"
        class="text-orange-500 focus:ring-orange-500 focus:border-orange-500 rounded h-4 w-4 border-gray-300 shadow-sm"
      />
      <label for="remember" class="text-white-600 ml-2">Remember me!</label>
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-10 text-orange-200">
      <a href="#" class="hover:underline">Forgot password, dummy?</a>
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      class="bg-orange-400 hover:bg-orange-600 text-black font-semibold py-2 px-4 rounded-md transition-colors duration-300 h-center w-full"
    >
      Get me in ;)
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-orange-200 text-center">
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Sign up hereeeeeeee!</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watchEffect } from 'vue';
import { useAuthStore } from '../stores/authStores';
import { useToast } from 'vue-toastification';
import { useLocalStorage } from '@vueuse/core';

const authStore = useAuthStore();
const toast = useToast();

const myForm = reactive({
  mail: '',
  password: '',
  remember: false,
});

const onLogin = async () => {
  const ok = await authStore.login(myForm.mail, myForm.password);

  if (myForm.remember) {
    useLocalStorage('mail', myForm.mail);
  } else {
    useLocalStorage('mail', '');
  }

  if (ok) return;
  toast.error('Login failed. Please check your credentials.');
  myForm.mail = '';
  myForm.password = '';
  myForm.remember = false;
};

watchEffect(() => {
  const mail = localStorage.getItem('mail');
  if (mail) {
    myForm.mail = mail;
    myForm.remember = true;
  }
});
</script>

<style scoped>
h1 {
  font-family: 'Poppins', sans-serif;
}
h1.text-2xl {
  font-weight: 600;
}
</style>
