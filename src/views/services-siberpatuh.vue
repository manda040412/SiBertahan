<template>
  <div class="services font-bahnschrift hide-scrollbar bg-gradient-to-t from-[#D9E5F5] to-white min-h-screen">
    <div class="container px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
      <div class="relative">
        <div class="col-md-12">
          <div>
            <h1 class="text-center font-bold py-12 md:py-20 lg:py-28 text-5xl md:text-7xl lg:text-8xl">SIBER<span class="text-green-500">PATUH</span></h1>
          </div>
          <div class="hidden lg:flex absolute -left-[300px] top-[13.8%] -translate-y-1/2 flex-col">
            <img src="../assets/line dot.png" alt="" class="w-[600px] h-auto">
          </div>
        </div>
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div class="order-1 lg:order-1">
            <p class="text-lg md:text-xl lg:text-2xl tracking-wider font-medium underline underline-offset-[15px] mb-4 text-start">
              WHAT WE DO
            </p>
            <h1 class="text-start py-8 lg:py-20 text-4xl md:text-6xl lg:text-8xl">SIBER<span class="text-green-500">PATUH</span></h1>
            <P class="text-base md:text-lg lg:text-xl leading-relaxed"> Siberjaga focuses on defensive cybersecurity consulting
              services which involve comprehensive strategies and the
              adoption of frameworks to better protect your
              organization from unauthorized access, cyberattacks,
              and breaches. The ultimate goal is to provide your
              organization the capabilities to be cyber resilient in
              responding to potential security incident, ensuring the
              utmost protection of sensitive information.</P>

            <p class="text-lg md:text-xl lg:text-2xl py-8 lg:py-12 tracking-wider font-medium underline underline-offset-[15px] mb-4 text-start">
              SERVICE
            </p>
            <div class="flex flex-col gap-4 justify-start items-start">
              <div class="p-4 bg-blue-500 text-white rounded-xl text-sm md:text-base lg:text-lg">
                1. SECURITY HARDENING ASSESSMENT
              </div>
              <div class="p-4 bg-blue-500 text-white rounded-xl text-sm md:text-base lg:text-lg">
                2. CYBERSECURITY RESILIENCE IMPROVEMENT
              </div>
            </div>
          </div>
          <div class="order-2 lg:order-2 flex justify-center items-center mt-8 lg:mt-0">
            <img src="../assets/SIBERPATUH (1).png" alt="Siberjaga Services" class="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none lg:w-full h-auto">
          </div>
        </div>
      </div>
    </div>

    <div class="container py-12 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-8 md:gap-10 lg:gap-12 justify-center items-start mx-auto">
      <div>
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 mb-4 md:mb-6 lg:mb-8">
          1. REGULATORY COMPLIANCE
        </h1>
        <p class="text-base md:text-lg lg:text-xl pr-0 md:pr-4 lg:pr-16 xl:pr-32">
          We provide help to keep you get ready and stay compliance to existing and potentially published
          regulations in your industry.
          Example: Peraturan Bank Indonesia (PBI) and Surat Edaran Otoritas Jasa Keuangan (SEOJK), UU
          Perlindungan Data Pribadi (UU PDP).
        </p>
        <img src="../assets/line-siku-pendek.png" alt="" class="hidden lg:block w-[140px] h-auto absolute lg:-bottom-[900px] lg:-right-[10px]">
      </div>
      <div class="py-0 md:py-4 lg:py-12">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 mb-4 md:mb-6 lg:mb-8">
          2. AUDIT ASSISTANCE
        </h1>
        <p class="text-base md:text-lg lg:text-xl pr-0 md:pr-4 lg:pr-16 xl:pr-32">
          We provide help to keep you get ready and stay compliance to existing and potentially published
          regulations in your industry.
          Example: Peraturan Bank Indonesia (PBI) and Surat Edaran Otoritas Jasa Keuangan (SEOJK), UU
          Perlindungan Data Pribadi (UU PDP).
        </p>
      </div>
      <div class="py-0 md:py-4 lg:py-12 pl-0 md:pl-0 lg:pl-24">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 mb-4 md:mb-6 lg:mb-8">
          3. SECURITY GAP ANALYSIS
        </h1>
        <p class="text-base md:text-lg lg:text-xl pr-0 md:pr-4 lg:pr-16 xl:pr-32">
          Delivering the complete picture between the NOW and the TO BE. We will help you reach that
          desired place by accompanying you every step of the way.
          Example: Gap Assessment based on ISO/IEC 27001:2022 and CIS Controls.
        </p>
               <img src="../assets/siberpatuh (2).png" alt="" class="hidden lg:block w-[640px] h-auto absolute lg:-bottom-[1500px] lg:-left-[300px] opacity-80 z-10"></div>
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for modern browsers */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-y: auto;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* Global styles to hide scrollbars */
:global(html),
:global(body) {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-x: hidden; /* Ensure horizontal scroll is always hidden */
}
:global(html::-webkit-scrollbar),
:global(body::-webkit-scrollbar) {
  width: 0;
  display: none;  /* Chrome, Safari and Opera */
}
</style>