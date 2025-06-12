<template>
    <section class="min-h-screen bg-gray-950 text-white pt-32 px-6">
      <div class="max-w-[1200px] mx-auto">
  
        <!-- Header -->
        <div class="text-center mb-12 space-y-4">
          <h1 class="text-4xl md:text-5xl font-bold">🎮 Tournaments</h1>
          <p class="text-gray-400 mt-2">Stay updated with live and upcoming competitions</p>
          <input
            type="text"
            v-model="search"
            placeholder="Search tournaments..."
            class="bg-gray-800 text-white px-4 py-2 rounded w-full md:w-1/3 outline-none"
          />
        </div>
  
        <!-- Filters -->
        <!-- <div class="flex flex-wrap justify-between items-center mb-10 gap-4">
       
          <select
            v-model="selectedGame"
            class="bg-gray-800 text-white px-4 py-2 rounded w-full md:w-1/4 outline-none"
          >
            <option value="">All Games</option>
            <option value="FIFA">FIFA</option>
            <option value="eFootball">eFootball</option>
            <option value="COD">Call of Duty</option>
          </select>
        </div> -->
  
        <!-- Sections -->
        <TournamentSection title="🔥 Ongoing Tournaments" :tournaments="ongoingTournaments" showScores />
        <TournamentSection title="🚀 Upcoming Tournaments" :tournaments="upcomingTournaments" />

        <TournamentSection title="✅ Completed Tournaments" :tournaments="completedTournaments" />
  
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Static data (can be replaced with API later)
  const tournaments = ref([
    {
      id: 1,
      name: 'FIFA Ultimate Clash',
      game: 'FIFA',
      date: '2025-06-30',
      status: 'upcoming',
      img: '/fortnite1.jpg',
      description: 'Prepare for the biggest FIFA battle.',
    },
    {
      id: 2,
      name: 'eFootball Master League',
      game: 'eFootball',
      date: '2025-06-06',
      status: 'ongoing',
      scoreline: 'Ade 2 - 1 Musa',
      img: '/efootball1.jpg',
      description: 'Real-time action in eFootball showdown.',
    },
    {
      id: 3,
      name: 'COD: Warfare Arena',
      game: 'COD',
      date: '2025-06-02',
      status: 'ongoing',
      scoreline: 'Squad A 89 - 75 Squad B',
      img: '/fortnite1.jpg',
      description: 'Live Call of Duty warfare. Stay sharp.',
    },
    {
      id: 4,
      name: 'FIFA Grand Finals',
      game: 'FIFA',
      date: '2025-06-01',
      status: 'completed',
      img: '/fortnite1.jpg',
      description: 'Champions crowned in an epic finale.',
    },
  ])
  
  const search = ref('')
  const selectedGame = ref('')
  
  // Filtered lists
  const filtered = computed(() =>
    tournaments.value.filter(t =>
      t.name.toLowerCase().includes(search.value.toLowerCase()) &&
      (selectedGame.value ? t.game === selectedGame.value : true)
    )
  )
  
  const upcomingTournaments = computed(() => filtered.value.filter(t => t.status === 'upcoming'))
  const ongoingTournaments = computed(() => filtered.value.filter(t => t.status === 'ongoing'))
  const completedTournaments = computed(() => filtered.value.filter(t => t.status === 'completed'))
  </script>
  