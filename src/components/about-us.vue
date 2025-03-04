<template>

    <div class="bg-[#282C4B]">

        <div class="container mx-auto px-6 lg:px-16">


            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                <div>
                    <img src="/hero/girl.png" alt="">
                </div>
                <div class=" md:p-6">

                    <div class="">
                        <span class="text-[#F17216] border-l-2 text-sm  border-[#F17216] px-1.5">WHY CHOOSE US</span>
                        <h2 class=" my-2 text-[24px] md:text-[38px] text-[#fff]  font-bold mb-2.5 tracking-wide">Your Pathway to Global Opportunities</h2>
                        <!-- <p class="text-[16px] text-[#747582]  tracking-wide leading-[20.5px]">We will bring the breathe of our experience and industry knowledge to help you succeed</p> -->
                    </div>

                    <div v-for="(i,index) in about_us" :key="index"   class="mb-4">
                        
                        <div class="grid grid-cols-12 justify-center items-center">
                            <div class="h-[25px] w-[25px] bg-[#F17216] rounded-full flex justify-center items-center">
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark">
                                <path d="M13.707 4.293a1 1 0 0 0-1.414 0L6 10.586 3.707 8.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414z" fill="#FFf"/>
                                </svg>
                            </div>
                            <div class="ml-2 items-center col-span-11 text-[#CED1E5]">
                               {{ i }}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    
    
    
        </div>
    </div>

</template>


<script setup>

  const about_us = [
    'Expert Guidance - Our team has an extensive knowledge UK, US, EU study and visa requirement',
    'Personalized Support - We tailor our services to your specific needs',
    'Proven Success - A track record of successfully securing admissions and Visas',
    'Affordable and Transparent - No hidden fees, just reliable service',
    'End-To-End Assistance - From application to arrival,we guide you and your every step of the way'

  ]
</script>