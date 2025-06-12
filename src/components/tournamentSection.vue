<template>
  <div class="pb-12">
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>

    <!-- Empty State -->
    <div v-if="!tournaments || tournaments.length === 0" class="flex flex-col items-center justify-center h-64 text-gray-400 bg-gray-800 rounded-lg p-6">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2m-6 0h6" />
      </svg>
      <p class="text-lg font-medium">No tournaments found</p>
      <p class="text-sm mt-1">Please check back later or try a different category.</p>
    </div>

    <!-- Tournaments List -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 bg-gray-800 p-6 rounded-md">
      <TournamentCard2
        v-for="tournament in tournaments"
        :key="tournament.id"
        :tournament="tournament"
        :show-scores="showScores"
      />
    </div>
  </div>
</template>


<script setup>
defineProps({
  title: String,
  tournaments: Array,
  showScores: {
    type: Boolean,
    default: false
  }
})

// import TournamentCard from './TournamentCard.vue'
</script>
