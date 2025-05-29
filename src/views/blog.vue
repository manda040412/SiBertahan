<template>
  <div class="blog font-bahnschrift bg-gradient-to-b from-[#ffffff] via-[#D7E6FF] via-100% to-[#D7E6FF] hide-scrollbar">
    <div class="container px-12 mx-auto">

      <div class="relative">
        <div class="col-md-12 ">
          <h1 class="text-center py-12 text-8xl">Blog</h1>
      </div>
          <!-- Lines container -->
          <div class="absolute -left-[900px] top-[50%] -translate-y-1/2 flex flex-col gap-[20px]">
            <!-- First line with dot -->
            <div class="relative w-[1220px] flex items-center">
              <!-- Horizontal line -->
              <div class="h-[6px] w-full bg-blue-500"></div>
              <!-- Circle dot -->
              <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full transform translate-x-1/2"></div>
            </div>

            <!-- Second line with dot -->
            <div class="relative w-[1320px] flex items-center">
              <!-- Horizontal line -->
              <div class="h-[6px] w-full bg-blue-500"></div>
              <!-- Circle dot -->
              <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full transform translate-x-1/2"></div>
            </div>

            <!-- Third line with dot -->
            <div class="relative w-[1220px] flex items-center">
              <!-- Horizontal line -->
              <div class="h-[6px] w-full bg-blue-500"></div>
              <!-- Circle dot -->
              <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full transform translate-x-1/2"></div>
            </div>
          </div>
        </div>
      
    </div>
    
    <div class="container px-12 mx-auto py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <!-- Blog Card -->

        <div class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-105 transform group">
          <div class="relative">
            <img src="../assets/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg" alt="Blog post image" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 relative pb-16">
            <div>
              <h2 class="text-blue-500 text-xl font-semibold mb-2">
                <a href="#">Cloud Storage Security Assessment: Cara Efektif Cegah Insiden Keamanan di Cloud</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-10 h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-105 transform group">
          <div class="relative">
            <img src="../assets/laptop.jpg" alt="Blog post image" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 relative pb-16">
            <div>
              <h2 class="text-blue-500 text-xl font-semibold mb-2">
                <a href="#">Cloud Storage Security Assessment: Cara Efektif Cegah Insiden Keamanan di Cloud</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-10 h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-105 transform group">
          <div class="relative">
            <img src="../assets/bg-iso.png" alt="Blog post image" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 relative pb-16">
            <div>
              <h2 class="text-blue-500 text-xl font-semibold mb-2">
                <a href="#">ISO/IEC 27701: Kunci Utama Patuhi UU PDP!</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-10 h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>


        <div class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-105 transform group">
          <div class="relative">
            <img src="../assets/aspi.png" alt="Blog post image" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 relative pb-16">
            <div>
              <h2 class="text-blue-500 text-xl font-semibold mb-2">
                <a href="#"> Sibertahan Resmi Terdaftar di ASPI sebagai Penyedia Jasa Audit TI</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-10 h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-105 transform group">
          <div class="relative">
            <img src="../assets/louis-reed-wSTCaQpiLtc-unsplash.jpg" alt="Blog post image" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 relative pb-16">
            <div>
              <h2 class="text-blue-500 text-xl font-semibold mb-2">
                <a href="#"> Framework CIS Controls vs. Standar ISO/IEC 27001: Mana yang Paling Cocok Buat Perusahaan Kamu?</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-10 h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-105 transform group">
          <div class="relative">
            <img src="../assets/jorge-salvador-vruAZdZzQR0-unsplash.jpg" alt="Blog post image" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 relative pb-16">
            <div>
              <h2 class="text-blue-500 text-xl font-semibold mb-2">
                <a href="#">Cybersecurity vs Information Security: Understanding the Difference and Connection</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-10 h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-105 transform group">
          <div class="relative">
            <img src="../assets/clark-tibbs-oqStl2L5oxI-unsplash.jpg" alt="Blog post image" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 relative pb-16">
            <div>
              <h2 class="text-blue-500 text-xl font-semibold mb-2">
                <a href="#"> Cybersecurity vs Information Security: Dua Hal yang Beda Tapi Sama Pentingnya!</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-10 h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-105 transform group">
          <div class="relative">
            <img src="../assets/imgix-klWUhr-wPJ8-unsplash.jpg" alt="Blog post image" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 relative pb-16">
            <div>
              <h2 class="text-blue-500 text-xl font-semibold mb-2">
                <a href="#"> Business Continuity Plan (BCP): Your Ultimate Backup Plan to Keep Business Rolling, No Matter What!</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-10 h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[#000204] via-[#031931] to-[#06305C] hover:from-white hover:via-white hover:to-white shadow-blue-900/50 hover:scale-105 transform group">
          <div class="relative">
            <img src="../assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg" alt="Blog post image" class="w-full h-48 object-cover">
          </div>
          <div class="p-6 relative pb-16">
            <div>
              <h2 class="text-blue-500 text-xl font-semibold mb-2">
                <a href="#"> Cloud Storage Security Assessment: Effective Ways to Prevent Security Incidents in the Cloud</a>
              </h2>
            </div>
            <div>
              <p class="text-gray-300 group-hover:text-gray-600 text-sm mb-3">March 15, 2024</p>
              <p class="text-gray-200 group-hover:text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="absolute bottom-4 right-4">
              <a href="#" class="inline-flex items-center justify-center text-blue-500 w-10 h-10 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Another card -->
      </div>      
    </div>
      <div class="relative w-full py-16 overflow-hidden" style="position: relative; overflow: hidden;">
        <div class="flex flex-col items-end gap-1 pl-6" style="position: relative; height: 160px;">
          <!-- First line with dot - ADJUST WIDTH HERE -->
          <div class="relative" style="width: 50%; height: 30px;">
            <!-- Line - CUSTOMIZE WIDTH HERE (e.g., 800px, 1200px, etc.) -->
            <div class="absolute right-0 h-[6px] bg-blue-500" style="width: 800px; right: 0;">
              <!-- Dot -->
              <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <!-- Second (longer) line with dot - ADJUST WIDTH HERE -->
          <div class="relative" style="width: 90%; height: 30px;">
            <!-- Line - CUSTOMIZE WIDTH HERE (e.g., 800px, 1200px, etc.) -->
            <div class="absolute right-0 h-[6px] bg-blue-500" style="width: 950px; right: 0;">
              <!-- Dot -->
              <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <!-- Third line with dot - ADJUST WIDTH HERE -->
          <div class="relative" style="width: 70%; height: 30px;">
            <!-- Line - CUSTOMIZE WIDTH HERE (e.g., 800px, 1200px, etc.) -->
            <div class="absolute right-0 h-[6px] bg-blue-500" style="width: 800px; right: 0;">
              <!-- Dot -->
              <div class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

     
 </div>
</template> 

<style scoped>
/* Any additional custom styles can go here */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-y: auto;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* Global styles to hide scrollbars - needs to be moved to main CSS */
:global(html),
:global(body) {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-x: hidden;
}
:global(html::-webkit-scrollbar),
:global(body::-webkit-scrollbar) {
  width: 0;
  display: none;  /* Chrome, Safari and Opera */
}
</style>