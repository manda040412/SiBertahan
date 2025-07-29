<script setup>
import { ref } from 'vue'
import { formatReadableDate } from '../utils/DateFormatter'
import GhostContentAPI from '@tryghost/content-api'

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

  return {
    data: {
      posts: result.posts ?? result,
      meta: result.meta ?? {}
    }
  };
};

// Konfigurasi Ghost Content API
const api = new GhostContentAPI({
  url: 'https://cms.sibertahan.com', 
  key: 'd829ab1b6f36e8f424dddc2d25',
  version: 'v5.0',
  makeRequest: proxyFetch
});

const jobListings = ref([])

// Mengambil postingan dari Ghost CMS dengan tag 'career'
api.posts
  .browse({
    limit: 6, // Sesuaikan jumlah postingan yang ingin ditampilkan
    include: 'tags,authors',
    filter: 'tag:career' // Hanya ambil postingan dengan tag 'career'
  })
  .then((p) => {
    jobListings.value = p
  })
</script>

<template>
  <div class="blog font-bahnschrift bg-gradient-to-b from-[#ffffff] via-[#ffffff] via-10% to-[#D7E6FF] hide-scrollbar">
    <div class="cover-image-container">
      <img src="../assets/IMG-2.jpg" alt="Career Cover" class="cover-image" />
      <div class="content-overlay">
        <div class="mb-4 sm:mb-6 md:mb-8">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight sm:leading-tight">
            Success in <br>
            the Career
          </h1>
        </div>
        <div class="mb-6 sm:mb-8 md:mb-10">
          <p class="text-sm sm:text-base md:text-lg text-white drop-shadow-md max-w-sm sm:max-w-md md:max-w-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam
          </p>
        </div>
        <div>
          <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 sm:py-3 sm:px-6 pr-3 sm:pr-4 rounded-full text-xs sm:text-sm font-medium transition inline-flex items-center gap-2 sm:gap-3">
            JOIN US
            <div class="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="h-24 sm:h-32 relative z-50 -mt-12 sm:-mt-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-12">
        <div class="flex gap-4 sm:gap-6 justify-center sm:justify-start">
          <div class="hidden sm:block relative h-24 sm:h-32 w-3 sm:w-4">
            <div class="absolute top-12 sm:top-16 h-2/3 sm:h-3/4 left-1/2 -translate-x-1/2 w-[4px] sm:w-[6px] bg-blue-500"></div>
            <div class="absolute bottom-[-20px] sm:bottom-[-40px] left-1/2 -translate-x-1/2 w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] bg-blue-500 rounded-full"></div>
          </div>
          <div class="relative h-40 sm:h-60 w-3 sm:w-4 hidden sm:block">
            <div class="absolute top-12 sm:top-16 h-[80px] sm:h-[120px] left-1/2 -translate-x-1/2 w-[4px] sm:w-[6px] bg-blue-500"></div>
            <div class="absolute bottom-[20px] sm:bottom-[40px] left-1/2 -translate-x-1/2 w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] bg-blue-500 rounded-full"></div>
          </div>
          <div class="relative h-24 sm:h-32 w-3 sm:w-4 hidden md:block">
            <div class="absolute top-12 sm:top-16 h-2/3 sm:h-3/4 left-1/2 -translate-x-1/2 w-[4px] sm:w-[6px] bg-blue-500"></div>
            <div class="absolute bottom-[-20px] sm:bottom-[-40px] left-1/2 -translate-x-1/2 w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 sm:px-6 lg:px-12 py-8 sm:py-12 mx-auto">
      <h1 class="text-4xl sm:text-5xl md:text-6xl text-center py-4">Join Our Team!</h1>
      <p class="text-center text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat
      </p>

      <div class="job-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
        <div
          v-for="job in jobListings"
          :key="job.id"
          class="job-card bg-white rounded-2xl shadow-md p-6 flex flex-col"
        >
          <div v-if="job.feature_image" class="relative mb-4">
            <img :src="job.feature_image" :alt="job.title" class="w-full h-40 object-cover rounded-lg" />
          </div>

          <div class="job-type text-black-600 text-sm mb-2">
            {{ job.tags.map(tag => tag.name).join(', ') }}
          </div>
          <h3 class="job-title text-blue-600 text-xl sm:text-2xl font-medium mb-4">{{ job.title }}</h3>
          <p class="job-description text-gray-600 flex-grow mb-4 text-sm sm:text-base">
            {{ job.excerpt }}
          </p>
          <button class="cek-btn bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium w-32 mx-auto sm:mx-0">CEK NOW</button>
        </div>
      </div>
    </div>

    <div class="py-28 relative overflow-hidden">
      <div class="container px-12 mx-auto">
        <div class="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center">
          <div class="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-2 z-10 relative mb-10 xl:mb-0 mx-auto md:mx-0">
            <div>
              <img src="../assets/email-logo-02-02.png" alt="Email" class="w-32 h-auto object-contain">
            </div>
            <div class="flex flex-col items-center md:flex-row md:justify-end gap-2">
              <h2 class="text-xl px-4 uppercase font-medium text-blue-600 underline underline-offset-8 text-center md:text-left">SEND EMAIL :</h2>
              <p class="text-xl text-gray-700">recruitment@sibertahan.com</p>
            </div>
          </div>

          <div class="absolute right-[-450px] top-[160px] -translate-y-1/2 hidden lg:flex flex-col gap-[20px] z-50">
            <div class="relative flex items-center justify-end">
              <div class="absolute right-[930px] w-[18px] h-[18px] bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              <div class="h-[6px] w-[950px] bg-blue-500"></div>
            </div>

            <div class="relative flex items-center justify-end">
              <div class="absolute right-[1070px] w-[28px] h-[28px] bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              <div class="h-[6px] w-[1100px] bg-blue-500"></div>
            </div>

            <div class="relative flex items-center justify-end">
              <div class="absolute right-[930px] w-[18px] h-[18px] bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              <div class="h-[6px] w-[950px] bg-blue-500"></div>
            </div>
          </div>

          <div class="absolute top-1/2 -translate-y-1/2 hidden md:flex lg:hidden flex-col gap-[12px] z-0 overflow-hidden w-auto md:w-[60%] xl:w-[45%] right-0">
            <div class="relative flex items-center justify-end">
              <div class="absolute right-[calc(100% - 25px)] w-[14px] h-[14px] bg-blue-500 rounded-full"></div>
              <div class="h-[4px] bg-blue-500 w-[calc(100% - 15px)]"></div>
            </div>
            <div class="relative flex items-center justify-end">
              <div class="absolute right-[calc(100% - 35px)] w-[20px] h-[20px] bg-blue-500 rounded-full"></div>
              <div class="h-[4px] bg-blue-500 w-[calc(100% - 20px)]"></div>
            </div>
            <div class="relative flex items-center justify-end">
              <div class="absolute right-[calc(100% - 25px)] w-[14px] h-[14px] bg-blue-500 rounded-full"></div>
              <div class="h-[4px] bg-blue-500 w-[calc(100% - 15px)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bg-gray-500 opacity-5 w-[400px] h-[180px] sm:w-[640px] sm:h-[280px] bottom-[-1000px] right-0 z-0 rounded-2xl"></div>

    <div class="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 mx-auto">
      <h1 class="text-4xl sm:text-5xl md:text-6xl text-center py-4">Core</h1>
      <p class="text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        consequat. Duis autem vel eumolestie. vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
        qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Styles untuk menyembunyikan scrollbar pada elemen spesifik */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  overflow-y: auto;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* Styles untuk Container Gambar Sampul */
.cover-image-container {
  width: 100vw;
  height: 50vh; /* Tinggi responsif untuk layar kecil */
  overflow: hidden;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
}

@media (min-width: 768px) {
  /* md breakpoint */
  .cover-image-container {
    height: 60vh;
  }
}

@media (min-width: 1024px) {
  /* lg breakpoint */
  .cover-image-container {
    height: 70vh;
  }
}

/* Styles untuk Gambar Sampul */
.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.8);
}

/* Styles untuk Overlay Konten di Atas Gambar Sampul */
.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%; /* Padding responsif untuk layar kecil */
  z-index: 10;
}

@media (min-width: 640px) {
  /* sm breakpoint */
  .content-overlay {
    padding-left: 8%;
  }
}

@media (min-width: 1024px) {
  /* lg breakpoint */
  .content-overlay {
    padding-left: 10%;
  }
}

/* GLOBAL STYLES (penting untuk diletakkan di main CSS/global styles jika ini komponen) */
/* Untuk menyembunyikan scrollbar di seluruh halaman HTML dan Body */
:global(html),
:global(body) {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  overflow-x: hidden; /* Penting untuk mencegah scrollbar horizontal */
}
:global(html::-webkit-scrollbar),
:global(body::-webkit-scrollbar) {
  width: 0;
  display: none; /* Chrome, Safari and Opera */
}

/* MEDIA QUERIES untuk Posisi Garis Dekoratif Horizontal di Bagian Email */

/* For screens from md (768px) up to (but not including) lg (1024px) */
/* This targets the 'md:flex lg:hidden' lines */
@media (min-width: 768px) and (max-width: 1023px) {
  .absolute.top-1\/2.hidden.md\:flex.lg\:hidden {
    top: 50% !important;
    transform: translateY(-50%);
  }

  /* Specific adjustments for the dots and lines on MD screens */
  /* These values are highly dependent on the text width and container spacing.
     You might need to fine-tune these 'calc()' values based on your exact layout. */
  .absolute.top-1\/2.hidden.md\:flex.lg\:hidden > div > div:nth-child(1) .absolute {
    right: calc(100% + 20px); /* Adjust based on the gap between text and line start */
    transform: none; /* Reset transform for this breakpoint */
  }
  .absolute.top-1\/2.hidden.md\:flex.lg\:hidden > div > div:nth-child(1) .h-\[4px\] {
    width: calc(100% - 60px); /* Adjust line length */
  }

  .absolute.top-1\/2.hidden.md\:flex.lg\:hidden > div > div:nth-child(2) .absolute {
    right: calc(100% + 30px); /* Adjust for longer line */
    transform: none;
  }
  .absolute.top-1\/2.hidden.md\:flex.lg\:hidden > div > div:nth-child(2) .h-\[4px\] {
    width: calc(100% - 70px); /* Adjust line length */
  }

  .absolute.top-1\/2.hidden.md\:flex.lg\:hidden > div > div:nth-child(3) .absolute {
    right: calc(100% + 20px); /* Adjust based on the gap between text and line start */
    transform: none;
  }
  .absolute.top-1\/2.hidden.md\:flex.lg\:hidden > div > div:nth-child(3) .h-\[4px\] {
    width: calc(100% - 60px); /* Adjust line length */
  }
}

/* For screens from lg (1024px) and above (including 2xl) */
/* This targets the 'hidden lg:flex' lines */
@media (min-width: 1024px) {
  .absolute.right-\[-450px\].top-\[\160px\] {
    top: 160px !important; /* Original 'top' position from your initial design */
    transform: translateY(-50%); /* Keeps it vertically centered relative to that top */
    right: -450px !important; /* Original 'right' position from your initial design */
  }
}
</style>