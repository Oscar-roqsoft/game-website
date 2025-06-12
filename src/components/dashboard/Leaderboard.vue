<template>
    <div>
      <h2 class="text-xl font-semibold mb-3">Leaderboard</h2>
      <ul class="space-y-2">
        <li
          v-for="(player, i) in players"
          :key="i"
          class="bg-gray-800 p-3 rounded flex justify-between"
        >
          <span>{{ player.name }}</span>
          <span class="text-green-400">{{ player.points }} pts</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  defineProps({ players: Array })
  </script>
  