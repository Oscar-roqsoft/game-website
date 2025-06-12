<template>
    <div class="min-h-[400px] flex flex-col justify-center items-center px-4 md:px-0">


        <h2 class="text-4xl tracking-wide font-bold mb-4">Featured Games</h2>

        <p class="text-gray-300 mb-[24px] text-center">Discover our top-rated, most-played games—handpicked for excitement, challenge, and endless fun!</p>

        <div class="mt-[16px] rounded-md  p-4 shadow-inner ">

            <div class="card-grid items-center justify-center">
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
      title: 'Dream League',
      icon: '🌍',
      info: 'Creative Football game',
      badge: 'NEW',
      backImage: '/game/dreamleague.png'
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
  