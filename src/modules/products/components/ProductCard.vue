import { Product } from '../interfaces/product';
<template>
  <article
    class="rounded-xl bg-black p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
  >
    <a href="#">
      <div class="relative flex items-end overflow-hidden rounded-xl">
        <img :src="product.images[0]" alt="product.title" />
        <div
          class="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-4 py-1.5 text-white duration-100 hover:bg-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="orange-200"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <button class="text-sm">Give me info</button>
        </div>
      </div>

      <div class="mt-1 p-2">
        <h2 class="text-slate-700 text-white">{{ product.title }}</h2>
        <p class="mt-1 text-sm text-slate-400 capitalize text-orange-200">{{ product.gender }}</p>

        <div class="mt-3 flex items-end justify-between">
          <p class="text-lg font-bold text-orange-500">${{ product.price }}</p>

          <div
            class="flex items-center space-x-1.5 rounded-lg bg-orange-500 px-4 py-1.5 text-black duration-100 hover:bg-orange-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="orange"
              stroke-width="1.5"
              class="h-4 w-4"
            >
              <path
              d="M4 4L6 10M20 4L18 10M12 8C15 8 17 10 17 13C17 16 15 20 12 20C9 20 7 16 7 13C7 10 9 8 12 8Z"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="currentColor"
              fill-opacity="0.2"
              />
              <circle cx="9.5" cy="13" r="1" fill="orange"/>
              <circle cx="14.5" cy="13" r="1" fill="orange"/>
            </svg>

            <button class="text-sm">Give me info</button>
          </div>
        </div>
      </div>
    </a>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '../interfaces/product';

interface Props {
  product: Product;
}
defineProps<Props>();
</script>

<style scoped></style>
