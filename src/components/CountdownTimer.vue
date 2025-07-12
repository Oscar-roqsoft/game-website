<template>
    <div class="flex flex-col justify-center">
      <div v-if="!isExpired">
        <div :class="['flex gap-4 font-bold text-white', textSize]">
          <div class="flex flex-col items-center">
            <span>{{ time.days }}</span>
            <span class="text-xs font-medium text-gray-400">Days</span>
          </div>
          <div class="flex flex-col items-center">
            <span>{{ time.hours }}</span>
            <span class="text-xs font-medium text-gray-400">Hours</span>
          </div>
          <div class="flex flex-col items-center">
            <span>{{ time.minutes }}</span>
            <span class="text-xs font-medium text-gray-400">Min</span>
          </div>
          <div class="flex flex-col items-center">
            <span>{{ time.seconds }}</span>
            <span class="text-xs font-medium text-gray-400">Sec</span>
          </div>
        </div>
      </div>
      <div v-else class="py-2 rounded text-red-600 text-sm font-semibold">
        Countdown Ended
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, watch } from 'vue'
  
  // Props
  const props = defineProps({
    endDate: {
      type: String,
      required: true,
    },
    textSize: {
      type: String,
      default: 'text-xl', // Tailwind class (you can pass 'text-2xl', 'text-sm', etc.)
    }
  })
  
  const time = ref({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })
  const isExpired = ref(false)
  let interval = null
  
  const updateCountdown = () => {
    const now = new Date()
    const target = new Date(props.endDate)
    const distance = target - now
  
    if (distance <= 0) {
      isExpired.value = true
      clearInterval(interval)
      return
    }
  
    isExpired.value = false
    time.value.days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0')
    time.value.hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0')
    time.value.minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0')
    time.value.seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0')
  }
  
  // Lifecycle
  onMounted(() => {
    updateCountdown()
    interval = setInterval(updateCountdown, 1000)
  })
  onUnmounted(() => {
    clearInterval(interval)
  })
  
  // Watch for dynamic date changes
  watch(() => props.endDate, () => {
    clearInterval(interval)
    updateCountdown()
    interval = setInterval(updateCountdown, 1000)
  })
  </script>
  