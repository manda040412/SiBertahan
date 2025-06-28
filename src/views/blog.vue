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
        <router-link
          v-for="blogPost in blogPosts"
          :key="blogPost.id"
          :to="{ name: 'single-blog', params: { id: blogPost.id } }"
          class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-[1.02] lg:hover:scale-105 transform group flex flex-col cursor-pointer"
        >
          <div class="relative">
            <img :src="blogPost.image" :alt="blogPost.title" class="w-full h-40 sm:h-48 object-cover" />
          </div>
          <div class="p-4 sm:p-6 relative pb-14 sm:pb-16 flex-1 flex flex-col">
            <div>
              <h2 class="text-blue-500 text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-700">
                {{ blogPost.title }}
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-xs sm:text-sm mb-3">{{ blogPost.date }}</p>
              <p class="text-gray-200 group-hover:text-black text-xs sm:text-sm mb-4">
                {{ blogPost.excerpt }}
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
        </router-link>
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

<script setup>
import { ref } from 'vue';

// Ini adalah data dummy. Nantinya, Anda akan mengganti ini dengan data yang diambil dari API backend teman Anda.
const blogPosts = ref([
  {
    id: 1,
    title: 'Cloud Storage Security Assessment: Effective Ways to Prevent Security Incidents in the Cloud',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    date: 'March 15, 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    title: 'The Future of Cybersecurity: Trends and Predictions for 2025',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg', // Ganti dengan path gambar lain jika ada
    date: 'April 1, 2024',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 3,
    title: 'Implementing Zero Trust Architecture: A Step-by-Step Guide',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg', // Ganti dengan path gambar lain jika ada
    date: 'April 20, 2024',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 4,
    title: 'Understanding Ransomware Attacks and How to Protect Your Data',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    date: 'May 5, 2024',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 5,
    title: 'The Role of AI in Modern Cybersecurity Defenses',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    date: 'May 18, 2024',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    id: 6,
    title: 'Best Practices for Securing Web Applications Against Common Vulnerabilities',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    date: 'June 1, 2024',
    excerpt: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  },
  {
    id: 7,
    title: 'Navigating Data Privacy Regulations: GDPR, CCPA, and Beyond',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    date: 'June 10, 2024',
    excerpt: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.'
  },
  {
    id: 8,
    title: 'Building a Strong Security Culture in Your Organization',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    date: 'June 20, 2024',
    excerpt: 'Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.'
  },
  {
    id: 9,
    title: 'The Evolution of Threat Intelligence: From Reactive to Proactive',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    date: 'June 28, 2024',
    excerpt: 'Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum.'
  },
]);
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

/* Responsive: Card hover effect off on mobile (keep if you want, remove if you want hover on mobile) */
/*
@media (max-width: 768px) {
  .group:hover {
    transform: none !important;
  }
}
*/
</style>