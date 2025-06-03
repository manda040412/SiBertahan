<template>
    <div class="blog font-bahnschrift bg-gradient-to-b from-[#ffffff] via-[#ffffff] via-10% to-[#D7E6FF] hide-scrollbar">
      <div class="cover-image-container">
        <img src="../assets/IMG-2.jpg" alt="Career Cover" class="cover-image" />
        <div class="content-overlay">
            <div class="mb-4">
            <h1 class="text-6xl font-bold text-white drop-shadow-lg">
                Succees in <br>
                the Career
            </h1>
        </div>
        <div class="mb-6">
            <p class="text-white text-lg drop-shadow-md max-w-lg">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
                    diam nonummy nibh euismod tincidunt ut laoreet dolore 
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam
            </p>
        </div>
        <div>
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
      </div>

      <!-- Vertical Line Decorations -->
      <div class="h-32 relative z-50 -mt-16">
        <div class="container mx-auto px-12">
          <div class="flex gap-6">
            <!-- First vertical line -->
            <div class="relative h-32 w-4">
              <div class="absolute top-16 h-3/4 left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
              <div class="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
            </div>
            <!-- Second vertical line -->
            <div class="relative h-60 w-[-20px] hidden sm:block">
              <div class="absolute top-16 h-[120px] left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
              <div class="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[28px] h-[28px] bg-blue-500 rounded-full"></div>
            </div>
            <!-- Third vertical line -->
            <div class="relative h-32 w-4 hidden sm:block">
              <div class="absolute top-16 h-3/4 left-1/2 -translate-x-1/2 w-[6px] bg-blue-500"></div>
              <div class="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Join Our Team Section -->
      <div class="container px-12 py-12 mx-auto">
        
          <h1 class="text-center py-4 text-6xl">Join Our Team!</h1>
          <p class="text-center text-gray-600 text-xl mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
              magna aliquam erat volutpat</p>
              
          <div class="job-cards-container grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <!-- Marketing Advisor Card -->
              <div class="job-card bg-white rounded-2xl shadow-md p-6 flex flex-col">
                  <div class="job-type text-black-600 text-sm mb-2">Full-Time / Part-Time</div>
                  <h3 class="job-title text-blue-600 text-2xl font-medium mb-4">Marketing Advisor</h3>
                  <p class="job-description text-gray-600 flex-grow mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                  </p>
                  <button class="cek-btn bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium w-32">CEK NOW</button>
              </div>

              <!-- Supervisor Card -->
              <div class="job-card bg-white rounded-2xl shadow-md p-6 flex flex-col">
                  <div class="job-type text-black-600 text-sm mb-2">Full-Time</div>
                  <h3 class="job-title text-blue-600 text-2xl font-medium mb-4">Supervisor</h3>
                  <p class="job-description text-gray-600 flex-grow mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                  </p>
                  <button class="cek-btn bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium w-32">CEK NOW</button>
              </div>

              <!-- IT Card -->
              <div class="job-card bg-white rounded-2xl shadow-md p-6 flex flex-col">
                  <div class="job-type text-black-600 text-sm mb-2">Part-Time</div>
                  <h3 class="job-title text-blue-600 text-2xl font-medium mb-4">IT</h3>
                  <p class="job-description text-gray-600 flex-grow mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                  </p>
                  <button class="cek-btn bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium w-32">CEK NOW</button>
              </div>
              <div class="job-card bg-white rounded-2xl shadow-md p-6 flex flex-col">
                  <div class="job-type text-black-600 text-sm mb-2">Full-Time / Part-Time</div>
                  <h3 class="job-title text-blue-600 text-2xl font-medium mb-4">Marketing Advisor</h3>
                  <p class="job-description text-gray-600 flex-grow mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                  </p>
                  <button class="cek-btn bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium w-32">CEK NOW</button>
              </div>

              <!-- Supervisor Card -->
              <div class="job-card bg-white rounded-2xl shadow-md p-6 flex flex-col">
                  <div class="job-type text-black-600 text-sm mb-2">Full-Time</div>
                  <h3 class="job-title text-blue-600 text-2xl font-medium mb-4">Supervisor</h3>
                  <p class="job-description text-gray-600 flex-grow mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                  </p>
                  <button class="cek-btn bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium w-32">CEK NOW</button>
              </div>

              <!-- IT Card -->
              <div class="job-card bg-white rounded-2xl shadow-md p-6 flex flex-col">
                  <div class="job-type text-black-600 text-sm mb-2">Part-Time</div>
                  <h3 class="job-title text-blue-600 text-2xl font-medium mb-4">IT</h3>
                  <p class="job-description text-gray-600 flex-grow mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                  </p>
                  <button class="cek-btn bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium w-32">CEK NOW</button>
              </div>
          </div>
      </div>

      <!-- Contact Email Section -->
      <div class="py-28 relative overflow-hidden">
          <div class="container px-12 mx-auto">
              <div class="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center">
                  <!-- Left side - Email content -->
                  <div class="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-4 z-10 relative mb-10 2xl:mb-0 mx-auto md:mx-0">
                      <div>
                        <img src="../assets/email-logo-02-02.png" alt="Email" class="w-32 h-auto object-contain">
                      </div>
                      <div class="flex justify-end">
                          <h2 class="text-xl px-4 uppercase font-medium text-blue-600 underline underline-offset-8">SEND EMAIL :</h2>
                          <p class="text-xl text-gray-700">Recruitment@sibertahan.com</p>
                      </div>
                  </div>
                  
                  <!-- Decorative lines - hidden on very small devices, shown on small devices and up -->
                  <div class="absolute right-[-100px] top-[130px] -translate-y-1/2 hidden lg:flex flex-col gap-[20px] z-50">
                        <!-- First line with dot -->
                        <div class="relative flex items-center justify-end">
                            <!-- Circle dot (at the edge of line) -->
                            <div class="absolute right-[930px] w-[18px] h-[18px] bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                            <!-- Horizontal line -->
                            <div class="h-[6px] w-[950px] bg-blue-500"></div>
                        </div>
                        
                        <!-- Second line with dot (longer) -->
                        <div class="relative flex items-center justify-end">
                            <!-- Circle dot (at the edge of line) -->
                            <div class="absolute right-[1070px] w-[28px] h-[28px] bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                            <!-- Horizontal line -->
                            <div class="h-[6px] w-[1100px] bg-blue-500"></div>
                        </div>
                        
                        <!-- Third line with dot -->
                        <div class="relative flex items-center justify-end">
                            <!-- Circle dot (at the edge of line) -->
                            <div class="absolute right-[930px] w-[18px] h-[18px] bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                            <!-- Horizontal line -->
                            <div class="h-[6px] w-[950px] bg-blue-500"></div>
                        </div>
                    </div>
                    
                    <!-- Alternative decorative lines for medium screens -->
                    <div class="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex lg:hidden flex-col gap-[20px] z-0 overflow-hidden">
                        <!-- First line with dot -->
                        <div class="relative flex items-center justify-end">
                            <!-- Circle dot (at the edge of line) -->
                            <div class="absolute right-[95%] w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                            <!-- Horizontal line -->
                            <div class="h-[6px] w-[95%] bg-blue-500"></div>
                        </div>
                        
                        <!-- Second line with dot (longer) -->
                        <div class="relative flex items-center justify-end">
                            <!-- Circle dot (at the edge of line) -->
                            <div class="absolute right-[98%] w-[28px] h-[28px] bg-blue-500 rounded-full"></div>
                            <!-- Horizontal line -->
                            <div class="h-[6px] w-[98%] bg-blue-500"></div>
                        </div>
                        
                        <!-- Third line with dot -->
                        <div class="relative flex items-center justify-end">
                            <!-- Circle dot (at the edge of line) -->
                            <div class="absolute right-[95%] w-[18px] h-[18px] bg-blue-500 rounded-full"></div>
                            <!-- Horizontal line -->
                            <div class="h-[6px] w-[95%] bg-blue-500"></div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
      <div class="absolute bg-gray-500 opacity-5 w-[640px] h-[280px] bottom-[-1000px] right-0 z-0 rounded-2xl"></div>
      <!-- Core Values Section -->
      <div class=" px-12 py-12 mx-auto">
          <h1 class="text-center py-4 text-6xl">Core</h1>
          <p class="text-center text-gray-600 text-lg px-24 py-12 md:mx-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ut laoreet dolore magna aliquam erat 
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
            consequat. Duis autem vel eumolestie. vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim 
            qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
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
   
  .cover-image-container {
    width: 100vw;
    height: 70vh;
    overflow: hidden;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: 100vw;
  }
   
  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.8);
  }
  
  .content-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10%;
    z-index: 10;
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

  @media (max-width: 1765px) {
    .absolute.right-\[-100px\] {
      top: 240px !important;
    }
  }

  @media (min-width: 1766px) {
    .absolute.right-\[-100px\] {
      top: 150px !important;
    }
  }
  </style>