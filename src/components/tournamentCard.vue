<template>
    <div class="game-card-wrapper">
      <div class="game-card">
        <img :src="game.img" alt="" class="w-full h-40 object-cover rounded-t" />
        <div class="p-4">
          <h3 class="heading">{{ game.title }}</h3>
          <p class="spots">Spots: {{ game.spots }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    game: Object
  })
  </script>
  
  <style scoped>
  .game-card-wrapper {
    position: relative;
    width: 250px;
    height: 310px;
    border-radius: 12px;
    z-index: 1;
  }
  
  .game-card-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: linear-gradient(-45deg, #1cff7e 0%, #40c9ff 100%);
    z-index: -2;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .game-card-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: linear-gradient(-45deg, #1cff7e 0%, #00dbde 100%);
    transform: scale(0.95);
    filter: blur(20px);
    z-index: -3;
    transition: filter 0.3s ease;
  }
  
  .game-card-wrapper:hover::after {
    filter: blur(30px);
  }
  
  .game-card-wrapper:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
  
  .game-card {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #1f2937; /* Tailwind's bg-gray-800 */
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;
    color: white;
    z-index: 1;
  }
  
  .heading {
    font-size: 22px;
    font-weight: 700;
    text-transform: capitalize;
  }
  
  .spots {
    font-size: 16px;
    font-weight: 600;
    color: #1cff7e;
  }
  </style>
  