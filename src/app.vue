<template>
  <div>
  
      <NuxtLayout>
          <NuxtPage/>
      </NuxtLayout>

      
  </div>
</template>

<script setup>



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

html {
  scroll-behavior: smooth;
}
/* *{
    margin: 0px;
    padding: 0px;
    box-sizing: content-box;
} */

 .n-carousel__arrow {
    color: black !important;
 }
 .n-carousel__dot[aria-selected=false]{
    background-color: black !important;
 }
 .n-carousel__dot[aria-selected=true]{
    background-color: rgb(208, 202, 202) !important;
 }
</style>
