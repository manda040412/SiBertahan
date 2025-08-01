<template>
  <header class="bg-white px-6 py-4 relative z-50 fixed w-full top-0" style="font-family: 'Bahnschrift', sans-serif;">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <router-link to="/" class="flex items-center cursor-pointer">
        <img src="../assets/sibertahanNavbar.png" alt="Logo Sibertahan" class="h-8 md:h-10 w-auto object-contain" />
      </router-link>

      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav class=" mb-0 hidden md:flex items-center text-sm font-medium tracking-wide">
        <router-link to="/" class="hover:text-blue-500 px-4 py-2"
          :class="{ 'border-b-2 border-blue-500 text-blue-600': $route.path === '/' || $route.path === '/home' }">
          HOME
        </router-link>

        <div class="relative group px-4 py-2">
          <button @click="isServiceDropdownOpen = !isServiceDropdownOpen" 
                  class="service-trigger hover:text-blue-500 flex items-center gap-1"
                  :class="{ 'text-blue-600': $route.path.startsWith('/services') }"> SERVICE
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div class="service-dropdown absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48 border"
               :class="{ 'hidden': !isServiceDropdownOpen }"
               @click.stop>
            <router-link to="/services-siberserang"
                         @click="isServiceDropdownOpen = false"
                         class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-500">
              SIBERSERANG
            </router-link>
            
            <router-link to="/services-siberpatuh"
                         @click="isServiceDropdownOpen = false"
                         class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-500">
              SIBERPATUH
            </router-link>
            <router-link to="/services-siberjaga" 
                         @click="isServiceDropdownOpen = false"
                         class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-500">
              SIBERJAGA
            </router-link>
            
          </div>
        </div>

        <router-link to="/about" class="hover:text-blue-500 px-4 py-2"
          :class="{ 'border-b-2 border-blue-500 text-blue-600': $route.path === '/about' }">
          ABOUT US
        </router-link>

        <router-link to="/career"
          class="border border-gray-400 rounded-full px-4 py-1.5 hover:bg-blue hover:text-white transition mx-4"
          :class="{ 'bg-black text-white': $route.path === '/career' }">
          CAREER
        </router-link>

        <div class="border-r h-5 border-gray-300 mx-4"></div>

        <router-link to="/contact" class="hover:text-blue-500 px-4 py-2"
          :class="{ 'border-b-2 border-blue-500 text-blue-600': $route.path === '/contact' }">
          CONTACT
        </router-link>

        <router-link to="/blog" class="hover:text-blue-500 px-4 py-2"
          :class="{ 'border-b-2 border-blue-500 text-blue-600': $route.path === '/blog' }">
          BLOG
        </router-link>

        <div class="relative ml-4">
          <a href="https://wa.me/6281211120045?text=Hello%20SiberTahan%20Team" target="_blank" rel="noopener noreferrer"
            class="bg-blue-500 text-white px-5 py-2 rounded-md text-xs hover:bg-blue-600 transition"
            style="font-weight: 500;"
            @click="handleWhatsAppClick">
            CONNECT WITH US
          </a>
          
          <div v-if="$route.path === '/' || $route.path === '/home'" class="absolute left-1/2 top-full m transform -translate-x-1/2 hidden md:flex gap-14 z-[9999]">
            <div class="relative flex flex-col items-center h-[250px]">
              <div class="w-[6px] h-full bg-blue-500"></div>
            
              <div class="absolute bottom-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-y-1/2"></div>
            </div>

            <div class="relative flex flex-col items-center h-[250px]">
              <div class="w-[6px] h-full bg-blue-500"></div>
              
              <div class="absolute bottom-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-y-1/2"></div>
            </div>
          </div>
              <div v-if="$route.path === '/' || $route.path === '/home'" class="absolute right-[48px] w-4 hidden md:flex justify-center responsive-bottom" style="height: 1200px;">
                <div class="absolute bottom-1 top-[100px] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                <div class="absolute top-[100px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
              </div>
        </div>
      </nav>
    </div>

    <div v-show="isOpen" class="md:hidden mt-4 flex flex-col space-y-4 text-sm font-medium bg-white border-t pt-4">
      <router-link @click="isOpen = false" to="/" class="hover:text-blue-500 px-4 py-2"
        :class="{ 'text-blue-600': $route.path === '/' || $route.path === '/home' }">
        HOME
      </router-link>

      <button @click="isServiceDropdownOpen = !isServiceDropdownOpen" 
              class="hover:text-blue-500 px-4 py-2 w-full text-left"
              :class="{ 'text-blue-600': $route.path.startsWith('/services') }"> SERVICE
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block ml-2 mt-0.5">
          <path :d="isServiceDropdownOpen ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'" /> </svg>
      </button>

      <div v-show="isServiceDropdownOpen" class="pl-8 space-y-2">
        <router-link @click="isOpen = false; isServiceDropdownOpen = false" to="/services-siberjaga" class="block hover:text-blue-500 py-1"
          :class="{ 'text-blue-600': $route.path === '/services-siberjaga' }">
          - SiberJaga
        </router-link>
        <router-link @click="isOpen = false; isServiceDropdownOpen = false" to="/services-siberpatuh" class="block hover:text-blue-500 py-1"
          :class="{ 'text-blue-600': $route.path === '/services-siberpatuh' }">
          - SiberPatuh
        </router-link>
        <router-link @click="isOpen = false; isServiceDropdownOpen = false" to="/services-siberserang" class="block hover:text-blue-500 py-1"
          :class="{ 'text-blue-600': $route.path === '/services-siberserang' }">
          - SiberSerang
        </router-link>
      </div>

      <router-link @click="isOpen = false" to="/about" class="hover:text-blue-500 px-4 py-2"
        :class="{ 'text-blue-600': $route.path === '/about' }">
        ABOUT US
      </router-link>

      <router-link @click="isOpen = false" to="/career"
        class="border border-gray-400 rounded-full px-4 py-2 hover:bg-black hover:text-white transition mx-4 text-center"
        :class="{ 'bg-black text-white': $route.path === '/career' }">
        CAREER
      </router-link>

      <router-link @click="isOpen = false" to="/contact" class="hover:text-blue-500 px-4 py-2"
        :class="{ 'text-blue-600': $route.path === '/contact' }">
        CONTACT
      </router-link>

      <router-link @click="isOpen = false" to="/blog" class="hover:text-blue-500 px-4 py-2"
        :class="{ 'text-blue-600': $route.path === '/blog' }">
        BLOG
      </router-link>

      <a href="https://wa.me/6281211120045?text=Hello%20SiberTahan%20Team" target="_blank" rel="noopener noreferrer"
        class="bg-blue-500 text-white px-5 py-2 rounded-md text-xs hover:bg-blue-600 transition mx-4 text-center"
        @click="handleWhatsAppClick">
        CONTACT US
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router' // Import useRoute to access the current route

const isOpen = ref(false)
const isServiceDropdownOpen = ref(false)
const route = useRoute() // Get the current route object

// Handle WhatsApp click
const handleWhatsAppClick = (event) => {
  // Let the default behavior happen - opening the link
  console.log('WhatsApp link clicked')
}

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

<style>
/* Import Bahnschrift font - tambahkan di main CSS file Anda */
@import url('https://fonts.googleapis.com/css2?family=Bahnschrift:wght@300;400;500;600;700&display=swap');

/* Fallback jika Bahnschrift tidak tersedia */
body {
  font-family: 'Bahnschrift', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Kompensasi untuk fixed navbar - tambahkan padding-top ke body atau container utama */
.main-content {
  padding-top: 80px; /* Adjust sesuai tinggi navbar */
}

/* Responsive bottom positioning based on screen height */
.responsive-bottom {
  bottom: -1256px !important; /* Default value */
}

/* For screens with height below 1013px */
@media screen and (max-height: 1013px) {
  .responsive-bottom {
    bottom: -1256px !important;
  }
}

/* For screens with height above 1014px */
@media screen and (min-height: 1015px) {
  .responsive-bottom {
    bottom: -1608px !important;
  }
}
</style>