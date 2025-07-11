<template>
  <!-- component -->
  <div class="bg-black-700 flex justify-center items-center h-screen text-white">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        src="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  .bg-black-700 {
    background-color: #1a1a1a; /* Dark background */
  }
  .text-white {
    color: #ffffff; /* White text */
  }
</style>
