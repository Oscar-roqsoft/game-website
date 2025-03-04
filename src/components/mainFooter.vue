<template>
    <footer class="mt-20 py-12 text-white bg-[#282C4B] relative overflow-hidden">
      <!-- Parallax Background -->
      <div class="absolute bottom-0 left-0 w-full h-[300px] overflow-hidden z-0">
        <div class="absolute inset-0 bg-repeat-x bg-bottom animate-parallax" style="background-image: url(https://i.ibb.co/nQM4PGJ/arbres.png);"></div>
        <div class="absolute inset-0 bg-repeat-x bg-bottom animate-parallax-fast" style="background-image: url(https://i.ibb.co/RQhDWbk/premierplanv3.png);"></div>
        <div class="absolute inset-0 bg-repeat-x bg-bottom animate-parallax-medium" style="background-image: url(https://i.ibb.co/J3TjC4W/second-plan.png);"></div>
        <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[150px] h-[200px] bg-no-repeat bg-contain animate-moto" style="background-image: url(https://i.ibb.co/JCGfFJd/moto-net.gif);"></div>
        <div class="absolute bottom-5 left-1/2 ml-[250px] w-[206px] h-[114px] bg-no-repeat bg-contain animate-voiture" style="background-image: url(https://i.ibb.co/0Qhp4DN/voiture-fumee.gif);"></div>
      </div>
  
      <!-- Footer Content -->
      <div class="relative z-50 container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/3">

                <div class="w-[190px]">
                    <img src="/logo/7.png" alt="">
                </div>

            </div>
          <!-- Links -->
          <div class="w-full mt-6 md:mt-0 md:w-1/3">
            <h3 class="text-xl font-semibold flex items-center">
              <i data-feather="shopping-bag"></i>
              <span class="ml-2">Links</span>
            </h3>
            <nav>
              <ul class="space-y-2  mt-4">
                <li><a href="#home" class="hover:text-gray-400">Home</a></li>
                <li><a href="#services" class="hover:text-gray-400">Services</a></li>
                <li><a href="#about-us" class="hover:text-gray-400">About Us</a></li>
                <!-- <li><a href="#" class="hover:text-gray-400">Contact</a></li> -->
                <!-- <li><a href="#" class="hover:text-gray-400">Règlement concours</a></li> -->
              </ul>
            </nav>
          </div>
  
          <!-- social media -->
          <div class="w-full mt-6 md:mt-0 md:w-1/3">
            <h3 class="text-xl font-semibold flex items-center">
              <i data-feather="share-2"></i>
              <span class="ml-2">Social Media  links</span>
            </h3>
            <nav>
              <ul class="space-y-2 mt-4">
                <li><a href="https://youtube.com/@infinitepathways5?si=pwKtqO6JPUOLhXKC"
                  target="_blank" class="flex items-center hover:text-gray-400"><i data-feather="youtube"></i> <span class="ml-2">YouTube</span></a></li>
                <li><a href="https://www.facebook.com/share/15k3hxUV2u/?mibextid=wwXIfr" 
                  target="_blank" class="flex items-center hover:text-gray-400"><i data-feather="facebook"></i> <span class="ml-2">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/infinitepathways.uk/?utm_source=ig_contact_invite" 
                  target="_blank" class="flex items-center hover:text-gray-400"><i data-feather="instagram"></i> <span class="ml-2">Instagram</span></a></li>

                <li><a href="https://www.tiktok.com/@infinite.pathways?_t=ZN-8uHVBY0PxWo&_r=1"
                  target="_blank" class="flex items-center hover:text-gray-400"><i data-feather="instagram"></i> <span class="ml-2">Tiktok</span></a></li>
              </ul>
            </nav>
          </div>
  
          <!-- Contact -->
          <div class="w-full mt-6 md:mt-0 md:w-1/3">
            <h3 class="text-xl font-semibold flex items-center">
              <i data-feather="send"></i>
              <span class="ml-2">Contact</span>
            </h3>
            <nav>
              <ul class="mt-4 space-y-2">
                <li><a href="mailto:contact.laboiserie@gmail.com" class="hover:text-gray-400">
                    Email: info@infinitepathways.uk 
                </a></li>
                <li><a href="mailto:contact.laboiserie@gmail.com" class="hover:text-gray-400">
                    Phone No: +234 8139 251145

                </a></li>
                <li><a href="mailto:contact.laboiserie@gmail.com" class="hover:text-gray-400">
                    Call: +44 7876 210359 

                </a></li>
                <li><a href="mailto:contact.laboiserie@gmail.com" class="hover:text-gray-400">
                    WhatsApp: +44 7448 805912
                </a></li>
              </ul>
            </nav>
          </div>
        </div>
  
        <!-- Footer Copyright -->
        <div class="mt-8 pt-4 border-t border-gray-700 text-center">
            <div class=" text-[#ffff] font-[400] flex item-center md:justify-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M22.4414 12.333C22.4414 17.8558 17.9642 22.333 12.4414 22.333C6.91856 22.333 2.44141 17.8558 2.44141 12.333C2.44141 6.81016 6.91856 2.33301 12.4414 2.33301C17.9642 2.33301 22.4414 6.81016 22.4414 12.333Z" stroke="#fff" stroke-width="1.5"/>
                        <path d="M15.4414 14.333C15.4414 15.4376 14.546 16.333 13.4414 16.333H12.4414C11.5095 16.333 11.0436 16.333 10.676 16.1808C10.186 15.9778 9.79664 15.5884 9.59365 15.0984C9.44141 14.7308 9.44141 14.2649 9.44141 13.333V11.333C9.44141 10.4011 9.44141 9.93519 9.59365 9.56764C9.79664 9.07759 10.186 8.68824 10.676 8.48525C11.0436 8.33301 11.5095 8.33301 12.4414 8.33301H13.4414C14.546 8.33301 15.4414 9.22844 15.4414 10.333" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <p class=" ml-[4px]">2024  Infinite Pathways. All rights reserved</p>
            </div> 
            <p class=" ml-[4px]">Built by 
              <a href="https://roqsoft.com/" target="_blank" class="text-[#F17216] underline">
                 Roqsoft.
              </a>
            </p>
      
         </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import feather from 'feather-icons';
  
  onMounted(() => {
    feather.replace(); // Initialize feather icons
  });
  </script>
  
  <style scoped>
  @keyframes parallax {
    0% { background-position: 260px; }
    100% { background-position: -10000vw; }
  }
  @keyframes parallax-fast {
    0% { background-position: 260px; }
    100% { background-position: -5000vw; }
  }
  @keyframes parallax-medium {
    0% { background-position: 260px; }
    100% { background-position: -6000vw; }
  }
  @keyframes moto {
    0% { transform: translateY(0) rotate(0); }
    25% { transform: translateY(60px) rotate(-20deg); }
    50% { transform: translateY(0) rotate(1deg); }
    75% { transform: translateY(60px) rotate(20deg); }
    100% { transform: translateY(0) rotate(0); }
  }
  @keyframes voiture {
    0% { transform: rotate(0); }
    25% { transform: rotate(-5deg); }
    50% { transform: rotate(0); }
    75% { transform: rotate(5deg); }
    100% { transform: rotate(0); }
  }
  
  .animate-parallax { animation: parallax 600s linear infinite; z-index: 0; }
  .animate-parallax-fast { animation: parallax-fast 500s linear infinite; z-index: 0; }
  .animate-parallax-medium { animation: parallax-medium 600s linear infinite; z-index: 0; }
  .animate-moto { animation: moto 5s linear infinite; z-index: 1; }
  .animate-voiture { animation: voiture 1s linear infinite; z-index: 1; }
  </style>
  