<template>
  <div class="about-us-container font-bahnschrift bg-white min-h-screen">
    <!-- Main Content Section -->
    <div class="main-content max-w-7xl mx-auto px-6 py-16 relative">
      
      <!-- Blue decorative lines -->
      <div class="absolute top-20 left-6 flex flex-col gap-1">
        <div class="h-1 w-16 bg-blue-500 rounded-full"></div>
        <div class="h-1 w-20 bg-blue-500 rounded-full"></div>
        <div class="h-1 w-12 bg-blue-500 rounded-full"></div>
        <div class="w-3 h-3 bg-blue-500 rounded-full ml-20 -mt-2"></div>
        <div class="w-3 h-3 bg-blue-500 rounded-full ml-24 -mt-1"></div>
      </div>

      <!-- About Us Title - Center -->
      <div class="text-center mb-16">
        <h1 class="text-6xl lg:text-7xl text-gray-900 font-light">About Us</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Side Content -->
        <div class="left-content flex flex-col gap-8 pl-8">

          <div class="page-indicator">
            <p class="text-blue-500 font-semibold text-sm tracking-wider uppercase">ABOUT US</p>
          </div>

          <div class="section-subheading">
            <h2 class="text-blue-500 text-4xl lg:text-5xl font-bold leading-tight">
              Ensuring Your Peace<br>of Mind
            </h2>
          </div>
          
          <div class="text-content max-w-lg pl-8">
            <p class="text-gray-700 leading-relaxed text-base">
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
          <div class="bottom-image mt-12 pl-8">
            <img 
              src="../assets/aboutus-laptop.jpg" 
              alt="Cybersecurity expert working" 
              class="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!-- Right Side Image -->
        <div class="right-content flex justify-end items-start pt-16">
          <div class="image-section relative w-full max-w-lg">
            <img 
              src="../assets/aboutus-lock.png" 
              alt="Cybersecurity lock" 
              class="w-full h-auto"
            />
            
            <!-- Experience Badge -->
            <div class="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-400 to-blue-600 text-white p-8 rounded-full w-32 h-32 flex flex-col justify-center items-center text-center shadow-xl">
              <span class="text-3xl font-bold leading-none">20+</span>
              <span class="text-xs font-medium mt-1 leading-tight">Years of<br>Experience</span>
            </div>
          </div>
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
/* Minimal custom styles - following home.vue approach */
</style>