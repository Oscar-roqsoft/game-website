<template>
    <section class="bg-wh pt-12">
      <div class="container mx-auto px-4">
        <!-- <h2 class="text-2xl md:text-xl font-bold text-center text-gray-700 mb-2">
          Trusted by Leading Companies
        </h2> -->
  
        <div class="flex items-center justify-center gap-20">
            <!-- <div class="max-w-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            </div> -->
          <div
            v-for="(logo, index) in companyLogos"
            :key="index"
            class="flex items-center justify-center  hover:grayscale-0 transition-all duration-300"
          >
            <img
              :src="logo.src"
              :alt="logo.name"
              class="max-h-16 object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const companyLogos = [
    { name: 'Google', src: '/l.jpg' },
    { name: 'Airbnb', src: '/l2.jpg' },
    { name: 'Netflix', src: '/l.jpg' },
    { name: 'Microsoft', src: '/l2.jpg' },
    { name: 'Slack', src: '/l.jpg' },
    { name: 'Spotify', src: '/l2.jpg' },
    // Add more logos as needed
  ]
  </script>
  
  <style scoped>
  /* Optional: for subtle logo color fade effect on hover */
  img {
    transition: all 0.3s ease;
  }
  </style>
  