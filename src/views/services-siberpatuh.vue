<template>
  <div class="services font-bahnschrift hide-scrollbar bg-gradient-to-t from-[#D9E5F5] to-white min-h-screen">
    <!-- Hero Section -->
    <div class="container px-12 mx-auto">
      <div class="relative">
        <div class="col-md-12">
            <div>
                <h1 class="text-center font-bold py-28 text-8xl">SIBER<span class="text-green-500">PATUH</span></h1>
            </div>
            <div class="hidden lg:flex absolute -left-[300px] top-[13.8%] -translate-y-1/2 flex-col">
                <img src="../assets/line dot.png" alt="" class="w-[600px] h-auto">
            </div>
        </div>
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div class="order-1 lg:order-1">
                <p class="text-blue-400 text-xl md:text-2xl tracking-wider font-medium underline underline-offset-[15px] mb-4 text-start">
                    WHAT WE DO
                </p>
                <h1 class="text-start py-10 lg:py-20 text-4xl md:text-6xl lg:text-8xl">SIBER<span class="text-green-500">PATUH</span></h1>
                <P class="text-lg md:text-xl lg:text-2xl leading-relaxed"> Siberjaga focuses on defensive cybersecurity consulting 
                    services which involve comprehensive strategies and the 
                    adoption of frameworks to better protect your 
                    organization from unauthorized access, cyberattacks, 
                    and breaches. The ultimate goal is to provide your 
                    organization the capabilities to be cyber resilient in 
                    responding to potential security incident, ensuring the 
                    utmost protection of sensitive information.</P>

                <p class="text-blue-400 text-xl md:text-2xl py-8 lg:py-12 tracking-wider font-medium underline underline-offset-[15px] mb-4 text-start">
                    SERVICE
                </p>
                <div class="flex flex-col gap-4 justify-start items-start">
                    <div class="p-4 bg-blue-500 text-white rounded-xl text-sm md:text-base lg:text-lg" >
                        1. SECURITY HARDENING ASSESSMENT
                    </div>
                    <div class="p-4 bg-blue-500 text-white rounded-xl text-sm md:text-base lg:text-lg">
                        2. CYBERSECURITY RESILIENCE IMPROVEMENT
                    </div>
                </div>
            </div>
            <div class="order-2 lg:order-2 flex justify-center items-center">
                <img src="../assets/SIBERPATUH (1).png" alt="Siberjaga Services" class="w-full max-w-md md:max-w-lg lg:max-w-none lg:w-full h-auto">
            </div>
        </div>
      </div>
    </div>
    <div class="container py-32 px-12 pr-24 flex flex-col gap-12 justify-center items-center mx-auto">
            <div>
                <h1 class="text-4xl font-bold text-blue-500 mb-8">
                1. REGULATORY COMPLIANCE
            </h1>
            <p class="mr-4 md:mr-16 lg:mr-32 xl:mr-64">
                We provide help to keep you get ready and stay compliance to existing and potentially published 
                regulations in your industry.
                Example: Peraturan Bank Indonesia (PBI) and Surat Edaran Otoritas Jasa Keuangan (SEOJK), UU 
                Perlindungan Data Pribadi (UU PDP).
            </p>
            <img src="../assets/line-siku-pendek.png" alt="" class="w-[140px] h-auto absolute -bottom-[900px] -right-[10px]">
            </div>
            <div class="py-12">
                <h1 class="text-4xl font-bold text-blue-500 mb-8">
                    2. AUDIT ASSISTANCE
            </h1>
            <p class="mr-4 md:mr-16 lg:mr-32 xl:mr-64">
                We provide help to keep you get ready and stay compliance to existing and potentially published 
                regulations in your industry.
                Example: Peraturan Bank Indonesia (PBI) and Surat Edaran Otoritas Jasa Keuangan (SEOJK), UU 
                Perlindungan Data Pribadi (UU PDP).
            </p>
            </div>
            <div class="py-12 pl-24">
                <h1 class="text-4xl font-bold text-blue-500 mb-8">
                    3. SECURITY GAP ANALYSIS
            </h1>
            <p class="mr-4 md:mr-16 lg:mr-32 xl:mr-64">
                Delivering the complete picture between the NOW and the TO BE. We will help you reach that 
                desired place by accompanying you every step of the way.
                Example: Gap Assessment based on ISO/IEC 27001:2022 and CIS Controls.
            </p>
            <img src="../assets/siberpatuh (2).png" alt="" class="w-[640px] h-auto absolute -bottom-[1500px] -left-[300px] opacity-80">
            </div>
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
  overflow-x: hidden;
}
:global(html::-webkit-scrollbar),
:global(body::-webkit-scrollbar) {
  width: 0;
  display: none;  /* Chrome, Safari and Opera */
}
</style> 