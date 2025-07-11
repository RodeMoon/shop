<template>
  <!-- component -->
  <!-- Create By Joker Banny -->

  <!-- Header Navbar -->
  <TopMenu></TopMenu>

  <RouterView></RouterView>

  <!-- Footer -->
  <CustomFooter></CustomFooter>
</template>

<script setup lang="ts">
import CustomFooter from '../components/customFooter.vue';
import TopMenu from '../components/topMenu.vue';
</script>

<style scoped></style>
