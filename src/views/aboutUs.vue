<template>
  <div class="home font-bahnschrift">
    <!-- Hero Section -->
    <section class="hero-section relative overflow-hidden py-16 md:py-24">
      <!-- Social Media Icons (Left Side) - Adjusted position to match reference -->
      <div class="absolute left-12 bottom-20 md:bottom-24 flex flex-col gap-4 z-20">
        <a href="#" class="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-gray-700" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        </a>
        <a href="#" class="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-gray-700" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </a>
      </div>
      
      <!-- Main Hero Content -->
      <div class="container max-w-[1600px] mx-auto px-6 relative z-10">
        <div class="flex flex-col items-center text-center pt-8 pb-16">
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
            Better Security,<br>Better Human Rights
          </h1>
          <p class="text-gray-600 text-lg mb-8 max-w-lg">
            Trust us to safeguard your valuable data, mitigate risks,<br class="hidden md:block"> 
            and ensure your peace of mind.
          </p>
          <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 pr-4 rounded-full text-sm font-medium transition inline-flex items-center gap-3">
            JOIN US
            <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>
        </div>
      </div>
            <!-- Decorative Blue Line with Dots (Right Side) - Vertical Layout -->
      <div class="absolute right-12 top-1/4 h-96 select-none pointer-events-none">
        <!-- First line with dot -->
        <div class="relative h-full w-4 flex justify-center mr-1 inline-block">
          <!-- Vertical line with blue color -->
          <div class="absolute top-[1%] bottom-[60%] left-1/2 -translate-x-1/2 w-[5px] bg-blue-500"></div>
          <!-- Circle dot with blue color -->
          <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[15px] h-[15px] bg-blue-500 rounded-full"></div>
        </div>
        
        <!-- Second line with dot -->
        <div class="relative h-full w-4 flex justify-center mr-1 inline-block">
          <!-- Vertical line with blue color -->
          <div class="absolute top-[38%] bottom-[1%] left-1/2 -translate-x-1/2 w-[5px] bg-blue-500"></div>
          <!-- Circle dot with blue color -->
          <div class="absolute top-[38%] left-1/2 -translate-x-1/2 w-[15px] h-[15px] bg-blue-500 rounded-full"></div>
        </div>
        
        <!-- Third line with dot -->
        <div class="relative h-full w-4 flex justify-center mr-1 inline-block">
          <!-- Vertical line with blue color -->
          <div class="absolute top-[1%] bottom-[60%] left-1/2 -translate-x-1/2 w-[5px] bg-blue-500"></div>
          <!-- Circle dot with blue color -->
          <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[15px] h-[15px] bg-blue-500 rounded-full"></div>
        </div>
      </div>
      
      <!-- Small navigation dots at bottom right (visible in mobile) -->
      <div class="absolute bottom-10 right-10 flex flex-col gap-2">
        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>

  </div>
</template> 

    <style scoped>
    /* Any additional custom styles can go here */
    .hero-section {
      background: url('../assets/background.png') bottom center/cover no-repeat;
      min-height: 130vh;
      position: relative;
    }

    .cta-button {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
    }

    .solution-card {
      transition: all 0.3s ease;
    }

    .solution-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    .solution-image {
      position: relative;
    }

    .solution-image::after {
      content: '';
      position: absolute;
      inset: -20px;
      border-radius: 50%;
      filter: blur(35px);
      background: rgba(59, 130, 246, 0.15);
      z-index: 0;
      opacity: 0.8;
    }

    .solution-image img {
      position: relative;
      z-index: 1;
    }

    .about {
      position: relative;
      z-index: 1;
    }

    .about > *:not(:first-child) {
      position: relative;
      z-index: 2;
    }
    </style>