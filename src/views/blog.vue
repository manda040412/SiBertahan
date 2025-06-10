<template>
  <div class="blog font-bahnschrift bg-gradient-to-b from-[#ffffff] via-[#D7E6FF] via-100% to-[#D7E6FF] hide-scrollbar min-h-screen">
    <div class="container px-4 sm:px-6 lg:px-12 mx-auto">
      <div class="relative">
        <div class="col-md-12">
          <h1 class="text-center py-8 md:py-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Blog</h1>
        </div>
        
        <!-- Lines container - Hidden on mobile -->
        <div class="hidden md:flex absolute -left-[900px] top-[50%] -translate-y-1/2 flex-col gap-[20px] z-0 w-0 md:w-auto">
          <!-- First line with dot -->
          <div class="relative w-[90vw] max-w-[1220px] flex items-center">
            <div class="h-[6px] w-full bg-blue-500"></div>
            <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full translate-x-1/2"></div>
          </div>
          <!-- Second line with dot -->
          <div class="relative w-[95vw] max-w-[1320px] flex items-center">
            <div class="h-[6px] w-full bg-blue-500"></div>
            <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full translate-x-1/2"></div>
          </div>
          <!-- Third line with dot -->
          <div class="relative w-[90vw] max-w-[1220px] flex items-center">
            <div class="h-[6px] w-full bg-blue-500"></div>
            <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container px-4 sm:px-6 lg:px-12 mx-auto py-8 md:py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        <!-- Blog Cards -->
        <div
          v-for="i in 9"
          :key="i"
          class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-[1.02] lg:hover:scale-105 transform group flex flex-col"
        >
          <div class="relative">
            <img src="../assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg" alt="Blog post image" class="w-full h-40 sm:h-48 object-cover" />
          </div>
          <div class="p-4 sm:p-6 relative pb-14 sm:pb-16 flex-1 flex flex-col">
            <div>
              <h2 class="text-blue-500 text-lg sm:text-xl font-semibold mb-2">
                <a href="#" class="hover:underline">Cloud Storage Security Assessment: Cara Efektif Cegah Insiden Keamanan di Cloud</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-xs sm:text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black text-xs sm:text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-8 h-8 sm:w-10 sm:h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>      
    </div>
    
    <!-- Bottom decorative lines - Hidden on mobile -->
    <div class="hidden md:block relative w-full py-12 lg:py-16 overflow-hidden">
      <div class="flex flex-col items-end gap-1 pl-6">
        <!-- First line with dot -->
        <div class="relative w-[50%] h-[30px]">
          <div class="absolute right-0 h-[6px] bg-blue-500 w-[40vw] max-w-[800px]">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <!-- Second line with dot -->
        <div class="relative w-[90%] h-[30px]">
          <div class="absolute right-0 h-[6px] bg-blue-500 w-[50vw] max-w-[950px]">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 lg:w-7 lg:h-7 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <!-- Third line with dot -->
        <div class="relative w-[70%] h-[30px]">
          <div class="absolute right-0 h-[6px] bg-blue-500 w-[40vw] max-w-[800px]">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed for static blog cards, but you can replace v-for with real data if needed
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: auto;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .blog-card-height {
    height: auto;
  }
}

/* Responsive: Hide top and bottom lines on mobile */
@media (max-width: 1024px) {
  .md\:flex, .md\:block {
    display: none !important;
  }
}

/* Responsive: Card hover effect off on mobile */
@media (max-width: 768px) {
  .group:hover {
    transform: none !important;
  }
}
</style>