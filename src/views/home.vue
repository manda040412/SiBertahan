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
      <div class="absolute right-16 bottom-0 w-4 hidden md:flex justify-center" style="height: 800px;">
        <!-- Vertical line from bottom to top -->
        <div class="absolute bottom-1 top-[-242px] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
        <!-- Circle dot at the top -->
        <div class="absolute top-[-252px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
      </div>
      <!-- Small navigation dots at bottom right (visible in mobile) -->
      <div class="absolute bottom-10 right-10 flex flex-col gap-2">
        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>

    <!-- Recognition Section -->
    <section class="recognition bg-[#001428] py-20 relative overflow-hidden h-[70vh]">
      <!-- Background with gradient overlay -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-tl from-black to-blue-900/70 z-30 pointer-events-none"></div>
        <img src="../assets/background2.png" alt="" class="w-full h-full object-cover" />
      </div>

      <div class="absolute inset-x-0 top-[30%] bottom-0 z-0"> 
        <img src="../assets/mohammad-rahmani-Y5yxdx2a4PI-unsplash.jpg" 
             alt="Cyber Security Background" 
             class="w-full h-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-90"></div>
      </div>

      <div class="absolute top-8 left-1/2 -translate-x-1/2 container px-2 sm:px-4 md:px-12 w-[98%] sm:w-full sm:max-w-[95%] md:max-w-6xl z-40 overflow-x-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <!-- BSSN Card -->
          <div class="flex justify-center">
            <div class="badge p-3 sm:p-4 md:p-8 rounded-3xl flex flex-col items-center transition hover:shadow-lg border border-white/20 bg-gradient-to-b from-[#002045] to-[#001328] w-full max-w-[280px] sm:max-w-[320px] md:max-w-md">
              <p class="text-white text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-6">Whitelisted by</p>
              <img src="../assets/BSSN Logo.png" alt="BSSN" class="h-12 sm:h-16 md:h-20 lg:h-32 mb-2 sm:mb-3 md:mb-5" />
              <p class="text-white text-sm sm:text-base md:text-lg font-medium text-center">
                (BSSN) as Lembaga Konsultan
              </p>
              <a href="https://encr.pw/TWJ5e" class="text-blue-400 mt-2 sm:mt-3 md:mt-6 flex items-center text-xs sm:text-sm md:text-base hover:text-blue-300">
                https://encr.pw/TWJ5e
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <!-- ASPI Card -->
          <div class="flex justify-center">
            <div class="badge p-3 sm:p-4 md:p-8 rounded-3xl flex flex-col items-center transition hover:shadow-xl border border-white/20 bg-gradient-to-b from-[#002045] to-[#001328] w-full max-w-[280px] sm:max-w-[320px] md:max-w-md">
              <p class="text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-2 md:mb-4">Verified by</p>
              <div class="grayscale brightness-125">
                <img src="../assets/aspi-logo.png" alt="ASPI" class="h-12 sm:h-16 md:h-20 lg:h-32 mb-2 sm:mb-3 md:mb-5" />
              </div>
              <p class="text-white text-sm sm:text-base md:text-lg font-medium text-center">
                ASPI as Penyedia Jasa Audit
              </p>
              <a href="https://encr.pw/Ujmrq" class="text-blue-400 mt-2 sm:mt-3 md:mt-6 flex items-center text-xs sm:text-sm md:text-base hover:text-blue-300">
                https://encr.pw/Ujmrq
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about bg-gradient-to-b from-[#000203] via-[#000203] via-20% to-[#06305C] relative overflow-hidden">
      <!-- Background Overlay Image -->
      <div class="absolute bottom-0 left-0 right-0 w-full">
        <img src="../assets/background-dot.png" alt="" class="w-full h-full object-cover opacity-50" />
      </div>
      
      <!-- Rectangle background untuk ABOUT US -->
      <div class="bg-[#00204a] opacity-80 absolute top-[10%] md:top-[160px] left-0 w-full md:w-[80%] lg:w-[1600px] h-auto md:h-[200px] flex flex-col p-4 relative z-10 rounded-r-lg">
      </div>

      <div class="absolute top-[20px] md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 z-20 flex flex-col w-full sm:w-[90%] md:w-[80%] lg:w-[880px] px-4 sm:px-0">
        <!-- Subtitle -->
        <p class="text-blue-400 text-2xl tracking-wider font-medium underline underline-offset-[15px] mb-4">ABOUT US</p>
        <!-- Main Title with lines -->
        <div class="relative">
          <!-- Lines container -->
          <div class="absolute -left-[900px] top-[50%] -translate-y-1/2 flex flex-col gap-[20px]">
            <!-- First line with dot -->
            <div class="relative w-[720px] flex items-center">
              <!-- Horizontal line -->
              <div class="h-[6px] w-full bg-blue-500"></div>
              <!-- Circle dot -->
              <div class="absolute right-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-x-1/2"></div>
            </div>

            <!-- Second line with dot -->
            <div class="relative w-[820px] flex items-center">
              <!-- Horizontal line -->
              <div class="h-[6px] w-full bg-blue-500"></div>
              <!-- Circle dot -->
              <div class="absolute right-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-x-1/2"></div>
            </div>

            <!-- Third line with dot -->
            <div class="relative w-[720px] flex items-center">
              <!-- Horizontal line -->
              <div class="h-[6px] w-full bg-blue-500"></div>
              <!-- Circle dot -->
              <div class="absolute right-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-x-1/2"></div>
            </div>
          </div>
          
          <h2 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-full md:max-w-[880px] mx-auto">
            Establish and Maintain<br class="hidden sm:block">Complete Digital Security
          </h2>
        </div>
      </div>

      
      <div class="container max-w-[1600px] mx-auto px-6 relative z-10 pt-12 md:pt-0 pb-24">
        <div class="grid md:grid-cols-2 gap-12 items-center w-full">
          <!-- Left side with lock image (adjusted) -->
          <div class="relative flex items-center justify-center w-full h-[600px]">
            <!-- Radial gradient background -->
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_center,#0041B6_0%,#000000_70%)] opacity-50 blur-3xl"></div>
            <div class="relative z-10 w-full h-full [mask-image:radial-gradient(ellipse_at_40%_center,black_30%,transparent_70%)] [mask-image:radial-gradient(closest-side_at_40%_center,transparent_0%,black_30%,black_60%,transparent_100%)]">
              <img 
                src="../assets/Website_Sibertahan-Homew Page-02.png" 
                alt="Security Lock" 
                class="w-full h-full object-contain scale-125 "
              />
            </div>
          </div>
          <!-- Right side with text -->
          <div class="md:ml-8 w-full">
            <p class="text-gray-300 mb-8 leading-relaxed text-2xl pt-20">
              We are PT Humanis Siber Indonesia "<span class="text-white font-semibold">SIBERTAHAN</span>",
              a cybersecurity consulting firm that specializes in
              providing comprehensive security solutions. Our team
              of experts is equipped to handle all aspects of security,
              from offensive tactics to defensive strategies and
              governance protocols. With our in-depth knowledge
              and cutting-edge technology, we offer unparalleled
              protection for businesses of all sizes. Trust us to
              safeguard your valuable data, mitigate risks, and
              ensure your peace of mind.
            </p>

            <a href="#" class="text-blue-400 hover:text-blue-300 inline-flex items-center group">
              Read more 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <section class="solutions py-20">
        <div class="container mx-auto px-12">
          <div class="relative">
          <!-- Lines container -->
            <div>
              <p class="text-blue-400 text-2xl tracking-wider font-medium underline underline-offset-[15px] lg:pl-20 lg:text-start mb-12 text-center md:text-center md:pl-0 md:mx-64">
                OUR SERVICES</p>
                <h2 class="text-7xl pb-24 text-white leading-tight max-w-[880px] text-center mx-auto">
            Cyber Security Solutions
          </h2>
              <!-- Decorative lines on the right side -->
              <div class="absolute right-[-600px] top-[-30%] lg:top-[-10%] 2xl:top-[40%] -translate-y-1/2 hidden md:flex flex-col gap-[20px] z-0">
                <!-- First line with dot -->
                <div class="relative flex items-center justify-end">
                  <!-- Circle dot (at the edge of line) -->
                  <div class="absolute right-[730px] w-[18px] h-[18px] bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                  <!-- Horizontal line -->
                  <div class="h-[6px] w-[750px] bg-blue-500"></div>
                </div>
                
                <!-- Second line with dot (longer) -->
                <div class="relative flex items-center justify-end">
                  <!-- Circle dot (at the edge of line) -->
                  <div class="absolute right-[780px] w-[28px] h-[28px] bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                  <!-- Horizontal line -->
                  <div class="h-[6px] w-[800px] bg-blue-500"></div>
                </div>
                
                <!-- Third line with dot -->
                <div class="relative flex items-center justify-end">
                  <!-- Circle dot (at the edge of line) -->
                  <div class="absolute right-[730px] w-[18px] h-[18px] bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                  <!-- Horizontal line -->
                  <div class="h-[6px] w-[750px] bg-blue-500"></div>
                </div>
              </div>
              
            </div>
        </div>
          
          <div class="flex flex-col gap-8">
            <!-- Siberserang -->
            <div class="solution-card bg-[#06305C]/80 p-8 rounded-xl backdrop-blur-sm border-2 border-white/20 hover:border-blue-500/80 transition-all duration-300 shadow-[0_0_50px_0_rgba(0,0,0,0.5)]">
              <div class="flex flex-col md:flex-row items-center justify-center gap-8">
                <div class="flex-shrink-0 w-[300px] h-[300px] flex items-center justify-center relative solution-image">
                  <div class="relative z-10 w-full h-full">
                    <img src="../assets/solutions logo (1).png" alt="Siberserang" class="w-full h-full object-contain" />
                  </div>
                </div>
                <div class="flex-grow">
                  <h3 class="text-4xl md:text-5xl font-bold mb-4 text-white underline decoration-2 underline-offset-[30px] text-center md:text-left">SIBER<span class="text-red-500">SERANG</span></h3>
                  <p class="text-gray-300 pt-8 mb-6 leading-relaxed">
                    Siberserang is our suite of offensive cybersecurity services. It encompasses proactive and controlled simulated attack on computer systems, networks, and applications. Our ethical penetration testers conduct these assessments to identify vulnerabilities and weaknesses, providing valuable insights for your organization to fortify defenses, safeguard data, and mitigate potential real-world cyber threats.
                  </p>
                  <a href="#" class="text-blue-400 hover:text-blue-300 inline-flex items-center group">
                    Read more 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Siberpatuh -->
            <div class="solution-card bg-[#06305C]/80 p-8 rounded-xl backdrop-blur-sm border-2 border-white/20 hover:border-blue-500/80 transition-all duration-300 shadow-[0_0_50px_0_rgba(0,0,0,0.5)]">
              <div class="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
                <div class="flex-shrink-0 w-[300px] h-[300px] flex items-center justify-center relative solution-image">
                  <div class="relative z-10 w-full h-full">
                    <img src="../assets/solutions logo (2).png" alt="Siberpatuh" class="w-full h-full object-contain" />
                  </div>
                </div>
                <div class="flex-grow">
                  <h3 class="text-4xl md:text-5xl font-bold mb-4 text-white underline decoration-2 underline-offset-[30px] text-center md:text-left">SIBER<span class="text-green-500">PATUH</span></h3>
                  <p class="text-gray-300 pt-8 mb-6 leading-relaxed">
                    Siberpatuh consulting services will help your organization in adhering to industry regulations, legal requirements, and internal policies that ensure the protection of your critical assets. We provide comprehensive security assessments and emphasize on proper governance by Top Management with a top-down approach to reach the highest cybersecurity governance posture across the board.
                  </p>
                  <a href="#" class="text-blue-400 hover:text-blue-300 inline-flex items-center group">
                    Read more 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Siberjaga -->
            <div class="solution-card bg-[#06305C]/80 p-8 rounded-xl backdrop-blur-sm border-2 border-white/20 hover:border-blue-500/80 transition-all duration-300 shadow-[0_0_50px_0_rgba(0,0,0,0.5)]">
              <div class="flex flex-col md:flex-row items-center justify-center gap-8">
                <div class="flex-shrink-0 w-[300px] h-[300px] flex items-center justify-center relative solution-image">
                  <div class="relative z-10 w-full h-full">
                    <img src="../assets/solutions logo (3).png" alt="Siberjaga" class="w-full h-full object-contain" />
                  </div>
                </div>
                <div class="flex-grow">
                  <h3 class="text-4xl md:text-5xl font-bold mb-4 text-white underline decoration-2 underline-offset-[30px] text-center md:text-left">SIBER<span class="text-blue-500">JAGA</span></h3>
                  <p class="text-gray-300 pt-8 mb-6 leading-relaxed">
                    Siberjaga focuses on defensive cybersecurity consulting services which involve comprehensive strategies and the adoption of frameworks to better protect your organization from all authorized access, cyber attacks, and breaches. The ultimate goal is to improve your organization's capabilities to deter, detect and respond to threats and incidents while maintaining business continuity and operational resilience.
                  </p>
                  <a href="#" class="text-blue-400 hover:text-blue-300 inline-flex items-center group">
                    Read more 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </section>

    <!-- Certified Experts -->
    <section class="experts bg-gradient-to-tr from-[#D7E6FF] from-0% to-[#F4F7FF] to-40% text-[#00101f] py-20 relative">
      <div class="container px-12 max-w-[1600px] mx-auto">
        <div class="flex justify-end">
          <p>
            <span class="opacity-50">Safeguard your valuable data</span>
            <span class="opacity-100 font-bold"> and ensure your peace of mind</span>
          </p>
        </div>
        <div class="flex flex-col w-full my-8">
          <div class="w-1/2 h-[3px] bg-gray-600 opacity-30"></div>
          <div class="w-full h-[1px] bg-gray-600 opacity-60"></div>
        </div>

        <div class="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div class="relative">
                        <p class=" text-blue-400 text-2xl tracking-wider font-medium underline underline-offset-[15px] mb-4 text-start">
                          WHO WE ARE</p>
            <h2 class="text-6xl py-12">
              Certified Cyber Security Experts
            </h2>
            <p class="text-gray-600 pl-10 text-2xl mb-6">
              Our skilled professionals are dedicated to safeguarding 
              your digital assets with cutting-edge strategies and 
              unwavering vigilance
            </p>
            <div class="pl-10">
              <a href="#" class="text-blue-500 py-3 pr-4 rounded-full text-2xl font-medium transition inline-flex items-center gap-2">
                Read more
                <div class="w-8 h-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div>
            <img src="../assets/shield.png" alt="Security Shield" class="max-w-full" />
          </div>
        </div>
        <div class="container px-12 mx-auto">
          <div class="absolute -left-[750px] top-[870px] hidden lg:flex flex-col gap-[20px]">
                  <!-- First line with dot -->
                  <div class="relative w-[1220px] flex items-center">
                    <!-- Horizontal line -->
                    <div class="h-[6px] w-full bg-blue-500"></div>
                    <!-- Circle dot -->
                    <div class="absolute right-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-x-1/2"></div>
                  </div>

                  <!-- Second line with dot -->
                  <div class="relative w-[1260px] flex items-center">
                    <!-- Horizontal line -->
                    <div class="h-[6px] w-full bg-blue-500"></div>
                    <!-- Circle dot -->
                    <div class="absolute right-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-x-1/2"></div>
                  </div>

                  <!-- Third line with dot -->
                  <div class="relative w-[1220px] flex items-center">
                    <!-- Horizontal line -->
                    <div class="h-[6px] w-full bg-blue-500"></div>
                    <!-- Circle dot -->
                    <div class="absolute right-0 w-[18px] h-[18px] bg-blue-500 rounded-full transform translate-x-1/2"></div>
                  </div>
                </div>
        </div>
        <div class="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <!-- Image section (now on the left) -->
          <div>
                <img src="../assets/cloud.png" alt="Security Shield" class="max-w-full" />
          </div>
            
            <!-- Text content section (now on the right) -->
            <div class="relative">
              <p class="text-blue-400 text-2xl tracking-wider font-medium underline underline-offset-[15px] mb-4 text-start">
                    WHAT WE PROVIDE
                </p>
                <h2 class="text-6xl py-12">
                  Deliver Cyber
                  Security Intelligence                </h2>
                <!-- Grey square background for the paragraph -->
                <div class="absolute bg-gray-500 opacity-5 w-[1220px] h-[300px] top-[155px] left-10"></div>
                <p class="text-gray-600 pl-10 text-2xl mb-6 relative z-10">
                  From proactive threat hunting to robust defense 
                  strategies, we fortify your digital landscape with expert 
                  precision
                </p>
                  <div class="pt-10">
                      <div class="flex flex-col sm:flex-row justify-start items-center gap-8 sm:gap-16">
                          <!-- Card 1 Container -->
                          <div class="relative flex flex-col items-center sm:mb-0">
                              <div class="bg-gradient-to-br from-[#06305C] from-30% to-[#000203] p-3 rounded-xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center w-[160px] h-[100px]">
                                  <div class="w-[60px] h-[60px]">
                                      <img src="../assets/cloud-who.png" alt="Cloud Security" class="w-full h-full object-contain" />
                                  </div>
                              </div>
                              
                              <!-- Lines for Card 1 - hidden on small screens -->
                              <div class="absolute top-[100px] left-[90px] h-[100px] w-4 hidden sm:flex justify-center">
                                  <div class="absolute top-0 bottom-[60%] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                                  <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                              </div>
                              <div class="absolute top-[100px] left-1/2 -translate-x-1/2 h-[200px] w-4 hidden sm:flex justify-center">
                                  <div class="absolute top-0 bottom-[60%] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                                  <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                              </div>
                              <div class="absolute top-[100px] right-[90px] h-[100px] w-4 hidden sm:flex justify-center">
                                  <div class="absolute top-0 bottom-[60%] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                                  <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                              </div>
                          </div>

                          <!-- Card 2 Container -->
                          <div class="relative flex flex-col items-center">
                              <div class="bg-gradient-to-br from-[#06305C] from-30% to-[#000203] p-3 rounded-xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center w-[160px] h-[100px]">
                                  <div class="w-[60px] h-[60px]">
                                      <img src="../assets/lock-who.png" alt="Data Protection" class="w-full h-full object-contain" />
                                  </div>
                              </div>
                              
                              <!-- Lines for Card 2 -->
                              <div class="absolute top-[100px] left-1/2 -translate-x-1/2 ml-[-20px] h-[100px] w-4 hidden sm:flex justify-center">
                                  <div class="absolute top-0 bottom-[60%] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                                  <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                              </div>
                              <div class="absolute top-[100px] left-1/2 -translate-x-1/2 h-[200px] w-4 hidden sm:flex justify-center">
                                  <div class="absolute top-0 bottom-[40%] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                                  <div class="absolute top-[60%] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                              </div>
                              <div class="absolute top-[100px] left-1/2 -translate-x-1/2 ml-[20px] h-[100px] w-4 hidden sm:flex justify-center">
                                  <div class="absolute top-0 bottom-[60%] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                                  <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                              </div>
                          </div>

                          <!-- Card 3 Container -->
                          <div class="relative flex flex-col items-center">
                              <div class="bg-gradient-to-br from-[#06305C] from-30% to-[#000203] p-3 rounded-xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center w-[160px] h-[100px]">
                                  <div class="w-[60px] h-[60px]">
                                      <img src="../assets/fire-who.png" alt="Threat Prevention" class="w-full h-full object-contain" />
                                  </div>
                              </div>
                              
                              <!-- Lines for Card 3 -->
                              <div class="absolute top-[100px] left-[90px] h-[100px] w-4 hidden sm:flex justify-center">
                                  <div class="absolute top-0 bottom-[60%] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                                  <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                              </div>
                              <div class="absolute top-[100px] left-1/2 -translate-x-1/2 h-[200px] w-4 hidden sm:flex justify-center">
                                  <div class="absolute top-0 bottom-[60%] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                                  <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                              </div>
                              <div class="absolute top-[100px] right-[90px] h-[100px] w-4 hidden sm:flex justify-center">
                                  <div class="absolute top-0 bottom-[60%] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
                                  <div class="absolute top-[40%] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="py-20">
                <div class="container mx-auto max-w-7xl px-6">
                            <div class="text-center mb-12 relative">
          <p class="pl-10 pb-2 text-left">
            See our services and contact
          </p>
                      <!-- Grey square background for the Contact us text -->
        <div class="absolute bg-gray-500 opacity-5 w-[1420px] h-32 top-18 right-[-720px]"></div>
        <h2 class="text-[80px] md:text-[160px] lg:text-[240px] leading-none text-[#00101f] relative z-10">
          Contact <span class="text-blue-500">us.</span>
        </h2>
                  <div class="flex justify-start pl-10">
                    <a href="#" class="bg-[#1D1D1D] hover:bg-blue-700 text-white py-3 px-6 pr-4 rounded-full text-sm font-medium transition inline-flex items-center gap-3">
                      WORK WITH US
                      <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="BLACK">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            <div class="container mx-auto max-w-6xl">
              <div class="container mx-auto max-w-6xl">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="text-left">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p class="text-gray-600">+62 21 29492273</p>
                </div>
                    <div class="text-left">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p class="text-gray-600">info@sibertahan.com</p>
                </div>
                    <div class="text-left">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                      <p class="text-gray-600"> District 8, Treasury Tower Lt. 6 Unit F, Jl. Jend. Sudirman Kav. 52-53,
                            SCBD Lot 28 RT. 005 RW. 003, Senayan, Kebayoran Baru,
                            Jakarta Selatan 12190
                      </p>
                  </div>
                </div>
              </div>
              
          </div>
        </div>
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