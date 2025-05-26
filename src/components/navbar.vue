<template>
  <header class="bg-white px-6 py-4 font-sans relative z-50">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="../assets/sibertahanNavbar.png" alt="Logo Sibertahan" class="h-8 md:h-10 w-auto object-contain" />
      </div>

      <!-- Hamburger (mobile only) -->
      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold">
        <router-link to="/" class="hover:text-blue-500"
          :class="{ 'border-b-2 border-blue-500 pb-1 text-blue-600': $route.path === '/' }">
          HOME
        </router-link>

        <div class="relative group">
          <router-link to="/service" class="hover:text-blue-500 flex items-center gap-1"
            :class="{ 'text-blue-600': $route.path.startsWith('/service') }">
            SERVICE
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-1">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </router-link>
        </div>

        <router-link to="/about" class="hover:text-blue-500"
          :class="{ 'border-b-2 border-blue-500 pb-1 text-blue-600': $route.path === '/about' }">
          ABOUT US
        </router-link>

        <router-link to="/career"
          class="border border-black rounded-full px-3 py-1 hover:bg-black hover:text-white transition"
          :class="{ 'bg-black text-white': $route.path === '/career' }">
          CAREER
        </router-link>

        <span class="border-r h-4 border-gray-400"></span>

        <router-link to="/contact" class="hover:text-blue-500"
          :class="{ 'border-b-2 border-blue-500 pb-1 text-blue-600': $route.path === '/contact' }">
          CONTACT
        </router-link>

        <router-link to="/blog" class="hover:text-blue-500"
          :class="{ 'border-b-2 border-blue-500 pb-1 text-blue-600': $route.path === '/blog' }">
          BLOG
        </router-link>

        <router-link to="/contact"
          class="bg-blue-500 text-white px-4 py-1.5 rounded-md text-xs hover:bg-blue-600">
          CONTACT US
        </router-link>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden mt-4 flex flex-col space-y-4 text-sm font-semibold">
      <router-link @click="isOpen = false" to="/" class="hover:text-blue-500"
        :class="{ 'text-blue-600': $route.path === '/' }">
        HOME
      </router-link>

      <router-link @click="isOpen = false" to="/service" class="hover:text-blue-500"
        :class="{ 'text-blue-600': $route.path.startsWith('/service') }">
        SERVICE
      </router-link>

      <router-link @click="isOpen = false" to="/about" class="hover:text-blue-500"
        :class="{ 'text-blue-600': $route.path === '/about' }">
        ABOUT US
      </router-link>

      <router-link @click="isOpen = false" to="/career"
        class="border border-black rounded-full px-3 py-1 hover:bg-black hover:text-white transition"
        :class="{ 'bg-black text-white': $route.path === '/career' }">
        CAREER
      </router-link>

      <router-link @click="isOpen = false" to="/contact" class="hover:text-blue-500"
        :class="{ 'text-blue-600': $route.path === '/contact' }">
        CONTACT
      </router-link>

      <router-link @click="isOpen = false" to="/blog" class="hover:text-blue-500"
        :class="{ 'text-blue-600': $route.path === '/blog' }">
        BLOG
      </router-link>

      <router-link @click="isOpen = false" to="/contact"
        class="bg-blue-500 text-white px-4 py-1.5 rounded-md text-xs hover:bg-blue-600">
        CONTACT US
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
