<script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'

  import { formatReadableDate } from '../utils/DateFormatter'
  import GhostContentAPI from '@tryghost/content-api'

  const api = new GhostContentAPI({
    url: 'http://localhost:2368', // or your blog subdomain later
    key: '794cf32c3261801f8e9227ef56',
    version: 'v5.0'
  });

  const posts = ref([])

  api.posts.browse({ limit: 5, include: 'tags,authors', filter: 'tag:-career', })
  .then(p => {
    posts.value = p // Show on your Vue page
  })
  .catch(err => {
    console.error(err);
  });
</script>

<template>
  <div class="blog font-bahnschrift bg-gradient-to-b from-[#ffffff] via-[#D7E6FF] via-100% to-[#D7E6FF] hide-scrollbar min-h-screen">
    <div class="container px-4 sm:px-6 lg:px-12 mx-auto">
      <div class="relative">
        <div class="col-md-12">
          <h1 class="text-center py-8 md:py-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Blog</h1>
        </div>
        
        <div class="hidden md:flex absolute -left-[900px] top-[50%] -translate-y-1/2 flex-col gap-[20px] z-0 w-0 md:w-auto">
          <div class="relative w-[90vw] max-w-[1220px] flex items-center">
            <div class="h-[6px] w-full bg-blue-500"></div>
            <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full translate-x-1/2"></div>
          </div>
          <div class="relative w-[95vw] max-w-[1320px] flex items-center">
            <div class="h-[6px] w-full bg-blue-500"></div>
            <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full translate-x-1/2"></div>
          </div>
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
        <RouterLink
          v-for="(x, index) in posts"
          :key="index"
          :to="{ name: 'single-blog', params: { id: x.id } }"
          class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-[1.02] lg:hover:scale-105 transform group flex flex-col"
        >
          <div class="relative">
            <img :src="x.feature_image" alt="Blog post image" class="w-full h-40 sm:h-48 object-cover" />
          </div>
          <div class="p-4 sm:p-6 relative pb-14 sm:pb-16 flex-1 flex flex-col">
            <div>
              <h2 class="text-blue-500 text-lg sm:text-xl font-semibold mb-2">
                <a href="#" class="hover:underline">{{ x.title }}</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-xs sm:text-sm mb-3">{{ formatReadableDate(x.published_at) }}</p>
              <p class="text-gray-200 group-hover:text-black text-xs sm:text-sm mb-4 truncate text-ellipsis">
                {{ x.excerpt }}
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <span class="inline-flex items-center justify-center text-blue-500 w-8 h-8 sm:w-10 sm:h-10 border-2 border-blue-500 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </RouterLink>
      </div>      
    </div>
    
    <div class="hidden md:block relative w-full py-12 lg:py-16 overflow-hidden">
      <div class="flex flex-col items-end gap-1 pl-6">
        <div class="relative w-[50%] h-[30px]">
          <div class="absolute right-0 h-[6px] bg-blue-500 w-[40vw] max-w-[800px]">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div class="relative w-[90%] h-[30px]">
          <div class="absolute right-0 h-[6px] bg-blue-500 w-[50vw] max-w-[950px]">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 lg:w-7 lg:h-7 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div class="relative w-[70%] h-[30px]">
          <div class="absolute right-0 h-[6px] bg-blue-500 w-[40vw] max-w-[800px]">
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

/* Responsive: Card hover effect off on mobile (keep if you want, remove if you want hover on mobile) */
/*
@media (max-width: 768px) {
  .group:hover {
    transform: none !important;
  }
}
*/
</style>