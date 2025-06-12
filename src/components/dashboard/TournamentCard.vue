<template>
    <div class="bg-gray-800 p-3 rounded shadow">
      <h4 class="font-bold">{{ tournament.name }}</h4>
      <p class="text-sm text-gray-400">Status: {{ tournament.status }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({ tournament: Object })
  </script>
  