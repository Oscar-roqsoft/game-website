<template>
    <div
      ref="stepRef"
      class="bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center text-center space-y-2 transition-opacity duration-700 opacity-0 translate-y-8"
    >
      <div class="text-3xl text-blue-500">
        <slot name="icon" />
      </div>
      <h3 class="text-xl text-white font-semibold">{{ title }}</h3>
      <p class="text-gray-300 text-sm">{{ description }}</p>
    </div>
</template>
  
<script setup>
  import { onMounted, ref } from 'vue'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const props = defineProps({
    title: String,
    description: String,
  })
  
  const stepRef = ref(null)
  
  onMounted(() => {
    gsap.to(stepRef.value, {
      scrollTrigger: {
        trigger: stepRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
  })
</script>
  


