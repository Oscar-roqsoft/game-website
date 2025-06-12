<template>
    <div class="bg-gray-900 text-white min-h-screen ">
   
  
    <!-- Hero Section -->
        <section class="relative h-[100vh] flex flex-col items-center justify-center z-10 overflow-hidden">
        <!-- Background Image or Video -->
        <img class="absolute top-0 left-0 w-full h-full object-cover z-0" src="/FIFA.gif" alt="eFootball Game" />

        <!-- Dark Gradient Overlay with darker edges -->
        <div class="absolute inset-0 z-10 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90 rounded-xl shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>

        <!-- Hero Content -->
        <div class="relative z-20 text-center text-white px-6 max-w-[1200px] pt-[100px]">
            <h1 class="text-5xl md:text-[4.5rem] font-bold leading-tight hero-title">
            Join Our Next <br>  Gaming Battle
            </h1>
            <button class="mt-8 bg-green-500 hover:bg-green-600 px-6 py-3 text-lg font-semibold rounded hero-button">
            Browse Tournaments
            </button>
        </div>
        
        <CardRotate class="w-full h-full z-20" />

        </section>


        <!-- Sponsor Marquee -->
    <!-- <section class="py-6 bg-gray-950 overflow-hidden">
    <div class="whitespace-nowrap animate-marquee flex gap-10 items-center px-6">
        <img src="/fortnite1.jpg" alt="sponsor 1" class="h-12 w-auto" />
        <img src="/fortnite1.jpg" alt="sponsor 2" class="h-12 w-auto" />
        <img src="/fortnite1.jpg" alt="sponsor 3" class="h-12 w-auto" />
        <img src="/fortnite1.jpg" alt="sponsor 4" class="h-12 w-auto" />
        <img src="/fortnite1.jpg" alt="sponsor 5" class="h-12 w-auto" />
    </div>
    </section> -->

    <HowItWorks/>
    
    <!-- Welcome & Animated Cards -->
    <section class="py-20 px-6 text-white">
    <div class="max-w-[1200px] mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12 ">You are most welcomed <br> in the gaming world</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="p-6 bg-gray-900 rounded-xl shadow-lg animate-slide-in-left transition-all duration-1000 hover:scale-105">
            <img src="/fortnite1.jpg" alt="Livestreaming" class="w-full h-40 object-cover rounded mb-4" />
            <h3 class="text-xl font-semibold mb-2">🎥 Livestreaming</h3>
            <p>Watch live gaming tournaments and events streamed in real-time.</p>
        </div>
        <div class="p-6 bg-gray-900 rounded-xl shadow-lg animate-slide-in-top transition-all duration-1000 hover:scale-105">
            <img src="/fortnite1.jpg" alt="Games News" class="w-full h-40 object-cover rounded mb-4" />
            <h3 class="text-xl font-semibold mb-2">📰 Games News</h3>
            <p>Stay updated with the latest news from the global gaming scene.</p>
        </div>
        <div class="p-6 bg-gray-900 rounded-xl shadow-lg animate-slide-in-right transition-all duration-1000 hover:scale-105">
            <img src="/fortnite1.jpg" alt="Tournaments" class="w-full h-40 object-cover rounded mb-4" />
            <h3 class="text-xl font-semibold mb-2">🏆 Game Tournaments</h3>
            <p>Participate in thrilling tournaments and compete for exciting prizes.</p>
        </div>
        </div>
    </div>
    </section>

    <div class="bg-gray-800">

        <div class="max-w-[1200px] mx-auto  py-10 rounded-lg">
            <Features  />
        </div>
    </div>


    <div class="bg-gray-900 mt-14">
        <div class="max-w-[1200px] mx-auto ">
            <Why/>
        </div>
    </div>



    <section class="bg-gray-800 text-white py-16 px-6 sm:px-12 rounded-lg">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-bold">
        Ready to Compete and Win Big?
      </h2>
      <p class="mt-4 text-lg sm:text-xl">
        Sign up now to join thousands of gamers in exciting tournaments <br> and start your journey to victory!
      </p>

      <div class="mt-8 flex justify-center gap-4 flex-wrap">
        <button
          class="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 hover:text-black transition"
        >
          Join Now
        </button>
        <button
          class="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-green-600 transition"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>




       <!-- Features -->
        <!-- <section class="py-16 px-6 bg-black-900">
            <div class="max-w-[1200px] mx-auto">

                <h2 class="text-3xl font-bold text-center text-green-400 mb-12">Why Join Our Platform?</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <div class="bg-gray-900 p-6 rounded-md h-[200px] flex flex-col justify-center items-center">
                            <h3 class="text-xl font-semibold mb-2">🎮 Diverse Tournaments</h3>
                            <p>Join competitions across popular games like FIFA, Fortnite, Dota 2, and more.</p>
                        </div>
                        <div class="bg-gray-900 p-6 rounded-md h-[200px] flex flex-col justify-center items-center">
                        <h3 class="text-xl font-semibold mb-2">💰 Big Rewards</h3>
                        <p>Win cash prizes, exclusive merchandise, and global recognition.</p>
                        </div>
                        <div class="bg-gray-900 p-6 rounded-md h-[200px] flex flex-col justify-center items-center">
                        <h3 class="text-xl font-semibold mb-2">🔒 Fair Play System</h3>
                        <p>Our anti-cheat system ensures a fair and competitive environment for all players.</p>
                        </div>
                    </div>
            </div>
        </section> -->
  
      <!-- Upcoming Tournaments -->
      <section class="px-6 py-[100px]">
        <div class="max-w-[1200px] mx-auto">

            <h2 class="text-4xl font-semibold  text-white mb-[54px]">Upcoming Tournaments</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TournamentCard v-for="game in upcoming" :key="game.title" :game="game" />
            </div>
        </div>
      </section>
  
      <!-- Top Games -->
      <!-- <section class=" py-12">

        <div class="max-w-[1200px] mx-auto">
            <h2 class="text-2xl font-semibold mb-6">Top Games</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div v-for="game in topGames" :key="game.name" class=" rounded  text-center font-bold text-lg">
                <CardNumber />
              </div>

            </div>

        </div>
    </section> -->
    
    
      <!-- How It Works -->
      <!-- <section class="px-6 py-12 max-w-[1200px] mx-auto">
        <h2 class="text-2xl font-semibold mb-6 text-green-400">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div class="flex items-center gap-6">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="50px" height="50px"><path fill="#85cbf8" d="M5 7H59V57H5z"/><rect width="54" height="11" x="5" y="7" fill="#ace3ff" rx="3" ry="3"/><path fill="#6fc6f0" d="M58,57H6a1,1,0,0,1-1-1H5a4,4,0,0,1,4-4H55a4,4,0,0,1,4,4h0A1,1,0,0,1,58,57Z"/><path fill="#ffeb9b" d="M30 15A14 14 0 1 0 30 43A14 14 0 1 0 30 15Z"/><path fill="#f6d397" d="M38.08,37.08,21.92,20.92a2.32,2.32,0,0,0-3.57.31A14,14,0,0,0,37.77,40.65,2.32,2.32,0,0,0,38.08,37.08Z"/><path fill="#bbdef9" d="M30 19A10 10 0 1 0 30 39A10 10 0 1 0 30 19Z"/><path fill="#d2edff" d="M30 23A6 6 0 1 0 30 35A6 6 0 1 0 30 23Z"/><path fill="#f3f3f3" d="M26.78 23.560000000000002A2.22 2.22 0 1 0 26.78 28 2.22 2.22 0 1 0 26.78 23.560000000000002zM33.5 32.67A.83.83 0 1 0 33.5 34.33.83.83 0 1 0 33.5 32.67z"/><path fill="#cda1a7" d="M40.18 37.07H45.78V46.97H40.18z" transform="rotate(-45 42.978 42.028)"/><path fill="#8d6c9f" d="M57,6H7A3,3,0,0,0,4,9V55a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V9A3,3,0,0,0,57,6Zm1,49a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9A1,1,0,0,1,7,8H57a1,1,0,0,1,1,1Z"/><path fill="#8d6c9f" d="M14 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 14 50zM9 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 9 50zM29 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 29 50zM34 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 34 50zM39 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 39 50zM44 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 44 50zM49 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 49 50zM54 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 54 50zM19 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 19 50zM24 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 24 50zM47.88 41.29l-4.59-4.59c-.09-.09-.26-.31-.25-.34a15.07 15.07 0 1 0-5.46 5.55s.22.12.3.2l4.59 4.59a3.83 3.83 0 1 0 5.41-5.41zM17 29A13 13 0 1 1 30 42 13 13 0 0 1 17 29zM46.46 45.29a1.83 1.83 0 0 1-2.59 0l-4.56-4.56a15.11 15.11 0 0 0 2.56-2.61l4.58 4.59a1.83 1.83 0 0 1 0 2.59z"/><path fill="#8d6c9f" d="M19.17,28.91A10.91,10.91,0,1,0,30.09,18,10.93,10.93,0,0,0,19.17,28.91Zm2,0a8.91,8.91,0,1,1,8.91,8.91A8.92,8.92,0,0,1,21.17,28.91Z"/><path fill="#8d6c9f" d="M30.09,21.83a7.08,7.08,0,0,1,6.52,4.31,1,1,0,1,1-1.84.79,5.08,5.08,0,0,0-4.68-3.09,1,1,0,0,1,0-2Z"/></svg>
            <div>
                <p class="text-lg font-semibold">📂 Browse Tournaments</p>
                <p>Find a tournament you're interested in</p>
            </div>
          </div>
          <div class="flex items-center gap-6">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="50px" height="50px"><path fill="#85cbf8" d="M5 7H59V57H5z"/><rect width="54" height="11" x="5" y="7" fill="#ace3ff" rx="3" ry="3"/><path fill="#6fc6f0" d="M58,57H6a1,1,0,0,1-1-1H5a4,4,0,0,1,4-4H55a4,4,0,0,1,4,4h0A1,1,0,0,1,58,57Z"/><path fill="#ffeb9b" d="M30 15A14 14 0 1 0 30 43A14 14 0 1 0 30 15Z"/><path fill="#f6d397" d="M38.08,37.08,21.92,20.92a2.32,2.32,0,0,0-3.57.31A14,14,0,0,0,37.77,40.65,2.32,2.32,0,0,0,38.08,37.08Z"/><path fill="#bbdef9" d="M30 19A10 10 0 1 0 30 39A10 10 0 1 0 30 19Z"/><path fill="#d2edff" d="M30 23A6 6 0 1 0 30 35A6 6 0 1 0 30 23Z"/><path fill="#f3f3f3" d="M26.78 23.560000000000002A2.22 2.22 0 1 0 26.78 28 2.22 2.22 0 1 0 26.78 23.560000000000002zM33.5 32.67A.83.83 0 1 0 33.5 34.33.83.83 0 1 0 33.5 32.67z"/><path fill="#cda1a7" d="M40.18 37.07H45.78V46.97H40.18z" transform="rotate(-45 42.978 42.028)"/><path fill="#8d6c9f" d="M57,6H7A3,3,0,0,0,4,9V55a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V9A3,3,0,0,0,57,6Zm1,49a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9A1,1,0,0,1,7,8H57a1,1,0,0,1,1,1Z"/><path fill="#8d6c9f" d="M14 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 14 50zM9 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 9 50zM29 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 29 50zM34 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 34 50zM39 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 39 50zM44 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 44 50zM49 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 49 50zM54 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 54 50zM19 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 19 50zM24 50a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V51A1 1 0 0 0 24 50zM47.88 41.29l-4.59-4.59c-.09-.09-.26-.31-.25-.34a15.07 15.07 0 1 0-5.46 5.55s.22.12.3.2l4.59 4.59a3.83 3.83 0 1 0 5.41-5.41zM17 29A13 13 0 1 1 30 42 13 13 0 0 1 17 29zM46.46 45.29a1.83 1.83 0 0 1-2.59 0l-4.56-4.56a15.11 15.11 0 0 0 2.56-2.61l4.58 4.59a1.83 1.83 0 0 1 0 2.59z"/><path fill="#8d6c9f" d="M19.17,28.91A10.91,10.91,0,1,0,30.09,18,10.93,10.93,0,0,0,19.17,28.91Zm2,0a8.91,8.91,0,1,1,8.91,8.91A8.92,8.92,0,0,1,21.17,28.91Z"/><path fill="#8d6c9f" d="M30.09,21.83a7.08,7.08,0,0,1,6.52,4.31,1,1,0,1,1-1.84.79,5.08,5.08,0,0,0-4.68-3.09,1,1,0,0,1,0-2Z"/></svg>

            <div>
                <p class="text-lg font-semibold">📅 Book Your Spot</p>
                <p>Get randomly selected after booking</p>
            </div>
          </div>
        </div>
      </section> -->
  
      <!-- Tournament Winners -->
      <section class="px-6 py-12 bg-gray-900">
        <div class="max-w-[1200px] mx-auto flex  flex-col items-center">

            <h2 class="text-2xl font-semibold mb-6">Latest Tournament Winners</h2>
            <div class="flex flex-wrap gap-6">
              <div v-for="winner in winners" :key="winner.name" class="text-center">
                <img :src="winner.avatar" alt="" class="rounded-full w-24 h-24 mx-auto mb-2" />
                <p class="font-bold">{{ winner.name }}</p>
                <p class="text-sm">{{ winner.status }}</p>
              </div>
            </div>
        </div>
      </section>

          <!-- Testimonials -->
        <section class="py-16 px-6">
            <div class="max-w-[1200px] mx-auto">

                <h2 class="text-3xl font-bold text-center mb-12">What Players Say</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div class="bg-gray-800 p-6 rounded">
                    <p>“Best online tournament experience I've ever had. Super smooth and thrilling!”</p>
                    <p class="mt-4 font-bold text-green-400">– Alex G.</p>
                    </div>
                    <div class="bg-gray-800 p-6 rounded">
                    <p>“I won my first ever tournament here. Totally legit and worth the time.”</p>
                    <p class="mt-4 font-bold text-green-400">– QueenBee</p>
                    </div>
                    <div class="bg-gray-800 p-6 rounded">
                    <p>“Great platform, awesome community, and real rewards. Highly recommended.”</p>
                    <p class="mt-4 font-bold text-green-400">– DevOnFire</p>
                    </div>
                </div>
            </div>
        </section>

  
      <!-- Footer -->
      <footer class="bg-black text-gray-500 text-center py-6 border-t border-gray-800">
        © 2025 GameZone. All rights reserved.
      </footer>
    </div>
</template>
  
<script setup>

import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1 })
  gsap.from('.hero-button', { opacity: 0, y: 50, duration: 1, delay: 0.3 })
})
  const upcoming = [
    { title: 'Fortnite', img: '/fortnite1.jpg', spots: '3nts 2018' },
    { title: 'Warzone', img: '/efootball1.jpg', spots: '4024/2013' },
    { title: 'FIFA 23', img: '/efootball1.jpg', spots: 'Available' },
    { title: 'Dota 2', img: '/fortnite1.jpg', spots: 'Available' },
  ]
  
  const topGames = [
    { name: 'Fortnite' },
    { name: 'Warzone' },
    { name: 'FIFA 23' },
    { name: 'Dota 2' },
  ]
  
  const winners = [
    { name: 'Castadvad', avatar: '/avatar.jpg', status: 'Filec Spots' },
    { name: 'Adrian Sintey', avatar: '/avatar.jpg', status: 'Oppgain Completed' },
    { name: 'Maina Fortina', avatar: '/avatar.jpg', status: 'Klar Completed' },
    { name: 'Completed', avatar: '/avatar.jpg', status: 'Giants Completed' },
  ]

  
const featuredGame = {
  img: '/fortnite1.jpg',
  title: 'Call of Legends',
  description: 'Enter the battlefield with your squad and dominate the arena in this fast-paced shooter.',
  spots: 18
}
</script>


<style scoped>

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes slide-in-left {
  0% { opacity: 0; transform: translateX(-100px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-right {
  0% { opacity: 0; transform: translateX(100px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-top {
  0% { opacity: 0; transform: translateY(-50px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-slide-in-left {
  animation: slide-in-left 1s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 1s ease-out forwards;
}

.animate-slide-in-top {
  animation: slide-in-top 1s ease-out forwards;
}

</style>
  