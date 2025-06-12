<template>
    <section class="p-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
            Why Join Our Platform?
        </h2>
        <p class="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
            Discover a vibrant community where your gaming skills earn real rewards..
        </p>
      </div>
  
      <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center mt-12">
        <!-- List Section -->
        <div>
          <h3 class="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
            Explore the Benefits of Joining
          </h3>
          <p class="mt-3 text-lg text-gray-300">
             We provide a unique competitive gaming experience backed by fairness, rewards, and a strong community. Whether you're a casual gamer or a pro, there's something here for you.
          </p>
  
          <div class="mt-9 space-y-6">
            <div
              v-for="(item, index) in items"
              :key="index"
              @click="selectedIndex = index"
              class="flex cursor-pointer hover:text-green-500 p-3 rounded-lg transition"
              :class="{ 'text-green-500': selectedIndex === index }"
            >
              <div class="flex-shrink-0">
                <!-- <div class="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 13l4 4L19 7" />
                  </svg>
                </div> -->
              </div>
              <div class="ml-4">
                <h4 class="text-2xl font-medium leading-6 dark:text-gray-900">{{ item.title }}</h4>
                <p class="mt-2 dark:text-gray-600"
                :class="{ 'text-green-600': selectedIndex === index }">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Image Section with Transition -->
        <div class="mt-10 lg:mt-0 relative h-[480px] w-[360px] mx-auto">
          <transition name="fade-scale" mode="out-in">
            <img
              :key="items[selectedIndex].image"
              :src="items[selectedIndex].image"
              alt="Selected"
              class="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg dark:bg-gray-500"
            />
          </transition>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedIndex = ref(0)
  
  const items = [
    {
      title: '🎮 Diverse Tournaments',
      description: 'Join competitions across popular games like FIFA, Fortnite, Dota 2, and more.',
      image: '/efootball1.jpg',
    },
    {
      title: '💰 Big Rewards',
      description: 'Win cash prizes, exclusive merchandise, and global ',
      image: '/fortnite1.jpg',
    },
    {
      title: '🔒 Fair Play System',
      description: 'Our anti-cheat system ensures a fair and competitive environment for all players',
      image: 'https://source.unsplash.com/360x480/?technology',
    },
  ]
  </script>
  
  <style scoped>
  .fade-scale-enter-active,
  .fade-scale-leave-active {
    transition: all 0.5s ease;
  }
  .fade-scale-enter-from {
    opacity: 0;
    transform: scale(0.95);
  }
  .fade-scale-enter-to {
    opacity: 1;
    transform: scale(1);
  }
  .fade-scale-leave-from {
    opacity: 1;
    transform: scale(1);
  }
  .fade-scale-leave-to {
    opacity: 0;
    transform: scale(1.05);
  }
  </style>
  