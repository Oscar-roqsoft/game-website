<template>
    <div class="bg-gray-900 pt-16">
      <div class="">
        <div class="min-h-[60vh] relative flex flex-col justify-center items-center px-4
           bg-[url('/image/gametime1.jpg')] bg-cover bg-bottom z-20">

           <!-- Dark Gradient Overlay with darker edges -->
        <div class="absolute inset-0 z-10 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90  shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] h-full"></div>


            <h1 class="text-5xl font-bold text-center mb-4 text-white z-20">How It Works</h1>
            <p class="text-center text-gray-300 max-w-2xl mx-auto mb-12 z-20">
              Compete in your favorite games, win rewards, and connect with real players. Here’s how to get started:
            </p>
      
        </div>

        <div class="min-h-[500px] max-w-6xl mx-auto px-4 pt-20">

            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-30">
              <HowItWorksStep
                title="Create an Account"
                description="Sign up using your email or social account."
              >
                <template #icon>📝</template>
              </HowItWorksStep>
      
              <HowItWorksStep
                title="Pick a Game"
                description="Browse and select a tournament that interests you."
              >
                <template #icon>🎮</template>
              </HowItWorksStep>
      
              <HowItWorksStep
                title="Register"
                description="Enter your gamer tag and join the match."
              >
                <template #icon>🧾</template>
              </HowItWorksStep>
      
              <HowItWorksStep
                title="Play the Match"
                description="Compete on the actual game app with your opponent."
              >
                <template #icon>⚔️</template>
              </HowItWorksStep>
      
              <HowItWorksStep
                title="Submit Results"
                description="Upload your score or proof of the result."
              >
                <template #icon>📸</template>
              </HowItWorksStep>
      
              <HowItWorksStep
                title="Win Rewards"
                description="Winners receive instant or verified payouts."
              >
                <template #icon>🏆</template>
              </HowItWorksStep>
            </div>
        </div>

        <section class=" pb-20 pt-20 md:pt-10">
            <div
            ref="videoRef"
            class="max-w-5xl mx-auto px-4 text-center opacity-0 translate-y-8 transition-all duration-700"
            >
            <h2 class="text-3xl md:text-4xl font-bold text-white">Watch How It Works</h2>
            <p class="text-gray-300 mt-4 mb-10 max-w-2xl mx-auto">
                Get a quick overview of how to sign up, find games, and join tournaments through our platform.
            </p>

            <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <!-- Replace with your actual video link -->
                <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="How It Works Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="w-full h-full"
                ></iframe>
            </div>
            </div>
        </section>


        <div class="bg-gray-800 min-h-[500px] pt-10">
            <div
            ref="communityRef"
            class="max-w-4xl mx-auto text-center px-4 opacity-0 translate-y-8 transition-all duration-700"
            >
            <h2 class="text-3xl md:text-4xl font-bold text-white">Join Our Community</h2>
            <p class="text-gray-300 mt-4 mb-8 max-w-xl mx-auto">
                Connect with other gamers, get notified about new tournaments, and grow your competitive profile.
            </p>

            <ul class="text-left max-w-lg mx-auto mb-8 space-y-3 text-gray-400">
                <li>✅ Get updates on upcoming matches</li>
                <li>✅ Earn rewards & loyalty points</li>
                <li>✅ Chat with top players & teams</li>
                <li>✅ Access private events and giveaways</li>
                <li>✅ Early access to tournaments</li>
            </ul>

            <NuxtLink to="/signup">
                <button class="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 md:w-[300px] transition">
                Join Now
                </button>
            </NuxtLink>
            </div>
        </div>

       
      </div>
    </div>
  </template>
  
  <script setup>
  import HowItWorksStep from '~/components/HowItWorksStep.vue'
  import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const communityRef = ref(null)

onMounted(() => {
  gsap.to(communityRef.value, {
    scrollTrigger: {
      trigger: communityRef.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
  })
})

const videoRef = ref(null)

onMounted(() => {
  gsap.to(videoRef.value, {
    scrollTrigger: {
      trigger: videoRef.value,
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
  