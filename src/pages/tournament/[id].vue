<template>
    <section class="min-h-screen bg-gray-950 text-white py-32 px-4">
      <div class="max-w-5xl mx-auto flex justify-center items-center mb-10">
        <CountdownTimer :endDate="'2025-08-05T23:59:59'" text-size="text-5xl" />
      </div>
  
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <!-- Tournament Info Card -->
        <div class="bg-gray-900 rounded-2xl shadow-md border border-gray-800 p-6">
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">{{ tournament.name }}</h1>
            <span
              class="px-3 py-1 text-sm rounded-full text-white"
              :class="tournament.entryFee === 0 ? 'bg-green-600' : 'bg-yellow'"
            >
              {{ tournament.entryFee === 0 ? 'Free' : '₦' + tournament.entryFee.toLocaleString() }}
            </span>
          </div>
  
          <img
            :src="tournament.img"
            alt="Tournament image"
            class="rounded-md w-full h-60 object-cover mb-6 border border-gray-700"
          />
  
          <p class="text-lg text-gray-100 mb-4">{{ tournament.description }}</p>
  
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-100 font-semibold">🎮 Game</p>
              <p class="text-md text-gray-400">{{ tournament.game }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-100 font-semibold">📅 Date</p>
              <p class="text-md text-gray-400">{{ formattedDate }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-100 font-semibold">👥 Available Slots</p>
              <p class="text-md text-gray-400 font-semibold">{{ tournament.availableSlots }}</p>
            </div>
          </div>
        </div>
  
        <!-- Join Form -->
        <div class="bg-gray-900 rounded-2xl shadow-md border border-gray-800 p-6">
          <h2 class="text-xl font-semibold mb-4">Join Tournament</h2>
          <form @submit.prevent="showConfirm = true" class="space-y-4">
            <div>
              <label class="text-sm text-gray-400 block mb-1">Full Name</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Enter full name"
                class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white outline-none"
                required
              />
            </div>
  
            <div>
              <label class="text-sm text-gray-400 block mb-1">Email</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white outline-none"
                required
              />
            </div>
  
            <div>
              <label class="text-sm text-gray-400 block mb-1">Gamer Tag</label>
              <input
                v-model="form.gamerTag"
                type="text"
                placeholder="Enter gamer tag"
                class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white outline-none"
                required
              />
            </div>
  
            <div class="mt-4 text-sm">
              Entry Fee:
              <span
                class="ml-2 px-3 py-1 rounded-full text-white text-xs"
                :class="tournament.entryFee === 0 ? 'bg-green-600' : 'bg-yellow'"
              >
                {{ tournament.entryFee === 0 ? 'Free' : '₦' + tournament.entryFee.toLocaleString() }}
              </span>
            </div>
  
            <button
              type="submit"
              :disabled="tournament.availableSlots === 0"
              class="w-full mt-4 py-2 rounded bg-green-500 hover:bg-teal-700 transition text-white font-semibold disabled:opacity-50"
            >
              {{ tournament.entryFee === 0 ? 'Join for Free' : 'Join & Pay' }}
            </button>
          </form>
        </div>
      </div>
  
      <!-- Confirmation Modal -->
      <div
        v-if="showConfirm"
        class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
      >
        <div class="bg-gray-900 border border-gray-700 p-6 rounded-lg w-full max-w-md text-white">
          <h3 class="text-xl font-semibold mb-4">Confirm Participation</h3>
          <p class="mb-6">
            You are about to join <span class="font-bold">{{ tournament.name }}</span>. <br />
            Entry Fee: <span class="font-semibold">{{ tournament.entryFee === 0 ? 'Free' : '₦' + tournament.entryFee.toLocaleString() }}</span>
          </p>
          <div class="flex justify-end gap-4">
            <button
              class="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
              @click="showConfirm = false"
            >
              Cancel
            </button>
            <button
              class="px-4 py-2 rounded bg-green-600 hover:bg-green-500"
              @click="handleSubmit"
            >
              {{ tournament.entryFee === 0 ? 'Join' : 'Proceed to Pay' }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  const tournaments = [
    {
      id: 1,
      name: 'FIFA Ultimate Clash',
      game: 'FIFA',
      date: '2025-07-30',
      entryFee: 0,
      img: '/efootball1.jpg',
      availableSlots: 8,
      description: 'Free entry tournament for all FIFA lovers!',
    },
    {
      id: 2,
      name: 'COD Battle Royale',
      game: 'Call of Duty',
      date: '2025-08-05',
      entryFee: 3000,
      img: '/fortnite1.jpg',
      availableSlots: 12,
      description: 'Join the intense battle royale showdown!',
    },
    {
      id: 3,
      name: 'COD Battle Royale',
      game: 'Call of Duty',
      date: '2025-08-05',
      entryFee: 3000,
      img: '/fortnite1.jpg',
      availableSlots: 12,
      description: 'Join the intense battle royale showdown!',
    },
    {
      id: 4,
      name: 'COD Battle Royale',
      game: 'Call of Duty',
      date: '2025-08-05',
      entryFee: 3000,
      img: '/fortnite1.jpg',
      availableSlots: 12,
      description: 'Join the intense battle royale showdown!',
    },
  ]
  
  const tournament = ref(tournaments.find(t => t.id === Number(route.params.id)) || {})
  const showConfirm = ref(false)
  const form = reactive({ name: '', email: '', gamerTag: '' })
  const successMessage = ref('')
  
  const formattedDate = computed(() => {
    const d = new Date(tournament.value.date)
    return d.toLocaleDateString(undefined, {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    })
  })
  
  function handleSubmit() {
    showConfirm.value = false
  
    if (!form.name || !form.email || !form.gamerTag) return
  
    if (tournament.value.entryFee === 0) {
      tournament.value.availableSlots--
      successMessage.value = '🎉 You have successfully joined the tournament!'
      form.name = form.email = form.gamerTag = ''
    } else {
      // Integrate Flutterwave here
      // You can use window.FlutterwaveCheckout() if script is included
      console.log('Triggering payment modal...')
    }
  }
  </script>
  