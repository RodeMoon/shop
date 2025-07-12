<template>
  <div>
    <h1 class="text-3xl font-extrabold mb-2 text-pink-600 drop-shadow">Products</h1>
    <p class="mb-8 text-pink-500">Manage your products here.</p>
    <div class="mb-4"></div>
  </div>
  <!-- Cute Table -->
  <div class="py-8 w-full flex justify-center">
    <div
      class="shadow-2xl rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-50 to-white w-full max-w-5xl overflow-hidden"
    >
      <table class="min-w-full bg-transparent">
        <thead>
          <tr>
            <th
              class="py-4 px-6 bg-pink-200 text-pink-800 text-lg font-bold uppercase tracking-wider border-b border-pink-300"
            >
              Image
            </th>
            <th
              class="py-4 px-6 bg-pink-200 text-pink-800 text-lg font-bold uppercase tracking-wider border-b border-pink-300"
            >
              Title
            </th>
            <th
              class="py-4 px-6 bg-pink-200 text-pink-800 text-lg font-bold uppercase tracking-wider border-b border-pink-300"
            >
              Price
            </th>
            <th
              class="py-4 px-6 bg-pink-200 text-pink-800 text-lg font-bold uppercase tracking-wider border-b border-pink-300"
            >
              Size
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in products"
            :key="product.id"
            :class="index % 2 === 0 ? 'bg-pink-50' : 'bg-white'"
            class="transition hover:bg-pink-100"
          >
            <td class="py-4 px-6 flex justify-center items-center">
              <img
                :src="product.images[0]"
                alt="Product Image"
                class="w-20 h-20 object-cover rounded-xl border-4 border-pink-200 shadow-md"
              />
            </td>
            <td class="py-4 px-6">
              <RouterLink
                :to="`/admin/products/${product.id}`"
                class="text-pink-600 font-semibold hover:text-pink-800 hover:underline transition"
              >
                {{ product.title }}
              </RouterLink>
            </td>
            <td class="py-4 px-6">
              <span
                class="text-lg font-bold text-pink-500 bg-pink-100 px-3 py-1 rounded-full shadow-sm"
              >
                {{
                  product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })
                }}
              </span>
            </td>
            <td class="py-4 px-6">
              <span class="text-sm text-pink-700 bg-pink-100 px-2 py-1 rounded">
                {{ product.sizes.join(', ') }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <ButtonNavigation
    :is-first-page="page === 1"
    :page="page"
    :has-more-data="!!products && products.length < 10"
    :limit="10"
    class="mt-8"
  >
  </ButtonNavigation>
</template>

<script setup lang="ts">
import { getProducts } from '@/modules/products/actions';
import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import ButtonNavigation from '@/modules/common/components/btnNavegation.vue';
import { usePagination } from '../../common/composables/usePagination';

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
tr:hover {
  transition: background 0.2s;
}
</style>
