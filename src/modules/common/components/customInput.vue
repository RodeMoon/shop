<template>
  <div>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value ?? '')"
      @blur="$emit('blur')"
      :class="['form-control', { 'border-danger': error }]"
    />
    <span v-if="error" class="text-danger">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number;
  error?: string;
  type?: 'text' | 'number';
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  error: '',
  type: 'text',
});

defineEmits(['update:modelValue', 'blur']);
</script>

<style scoped>
@reference "@/style.css";

.form-control {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>
