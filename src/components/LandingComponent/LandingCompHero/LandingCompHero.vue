<template>
  <div class="relative">
    <div class="aspect-w-7 aspect-h-2">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <img
        :src="img[0]"
        alt="Background Image"
        class="object-cover w-full h-full"
      />
    </div>

    <div class="flex justify-between absolute inset-0">
      <div class="flex-1 flex items-center justify-center pl-[16rem]">
        <div class="text-start text-white">
          <h1 class="font-montserrat font-bold text-[48px]">Re:cycle</h1>
          <p class="font-montserrat font-normal text-[20px] text-wrap">
            Mengolah sampah kembali atau mendaur ulang sampah menjadi sesuatu yang dapat digunakan kembali
          </p>
          <button
            @click="navigateToAboutUs"
            class="w-32 h-12 mt-5 bg-[#E88A1B] rounded-[15px] text-white font-bold"
          >
            About Us
          </button>
        </div>
      </div>

    <div class="relative flex items-center">
      <div class="absolute inset-0 bg-white rounded-l-full h-[40rem]"></div>

      <img
        :src="img[1]"
        alt="Image Clippathgroup"
        class="object-cover w-full h-full"
      />
    </div>

    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
     img: [require('@/assets/images/LandingPage/LandingPageHero/bg_hero.jpg'),
     require('@/assets/images/LandingPage/LandingPageHero/TrashTruck.png'),]
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>