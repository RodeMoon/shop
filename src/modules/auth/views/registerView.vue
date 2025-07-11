<template>
  <h1
    class="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg tracking-wide bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse"
  >
    The cat store!
  </h1>
  <h1 class="text-2xl font-semibold mb-4">New account</h1>
  <form @submit.prevent="onRegister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-white-600">Name</label>
      <input
        v-model="myForm.fullName"
        type="text"
        id="name"
        name="name"
        class="w-full border border-orange-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
        autocomplete="off"
      />
    </div>

    <!-- Username Input -->
    <div class="mb-4">
      <label for="email" class="block text-white-600">Email</label>
      <input
        v-model="myForm.email"
        type="text"
        id="email"
        name="email"
        class="w-full border border-orange-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-10">
      <label for="password" class="block text-white-600">Password</label>
      <input
        v-model="myForm.password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-orange-300 rounded-md py-2 px-3 focus:outline-none focus:border-orange-500"
        autocomplete="off"
      />
    </div>
    <!-- Create account Button -->
    <div class="mb-4">
      <button
        type="submit"
        class="bg-orange-400 hover:bg-orange-600 text-black font-semibold py-2 px-4 rounded-md transition-colors duration-300 w-full"
      >
        Create account
      </button>
    </div>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-orange-200 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Login here, dummy!</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useAuthStore } from '../stores/authStores';
import { useToast } from 'vue-toastification';

const authStore = useAuthStore();
const toast = useToast();

const myForm = reactive({
  fullName: '',
  email: '',
  password: '',
});

const onRegister = async () => {
  const { ok, message } = await authStore.register(myForm.fullName, myForm.email, myForm.password);

  if (ok) return;
  toast.error(message || 'Registration failed');
  myForm.fullName = '';
  myForm.email = '';
  myForm.password = '';
};
</script>

<style scoped>
h1 {
  font-family: 'Poppins', sans-serif;
}
h1.text-2xl {
  font-weight: 600;
}
</style>
