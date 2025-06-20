<template>
    <div class="bg-gray-900 pt-16">
      <div class="">
        <div class="min-h-[60vh] relative flex flex-col justify-center items-center px-4
           bg-[url('/image/gametime1.jpg')] bg-cover bg-bottom z-20">

           <!-- Dark Gradient Overlay with darker edges -->
        <div class="absolute inset-0 z-10 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90  shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] h-full"></div>


            <h1 class="text-5xl font-bold text-center mb-4 text-white z-20">How It Works</h1>
            <p class="text-center text-gray-300 max-w-2xl mx-auto mb-6 z-20">
              Compete in your favorite games, win rewards, and connect with real players. Here’s how to get started:
            </p>

            <svg class="z-20  bounce-up shadow-xl rounded-full" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><!-- Icon from Myna UI Icons by Praveen Juge - https://github.com/praveenjuge/mynaui-icons/blob/main/LICENSE --><path fill="green" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M12 6.75a.75.75 0 0 1 .75.75v7.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V7.5a.75.75 0 0 1 .75-.75"/>
            </svg>
      
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


<style scoped>

    .bounce-up{
        animation: bounce 3s infinite ease-in-out;
    }
    
     @keyframes bounce {
        0%{
            transform: translateY(0px)
        }
        50%{
            transform: translateY(30px) 
        }
        100%{
            transform: translateY(0px) 
        }
        
    }
</style>
  