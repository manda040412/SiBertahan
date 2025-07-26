<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  import GhostContentAPI from '@tryghost/content-api'

  const route = useRoute();
  const blog = ref({});
  const blogId = route.params.id; // Mengambil ID dari URL

  console.log('Fetching blog with ID:', blogId);

  const api = new GhostContentAPI({
    url: 'https://cms.sibertahan.com', 
    key: 'd829ab1b6f36e8f424dddc2d25',
    version: 'v5.0'
  });

  onMounted(async () => {
    blog.value = await api.posts.read({id: blogId})
    console.log(blog.value)
  })
</script>

<template>
  <div class="single-blog-page font-bahnschrift bg-gradient-to-b from-[#ffffff] via-[#D7E6FF] via-100% to-[#D7E6FF] min-h-screen py-8">
    <div class="container px-4 sm:px-6 lg:px-12 mx-auto">
      <router-link to="/blog" class="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to all blogs</router-link>
      
      <div v-if="blog" class="bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <img :src="blog.feature_image || 'https://via.placeholder.com/800x400'" :alt="blog.title" class="w-full h-64 object-cover rounded-lg mb-6">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ blog.title }}</h1>
        <p class="text-gray-600 text-sm mb-6">By admin | {{ new Date(blog.published_at).toLocaleDateString('id-ID') }}</p>
        
        <div class="prose max-w-none text-gray-800 leading-relaxed" v-html="blog.html">
        </div>
      </div>
      <div v-else class="text-center text-gray-600">
        Loading blog post...
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
/* Tambahkan gaya khusus jika diperlukan */
.single-blog-page {
  /* Some styling */
}
/* Basic styling for prose content */
.prose h3 {
  font-size: 1.75rem; /* Equivalent to text-2xl */
  font-weight: 600; /* Equivalent to font-semibold */
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1a202c; /* Equivalent to text-gray-900 */
}
.prose p {
  margin-bottom: 1rem;
}

/* Stil dari blog.vue yang relevan untuk dekorasi garis bawah */
@media (max-width: 1024px) {
  .md\:flex, .md\:block {
    display: none !important;
  }
}
</style>