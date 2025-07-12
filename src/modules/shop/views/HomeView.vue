<template>
  <!-- Title -->
  <div class="pt-32 bg-orange-300 flex flex-col items-center">
    <h1 class="text-center text-2xl font-bold text-black-800 mb-4">Make an adoption, don't buy!</h1>
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="animate-bounce"
      style="animation: cat-bounce 1.5s infinite"
    >
      <g>
        <!-- Body -->
        <ellipse cx="60" cy="70" rx="35" ry="20" fill="#fff" stroke="#222" stroke-width="2" />
        <!-- Head -->
        <ellipse cx="60" cy="45" rx="20" ry="18" fill="#fff" stroke="#222" stroke-width="2" />
        <!-- Left Ear -->
        <polygon points="45,32 50,15 55,32" fill="#fff" stroke="#222" stroke-width="2" />
        <!-- Right Ear -->
        <polygon points="75,32 70,15 65,32" fill="#fff" stroke="#222" stroke-width="2" />
        <!-- Left Eye -->
        <ellipse cx="54" cy="45" rx="2.5" ry="3" fill="#222" />
        <!-- Right Eye -->
        <ellipse cx="66" cy="45" rx="2.5" ry="3" fill="#222" />
        <!-- Nose -->
        <ellipse cx="60" cy="52" rx="2" ry="1.2" fill="#fbb" stroke="#222" stroke-width="1" />
        <!-- Mouth -->
        <path d="M58 54 Q60 56 62 54" stroke="#222" stroke-width="1" fill="none" />
        <!-- Whiskers Left -->
        <path d="M48 52 Q42 53 48 55" stroke="#222" stroke-width="1" fill="none" />
        <path d="M48 56 Q42 58 48 59" stroke="#222" stroke-width="1" fill="none" />
        <!-- Whiskers Right -->
        <path d="M72 52 Q78 53 72 55" stroke="#222" stroke-width="1" fill="none" />
        <path d="M72 56 Q78 58 72 59" stroke="#222" stroke-width="1" fill="none" />
        <!-- Tail (wiggle animation) -->
        <path id="cat-tail" d="M95 80 Q110 85 100 70" stroke="#222" stroke-width="4" fill="none" />
      </g>
    </svg>
  </div>
  <!-- Tab Menu -->
  <div
    class="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center bg-black text-white"
  >
    <a
      rel="noopener noreferrer"
      href="#"
      class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4"
      >
        <path
          d="M12 2C10 2 8 4 8 6c0 2 2 4 4 4s4-2 4-4c0-2-2-4-4-4zm0 10c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"
        />
      </svg>
      <span>All the cats</span>
    </a>
    <a
      rel="noopener noreferrer"
      href="#"
      class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M2 20c0-4 8-6 10-6s10 2 10 6" />
      </svg>
      <span>Kittens</span>
    </a>
    <a
      rel="noopener noreferrer"
      href="#"
      class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4"
      >
        <path d="M4 4l4 4M20 4l-4 4M4 20l4-4M20 20l-4-4" />
        <circle cx="12" cy="12" r="6" />
      </svg>
      <span>Oldies</span>
    </a>
    <a
      rel="noopener noreferrer"
      href="#"
      class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4"
      >
        <path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" />
      </svg>
      <span>Specials</span>
    </a>
  </div>

  <div v-if="!products">
    <h1>Loading more cuties!</h1>
  </div>

  <!-- Product List -->
  <ProductList v-else :products="products" />

  <ButtonNavigation
    :has-more-data="!!products && products.length < 10"
    :is-first-page="page === 1"
    :page="page"
  />
</template>

<script setup lang="ts">
import { getProducts } from '@/modules/products/actions';
import { useQuery } from '@tanstack/vue-query';
import ProductList from '@/modules/products/components/productList.vue';
import ButtonNavigation from '@/modules/common/components/btnNavegation.vue';
import { watchEffect } from 'vue';
import { useQueryClient } from '@tanstack/vue-query';
import { usePagination } from '@/modules/common/composables/usePagination';

const queryClient = useQueryClient();
const { page } = usePagination();

const { data: products = [] } = useQuery({
  queryKey: ['products', { page: page }],
  queryFn: () => getProducts(page.value),
});

watchEffect(() => {
  queryClient.prefetchQuery({
    queryKey: ['products', { page: page.value + 1 }],
    queryFn: () => getProducts(page.value + 1),
  });
});
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}
.bg-orange-400 {
  background-color: #f97316; /* Tailwind CSS orange-400 */
}
.bg-orange-100 {
  background-color: #ffedd5; /* Tailwind CSS orange-100 */
}
.text-black-800 {
  color: #1f2937; /* Tailwind CSS black-800 */
}
.text-orange-200 {
  color: #fcd34d; /* Tailwind CSS orange-200 */
}
@keyframes cat-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
