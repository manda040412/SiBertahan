<script setup>
  import { ref } from 'vue';

  import { formatReadableDate } from '../utils/DateFormatter'
  import GhostContentAPI from '@tryghost/content-api'

  const api = new GhostContentAPI({
    url: 'http://localhost:2368', // or your blog subdomain later
    key: '768024aa0a6dc1c5c34819f0cd',
    version: 'v5.0'
  });

  const jobListings = ref([])

  api.posts.browse(
    { 
      limit: 5, 
      include: 'tags,authors',
      filter: 'tag:career',
    }
  )
  .then(p => {
    jobListings.value = p // Show on your Vue page
    console.log(p)
  })
  .catch(err => {
    console.error(err);
  });
</script>

<template>
  <div class="career font-bahnschrift bg-gradient-to-b from-[#ffffff] via-[#D7E6FF] via-100% to-[#D7E6FF] hide-scrollbar min-h-screen">
    <div class="container px-4 sm:px-6 lg:px-12 mx-auto">
      <div class="relative">
        <div class="col-md-12">
          <h1 class="text-center py-8 md:py-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Careers</h1>
          <p class="text-center text-lg sm:text-xl mb-8">
            Interested in joining our team? Send your CV and portfolio to <a href="mailto:careers@yourcompany.com" class="text-blue-600 hover:underline">careers@yourcompany.com</a>
          </p>
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
        <div
          v-for="job in jobListings"
          :key="job.id"
          class="rounded-3xl shadow-lg overflow-hidden bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] shadow-blue-900/50 flex flex-col cursor-default"
        >
          <div class="relative">
            <img :src="job.feature_image" :alt="job.feature_alt" class="w-full h-40 sm:h-48 object-cover" />
          </div>
          <div class="p-4 sm:p-6 relative flex-1 flex flex-col">
            <div>
              <h2 class="text-blue-500 text-lg sm:text-xl font-semibold mb-2">
                {{ job.title }}
              </h2>
            </div>
            <div class="prose max-w-none text-gray-800 leading-relaxed" v-html="job.html">
            </div>
            <!-- <div>
              <p class="text-gray-300 text-xs sm:text-sm mb-3">Location: {{ job.location }}</p>
              <p class="text-gray-300 text-xs sm:text-sm mb-3">Job Type: {{ job.type }}</p>
              <p class="text-gray-200 text-xs sm:text-sm mb-4">
                {{ job.description }}
              </p>
              <h3 class="text-blue-400 text-base sm:text-lg font-medium mb-2">Qualifications:</h3>
              <ul class="list-disc list-inside text-gray-200 text-xs sm:text-sm mb-4">
                <li v-for="(qualification, index) in job.qualifications" :key="index">{{ qualification }}</li>
              </ul>
              <h3 class="text-blue-400 text-base sm:text-lg font-medium mb-2">Responsibilities:</h3>
              <ul class="list-disc list-inside text-gray-200 text-xs sm:text-sm mb-4">
                <li v-for="(responsibility, index) in job.responsibilities" :key="index">{{ responsibility }}</li>
              </ul>
            </div> -->
          </div>
        </div>
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

/* Remove hover effects for career page */
.rounded-3xl.shadow-lg.overflow-hidden {
    transition: none !important; /* Prevents transition on hover */
    transform: none !important; /* Prevents scaling on hover */
    box-shadow: none !important; /* Prevents shadow change on hover */
}

/* Ensure text color remains dark on hover for aesthetic purposes on this specific page */
.rounded-3xl.shadow-lg.overflow-hidden .text-gray-300,
.rounded-3xl.shadow-lg.overflow-hidden .text-gray-200 {
    color: #cbd5e0 !important; /* Reverts text color to light gray */
}
</style>