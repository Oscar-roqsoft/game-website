<template>
    <div class="card">
      <div class="content">
        <div class="back">
          <div class="back-content">
            <img class="img" :src="backImage" alt="Back image" />
          </div>
        </div>
        <div class="front">
            <img class="img" :src="backImage" alt="Back image" />
          <div class="front-content">
            <div class="badge">{{ badge }}</div>
            <div class="description">
              <div class="title">
                <p class=" text-sm font-bold">{{ title }}</p>
                <span>{{ icon }}</span>
              </div>
              <div class="card-footer">
                <p>{{ info }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    icon: String,
    info: String,
    badge: String,
    backImage: String
  })
  </script>
  
  <style scoped>
  /* Copy your full CSS from earlier (unchanged) */
  .card {
    overflow: visible;
    width: 190px;
    height: 254px;
    position: relative;
  }
  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
    position: relative;
  }
  .card:hover .content {
    transform: rotateY(180deg);
  }
  .front, .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }
  .front {
    transform: rotateY(180deg);
    color: white;
  }
  .back {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }
  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    z-index: 1;
  }
  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
  }
  .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
  }
  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
    font-size: 10px;
  }
  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
    font-size: 10px;
  }
  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .title p {
    width: 50%;
  }
  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }
  @keyframes rotation_481 {
    0% { transform: rotateZ(0deg); }
    100% { transform: rotateZ(360deg); }
  }
  </style>
  