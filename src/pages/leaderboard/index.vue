<template>
    <main class="bg-gray-900">

        <div class="l-wrapper  max-w-[1200px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <!-- Header -->
           <!-- <section class=" py-24 flex justify-center items-center">
               <header class="c-header flex justify-between items-center relative">
                
                <h1 class="text-white text-5xl font-bold">Leaderboard</h1>
                
                 <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-trans"></div>
               </header>
           </section>
       -->
          <!-- Grid Layout -->
          <div class="l-grid grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 py-20">
            <!-- Sticky Card (My Rank and Score) -->
            <div class="l-grid__item md:sticky md:top-4">
              <div
                class="c-card bg-gradient-to-t from-gray-800 to-gray-800 text-white rounded-lg shadow-md mb-6 animate-slide-in"
              >
                <div class="c-card__body p-6 flex justify-between">
                  <div class="text-left">
                    <div class="text-sm font-medium">My Rank</div>
                    <h2 class="text-2xl font-oswald uppercase">3rd Place</h2>
                  </div>
                  <div class="text-right">
                    <div class="text-sm font-medium">My Score</div>
                    <h2 class="text-2xl font-oswald uppercase">24</h2>
                  </div>
                </div>
              </div>
              <!-- Winner Card -->
              <div class="c-card bg-gray-800 text-white rounded-lg shadow-md animate-slide-in">
                <div class="c-card__body p-6 text-center" id="winner">
                  <div class="text-sm font-medium mb-4">Top Player Last Week</div>
                  <img
                    :src="winner.img"
                    alt="Winner"
                    class="c-avatar c-avatar--lg w-24 h-24 rounded-full mx-auto mb-4 border border-dark"
                  />
                  <h3 class="text-xl font-oswald uppercase mt-4">{{ winner.name }}</h3>
                  <span class="text-teal text-sm">{{ winner.name }}</span>
                </div>
              </div>
            </div>
      
            <!-- Leaderboard List -->
            <div class="l-grid__item">
              <div class="c-card bg-gray-800 text-white rounded-lg shadow-md">
                <div class="c-card__header p-6 pb-0 flex justify-between items-center flex-col md:flex-row">
                  <h3 class="text-lg font-oswald uppercase">Leaderboard</h3>
                  <select
                    v-model="selectedGame"
                    class="c-select bg-transparent p-3 text-sm border border-white/20 rounded-lg hover:bg-darkest transition-colors"
                    @change="filterLeaderboard"
                  >
                    <option value="all">All Games</option>
                    <option v-for="game in games" :key="game" :value="game">{{ game }}</option>
                  </select>
                </div>
                <div class="c-card__body p-6">
                  <ul class="c-list">
                    <li class="c-list__item py-4 grid grid-cols-[48px_3fr_1fr] gap-6 sm:gap-12">
                      <div class="text-left text-sm font-medium">Rank</div>
                      <div class="text-left text-sm font-medium">Team Member</div>
                      <div class="text-right text-sm font-medium"># of Kudos</div>
                    </li>
                    <li
                      v-for="(member, index) in filteredTeam"
                      :key="member.rank"
                      class="c-list__item py-4 grid grid-cols-[48px_3fr_1fr] gap-6 sm:gap-12 animate-fade-in"
                      :style="{ animationDelay: `${index * 0.1}s` }"
                    >
                      <div
                        :class="[
                          'c-flag w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md',
                          member.rank === 1 ? 'bg-yellow text-white' :
                          member.rank === 2 ? 'bg-teal text-white' :
                          member.rank === 3 ? 'bg-orange text-white' : 'bg-transparent',
                        ]"
                      >
                        {{ member.rank }}
                      </div>
                      <div class="c-media flex items-center">
                        <img :src="member.img" alt="Avatar" class="c-avatar w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-dark" />
                        <div class="c-media__content pl-3 sm:pl-4">
                          <div class="c-media__title font-oswald text-base sm:text-lg">{{ member.name }}</div>
                          <a
                            :href="`https://instagram.com/${member.handle}`"
                            target="_blank"
                            class="c-media__link text-sm text-primary hover:bg-primary-trans hover:text-primary-light transition-all"
                          >
                            @{{ member.handle }}
                          </a>
                        </div>
                      </div>
                      <div
                        class="u-text--right c-kudos"
                        :class="[
                          member.rank === 1 ? 'text-yellow' :
                          member.rank === 2 ? 'text-teal' :
                          member.rank === 3 ? 'text-orange' : '',
                        ]"
                      >
                        <div class="mt-2">
                          <strong>{{ member.kudos }}</strong> {{ randomEmoji() }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  
  // Sample team data
  const team = ref([
    {
      rank: 1,
      name: 'Lewis Hamilton',
      handle: 'lewishamilton',
      img: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png',
      kudos: 36,
      sent: 31,
      game: 'F1 2025',
    },
    // ... other team members with a 'game' property added
    {
      rank: 2,
      name: 'Kimi Raikkonen',
      handle: 'kimimatiasraikkonen',
      img: 'https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/2col-retina/image.png',
      kudos: 31,
      sent: 21,
      game: 'F1 2025',
    },
    {
      rank: 3,
      name: 'Sebastian Vettel',
      handle: 'vettelofficial',
      img: 'https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col-retina/image.png',
      kudos: 24,
      sent: 7,
      game: 'F1 2024',
    },
    {
      rank: 4,
      name: 'Max Verstappen',
      handle: 'maxverstappen1',
      img: 'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png',
      kudos: 22,
      sent: 4,
      game: 'F1 2025',
    },
    {
      rank: 5,
      name: 'Lando Norris',
      handle: 'landonorris',
      img: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png',
      kudos: 18,
      sent: 16,
      game: 'F1 2024',
    },
    // Add more team members as needed
  ])
  
  // List of games for the filter
  const games = ['F1 2024', 'F1 2025']
  
  // Selected game for filtering
  const selectedGame = ref('all')
  
  // Computed property to filter team based on selected game
  const filteredTeam = computed(() => {
    if (selectedGame.value === 'all') return team.value
    return team.value.filter(member => member.game === selectedGame.value)
  })
  
  // Winner based on sent kudos
  const winner = computed(() => {
    const sortedTeam = [...team.value].sort((a, b) => b.sent - a.sent)
    return sortedTeam[0]
  })
  
  // Random emoji generator
  const randomEmoji = () => {
    const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯']
    return emojis[Math.floor(Math.random() * emojis.length)]
  }
  
  // Filter leaderboard based on selected game
  const filterLeaderboard = () => {
    // Recompute filteredTeam automatically via computed property
  }
  </script>
  
  <style scoped>
  
 
  
  
  /* Animations */
  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-slide-in {
    animation: slide-in 0.5s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }
  </style>