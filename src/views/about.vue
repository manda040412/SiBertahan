<template>
  <div class="about-us-container font-bahnschrift bg-white min-h-screen">
    <!-- Main Content Section -->
    <div class="main-content max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 relative">
      
      <!-- Blue decorative lines (hidden on md and below) -->
      <div class="absolute -left-[1000px] top-[90px] flex flex-col gap-[20px] z-0 hidden md:flex">
        <!-- First line with dot -->
        <div class="relative w-[1220px] max-w-[90vw] flex items-center">
          <div class="h-[6px] w-full bg-blue-500"></div>
          <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full translate-x-1/2"></div>
        </div>
        <!-- Second line with dot -->
        <div class="relative w-[1320px] max-w-[95vw] flex items-center">
          <div class="h-[6px] w-full bg-blue-500"></div>
          <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full translate-x-1/2"></div>
        </div>
        <!-- Third line with dot -->
        <div class="relative w-[1220px] max-w-[90vw] flex items-center">
          <div class="h-[6px] w-full bg-blue-500"></div>
          <div class="absolute right-0 w-[26px] h-[26px] bg-blue-500 rounded-full translate-x-1/2"></div>
        </div>
      </div>

      <!-- About Us Title - Center -->
      <div class="text-center mb-8 md:mb-16 mt-4 md:mt-[25px]">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 font-light">About Us</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
        <!-- Left Side Content -->
        <div class="left-content flex flex-col gap-6 md:gap-8 pl-0 md:pl-8">
          <div class="page-indicator">
            <p class="text-blue-500 font-semibold text-sm tracking-wider uppercase border-b-2 border-blue-500 inline-block pb-1">ABOUT US</p>
          </div>

          <div class="section-subheading">
            <h2 class="text-blue-500 text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Ensuring Your Peace<br>of Mind
            </h2>
          </div>
          
          <div class="text-content max-w-lg pl-0 md:pl-8 lg:pl-28">
            <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
              We are a cybersecurity consulting firm that specializes in 
              providing comprehensive security solutions. Our team of 
              experts is equipped to handle all aspects of security, from 
              offensive tactics to defensive strategies and governance 
              protocols. With our in-depth knowledge and cutting-edge 
              technology, we offer unparalleled protection for 
              businesses of all sizes. Trust us to safeguard your 
              valuable data, mitigate risks, and ensure your peace of 
              mind.
            </p>
          </div>

          <!-- Bottom Image -->
          <div class="bottom-image mt-2 pl-0 w-full md:w-[800px] max-w-full">
            <img 
              src="../assets/aboutus-laptop.jpg" 
              alt="Cybersecurity expert working" 
              class="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        <!-- Right Side Image -->
        <div class="right-content hidden lg:flex justify-end items-start pt-0 mt-0 lg:mt-[-130px] mr-0 lg:mr-[-280px]">
          <div class="image-section relative ml-auto w-[300px] lg:w-[400px] h-[500px] lg:h-[650px] shadow-lg">
            <!-- gambar gembok, radius di sini -->
            <img
              src="../assets/aboutus-lock.png"
              alt="Cybersecurity lock"
              class="w-full h-full object-cover rounded-2xl"
            />

            <!-- badge -->
            <img
              src="../assets/20.png"
              alt="20+ Years of Experience"
              class="absolute top-1/2 -left-[100px] lg:-left-[150px] -translate-y-1/2 w-[120px] md:w-[200px] lg:w-[300px] h-[120px] md:h-[200px] lg:h-[300px] object-contain z-10"
            />
          </div>
        </div>
      </div>
    </div>
  
    <!-- Services Section -->
    <div class="bg-[#0D1A3F] text-white font-sans py-12 md:py-16 px-4 sm:px-6">
      <!-- Section Title with Blue Lines -->
      <div class="max-w-6xl mx-auto mb-8 md:mb-16 flex flex-col md:flex-row items-start justify-between relative gap-4">
        <!-- Text Section -->
        <div>
          <h3 class="text-left text-sm font-semibold tracking-widest text-blue-400 uppercase relative w-max after:content-[''] after:block after:h-0.5 after:bg-blue-400 after:w-full after:mt-1 z-10">
            What We Provide
          </h3>
          <h2 class="text-left text-3xl md:text-4xl font-light mt-3 leading-tight z-10 relative">
            Keeping You Safe,<br />Keeping You Secure
          </h2>
        </div>
        <!-- Decorative lines, hide on small screens -->
        <div class="absolute md:static md:flex md:flex-col md:gap-[10px] md:items-end z-0 hidden md:block right-0 top-[30px]">
          <!-- Line 1 -->
          <div class="flex items-center gap-0">
            <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div class="h-1 bg-blue-500 w-[200px] md:w-[500px]"></div>
          </div>
          <!-- Line 2 -->
          <div class="flex items-center gap-0">
            <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div class="h-1 bg-blue-500 w-[250px] md:w-[600px]"></div>
          </div>
          <!-- Line 3 -->
          <div class="flex items-center gap-0">
            <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div class="h-1 bg-blue-500 w-[200px] md:w-[500px]"></div>
          </div>
        </div>
      </div>
      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
        <!-- SIBERSERANG -->
        <div class="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105">
          <img src="../assets/solutions logo (1).png" alt="SiberSerang" class="w-40 md:w-50 mx-auto mb-4 md:mb-6" />
          <h3 class="text-left text-lg md:text-xl font-bold mb-1">
            <span class="text-white">SIBER</span><span class="text-red-500">SERANG</span>
          </h3>
          <div class="w-[120px] md:w-[140px] h-[1px] bg-white ml-0 mb-3 md:mb-4"></div>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed text-left">
            Siberserang is our suite of offensive cybersecurity services. It encompasses proactive and
            controlled simulated attack on computer systems, networks, and applications. Our ethical
            penetration testers conduct these assessments to identify vulnerabilities and weaknesses,
            providing valuable insights for your organization to fortify defenses, safeguard data, and
            mitigate potential real-world cyber threats.
          </p>
        </div>

        <!-- SIBERPATUH -->
        <div class="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105">
          <img src="../assets/solutions logo (2).png" alt="SiberPatuh" class="w-40 md:w-50 mx-auto mb-4 md:mb-6" />
          <h3 class="text-left text-lg md:text-xl font-bold mb-1">
            <span class="text-white">SIBER</span><span class="text-green-400">PATUH</span>
          </h3>
          <div class="w-[110px] md:w-[130px] h-[1px] bg-white ml-0 mb-3 md:mb-4"></div>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed text-left">
            Siberpatuh consulting services will help your organization in adhering to industry
            regulations, legal requirements, and internal policies that ensure the protection of your
            critical assets as well as the protection of data. This service emphasizes on proper
            governance by Top Management with a top-down approach to reach the sought cybersecurity
            governance posture across the brand.
          </p>
        </div>

        <!-- SIBERJAGA -->
        <div class="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105">
          <img src="../assets/solutions logo (3).png" alt="SiberJaga" class="w-40 md:w-50 mx-auto mb-4 md:mb-6" />
          <h3 class="text-left text-lg md:text-xl font-bold mb-1">
            <span class="text-white">SIBER</span><span class="text-blue-400">JAGA</span>
          </h3>
          <div class="w-[100px] md:w-[120px] h-[1px] bg-white ml-0 mb-3 md:mb-4"></div>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed text-left">
            Siberjaga focuses on defensive cybersecurity consulting services which involve comprehensive
            strategies and the adoption of frameworks to better protect your organization from
            unauthorized access, cyberattacks, and breaches. The ultimate goal is to provide your
            organization the capabilities to be resilient in responding to potential security incidents,
            ensuring the utmost protection of sensitive information.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      // Data can be added here if needed
    }
  },
  mounted() {
    // Set page title
    document.title = 'About Us - PT Kompas Siber Indonesia | Sibertahan';
  }
}
</script>

<style scoped>
/* Responsive: Hide blue lines on small screens */
@media (max-width: 1024px) {
  .main-content > .absolute {
    display: none !important;
  }
  .right-content {
    display: none !important;
  }
  .left-content {
    padding-left: 0 !important;
  }
  .text-content {
    padding-left: 0 !important;
  }
}

/* Responsive: Hide service section blue lines on small screens */
@media (max-width: 1024px) {
  .md\:block {
    display: none !important;
  }
}

/* Adjust card hover effect on mobile */
@media (max-width: 768px) {
  .group:hover {
    transform: none !important;
  }
}
</style>