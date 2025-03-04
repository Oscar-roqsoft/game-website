<template>
  <section ref="servicesSection" class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-16">
      <div class="gap-4">
        <!-- Text Section -->
        <div class="md:w-[50%] opacity-0 transform translate-y-10" ref="textSection">
          <span class="text-[#F17216] border-l-2 text-sm border-[#F17216] px-1.5">Services</span>
          <h2 class="text-[34px] md:text-[44px] font-bold mb-2.5 tracking-wide">
            What We Offer
          </h2>
          <p class="text-[16px] text-[#747582] tracking-wide leading-[20.5px]">
            We will bring the breadth of our experience and industry knowledge to help you succeed.
          </p>
        </div>

        <!-- Cards Section -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div v-for="(i, index) in services" :key="index" 
               class="service-card opacity-0 transform translate-y-10 scale-90"
               ref="serviceCards">
            <div class="py-[16px] bg-slate-100 rounded-md p-4 shadow-sm h-full">
              <!-- SVG Icon -->
              <div class="w-10 mb-4" v-html="i.icon"></div>

              <h4 class="text-[20px] font-semibold">{{ i.title }}</h4>
              <p class="text-[16px] my-4 text-[#747582] tracking-[2%] leading-[20.5px]">
                {{ i.desc }}
              </p>

              <div v-for="(n, idx) in i.items" :key="idx" class="flex">
                <div class="flex space-x-2 space-y-2 justify-center items-center">
                  <div class="h-4 w-4 bg-[#F17216] rounded-full flex justify-center items-center">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark">
                      <path d="M13.707 4.293a1 1 0 0 0-1.414 0L6 10.586 3.707 8.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414z" fill="#FFF"/>
                    </svg>
                  </div>
                  <div class="ml-2 items-center">{{ n }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { NWatermark,NIconWrapper} from 'naive-ui'
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
    



//   import { repeat } from "seemly";
//   import Checkmark16Filled from '@vicons/fluent/Checkmark16Filled'

  
  // gsap.registerPlugin(ScrollTrigger);
  
  const servicesSection = ref(null);
  
  const services = [
  {
    title: "Applications",
    desc:'We assist with visa, scholarship, and study abroad applications, ensuring accuracy and timely submissions. Our experts guide you through the process, making it seamless and stress-free. Let us handle the details while you focus on your future!',
    icon: `<svg fill="#FF698D" viewBox="0 0 24 24"><path d="M4 2h10l6 6v14H4V2zm10 1.5V9h5.5L14 3.5zM6 12h12v2H6v-2zm0 4h12v2H6v-2z"/></svg>`,
    items: [
      "BSc, MSc/PhD Applications",
      "Visa Applications (Student, Spousal & Visiting Visas)",
    ],
  },
  {
    title: "Travel & Pre-Departure Support",
    desc:"We help you prepare for your journey with flight bookings, accommodation, travel insurance, and essential pre-departure guidance. From packing tips to cultural insights, we ensure a smooth transition to your destination. Travel with confidence, knowing you're fully prepared!",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#FF698D" d="m10.775 10.4l-6.25-2.7q-.6-.275-.737-.888t.337-1.087l.4-.4q.2-.2.488-.3t.587-.05l9 1.6l3.1-3.125q.575-.575 1.413-.575t1.412.575t.575 1.413t-.575 1.412l-3.1 3.125L19 18.375q.05.3-.038.6t-.287.5l-.4.375q-.475.475-1.1.35t-.9-.725l-2.675-6.25l-2.55 2.525l.55 3.1q.05.25-.025.488t-.25.412l-.425.425q-.35.35-.862.275t-.763-.525L7.45 16.55l-3.375-1.825q-.45-.25-.525-.762t.275-.863l.425-.425q.175-.175.413-.25t.487-.025l3.075.525z"/></svg>`,
    items: [
      "Accommodation guidance",
      "Flight booking assistance",
      "Settling-in support for new students",
    ],
  },
  {
    title: "Writing Services",
    desc:"We craft resumes, SOPs, and scholarship essays to enhance your applications and boost your success.",
    icon: `<svg fill="#FF698D" viewBox="0 0 24 24">
        <path d="M2 22l2-7 9-9 5 5-9 9-7 2zm3.2-2.6l1.4-1.4 1.8 1.8-1.4 1.4-1.8-1.8zm2.8-2.8l1.4-1.4 1.8 1.8-1.4 
        1.4-1.8-1.8zm2.8-2.8l1.4-1.4 1.8 1.8-1.4 1.4-1.8-1.8zm2.8-2.8l1.4-1.4 
        1.8 1.8-1.4 1.4-1.8-1.8zm2.8-2.8l1.4-1.4 1.8 1.8-1.4 1.4-1.8-1.8z"/></svg>`,
    items: [
      "Scholarship Essays",
      "Cover Letters",
      "Editing Services",
      "Research Proposals/Thesis",
      "Critical Reviews/Assessments",
      "Literature Reviews",
      "Professional/Academic CVs",
      "Statement of Purpose/Personal Statements",
      "CV Reviews",
      "Job Supporting Statement",
    ],
  },
  {
    title: "Consultations",
    desc:'Get expert guidance on visas, scholarships, and travel plans. Our personalized consultations help you navigate requirements, eligibility, and application processes with ease. Let us simplify the journey for you!',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#FF698D" d="M4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h6q.425 0 .713.288T11 3t-.288.713T10 4H4v16h11v-1q0-.425.288-.712T16 18t.713.288T17 19v1q0 .825-.587 1.413T15 22zm3-4q-.425 0-.712-.288T6 17t.288-.712T7 16h5q.425 0 .713.288T13 17t-.288.713T12 18zm0-3q-.425 0-.712-.288T6 14t.288-.712T7 13h3q.425 0 .713.288T11 14t-.288.713T10 15zm2.5-4q-.625 0-1.062-.437T8 9.5v-2q0-.625.438-1.062T9.5 6H11l2.3-2.3q.125-.125.313-.213T14 3.4q.425 0 .713.3t.287.725v8.15q0 .425-.288.725t-.712.3q-.2 0-.387-.087T13.3 13.3L11 11zM19 8.5q0 .825-.325 1.575T17.75 11.4q-.2.2-.475.075t-.275-.45v-5.05q0-.3.275-.437t.475.062q.6.575.925 1.325T19 8.5m2 0q0-1.65-.837-3.05t-2.288-2.2q-.375-.2-.525-.587t0-.763q.15-.4.538-.562t.737.037q2.025 1.05 3.2 2.95T23 8.5t-1.175 4.175t-3.2 2.95q-.35.2-.737.038t-.538-.563q-.15-.375 0-.762t.525-.588q1.45-.8 2.288-2.2T21 8.5"/></svg>`,
    items: ["Alpha/Buddy", "DIY"],
  },
];


// const servicesSection = ref(null);
const textSection = ref(null);
const serviceCards = ref([]); // Will hold references to each card

onMounted(() => {
  // Text Animation (Heading + Paragraph)
  gsap.fromTo(
    textSection.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textSection.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  // Card Animations (Staggered)
  gsap.to(serviceCards.value, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: servicesSection.value,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
  
  

  
   


  </script>
  <style scoped>
  /* Initial state for animations */
  .service-card {
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  }
  </style>