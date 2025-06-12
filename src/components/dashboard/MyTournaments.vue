<template>
    <div>
      <h2 class="text-xl font-semibold mb-3">My Tournaments</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(t, i) in tournaments"
          :key="i"
          class="bg-gray-800 p-4 rounded shadow"
        >
          <h3 class="font-bold">{{ t.name }}</h3>
          <p class="text-sm text-gray-400">Status: {{ t.status }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({ tournaments: Array })
  </script>
  