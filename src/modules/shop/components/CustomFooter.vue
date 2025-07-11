<template>
  <div>
    <footer class="py-8 bg-orange-100 text-gray-800">
      <div class="container mx-auto flex flex-col items-center space-y-4">
        <div class="flex items-center space-x-3">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="w-12 h-12">
            <ellipse cx="24" cy="32" rx="14" ry="10" fill="#fff" stroke="#fbb6ce" stroke-width="2"/>
            <ellipse cx="16" cy="20" rx="5" ry="7" fill="#fff" stroke="#fbb6ce" stroke-width="2"/>
            <ellipse cx="32" cy="20" rx="5" ry="7" fill="#fff" stroke="#fbb6ce" stroke-width="2"/>
            <ellipse cx="24" cy="26" rx="10" ry="12" fill="#fff" stroke="#fbb6ce" stroke-width="2"/>
            <ellipse cx="20" cy="28" rx="1.5" ry="2" fill="#fbb6ce"/>
            <ellipse cx="28" cy="28" rx="1.5" ry="2" fill="#fbb6ce"/>
            <ellipse cx="24" cy="32" rx="2" ry="1" fill="#fbb6ce"/>
            <path d="M19 23 Q20 25 24 25 Q28 25 29 23" stroke="#fbb6ce" stroke-width="1.5" fill="none"/>
            <polygon points="11,13 16,20 13,21" fill="#fff" stroke="#fbb6ce" stroke-width="2"/>
            <polygon points="37,13 32,20 35,21" fill="#fff" stroke="#fbb6ce" stroke-width="2"/>
          </svg>
          <span class="text-lg font-semibold">Meow! Thanks for visiting our shop!</span>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="hover:underline text-orange-500">Privacy Policy</a>
          <a href="#" class="hover:underline text-orange-500">Terms of Service</a>
        </div>
        <div class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Sunflower. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
