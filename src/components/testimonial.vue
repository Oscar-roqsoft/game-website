<template>

    <div class="bg-[#f4f4f7]  py-4">

        <div  class="container mx-auto px-6 lg:px-16">
            <div class="md:max-w-[440px] ">
                <span class="text-[#F17216] border-l-2 text-sm  border-[#F17216] px-1.5">Testimonial</span>
                <h2 class=" text-[34px] md:text-[44px] font-bold mb-2.5 tracking-wide">What Our 
                    Client’s Say</h2>
            </div>
        </div>
        <div  class="bg-[url('/test/bg.png')] bg-cover bg-center">

            <div  class="container mx-auto px-6 lg:px-16">

                <div class="md:min-h-[600px] min-h-[340px]  mt-10 relative " >
    
                    <div class=" grid md:grid-cols-2 relative">
    
                        <div class="hidden md:block"></div>
    
                        <div class=" md:order-2 relative md:-top-10">
    
                            <n-carousel
                                autoplay
                                effect="custom"
                                :transition-props="{ name: 'creative' }"
                                show-arrow
                                style="width: 100%;max-width: 450px; height: 260px;background: #fff;border-radius: 10px; padding: 20px;"
                            >
    
                                <div v-for="(i,index) in 4" :key="index">
                                    <div class="p-4">
    
                                        <svg class="mb-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M15 0H1C.45 0 0 .45 0 1v9.96c0 .55.45 1 1 1h2v3.34c0 .45.54.67.85.35l3.69-3.69H15c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1m-4.52 2.28L8.52 6h1.51c.24 0 .25.16.01.39l-4.13 3.89c-.36.32-.44.08-.34-.21L7 6H5.69c-.16 0-.23-.16-.17-.32l1.46-3.4c.07-.15.25-.28.41-.28h2.93c.15 0 .22.13.16.28"/></svg>
    
                                        <p>I really like the team for example, a relationship-focused performance expectation might be that
                                             the employee sustain collegial working relationships with her peers, subordinates and customers
                                        </p>
    
                                        <div class="flex items-center mt-6 gap-x-4">
    
                                            <n-avatar
                                                round
                                                size="medium"
                                                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                                            />
                                            <span>Emenike ,Roqsoft.</span>
                                        </div>
    
                                    </div>
                                </div>
                               
                            </n-carousel>
                        </div>
                    </div>
    
                </div>
            </div>


        </div>

    </div>
    
</template>

<script setup>
import { NAvatar,NSpace,NImage,NCarousel} from 'naive-ui'

</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}
</style>