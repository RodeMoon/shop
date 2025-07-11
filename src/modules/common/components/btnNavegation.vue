<template>
  <div class="flex justify-center py-10 bg-black space-x-3">
    <button
      :disabled="isFirstPage"
      @click="$router.push({ query: { page: page - 1 } })"
      class="flex justify-center space-x-1.5 px-4 py-1.5 text-black bg-orange-500 disabled:bg-orange-300 rounded-lg hover:bg-orange-600 transition-al"
    >
      <ArrowLeft />
      <span>Previous</span>
    </button>

    <button
      :disabled="hasMoreData"
      @click="$router.push({ query: { page: page + 1 } })"
      class="flex justify-center space-x-1.5 px-4 py-1.5 text-black bg-orange-500 disabled:bg-orange-300 rounded-lg hover:bg-orange-600 transition-al"
    >
      <span>Next</span>
      <ArrowRight />
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowRight from '@/icon/arrowRight.vue';
import ArrowLeft from '@/icon/arrowLeft.vue';

interface Props {
  page: number;
  isFirstPage: boolean;
  hasMoreData: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
