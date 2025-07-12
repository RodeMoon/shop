import customInput from '@/modules/common/components/customInput.vue';
<template>
  <div class="bg-white px-5 py-2 rounded">
    <h1 class="text-3xl">Producto: <small class="text-blue-500">nombre</small></h1>
    <hr class="my-4" />
  </div>

  <form class="grid grid-cols-1 sm:grid-cols-2 bg-white px-5 gap-5">
    <div class="first-col">
      <!-- Primera parte del formulario -->
      <div class="mb-4">
        <label for="title" block text-gray-700 text-sm font-bold mb-2> Título </label>
        <customInput v-model="title" v-bind="titleAttrs" :error="errors.title" />
      </div>

      <div class="mb-4">
        <label for="slug" class="form-label">Slug</label>
        <customInput v-model="slug" v-bind="slugAttrs" :error="errors.slug" />
      </div>

      <div class="mb-4">
        <label for="description" class="form-label">Descripción</label>
        <textarea class="form-control" id="description"></textarea>
      </div>

      <div class="flex flex-row gap-3">
        <div class="mb-4">
          <label for="price" class="form-label">Precio</label>
          <input
            type="number"
            id="price"
            aria-describedby="helper-text-explanation"
            class="form-control"
            placeholder="1"
          />
        </div>

        <div class="mb-4">
          <label for="stock" class="form-label">Inventario</label>
          <input
            type="number"
            id="stock"
            aria-describedby="helper-text-explanation"
            class="form-control"
            placeholder="1"
          />
        </div>
      </div>

      <div>
        <label for="sizes" class="form-label">Tallas</label>
        <button
          v-for="size of allSizes"
          :key="size"
          type="button"
          class="bg-blue-100 p-2 rounded w-14 mr-2"
        >
          {{ size }}
        </button>
      </div>
    </div>

    <!-- Segunda columna -->
    <div class="first-col">
      <label for="stock" class="form-label">Imágenes</label>
      <!-- Row with scrollable horizontal -->
      <div class="flex p-2 overflow-x-auto space-x-8 w-full h-[265px] bg-gray-200 rounded">
        <div class="flex-shrink-0">
          <img src="https://placehold.co/250" alt="imagen" class="w-[250px] h-[250px]" />
        </div>

        <div class="flex-shrink-0">
          <img src="https://placehold.co/250" alt="imagen" class="w-[250px] h-[250px]" />
        </div>
      </div>
      <!-- Upload image -->
      <div class="col-span-2 my-2">
        <label for="image" class="form-label">Subir imagen</label>

        <input multiple type="file" id="image" class="form-control" />
      </div>

      <div class="mb-4">
        <label for="stock" class="form-label">Género</label>
        <select class="form-control">
          <option value="">Seleccione</option>
          <option value="kid">Niño</option>
          <option value="women">Mujer</option>
          <option value="men">Hombre</option>
        </select>
      </div>

      <!-- Botón para guardar -->
      <div class="my-4 text-right">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Guardar
        </button>
      </div>
    </div>
  </form>

  <div class="grid grid-cols-2 mt-2">
    <div class="bg-blue-200 p-2">
      {{ values }}
    </div>
    <div class="bg-red-200 p-2">
      {{ errors }}
    </div>
  </div>
</template>

<script src="./productView.ts" lang="ts"></script>

<style scoped>
@reference "@/style.css";

.form-label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}

.form-control {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>
