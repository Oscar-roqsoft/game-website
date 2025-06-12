<template>
  <div class="min-h-[400px] flex flex-col justify-center items-center  md:px-0">
    <h2 class="text-4xl tracking-wide font-bold mb-4">Featured Games</h2>
    <p class="text-gray-300 mb-[24px] text-center">
      Discover our top-rated, most-played games—handpicked for excitement, challenge, and endless fun!
    </p>

    <div class="relative mt-[16px] rounded-md p-4 shadow-inner main-card">
      <!-- Gradient Left Overlay -->
      <div class="fade-left md:hidden"></div>

      <!-- Scrollable Cards -->
      <div class="card-scroll-container items-center justify-center">
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

      <!-- Gradient Right Overlay -->
      <div class="fade-right md:hidden"></div>
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

.main-card {
  position: relative;
  border-radius: 9px;
  width: 100%;
  max-width: 100%;
  overflow: hidden; /* keeps gradient overlays inside */
}

.card-scroll-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 10px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.card-scroll-container .card {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 190px;
}

/* Left fade */
.fade-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 100%;
  background: linear-gradient(to right, rgba(21, 21, 21, 0.6), transparent);
  pointer-events: none;
  z-index: 10;
}

/* Right fade */
.fade-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: linear-gradient(to left, rgba(21, 21, 21, 0.6), transparent);
  pointer-events: none;
  z-index: 10;
}


  </style>
  