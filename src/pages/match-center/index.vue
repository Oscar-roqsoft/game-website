<template>
    <div class="min-h-screen bg-gray-950 text-white p-4">
      <div class="max-w-[1200px] mx-auto mt-[120px] pb-10">
        <!-- Header -->
        <div class="items-center text-center mb-[32px]">
          <h1 class="text-3xl md:text-5xl font-bold">Match Center</h1>
          <!-- <img src="/avatar.jpg" alt="User Avatar" class="w-10 h-10 rounded-full border-2 border-teal-400" /> -->
        </div>
  
        <!-- Game Filter and Tabs -->
        <div class="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <!-- Naive UI Tabs -->
          <n-tabs
            type="line"
            v-model:value="activeTab"
            class="text-white md:w-[40%]"
            animated
            pane-style="padding: 0;"
          >
            <n-tab name="My Matches">My Matches</n-tab>
            <n-tab name="All Fixtures">All Fixtures</n-tab>
            <n-tab name="Ongoing Games">Ongoing Games</n-tab>
            <n-tab name="Past Results">Past Results</n-tab>
          </n-tabs>
  
          <!-- Game Filter Dropdown -->
          <n-select
            v-model:value="selectedGame"
            :options="gameOptions"
            placeholder="Filter by Game"
            class="w-full sm:w-60"
          />
        </div>
  
        <!-- Match Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="match in filteredMatches"
            :key="match.id"
            class="bg-gray-900 rounded-2xl p-4 shadow-md border border-gray-800"
          >
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <img :src="match.userAvatar" alt="Avatar" class="w-10 h-10 rounded-full border-2 border-gray-600" />
                <div>
                  <p class="text-sm font-bold">{{ match.username }}</p>
                  <p class="text-xs text-gray-400">{{ match.type }}</p>
                </div>
              </div>
              <span class="text-xs bg-teal-600 text-white px-2 py-1 rounded-full">{{ match.status }}</span>
            </div>
  
            <div class="text-center mb-2">
              <h2 class="text-lg font-semibold">{{ match.teamA }} vs {{ match.teamB }}</h2>
              <p class="text-sm text-gray-400">{{ match.time }}</p>
            </div>
  
            <div class="flex justify-between text-center mt-4">
              <div>
                <p class="text-sm">{{ match.scoreA }}</p>
                <p class="text-xs text-gray-500">{{ match.teamA }}</p>
              </div>
              <div>
                <p class="text-sm font-bold">VS</p>
              </div>
              <div>
                <p class="text-sm">{{ match.scoreB }}</p>
                <p class="text-xs text-gray-500">{{ match.teamB }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { NSelect, NTabs, NTab } from 'naive-ui'
  
  const activeTab = ref('My Matches')
  const selectedGame = ref(null)
  
  const gameOptions = [
    { label: 'All Games', value: null },
    { label: 'eFootball', value: 'eFootball' },
    { label: 'Snooker', value: 'Snooker' },
    { label: 'COD', value: 'COD' }
  ]
  
  const matches = ref([
    {
      id: 1,
      game: 'eFootball',
      username: 'You',
      userAvatar: '/avatar.jpg',
      type: 'Ranked Match',
      teamA: 'Dream FC',
      teamB: 'Thunder Strikers',
      scoreA: 2,
      scoreB: 1,
      time: 'Today • 3:30 PM',
      status: 'Finished'
    },
    {
      id: 2,
      game: 'Snooker',
      username: 'Maximus',
      userAvatar: '/avatar.jpg',
      type: 'Friendly Match',
      teamA: 'Legends United',
      teamB: 'Snooker Sharks',
      scoreA: 1,
      scoreB: 3,
      time: 'Today • 5:00 PM',
      status: 'Ongoing'
    },
    {
      id: 3,
      game: 'COD',
      username: 'You',
      userAvatar: '/avatar.jpg',
      type: 'Tournament',
      teamA: 'eChamp Stars',
      teamB: 'Night Wolves',
      scoreA: 0,
      scoreB: 0,
      time: 'Tomorrow • 7:00 PM',
      status: 'Upcoming'
    }
  ])
  
  const filteredMatches = computed(() => {
    let list = matches.value
  
    if (selectedGame.value) {
      list = list.filter(m => m.game === selectedGame.value)
    }
  
    switch (activeTab.value) {
      case 'My Matches':
        return list.filter(m => m.username === 'You')
      case 'Ongoing Games':
        return list.filter(m => m.status === 'Ongoing')
      case 'Past Results':
        return list.filter(m => m.status === 'Finished')
      case 'All Fixtures':
      default:
        return list
    }
  })
  </script>
  