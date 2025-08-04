<template>
  <header class="bg-white px-6 py-4 relative z-50 w-full top-0" style="font-family: 'Bahnschrift', sans-serif;">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <router-link to="/" class="flex items-center cursor-pointer">
        <img src="../assets/sibertahanNavbar.png" alt="Logo Sibertahan" class="h-8 md:h-10 w-auto object-contain" />
      </router-link>

      <button @click="toggleMobileMenu" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>

      <nav class="mb-0 hidden md:flex items-center text-sm font-medium tracking-wide">
        <router-link to="/" class="hover:text-blue-500 px-4 py-2"
          :class="{ 'border-b-2 border-blue-500 text-blue-600': $route.path === '/' || $route.path === '/home' }">
          HOME
        </router-link>

        <div class="relative group px-4 py-2">
          <button @click="toggleServiceDropdown" 
                  class="service-trigger hover:text-blue-500 flex items-center gap-1"
                  :class="{ 'text-blue-600': $route.path.startsWith('/services') }"> 
            SERVICE
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div class="service-dropdown absolute bg-white shadow-lg rounded-md mt-2 py-2 w-48 border"
               :class="{ 'hidden': !isServiceDropdownOpenDesktop }"
               @click.stop>
            <router-link to="/services-siberserang"
                         @click="isServiceDropdownOpenDesktop = false"
                         class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-500">
              SIBERSERANG
            </router-link>
            
            <router-link to="/services-siberpatuh"
                         @click="isServiceDropdownOpenDesktop = false"
                         class="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-500">
              SIBERPATUH
            </router-link>
            <router-link to="/services-siberjaga" 
                         @click="isServiceDropdownOpenDesktop = false"
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
          
          <div v-if="$route.path === '/' || $route.path === '/home'" class="absolute left-1/2 top-full transform -translate-x-1/2 hidden md:flex gap-7 z-[9999]">
            <!-- Kiri -->
            <div class="relative flex flex-col items-center h-[250px]">
              <div class="w-[6px] h-full bg-blue-500"></div>
              <div class="absolute bottom-0 w-[18px] h-[18px] bg-blue-500 rounded-full translate-y-1/2"></div>
            </div>
            <!-- Tengah (garis dari bawah ke dot saja, tidak sampai button) -->
            <div class="relative flex flex-col items-center h-[1200px]">
              <!-- Garis dari bawah ke dot -->
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[6px] bg-blue-500" style="height: 1100px;"></div>
              <!-- Dot di atas garis -->
              <div class="absolute bottom-[1100px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
              <!-- Tidak ada garis dari dot ke button -->
            </div>
            <!-- Kanan -->
            <div class="relative flex flex-col items-center h-[250px]">
              <div class="w-[6px] h-full bg-blue-500"></div>
              <div class="absolute bottom-0 w-[18px] h-[18px] bg-blue-500 rounded-full translate-y-1/2"></div>
            </div>
          </div>
              <!-- <div v-if="$route.path === '/' || $route.path === '/home'" class="absolute right-[68px] w-4 hidden md:flex justify-center responsive-bottom" style="height: 1200px;">
                <div class="absolute bottom-1 top-[100px] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                <div class="absolute top-[100px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
              </div> -->
        </div>
      </nav>
    </div>

    <div v-show="isOpen" class="md:hidden mt-4 flex flex-col space-y-4 text-sm font-medium bg-white border-t pt-4">
      <router-link @click="closeMobileMenu" to="/" class="hover:text-blue-500 px-4 py-2"
        :class="{ 'text-blue-600': $route.path === '/' || $route.path === '/home' }">
        HOME
      </router-link>

      <button @click="toggleServiceDropdownMobile" 
              class="hover:text-blue-500 px-4 py-2 w-full text-left"
              :class="{ 'text-blue-600': $route.path.startsWith('/services') }"> 
        SERVICE
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block ml-2 mt-0.5">
          <path :d="isServiceDropdownOpenMobile ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'" /> 
        </svg>
      </button>

      <div v-show="isServiceDropdownOpenMobile" class="pl-8 space-y-2">
        <router-link @click="closeMobileMenuAndServiceDropdown" to="/services-siberjaga" class="block hover:text-blue-500 py-1"
          :class="{ 'text-blue-600': $route.path === '/services-siberjaga' }">
          - SiberJaga
        </router-link>
        <router-link @click="closeMobileMenuAndServiceDropdown" to="/services-siberpatuh" class="block hover:text-blue-500 py-1"
          :class="{ 'text-blue-600': $route.path === '/services-siberpatuh' }">
          - SiberPatuh
        </router-link>
        <router-link @click="closeMobileMenuAndServiceDropdown" to="/services-siberserang" class="block hover:text-blue-500 py-1"
          :class="{ 'text-blue-600': $route.path === '/services-siberserang' }">
          - SiberSerang
        </router-link>
      </div>

      <router-link @click="closeMobileMenu" to="/about" class="hover:text-blue-500 px-4 py-2"
        :class="{ 'text-blue-600': $route.path === '/about' }">
        ABOUT US
      </router-link>

      <router-link @click="closeMobileMenu" to="/career"
        class="border border-gray-400 rounded-full px-4 py-2 hover:bg-black hover:text-white transition mx-4 text-center"
        :class="{ 'bg-black text-white': $route.path === '/career' }">
        CAREER
      </router-link>

      <router-link @click="closeMobileMenu" to="/contact" class="hover:text-blue-500 px-4 py-2"
        :class="{ 'text-blue-600': $route.path === '/contact' }">
        CONTACT
      </router-link>

      <router-link @click="closeMobileMenu" to="/blog" class="hover:text-blue-500 px-4 py-2"
        :class="{ 'text-blue-600': $route.path === '/blog' }">
        BLOG
      </router-link>

      <a href="https://wa.me/6281211120045?text=Hello%20SiberTahan%20Team" target="_blank" rel="noopener noreferrer"
        class="bg-blue-500 text-white px-5 py-2 rounded-md text-xs hover:bg-blue-600 transition mx-4 text-center"
        @click="handleWhatsAppClickAndCloseMenu">
        CONTACT US
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false) // State for mobile hamburger menu
const isServiceDropdownOpenDesktop = ref(false) // State for desktop service dropdown
const isServiceDropdownOpenMobile = ref(false) // State for mobile service dropdown

const route = useRoute() // Get the current route object

// Function to toggle mobile menu (hamburger icon)
const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
  // When mobile menu opens, ensure service dropdown for mobile is closed initially
  // Or open it automatically if you prefer (see commented out line below)
  if (isOpen.value) {
    isServiceDropdownOpenMobile.value = false; // Keep it closed on initial open
    // isServiceDropdownOpenMobile.value = true; // Uncomment this line if you want it open automatically
  }
};

// Function to close mobile menu
const closeMobileMenu = () => {
  isOpen.value = false;
  isServiceDropdownOpenMobile.value = false; // Also close service dropdown when mobile menu closes
};

// Function to close both mobile menu and service dropdown
const closeMobileMenuAndServiceDropdown = () => {
  isOpen.value = false;
  isServiceDropdownOpenMobile.value = false;
};

// Function to toggle service dropdown for desktop
const toggleServiceDropdown = () => {
  isServiceDropdownOpenDesktop.value = !isServiceDropdownOpenDesktop.value;
  console.log('Desktop Service Dropdown state:', isServiceDropdownOpenDesktop.value); // Debugging
};

// Function to toggle service dropdown for mobile
const toggleServiceDropdownMobile = () => {
  isServiceDropdownOpenMobile.value = !isServiceDropdownOpenMobile.value;
  console.log('Mobile Service Dropdown state:', isServiceDropdownOpenMobile.value); // Debugging
};

// Handle WhatsApp click for desktop
const handleWhatsAppClick = (event) => {
  console.log('WhatsApp link clicked from desktop menu');
};

// Handle WhatsApp click for mobile (and close menu)
const handleWhatsAppClickAndCloseMenu = (event) => {
  closeMobileMenu(); // Close the mobile menu when WhatsApp link is clicked
  console.log('WhatsApp link clicked from mobile menu');
};

// Close desktop service dropdown when clicking outside
const closeDropdownDesktop = (event) => {
  const dropdown = document.querySelector('.service-dropdown');
  const trigger = document.querySelector('.service-trigger');
  if (dropdown && trigger && !dropdown.contains(event.target) && !trigger.contains(event.target)) {
    isServiceDropdownOpenDesktop.value = false;
  }
};

// Add event listeners when component is mounted
onMounted(() => {
  document.addEventListener('click', closeDropdownDesktop);
});

// Remove event listeners when component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', closeDropdownDesktop);
});

// Watch route changes to close mobile menu and dropdowns
watch(route, () => {
  closeMobileMenu(); // Close mobile menu on route change
  isServiceDropdownOpenDesktop.value = false; // Close desktop dropdown on route change
});
</script>

<style>
/* Import Bahnschrift font - tambahkan di main CSS file Anda */
@import url('https://fonts.googleapis.com/css2?family=Bahnschrift:wght@300;400;500;600;700&display=swap');

/* Fallback jika Bahnschrift tidak tersedia */
body {
  font-family: 'Bahnschrift', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Kompensasi untuk fixed navbar - tambahkan padding-top ke body atau container utama */
/* Anda mungkin perlu menyesuaikan ini di layout utama Anda */
body {
  padding-top: 80px; /* Adjust sesuai tinggi navbar */
}

/* Cleanup default margin/padding for consistency */
html, body {
  margin: 0;
  padding: 0;
}

/* Add transition for mobile menu smooth open/close */
/* This is an example, you might need more specific Tailwind utilities or custom CSS */
.md\\:hidden {
  transition: all 0.3s ease-in-out;
}
</style>