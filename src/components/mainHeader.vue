<template>
    <div class="min-h-[80px] flex items-center border-b fixed top-0 left-0 w-full bg-[#F4F7FA] z-[999]">
      <div class="md:max-w-[1200px] mx-auto w-full px-4 md:px-0">
        <div class="flex justify-between items-center">
          <div class="w-[120px]" @click="navigateTo('/');showNavbar = false;pinia.state.selectedNavMenu = 'home'">
            <!-- <IconsLogo /> -->
             <img class="w-full" src="/logo/8.png" alt="">
             <!-- infinite -->
          </div>
  
          <!-- Desktop Navigation -->
          <div class="hidden md:flex text-[#1D1D1D] text-[16px] font-[400] gap-[16px] max-w-[250px] min-h-10">
          </div>
  
          <!-- Action Buttons -->
          <div class="items-center space-x-6 hidden md:flex  px-4">
            
            <a
              v-for="(item) in navigationItems"
              :key="item.label"
              @click.prevent="navigateTo(item.href,item.label)"
              class="p-[6px_16px] text-[16px] capitalize cursor-pointer hover:border rounded-full hover:border-[#2f3192] hover:text-[#2f3192] transition ease-in-out duration-300"
              :class="pinia.state.selectedNavMenu === item.label ? 'text-[#2f3192]  rounded-full border-[#2f3192]':' border-b-0'"
            >
            
              {{ item.label }}
            </a>
  
            <a href="https://dashboard.belugar.com/" target="_blank">
              <Button name="Let's Talk " textColor="#fff" color="#2f3192" borderColor="#FF698D" />
            </a>

          </div>


 <!-- Mobile Drawer Toggle and Menu -->
       <div class="relative md:hidden flex items-center space-x-6">
            <input v-model="showNavbar" type="checkbox" id="menuToggle" class="hidden" @click="showNavbar = !showNavbar">
            <label for="menuToggle" class="flex flex-col justify-center cursor-pointer">
              <span class="bar top"></span>
              <span class="bar middle"></span>
              <span class="bar bottom"></span>
            </label>
  
            <!-- Mobile Drawer Menu -->
            <aside class="fixed inset-y-0 left-0 z-[998] w-[75%] bg-[#F4F7FA] transform -translate-x-full transition-transform duration-300 ease-in-out" id="mobileDrawer">
              <nav class=" flex flex-col space-y-4">
                <div class="px-5 flex flex-col items-start space-y-4 my-4">
                    <n-button
                      v-for="(item, index) in navigationItems"
                      :key="index"
                      quaternary
                      size="large"
                      @click="navigateTo(item.href,item.label); showNavbar = false"
                    >
                      <span class="text-[18px]  hover:text-[#2f3192]"
                      :class="pinia.state.selectedNavMenu === item.label ? 'text-[#2f3192] ':'text-[#1D1D1D]'"
                      >
                        {{ item.label }}
                      </span>
                    </n-button>
                  </div>


                <div class="border-b "></div>
                    <!-- <div class="px-6">

                      <a href="https://dashboard.belugar.com/" target="_blank">
                        <Button  name="Sign in " textColor="#1D1D1D" color="#2e33380d" height="50px" width="100%"  />
                      </a>

                    </div> -->
                    
                    <div class="px-6 w-full">
                      <a href="https://dashboard.belugar.com/register" target="_blank">
                        <Button name="Let's Talk" height="50px" width="100%" textColor="#fff" color="#2f3192" borderColor="#2f3192"/>
                      </a>
                    </div>

                <!-- <div class="border-b"></div>

                <div class="flex translator px-6 ">
                        <GoogleTranslateSelect
                            default-language-code="en"
                            default-page-language-code="en"
                            :fetch-browser-language="false"
                            trigger="click"
                            @select="handleGoogleTranslateSelect"
                        />
                        
                </div> -->

                
              </nav>
            </aside>

          </div>
  
         

        </div>
      </div>
    </div>
  </template>
  

<script setup>
  import { defineComponent, ref } from 'vue'
  import { NButton, NDropdown } from 'naive-ui'

  import { useStore } from '@/stores/index'

  const pinia = useStore()



  import GoogleTranslateSelect from '@google-translate-select/vue3';
    const visible = ref(false);
    const isFocused = ref(false);


    const showNavbar = ref(false)

    const handleGoogleTranslateSelect = (language) => {
    console.log(language)
    }


    const navigationItems = [
      { label: 'home', href: '/' },
      { label: 'services', href: '/services' },
      { label: 'about-us', href: '/about-us' },
      { label: 'contact', href: '/contact' },
    ]

  const navigateTo = (path,label) => {
    useRouter().push(path)
    pinia.state.selectedNavMenu = label
  }

</script>
  

<style scoped>

  /* Hide checkbox */
  input[type="checkbox"] {
    display: none;
  }


  
  /* Drawer Open/Close Control */
  input[type="checkbox"]:checked ~ aside {
    transform: translateX(0%);
  }
  
  /* Mobile Toggle Button */
  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    cursor: pointer;
  }


  
  .bar {
    display: block;
    background-color: #1D1D1D;
    width: 30px;
    height: 3px;
    transition: transform 0.4s ease, background-color 0.4s ease, width 0.4s ease;
  }
  
  /* Change burger icon to X on open */
  input[type="checkbox"]:checked + label .top {
    transform: translateY(10px) rotate(45deg);
  }
  
  input[type="checkbox"]:checked + label .middle {
    width: 0;
  }
  
  input[type="checkbox"]:checked + label .bottom {
    transform: translateY(-10px) rotate(-45deg);
  }
  
  /* Drawer Styling */
  aside {
    width: 100%;
    background-color: #f4f7fa;
    height: 100vh;
    padding-top: 0px;
    box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.2);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    margin-top: 80px;
    height: 100vh;
    box-shadow: none;
    left: -25px;

  }
  
  @media (min-width: 768px) {
    aside {
      display: none;
    }
  }

 /* .google-translate-select{
  width: 100% !important;
  border-radius: 16px !important;
  padding: 10px;
  background: transparent !important;
  border: 1px solid #1B2537 !important;
  color: #8E9BAE !important;
} */

.translator1 :deep(.google-translate-select .google-translate-select-dropdown__activator){
    width: 120px !important;
    /* border: 1px solid rgb(243, 241, 241); */
    border-radius: 8px;
    height: 40px !important;
    overflow: hidden;
 

}

.translator1 :deep(.google-translate-select .google-translate-select-dropdown__activator:hover){
    backdrop-filter: blur(10px); /* Frosted glass blur */
    background: #2e33380d;
    transition: color .3s cubic-bezier(.4, 0, .2, 1), background-color .3s cubic-bezier(.4, 0, .2, 1), opacity .3s cubic-bezier(.4, 0, .2, 1), border-color .3s cubic-bezier(.4, 0, .2, 1);
}


.translator :deep(.google-translate-select .google-translate-select-dropdown__activator){
    width: 145px !important;
    border-radius: 8px;
    height: 52px !important;
    border: 1px solid rgba(255, 255, 255, 0.3); /* Slight border for glass */
    backdrop-filter: blur(10px); /* Frosted glass blur */
    background: #2e33380d;
    overflow: hidden;
    transition: color .3s cubic-bezier(.4, 0, .2, 1), background-color .3s cubic-bezier(.4, 0, .2, 1), opacity .3s cubic-bezier(.4, 0, .2, 1), border-color .3s cubic-bezier(.4, 0, .2, 1);

}

</style>
  