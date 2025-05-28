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
          <button @click="isServiceDropdownOpen = !isServiceDropdownOpen" 
                  class="service-trigger hover:text-blue-500 flex items-center gap-1"
                  :class="{ 'text-blue-600': $route.path.startsWith('/service') }">
            SERVICE
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-1">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div class="service-dropdown absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48"
               :class="{ 'hidden': !isServiceDropdownOpen }"
               @click.stop>
            <router-link to="/services-siberjaga" 
                        @click="isServiceDropdownOpen = false"
                        class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-500">
              SiberJaga
            </router-link>
            <router-link to="/services-siberpatuh"
                        @click="isServiceDropdownOpen = false"
                        class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-500">
              SiberPatuh
            </router-link>
            <router-link to="/services-siberserang"
                        @click="isServiceDropdownOpen = false"
                        class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-500">
              SiberSerang
            </router-link>
          </div>
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

        
      <!-- Vertical lines with dots - only visible on home page -->
      <div v-if="$route.path === '/' || $route.path === '/Home'" class="absolute right-10 top-12 flex gap-14 z-[999]">
        <!-- First vertical line with dots -->
        <div class="relative flex flex-col items-center h-[250px]">
          <!-- Vertical line -->
          <div class="w-[6px] h-full bg-blue-500"></div>
         
          <!-- Bottom dot -->
          <div class="absolute bottom-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-y-1/2"></div>
        </div>

        <!-- Third vertical line with dots -->
        <div class="relative flex flex-col items-center h-[250px]">
          <!-- Vertical line -->
          <div class="w-[6px] h-full bg-blue-500"></div>
          
          <!-- Bottom dot -->
          <div class="absolute bottom-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-y-1/2"></div>
        </div>
      </div>
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

      <!-- Service dropdown items for mobile -->
      <div class="pl-4 space-y-2">
        <router-link @click="isOpen = false" to="/services-siberjaga" class="block hover:text-blue-500"
          :class="{ 'text-blue-600': $route.path === '/services-siberjaga' }">
          - SiberJaga
        </router-link>
        <router-link @click="isOpen = false" to="/services-siberpatuh" class="block hover:text-blue-500"
          :class="{ 'text-blue-600': $route.path === '/services-siberpatuh' }">
          - SiberPatuh
        </router-link>
        <router-link @click="isOpen = false" to="/services-siberserang" class="block hover:text-blue-500"
          :class="{ 'text-blue-600': $route.path === '/services-siberserang' }">
          - SiberSerang
        </router-link>
      </div>

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
import { ref, onMounted, onUnmounted } from 'vue'
const isOpen = ref(false)
const isServiceDropdownOpen = ref(false)

// Close dropdown when clicking outside
const closeDropdown = (event) => {
  const dropdown = document.querySelector('.service-dropdown')
  const trigger = document.querySelector('.service-trigger')
  if (dropdown && !dropdown.contains(event.target) && !trigger.contains(event.target)) {
    isServiceDropdownOpen.value = false
  }
}

// Add event listener when component is mounted
onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

// Remove event listener when component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>
