<template>
    <div class="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-xl shadow-lg">
      <h1 class="text-3xl font-bold">Welcome back, {{ username }}! 👋</h1>
      <p class="text-lg mt-1">Ready to dominate the next tournament?</p>
    </div>
  </template>
  
  <script setup>
  defineProps({ username: String })
  </script>
  