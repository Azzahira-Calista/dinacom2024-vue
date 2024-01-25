<!--<template>-->
<!--  <div class="relative">-->
<!--    <div class="aspect-w-7 aspect-h-2">-->
<!--      <div class="absolute inset-0 bg-black bg-opacity-50"></div>-->
<!--      <img-->
<!--          :src="img[0]"-->
<!--          alt="Background Image"-->
<!--          class="object-cover w-full h-full"-->
<!--      />-->
<!--    </div>-->

<!--    <div class="flex justify-between absolute inset-0">-->
<!--      <div class="flex-1 flex items-center justify-center pl-[16rem]">-->
<!--        <div class="text-start text-white">-->
<!--          <h1 class="font-mont font-bold text-[48px]">Re:cycle</h1>-->
<!--          <p class="font-mont font-normal text-[20px] text-wrap">-->
<!--            Mengolah sampah kembali atau mendaur ulang sampah menjadi sesuatu yang dapat digunakan kembali-->
<!--          </p>-->
<!--          <button-->
<!--              @click="navigateToAboutUs"-->
<!--              class="w-32 h-12 mt-5 bg-[#E88A1B] rounded-[15px] text-xl font-mont text-white font-semibold"-->
<!--          >-->
<!--            About Us-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="relative flex items-center">-->
<!--        <div class="absolute inset-0 bg-white rounded-l-full h-[40rem]"></div>-->
<!--        <img-->
<!--            :src="img[1]"-->
<!--            alt="Image Clippathgroup"-->
<!--            class="object-cover w-full h-full"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<script>
import AOS from "aos";

export default {

  mounted() {
    AOS.init();
  },
//   onMounted(() => {
//   AOS.init();
// }),
  data() {
    return {
      img: [
        require('@/assets/images/MainPage/MainPageHero/bg_hero.jpg'),
        require('@/assets/images/MainPage/MainPageHero/TrashTruck.png'),
      ],
    };
  },
};
</script>

<template>

  <div  class="relative  h-[44.75rem] overflow-hidden ">


    <div class="absolute inset-0 bg-black bg-opacity-50 h-full"></div>
    <img :src="img[0]" class="w-full h-full object-cover"/>

    <div data-aos="fade-up" class="flex justify-between absolute inset-0 w-[26.87rem] m">
      <div class="flex-1 flex items-center justify-center lg:px-[15.62rem] md:px-[2rem] px-10">
        <div class="text-start text-white ">
          <h1 class="font-mont font-bold text-[48px] ">Re:cycle</h1>
          <p class="font-mont font-normal text-[20px] text-wrap md:w-[26.87rem]">
            Mengolah sampah kembali atau mendaur ulang sampah menjadi sesuatu yang dapat digunakan kembali
          </p>
          <router-link to="/about-us">
            <button class="w-40 h-12 mt-5 bg-primary rounded-[15px] text-xl  font-mont text-white font-semibold ">
              Tentang kami
            </button>
          </router-link>

        </div>
      </div>
    </div>

    <div  class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white w-1/2 rounded-l-full h-[25rem] hidden md:block">
      <div class="absolute top-1/2 -right-[10rem] transform -translate-y-1/2 w-[50rem]">
        <img :src="img[1]" class="w-[40rem] h-full object-cover hidden md:block">
      </div>
    </div>


  </div>
</template>
