<template>
  <!-- Main container with flex column layout -->
  <div class="flex flex-col min-h-screen">
    <!-- Content that will grow to push footer down -->
    <div class="flex-grow">
      <!-- Main Contact Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <!-- Contact Title -->
        <div class="text-center mb-10 sm:mb-16">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-light mb-4">Contact</h1>
        </div>

        <!-- Contact Info Section -->
        <div class="mb-16 sm:mb-20 px-0 sm:px-4">
          <!-- Title -->
          <div class="text-left mb-4">
            <p class="text-blue-500 font-semibold text-sm tracking-wider uppercase border-b-2 border-blue-500 inline-block pb-1">
              CONTACT INFO
            </p>
          </div>

          <h2 class="text-left text-2xl sm:text-4xl lg:text-5xl text-blue-500 font-light mb-10 sm:mb-16">
            Our Contact Information
          </h2>

          <!-- Contact Cards -->
          <div class="flex flex-col md:flex-row justify-between items-stretch gap-8 sm:gap-12 max-w-7xl mx-auto">
            <!-- Location Card -->
            <div class="flex flex-col w-full md:w-72">
              <div class="flex items-end gap-4 mb-4">
                <img src="../assets/location.png" alt="Location Icon" class="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <p class="text-blue-500 font-semibold text-sm tracking-wider uppercase border-b border-blue-500 pb-1">
                  Location:
                </p>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed">
                District 8, Treasury Tower Lt. 6 Unit F<br>
                Jl. Jend. Sudirman Kav. 52-53, SCBD<br>
                Lot 28 RT. 005 RW. 003, Senayan,<br>
                Kebayoran Baru, Jakarta Selatan<br>
                12190
              </p>
            </div>

            <!-- Email Card -->
            <div class="flex flex-col w-full md:w-72">
              <div class="flex items-end gap-4 mb-4">
                <img src="../assets/email.png" alt="Email Icon" class="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <p class="text-blue-500 font-semibold text-sm tracking-wider uppercase border-b border-blue-500 pb-1">
                  Email:
                </p>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed break-all">info@sibertahan.com</p>
            </div>

            <!-- Phone Card -->
            <div class="flex flex-col w-full md:w-72">
              <div class="flex items-end gap-4 mb-4">
                <img src="../assets/phone.png" alt="Phone Icon" class="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                <p class="text-blue-500 font-semibold text-sm tracking-wider uppercase border-b border-blue-500 pb-1">
                  Phone:
                </p>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed">+62 21 29492273</p>
            </div>
          </div>
        </div>

        <!-- Zigzag Decorative Lines -->
        <div class="flex flex-col items-center gap-5 my-[-20px] z-0">
          <!-- First line: Dot on the left, full width -->
          <div class="relative w-full max-w-[95vw] sm:w-[130%] sm:max-w-[1300px] sm:translate-x-[230px] flex items-center">
              <div class="h-[6px] w-full bg-blue-500 rounded-full"></div>
              <div class="absolute -left-[5px] w-[20px] h-[20px] bg-blue-500 rounded-full translate-x-[-50%]"></div>
          </div>

          <!-- Second line: Dot on the right, shorter -->
          <div class="relative w-[80%] sm:w-[41%] max-w-[800px] -translate-x-0 sm:-translate-x-[650px] flex items-center">
              <div class="h-[6px] w-full bg-blue-500 rounded-full"></div>
              <div class="absolute -right-[5px] w-[20px] h-[20px] bg-blue-500 rounded-full translate-x-[50%]"></div>
          </div>

          <!-- Third line: Dot on the left, full width -->
          <div class="relative w-full max-w-[95vw] sm:w-[130%] sm:max-w-[1300px] sm:translate-x-[230px] flex items-center">
              <div class="h-[6px] w-full bg-blue-500 rounded-full"></div>
              <div class="absolute -left-[5px] w-[20px] h-[20px] bg-blue-500 rounded-full translate-x-[-50%]"></div>
          </div>
        </div>
      </div>

      <!-- Send Message Section -->
      <div class="bg-gradient-to-b from-white to-blue-50 py-10 sm:py-16 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <!-- Top Section: Judul + WhatsApp Icon -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <!-- Image contact1 on far left -->
            <div class="flex justify-center lg:justify-start">
              <img src="../assets/contact1.png" alt="Contact Illustration" class="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain mb-10 mt-[-30px] sm:mt-[-50px]">
            </div>

            <!-- Heading & WhatsApp Image -->
            <div class="flex flex-col items-start justify-start">
              <p class="text-blue-500 font-semibold text-sm tracking-wider uppercase mb-6 sm:mb-8 border-b-2 border-blue-500 pb-1">GET IN TOUCH</p>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl text-blue-500 font-light mb-6 sm:mb-10">Send Us a Message</h2>

              <!-- WhatsApp Image under heading -->
              <img src="../assets/contact2.png" alt="WhatsApp Illustration" class="w-60 sm:w-72 md:w-80 h-auto object-contain mb-8 sm:mb-12">

              <!-- WhatsApp Text & Button -->
              <div class="flex flex-col sm:flex-row sm:items-center sm:gap-10 w-full">
                <p class="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-0">By WhatsApp.</p>
                <button
                  @click="sendWhatsApp"
                  class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>

          <!-- Decorative Blue Lines (updated version) -->
          <div class="absolute -left-[100px] sm:-left-[300px] items-center mt-2 mb-5 relative z-0 hidden sm:block">
            <div class="flex flex-col gap-5">
                <!-- First line with dot -->
                <div class="relative w-[220px] sm:w-[420px] flex items-center">
                  <div class="h-[6px] w-full bg-blue-500 rounded-full"></div>
                  <div class="absolute right-0 w-[20px] h-[20px] bg-blue-500 rounded-full translate-x-1/2"></div>
                </div>
                <!-- Second line with dot -->
                <div class="relative w-[240px] sm:w-[460px] flex items-center">
                  <div class="h-[6px] w-full bg-blue-500 rounded-full"></div>
                  <div class="absolute right-0 w-[20px] h-[20px] bg-blue-500 rounded-full translate-x-1/2"></div>
                </div>
                <!-- Third line with dot -->
                <div class="relative w-[220px] sm:w-[420px] flex items-center">
                  <div class="h-[6px] w-full bg-blue-500 rounded-full"></div>
                  <div class="absolute right-0 w-[20px] h-[20px] bg-blue-500 rounded-full translate-x-1/2"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    sendWhatsApp() {
      const phoneNumber = '6221294622773';
      const message = 'Hello, I would like to inquire about your cybersecurity services.';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  },
  mounted() {
    document.title = 'Contact - PT Kompas Siber Indonesia | Sibertahan';
  }
};
</script>

<style scoped>
.contact-container {
  font-family: 'Bahnschrift', sans-serif;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* Responsive tweaks */
@media (max-width: 1024px) {
  .max-w-7xl {
    max-width: 100vw !important;
  }
  .sm\:translate-x-\[230px\] {
    transform: none !important;
  }
  .sm\:w-\[130\%\] {
    width: 100% !important;
  }
  .sm\:max-w-\[1300px\] {
    max-width: 100vw !important;
  }
  .sm\:w-\[41\%\] {
    width: 80% !important;
  }
  .sm\:-translate-x-\[650px\] {
    transform: none !important;
  }
  .sm\:block {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .text-5xl, .text-6xl {
    font-size: 2.5rem;
  }
  .text-4xl {
    font-size: 2rem;
  }
  .w-72, .md\:w-72 {
    width: 100% !important;
  }
  .gap-8, .sm\:gap-12 {
    gap: 1.5rem !important;
  }
  .flex-row, .md\:flex-row {
    flex-direction: column !important;
  }
  .items-stretch {
    align-items: stretch !important;
  }
  .px-6, .sm\:px-6 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  .py-16, .sm\:py-16 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
  .mb-16, .sm\:mb-16 {
    margin-bottom: 2rem !important;
  }
  .mb-10, .sm\:mb-10 {
    margin-bottom: 1.5rem !important;
  }
  .mb-6, .sm\:mb-8 {
    margin-bottom: 1rem !important;
  }
  .mb-8, .sm\:mb-12 {
    margin-bottom: 1rem !important;
  }
  .h-12, .sm\:h-16 {
    height: 2.5rem !important;
  }
  .w-12, .sm\:w-16 {
    width: 2.5rem !important;
  }
  .w-60, .sm\:w-72, .md\:w-80 {
    width: 100% !important;
    max-width: 320px !important;
  }
}

/* Hide decorative lines on mobile */
@media (max-width: 640px) {
  .sm\:block {
    display: none !important;
  }
}
</style>