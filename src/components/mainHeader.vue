<template>
  <div>
    <!-- Navbar (Fixed) -->
    <nav
      :class="[
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-transparent'
      ]"
    >
      <div class="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-6 text-white">
        <div class="text-2xl font-bold">🎮 LOGO</div>
        <div class="space-x-6 hidden md:flex">
          <a href="/" class="hover:text-green-400">Home</a>
          <a href="/tournament" class="hover:text-green-400">Tournaments</a>
          <a href="/dashboard" class="hover:text-green-400">Dashboard</a>
        </div>
        <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </nav>

    <!-- Fake content to allow scrolling -->
    <div class="">
      <slot />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

  