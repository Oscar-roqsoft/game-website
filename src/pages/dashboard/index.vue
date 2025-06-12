<template>
    <div class="bg-[#0D0D0D] text-white min-h-screen pt-[140px] pb-10 px-4 md:px-12">
      <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
  
        <!-- Sidebar with Tabs -->
        <aside class="md:w-[30%] space-y-6">
            <section ref="balanceRef" class="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg relative">
                <div class="flex items-center justify-between mb-4">
                    <!-- Avatar -->
                    <div class="flex items-center gap-3">
                    <img
                        src="/efootball1.jpg"
                        alt="User Avatar"
                        class="w-12 h-12 rounded-full object-cover border border-green-500"
                    />
                    <div>
                        <p class="font-semibold">Welcome back,</p>
                        <p class="text-green-400 font-bold text-lg">{{ username }}</p>
                    </div>
                    </div>

                    <!-- Toggle Button -->
                    <button @click="showBalance = !showBalance" class="text-gray-400 hover:text-white text-xl">
                      <!-- <i :class="showBalance ? 'fas fa-eye-slash' : 'fas fa-eye'"></i> -->
                      <svg class="transition-all ease-in duration-300" v-if="showBalance" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19m0-2q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6T6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17"/></svg>
                      <svg class="transition-all ease-in duration-300" v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="m16.1 13.3l-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.425-.2.863-.3T12 7q1.875 0 3.188 1.313T16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15l-1.45-1.4q.95-.725 1.688-1.587T20.8 11.5q-1.25-2.525-3.588-4.012T12 6q-.725 0-1.425.1T9.2 6.4L7.65 4.85q1.025-.425 2.1-.638T12 4q3.775 0 6.725 2.087T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m.5 6.15l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM5.55 8.4q-.725.65-1.325 1.425T3.2 11.5q1.25 2.525 3.588 4.013T12 17q.5 0 .975-.062t.975-.138l-.9-.95q-.275.075-.525.113T12 16q-1.875 0-3.188-1.312T7.5 11.5q0-.275.038-.525t.112-.525zm4.2 4.2"/></svg>
                    </button>
                </div>

                <!-- Balance Display -->
                <div class="mt-2">
                    <p class="text-gray-400 text-sm">Account Balance</p>
                    <p class="text-3xl font-bold text-green-400">
                    {{ showBalance ? `$${balance.toFixed(2)}` : '••••••' }}
                    </p>
                </div>
                </section>

  
          <section class="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg">
            <h2 class="text-2xl font-bold text-green-500 mb-4">🎟 Registered Events</h2>
            <ul class="space-y-3 text-sm text-gray-300">
              <li>FIFA Qualifier - June 18</li>
              <li>Valorant Showdown - July 1</li>
            </ul>
          </section>
  
          <section class="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg">
            <h2 class="text-2xl font-bold text-green-500 mb-4">🎮 My Matches</h2>
            <ul class="space-y-3 text-sm text-gray-300">
              <li>Next Match: COD Alpha - June 9</li>
              <li>Pending Match: FIFA Semis - June 14</li>
            </ul>
          </section>

          <section class="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg">
            <h2 class="text-3xl font-bold text-green-500 mb-6">🏆 Monthly Leaderboard</h2>
            <ul class="space-y-4">
              <li
                v-for="player in leaderboard"
                :key="player.id"
                class="flex items-center border-b border-gray-700 pb-2">
                <span class="w-8 text-xl font-bold">{{ player.rank }}</span>
                <div class="ml-4">
                  <p class="font-semibold">{{ player.name }}</p>
                  <p class="text-sm text-gray-400">{{ player.game }}</p>
                </div>
                <div class="ml-auto text-green-500 font-bold">
                  {{ player.points }} pts
                </div>
              </li>
            </ul>
          </section>
  
         
        </aside>
  
        <!-- Main Content Area -->
        <main class="md:w-2/3 space-y-8">
  
          <!-- Animated Image Carousel -->
          <section class="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg">
            <h2 class="text-3xl font-bold text-green-500 mb-6">🖼️ Game Carousel</h2>
            <div ref="carouselRef" class="relative overflow-hidden rounded-xl h-56">
              <div class="flex transition-transform duration-500 ease-out" :style="`transform: translateX(-${carouselIndex * 100}%)`">
                <div v-for="banner in banners" :key="banner.id" class="min-w-full">
                  <img :src="banner.image" alt="Game Banner" class="w-full h-56 object-cover rounded-xl" />
                </div>
              </div>
              <button @click="prevSlide" class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">◀</button>
              <button @click="nextSlide" class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">▶</button>
            </div>
          </section>
  
          <!-- Fixtures Section -->
          <section class="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg">
            <h2 class="text-3xl font-bold text-green-500 mb-6">📆 Upcoming Fixtures</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="fixture in fixtures" :key="fixture.id" class="bg-[#0D0D0D] p-4 rounded-lg">
                <h3 class="font-semibold text-xl">{{ fixture.title }}</h3>
                <p class="text-sm text-gray-400">{{ fixture.date }} at {{ fixture.time }}</p>
                <p class="text-sm">Type: {{ fixture.type }}</p>
                <p class="text-sm">Teams: {{ fixture.teams }}</p>
              </div>
            </div>
          </section>
  
          <!-- Match Results -->
          <section class="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg">
            <h2 class="text-3xl font-bold text-green-500 mb-6">🥇 Recent Results</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="result in results" :key="result.id" class="bg-[#0D0D0D] p-4 rounded-lg">
                <div class="flex justify-between items-center">
                  <div>
                    <h3 class="font-semibold text-xl">{{ result.title }}</h3>
                    <p class="text-sm text-gray-400">{{ result.date }}</p>
                  </div>
                  <span class="text-green-500 text-2xl font-bold">{{ result.score }}</span>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Tournament Info -->
          <section class="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg">
            <h2 class="text-3xl font-bold text-green-500 mb-6">📣 Tournament Info</h2>
            <div class="space-y-4 text-gray-200 text-base">
              <p>🎯 <strong>Registration:</strong> Open until the 15th of this month.</p>
              <p>📍 <strong>Locations:</strong> Online & In-person arenas in Lagos, Abuja, and PH.</p>
              <p>💰 <strong>Prize Pool:</strong> ₦1,000,000+ across all games!</p>
              <p>🎮 <strong>Games:</strong> COD, FIFA, PUBG, Valorant & more.</p>
            </div>
          </section>
  
        </main>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'

  const username = ref('GhostGamer')
    const balance = ref(1520.45)
    const showBalance = ref(true)
  
  const leaderboard = [
    { id: 1, rank: 1, name: 'GhostGamer', points: 980, game: 'COD' },
    { id: 2, rank: 2, name: 'ProFifa21', points: 890, game: 'FIFA' },
    { id: 3, rank: 3, name: 'SnipeQueen', points: 850, game: 'Valorant' },
    { id: 4, rank: 4, name: 'SharpShooter', points: 800, game: 'COD' },
    { id: 5, rank: 5, name: 'AceSniper', points: 770, game: 'PUBG' },
  ]
  
  const fixtures = [
    { id: 1, title: 'FIFA Quarter Finals', date: 'June 10', time: '5 PM', type: 'Football', teams: 'Team A vs Team B' },
    { id: 2, title: 'COD Elite Match', date: 'June 12', time: '8 PM', type: 'Shooting', teams: 'Squad Alpha vs Squad Beta' },
  ]
  
  const results = [
    { id: 1, title: 'Valorant Showdown', date: 'June 5', score: '13 - 9' },
    { id: 2, title: 'FIFA Match', date: 'June 3', score: '2 - 1' },
  ]
  
  const banners = [
    { id: 1, image: '/images/banner1.jpg' },
    { id: 2, image: '/images/banner2.jpg' },
    { id: 3, image: '/images/banner3.jpg' },
    { id: 4, image: '/images/banner4.jpg' },
    { id: 5, image: '/images/banner5.jpg' },
  ]
  
  const carouselIndex = ref(0)
  const carouselRef = ref(null)
  
  function nextSlide() {
    carouselIndex.value = (carouselIndex.value + 1) % banners.length
  }
  function prevSlide() {
    carouselIndex.value = (carouselIndex.value - 1 + banners.length) % banners.length
  }
  
  onMounted(() => {
    gsap.from("main section", { opacity: 0, y: 50, stagger: 0.3, duration: 0.8, ease: "power3.out" })
    gsap.from("aside section", { opacity: 0, x: -30, stagger: 0.2, duration: 1, ease: "power2.out" })
  })
  </script>
  