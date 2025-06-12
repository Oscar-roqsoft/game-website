<template>
    <div class="min-h-[400px] flex flex-col justify-center items-center">


        <h2 class="text-4xl tracking-wide font-bold mb-12">Featured Games</h2>

        <div class="mt-[16px] rounded-md bg-gray-900 p-4 shadow-inner border-4 border-gray-900">

            <div class="card-grid ">
              <CardFlip
                v-for="(card, index) in cards"
                :key="index"
                :title="card.title"
                :icon="card.icon"
                :info="card.info"
                :badge="card.badge"
                :backImage="card.backImage"
              />
            </div>
        </div>

    </div>
  </template>
  
  <script setup>
  
  const cards = [
    {
      title: 'Fortnite',
      icon: '🔥',
      info: 'Popular Battle Royale',
      badge: 'HOT',
      backImage: '/cyberpunk.jpg'
    },
    {
      title: 'Minecraft',
      icon: '🌍',
      info: 'Creative sandbox',
      badge: 'NEW',
      backImage: '/cyberpunk.jpg'
    },
    {
      title: 'Minecraft',
      icon: '🌍',
      info: 'Creative sandbox',
      badge: 'NEW',
      backImage: '/cyberpunk.jpg'
    },
    {
      title: 'Cyberpunk',
      icon: '⚡',
      info: 'Futuristic RPG',
      badge: 'SALE',
      backImage: '/cyberpunk.jpg'
    }
  ]
  </script>
  
  <style scoped>
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>
  