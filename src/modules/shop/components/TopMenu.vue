<template>
  <div>
    <!-- Header Navbar -->
    <nav
      class="fixed top-0 left-0 z-20 w-full border-b border-orange-200 bg-black py-2.5 px-6 sm:px-4"
    >
      <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <a href="#" class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            class="mr-3 h-6 sm:h-9"
          >
            <circle cx="24" cy="28" r="12" fill="#fb923c"/>
            <ellipse cx="16" cy="24" rx="3" ry="5" fill="#fb923c"/>
            <ellipse cx="32" cy="24" rx="3" ry="5" fill="#fb923c"/>
            <polygon points="12,16 16,8 20,18" fill="#fb923c"/>
            <polygon points="36,16 32,8 28,18" fill="#fb923c"/>
            <ellipse cx="20" cy="30" rx="1.2" ry="2" fill="#fff"/>
            <ellipse cx="28" cy="30" rx="1.2" ry="2" fill="#fff"/>
            <ellipse cx="20" cy="30" rx="0.5" ry="1" fill="#222"/>
            <ellipse cx="28" cy="30" rx="0.5" ry="1" fill="#222"/>
            <path d="M24 34 Q24 36 26 36" stroke="#222" stroke-width="1" fill="none"/>
            <path d="M24 34 Q24 36 22 36" stroke="#222" stroke-width="1" fill="none"/>
            <path d="M24 34 Q24 38 28 37" stroke="#222" stroke-width="1" fill="none"/>
            <path d="M24 34 Q24 38 20 37" stroke="#222" stroke-width="1" fill="none"/>
          </svg>

          <span class="self-center whitespace-nowrap text-xl font-semibold text-white">The cat store</span>
        </a>
        <div class="mt-2 sm:mt-0 sm:flex md:order-2">
          <template v-if="!authStore.isAuthenticaded">
            <!-- Login Button -->
            <RouterLink
              to="/auth/login"
              type="button"
              class="mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg"
            >
              Login
            </RouterLink>
            <!-- Register Button -->
            <RouterLink
              to="/auth/register"
              type="button"
              class="mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg"
            >
              Register
            </RouterLink>
          </template>
          <template v-if="authStore.isAuthenticaded">
            <!-- Admin Button -->
            <RouterLink
              v-if="authStore.isAdmin"
              to="/admin"
              type="button"
              class="mr-3 hidden border border-orange-700 py-1.5 px-6 text-center text-sm font-medium text-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 md:inline-block rounded-lg"
            >
              Administrator
            </RouterLink>
            <!-- Logout Button -->
            <button
              @click="authStore.logout()"
              type="button"
              class="mr-3 hidden bg-orange-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 md:mr-0 md:inline-block rounded-lg"
            >
              Logout
            </button>
          </template>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul
            class="mt-4 flex flex-col rounded-lg bg-black/90 p-4 shadow-lg md:mt-0 md:flex-row md:space-x-6 md:bg-black md:text-base md:font-semibold"
          >
            <li>
              <RouterLink
                to="/"
                class="block rounded-lg py-2 pl-3 pr-4 text-white transition-colors duration-200 hover:bg-orange-500/80 hover:text-white md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-orange-400"
                aria-current="page"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                class="block rounded-lg py-2 pl-3 pr-4 text-gray-300 transition-colors duration-200 hover:bg-orange-500/80 hover:text-white md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-orange-400"
              >
                About
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/services"
                class="block rounded-lg py-2 pl-3 pr-4 text-gray-300 transition-colors duration-200 hover:bg-orange-500/80 hover:text-white md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-orange-400"
              >
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="block rounded-lg py-2 pl-3 pr-4 text-gray-300 transition-colors duration-200 hover:bg-orange-500/80 hover:text-white md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-orange-400"
              >
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/stores/authStores';

const authStore = useAuthStore();
</script>

<style scoped></style>
