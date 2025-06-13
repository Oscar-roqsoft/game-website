<!-- components/OverlayMenu.vue -->
<template>
    <div class="fixed z-50 bg-gray-900 opacity-60 h-[90px] w-full"></div>
    <div class="fixed top-0 left-0 w-full z-50 bg-gray-900">
      <div class="text-2xl font-bold absolute left-[20px] top-[30px] z-50 text-white">🎮 LOGO</div>
      
      <input type="checkbox" id="active" v-model="isActive" />
      <label for="active" class="menu-btn"><span></span></label>
      <label for="active" class="close"></label>
  
      <div class="wrapper" :class="{ open: isActive }">
        <ul class="flex flex-col ">
          <li><a href="/">Home</a></li>
          <li><a href="/tournament">Tournaments</a></li>
          <li><a href="/how-it-works">How-It-Works</a></li>
          <li><a href="/leaderboard">Leaderboard</a></li>
          <li><a class="bg-green-500 hover:bg-green-600 " href="#">Sign Up</a></li>
          <!-- <li>
            <a>
                <button class="text-sm bg-green-500 hover:bg-green-600 text-white px-6 py-2 min-w-[150px] rounded">Sign Up</button>
            </a>
          </li> -->
        </ul>
      </div>
  
    
    </div>
  </template>
  
  <script setup>
  const isActive = ref(false)
  </script>
  
  <style scoped>
 

  
  input[type="checkbox"] {
    display: none;
  }
  
  .wrapper {
    position: fixed;
    z-index: 999;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 100%;
    background: #000;
    transition: all 0.6s ease-in-out;
  }
  .wrapper.open {
    right: 0;
  }
  
  .menu-btn {
    position: fixed;
    z-index: 9999;
    right: 20px;
    top: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .menu-btn span,
  .menu-btn::before,
  .menu-btn::after {
    content: "";
    position: fixed;
    top: calc(7% - 1px);
    right: 5%;
    width: 40px;
    border-bottom: 2px solid #f8f3f3;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  .menu-btn::before {
    transform: translateY(-8px);
  }
  .menu-btn::after {
    transform: translateY(8px);
  }
  
  input:checked + .menu-btn span {
    transform: scaleX(0);
  }
  input:checked + .menu-btn::before {
    transform: rotate(45deg);
    border-color: #fff;
  }
  input:checked + .menu-btn::after {
    transform: rotate(-45deg);
    border-color: #fff;
  }
  
  .wrapper ul {
    position: fixed;
    top: 40vh;
    left: 40vw;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }
  .wrapper ul li {
    margin: 32px 0;
    
  }
  .wrapper ul li a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 30px;
    color: #fff;
    border-radius: 10px;
    position: absolute;
    min-width: 200px;
    /* line-height: 0px; */
    margin: 5px 30px;
    opacity: 0;
    transform: translateX(100px);
    transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .wrapper.open ul li a {
    opacity: 1;
    transform: translateX(-100px);
    transition-delay: 0.6s;
    transition-timing-function: ease, cubic-bezier(.1, 1.3, .3, 1);
  }
  .wrapper ul li a::after {
    position: fixed;
    content: "";
    background: #fff;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
    transform: scaleY(0);
    z-index: -1;
    transition: transform 0.3s ease;
  }
  .wrapper ul li a:hover::after {
    transform: scaleY(1);
  }
  .wrapper ul li a:hover {
    color: #1ae82b;
  }
  
  .close {
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: background 0.6s;
  }
  
  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    text-align: center;
    width: 100%;
    color: #202020;
  }
  .content .title {
    font-size: 40px;
    font-weight: 700;
  }
  .content p {
    font-size: 35px;
    font-weight: 600;
  }
  </style>
  