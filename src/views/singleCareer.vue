<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GhostContentAPI from '@tryghost/content-api';

const route = useRoute();
const careerPost = ref(null); // Gunakan nama variabel yang lebih spesifik untuk karir
const careerId = route.params.id; // Mengambil ID dari URL
const post = ref({});

const proxyFetch = async ({ url, method = 'GET', params = {}, headers = {} }) => {
  const proxy = 'https://cms.sibertahan.com/proxy.php';

  const body = {
    endpoint: new URL(url).pathname,
    method,
    params,
    headers,
  };

  const res = await fetch(proxy, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  // if (!res.ok) throw new Error(`Proxy fetch failed: ${res.status}`);
  const result = await res.json();

  console.log(result)

  return {
    data: {
      posts: result.posts ?? result,
      meta: result.meta ?? {}
    }
  };
};

const api = new GhostContentAPI({
  url: 'https://cms.sibertahan.com', 
  key: 'd829ab1b6f36e8f424dddc2d25',
  version: 'v5.0',
  makeRequest: proxyFetch
});

onMounted(async () => {
  if (!careerId) {
    console.error('Career ID is missing!');
    return;
  }
  try {
    // Ambil postingan berdasarkan ID
    await api.posts.read({ id: careerId, include: 'tags,authors' })
    .then((val) => {
      post.value = val[0]
    });

    careerPost.value = post.value;

    // Opsional: Perbarui judul halaman secara dinamis
    if (post.value && post.value.title) {
      document.title = `Sibertahan - ${post.value.title}`;
    } else {
      document.title = 'Sibertahan - Career Detail';
    }

    // console.log('Fetched career post:', careerPost.value);
  } catch (err) {
    console.error('Error fetching career post from Ghost:', err);
    // Tambahkan penanganan error di UI jika postingan tidak ditemukan
    careerPost.value = null; // Set null untuk menampilkan pesan "tidak ditemukan"
  }
});
</script>

<template>
  <div class="single-career-page font-bahnschrift bg-gradient-to-b from-[#ffffff] via-[#D7E6FF] via-100% to-[#D7E6FF] min-h-screen py-8">
    <div class="container px-4 sm:px-6 lg:px-12 mx-auto">
      <router-link to="/career" class="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to all careers</router-link>

      <div v-if="careerPost" class="bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <div v-if="careerPost.feature_image" class="mb-6">
            <img :src="careerPost.feature_image" :alt="careerPost.title" class="w-full h-64 object-cover rounded-lg">
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ careerPost.title }}</h1>
        <p class="text-gray-600 text-sm mb-6">
            Published: {{ careerPost.published_at ? new Date(careerPost.published_at).toLocaleDateString('id-ID') : 'N/A' }}
        </p>

        <div class="prose max-w-none text-gray-800 leading-relaxed" v-html="careerPost.html">
        </div>
      </div>
      <div v-else class="text-center text-gray-600">
        <p v-if="careerPost === null">Career post not found or an error occurred.</p>
        <p v-else>Loading career post...</p>
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
.single-career-page {
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