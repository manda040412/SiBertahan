<template>
  <!-- Full width footer container with dark background -->
  <div class="w-full bg-[#1D1D1D] ">
    <!-- Inner content container with max width and padding -->
    <div class="font-bahnschrift text-white px-4 md:px-14 py-14 mx-auto max-w-8xl">
      <div class="grid md:grid-cols-12 gap-8">
        <!-- Left section -->
        <div class="md:col-span-4">
          <img src="../assets/logo-footer.png" class="h-10 mb-6" alt="Sibertahan Logo" />
          <p class="text-sm text-gray-300 mb-10 leading-relaxed">
            Safeguard your valuable data,<br />
            mitigate risks, and ensure your<br />
            peace of mind.
          </p>
          <p class="text-sm mb-4 font-medium">Follow us:</p>
          
          <!-- Social icons -->
          <div class="flex space-x-4">
            <!-- Facebook -->
            <a href="#" class="text-white hover:text-gray-300 transition-colors">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
                </svg>
              </div>
            </a>
            
            <!-- LinkedIn -->
            <a href="#" class="text-white hover:text-gray-300 transition-colors">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </a>
            
            <!-- Instagram -->
            <a href="#" class="text-white hover:text-gray-300 transition-colors">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
            
            <!-- Twitter/X -->
            <a href="#" class="text-white hover:text-gray-300 transition-colors">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.095479,10.316482l6.035683,-7.039046l-1.4505,-0l-5.25271,6.097794l-4.253454,-6.097794l-4.8781,0l6.503528,9.301304l-6.293246,7.305897l1.4505,0l5.510272,-6.364645l4.451729,6.364645l4.8781,0l-6.701802,-9.568156zm-1.955729,1.096495l-0.641277,-0.911873l-5.202973,-7.407637l2.165072,0l4.190943,5.987849l0.641249,0.911899l5.448427,7.778245l-2.165072,0l-4.436371,-6.358482z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <!-- Spacer -->
        <div class="md:col-span-2"></div>

        <!-- Quick Link -->
        <div class="md:col-span-2.5">
          <h4 class="font-semibold mb-5 text-base">Quick Link</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li><router-link to="/" class="hover:text-white flex items-center transition-colors"><span class="mr-3 text-gray-500 text-lg leading-none">·</span>Home</router-link></li>
            <li><router-link to="/service" class="hover:text-white flex items-center transition-colors"><span class="mr-3 text-gray-500 text-lg leading-none">·</span>Our Services</router-link></li>
            <li><router-link to="/about" class="hover:text-white flex items-center transition-colors"><span class="mr-3 text-gray-500 text-lg leading-none">·</span>About Us</router-link></li>
            <li><router-link to="/contact" class="hover:text-white flex items-center transition-colors"><span class="mr-3 text-gray-500 text-lg leading-none">·</span>Contact Us</router-link></li>
            <li><router-link to="/blog" class="hover:text-white flex items-center transition-colors"><span class="mr-3 text-gray-500 text-lg leading-none">·</span>Blog</router-link></li>
            <li><router-link to="/career" class="hover:text-white flex items-center transition-colors"><span class="mr-3 text-gray-500 text-lg leading-none">·</span>Career</router-link></li>
          </ul>
        </div>

        <!-- Spacer -->
        <div class="md:col-span-1"></div>

        <!-- Quick Services -->
        <div class="md:col-span-2.5">
          <h4 class="font-semibold mb-5 text-base">Quick Services</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li><router-link to="/service/siberserang" class="hover:text-white flex items-center transition-colors"><span class="mr-3 text-gray-500 text-lg leading-none">·</span>Siberserang</router-link></li>
            <li><router-link to="/service/siberpatuh" class="hover:text-white flex items-center transition-colors"><span class="mr-3 text-gray-500 text-lg leading-none">·</span>Siberpatuh</router-link></li>
            <li><router-link to="/service/siberjaga" class="hover:text-white flex items-center transition-colors"><span class="mr-3 text-gray-500 text-lg leading-none">·</span>Siberjaga</router-link></li>
          </ul>
        </div>
      </div>

      <!-- Decorative Lines Section -->
      <div class="w-full mt-20 mb-10 select-none pointer-events-none">
        <!-- First line with dot -->
        <div class="relative w-full h-4 flex items-center mb-2">
          <div class="absolute left-[-3%] right-[60%] top-1/2 -translate-y-1/2 h-[4px] bg-[#333333] rounded-full"></div>
          <div class="absolute left-[40%] top-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-[#333333] rounded-full"></div>
        </div>
        
        <!-- Second line with dot -->
        <div class="relative w-full h-4 flex items-center mb-2">
          <div class="absolute left-[38%] right-[-3%] top-1/2 -translate-y-1/2 h-[4px] bg-[#333333] rounded-full"></div>
          <div class="absolute left-[38%] top-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-[#333333] rounded-full"></div>
        </div>
        
        <!-- Third line with dot -->
        <div class="relative w-full h-4 flex items-center mb-2">
          <div class="absolute left-[-3%] right-[60%] top-1/2 -translate-y-1/2 h-[4px] bg-[#333333] rounded-full"></div>
          <div class="absolute left-[40%] top-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-[#333333] rounded-full"></div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-right text-xs text-gray-500 font-light">
        Sibertahan copyright © 2023. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style>
.font-bahnschrift {
  font-family: 'Bahnschrift', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>