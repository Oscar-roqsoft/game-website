<template>
    <div class="bg-gray-900 rounded-xl shadow-lg p-4 text-white hover:shadow-2xl transition duration-300">
      <!-- Title and Status -->
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-xl font-semibold">{{ tournament.name }}</h3>
        <span
          class="text-sm px-2 py-1 rounded-full"
          :class="{
            'bg-green-600': tournament.status === 'upcoming',
            'bg-yellow-500': tournament.status === 'ongoing',
            'bg-red-600': tournament.status === 'completed'
          }"
        >
          {{ tournament.status }}
        </span>
      </div>
  
      <!-- Tournament Image -->
      <img
        v-if="tournament.img"
        :src="tournament.img"
        alt="Tournament image"
        class="w-full h-40 object-cover rounded-md mb-3"
      />
  
      <!-- Tournament Info -->
      <div class="text-sm space-y-1">
        <p><strong>Game:</strong> {{ tournament.game }}</p>
        <p><strong>Date:</strong> {{ formatDate(tournament.date) }}</p>
        <p><strong>Location:</strong> {{ tournament.location || 'Online' }}</p>
      </div>
  
      <!-- Score Line (Conditional) -->
      <div v-if="showScores && tournament.score" class="mt-4 bg-gray-800 p-2 rounded-md">
        <p class="text-sm font-semibold">Current Score:</p>
        <p class="text-lg">{{ tournament.score }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    tournament: {
      type: Object,
      required: true
    },
    showScores: {
      type: Boolean,
      default: false
    }
  })
  
  // Optional: Format date to readable format
  function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  </script>
  
  <style scoped>
  /* Add custom hover effects or styles here if needed */
  </style>
  