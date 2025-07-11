<template>
  <div>
    <FullScreenLoader v-if="authStore.isChecking"/>
    <RouterView></RouterView>>
    <VueQueryDevtools></VueQueryDevtools>
  </div>
</template>

<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { useAuthStore } from './modules/auth/stores/authStores';
import { AuthStatus } from './modules/auth/interfaces';
import { useRouter, useRoute } from 'vue-router';
import FullScreenLoader from './modules/common/components/fullScreenLoader.vue';

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

authStore.$subscribe((mutation, state) => {
  if(state.authStatus === AuthStatus.Checking) {
    authStore.checkAuthStatus();
    return;
  }
  if(route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated) {
    router.replace({ name: 'home' });
    return;
  } else if (!route.path.includes('/auth') && state.authStatus === AuthStatus.Unauthenticated) {
    router.replace({ name: 'login' });
  }
},
{
  immediate: true,
});
</script>

<style scoped></style>
