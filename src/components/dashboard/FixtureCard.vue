<template>
    <div>
      <h2 class="text-xl font-semibold mb-3">Upcoming Fixtures</h2>
      <div class="space-y-3">
        <div
          v-for="(fixture, i) in fixtures"
          :key="i"
          class="bg-gray-800 p-4 rounded shadow flex justify-between"
        >
          <div>{{ fixture.teamA }} vs {{ fixture.teamB }}</div>
          <div class="text-sm text-gray-400">{{ fixture.time }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({ fixtures: Array })
  </script>
  