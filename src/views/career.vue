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
            <img :src="job.image" :alt="job.title" class="w-full h-40 sm:h-48 object-cover" />
          </div>
          <div class="p-4 sm:p-6 relative flex-1 flex flex-col">
            <div>
              <h2 class="text-blue-500 text-lg sm:text-xl font-semibold mb-2">
                {{ job.title }}
              </h2>
            </div>
            <div>
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
            </div>
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

<script setup>
import { ref } from 'vue';

const jobListings = ref([
  {
    id: 1,
    title: 'Lorem Ipsum Developer',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg', // Replace with your image path
    location: 'Lorem Ipsum City',
    type: 'Full-time',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    qualifications: [
      'Lorem ipsum dolor sit amet.',
      'Consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt.',
      'Ut labore et dolore magna aliqua.',
      'Quis nostrud exercitation ullamco.',
    ],
    responsibilities: [
      'Duis aute irure dolor in reprehenderit.',
      'In voluptate velit esse cillum dolore.',
      'Excepteur sint occaecat cupidatat non proident.',
      'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    id: 2,
    title: 'Lorem Ipsum Specialist',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg', // Replace with your image path
    location: 'Dolor Sit Amet',
    type: 'Part-time',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    qualifications: [
      'Nisi ut aliquip ex ea commodo consequat.',
      'Velit esse cillum dolore eu fugiat.',
      'Nulla pariatur. Excepteur sint occaecat.',
      'Cupidatat non proident.',
      'Sunt in culpa qui officia.',
    ],
    responsibilities: [
      'Deserunt mollit anim id est laborum.',
      'Ut enim ad minim veniam.',
      'Quis nostrud exercitation.',
      'Ullamco laboris nisi ut aliquip.',
    ],
  },
  {
    id: 3,
    title: 'Lorem Ipsum Manager',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg', // Replace with your image path
    location: 'Consectetur City',
    type: 'Full-time',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    qualifications: [
      'Labore et dolore magna aliqua.',
      'Ad minim veniam.',
      'Quis nostrud exercitation.',
      'Ullamco laboris.',
      'Nisi ut aliquip.',
    ],
    responsibilities: [
      'Ex ea commodo consequat.',
      'Duis aute irure dolor.',
      'In reprehenderit in voluptate.',
      'Velit esse cillum dolore.',
    ],
  },
  {
    id: 4,
    title: 'Lorem Ipsum Analyst',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    location: 'Adipiscing Town',
    type: 'Contract',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    qualifications: [
      'Sit voluptatem accusantium doloremque.',
      'Laudantium, totam rem aperiam.',
      'Eaque ipsa quae ab illo inventore.',
      'Veritatis et quasi architecto beatae vitae dicta.',
      'Sunt explicabo.',
    ],
    responsibilities: [
      'Nemo enim ipsam voluptatem.',
      'Quia voluptas sit aspernatur aut odit aut fugit.',
      'Sed quia consequuntur magni dolores.',
      'Eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  {
    id: 5,
    title: 'Lorem Ipsum Architect',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    location: 'Elit Village',
    type: 'Full-time',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    qualifications: [
      'Consectetur, adipisci velit.',
      'Sed quia non numquam eius modi tempora incidunt.',
      'Ut labore et dolore magnam aliquam quaerat voluptatem.',
      'Ut enim ad minima veniam.',
      'Quis nostrum exercitationem ullam corporis suscipit.',
    ],
    responsibilities: [
      'Laboriosam, nisi ut aliquid ex ea commodi consequatur?',
      'Quis autem vel eum iure reprehenderit.',
      'Qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      'Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    ],
  },
  {
    id: 6,
    title: 'Lorem Ipsum Coordinator',
    image: 'src/assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    location: 'Tempor Incididunt',
    type: 'Full-time',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    qualifications: [
      'Similique sunt in culpa qui officia deserunt mollitia animi.',
      'Id est laborum et dolorum fuga.',
      'Et harum quidem rerum facilis est et expedita distinctio.',
      'Nam libero tempore, cum soluta nobis est eligendi optio.',
      'Cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    ],
    responsibilities: [
      'Omnis voluptas assumenda est.',
      'Omnis dolor repellendus.',
      'Temporibus autem quibusdam et aut officiis debitis.',
      'Aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.',
    ],
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