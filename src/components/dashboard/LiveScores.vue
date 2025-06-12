<template>
    <div v-if="scores.length > 0">
      <h2 class="text-xl font-semibold mb-3">Live Scores</h2>
      <div class="space-y-3">
        <div
          v-for="(score, i) in scores"
          :key="i"
          class="bg-gray-800 p-4 rounded shadow flex justify-between"
        >
          <div>{{ score.teamA }} vs {{ score.teamB }}</div>
          <div>{{ score.score }}</div>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-500 italic">No live matches currently</div>
  </template>
  
  <script setup>
  defineProps({ scores: Array })
  </script>
  