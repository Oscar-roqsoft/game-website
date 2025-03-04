<template>
    <main>
        <section id="hero" class="min-h-[99vh] relative flex justify-center items-center">
            <div class="absolute bottom-0 left-0">
                <img src="/hero/rect.png" alt="hero-bg" ref="bgImage">
            </div>

            <div class="md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 h-full items-center">
                    <div class="flex flex-col justify-between min-h-[80%] mt-[6rem] md:mt-[3.6rem]">
                        <div>
                            <h1 ref="heroText" class=" text-[32px] md:text-[58px] font-bold tracking-[2%] md:leading-[80px] opacity-0 hero-title">
                                Unlock your future, one pathway at a time!
                            </h1>

                            <p ref="heroDesc" class="text-[20px] text-[#747582] tracking-[2%] leading-[36px] opacity-0">
                                Support small business and join the nationwide movement to encourage commercial support
                                for the millions of minority owned businesses helping world economy.
                            </p>
                        </div>

                        <div ref="ctaButton" class="opacity-0 mt-6">
                            <!-- #FF698D -->
                             <div class="flex items-center gap-10">

                                 <a href="#" target="_blank">
                                     <Button class="shadow-lg" name="Let's Talk" textColor="#fff" color="#2f3192" borderColor="#FF698D" />
                                 </a>
                                 <a href="" class="flex items-center gap-2">
                                    <svg class=" shadow-lg rounded-full" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#2f3192" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05" clip-rule="evenodd"/></svg>
                                    <span class=" font-semibold">Play video</span>
                                 </a>
                             </div>
                            <div class="mt-4">
                                <n-space align="flex-end">
                                    <n-avatar
                                    round
                                    size="small"
                                    src="/socials/fb.png"
                                    />
                                    <n-avatar
                                    round
                                    size="medium"
                                    src="/socials/ytube.png"
                                    />
                                    <n-avatar
                                    round
                                    size="large"
                                    src="/socials/tik.png"
                                    />
                                    <n-avatar
                                    round
                                    :size="48"
                                    src="/socials/insta.jpg"
                                    />
                                </n-space>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10">
                        <img ref="heroImage" class="w-full h-full opacity-0" src="/hero/Image.png" alt="hero-img">
                        <div></div>
                    </div>
                </div>
            </div>

        </section>

        <section >

            <n-watermark
            content="Infinite Pathways "
            cross
            selectable
            :font-size="16"
            :line-height="16"
            :width="192"
            :height="128"
            :x-offset="12"
            :y-offset="28"
            :rotate="-15"
            >
            <div class=" md:max-w-[1200px] mx-auto px-4 md:px-0">
               
            </div>
            </n-watermark>
        </section>

        <section>
            <Services/>
        </section>

        <section class=" md:mb-24">
            <Destination/>
        </section>

        <section>
            <AboutUs/>
        </section>


     
            
        <section id="gallery" class="md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0 mt-20">
                
            <!-- <div class="grid grid-cols-4" >

                <div v-for="(i,index) in img" :key="index">
                    <n-image class="w-full" :src="`${i}`" alt="image gallery"/>
                </div>
                

            </div> -->


            <n-carousel :slides-per-view="4" :space-between="20" :loop="false" draggable autoplay>

                <div v-for="(i,index) in img" :key="index">

                    <img
                    class="carousel-img"
                    :src="i"
                    >
                </div>
                
            </n-carousel>

        </section>


        <section class="mt-24">
            <Testimonial/>
        </section>

    </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { NAvatar,NSpace,NImage,NCarousel} from 'naive-ui'

// Refs for elements
const heroText = ref(null);
const heroDesc = ref(null);
const ctaButton = ref(null);
const heroImage = ref(null);
const bgImage = ref(null);


const img = [
    '/img/v1.jpg',
    '/img/v2.jpg',
    '/img/v3.jpg',
    '/img/v4.jpg',
    '/img/v5.jpg',
    '/img/v6.jpg',
    '/img/v7.jpg',
    '/img/v8.jpg',
]

onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(heroText.value, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 0.2 })
      .fromTo(heroDesc.value, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(ctaButton.value, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, "-=0.4")
      .fromTo(heroImage.value, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, "-=0.5")
      .fromTo(bgImage.value, { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, "-=0.5");
});
</script>

<style scoped>
/* Optional: Add this if you want to ensure browser compatibility */
.hero-title {
  background: linear-gradient(to left, #FF698D, #151414,black);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

</style>