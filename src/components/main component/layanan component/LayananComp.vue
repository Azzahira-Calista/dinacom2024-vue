<template>
  <div
      ref="LayananComp"
      class="scroll-container bg-[#96C67F] bg-opacity-20 md:px-[16rem] items-center  pt-10 flex-col flex relative overflow-hidden"
  >
    <img
      class="absolute -bottom-28 -right-16 w-1/4 object-cover transform rotate-[173deg] overflow-hidden"
      :src="img[3]"
      alt="Background Image"
    />

    <div data-aos="fade-up">
      <div class="font-mont font-bold text-[32px] text-secondary flex justify-center">
        Layanan
      </div>

      <div class="grid-cols-3 md:flex md:flex-row flex flex-col justify-between mt-10">
        <div class="font-mont h-[30rem] flex-row flex-wrap items-center justify-center text-center text-neutral-800">
          <div class="shadow-xl flex w-[18rem] h-[22.5rem] flex-col items-center gap-y-7 rounded-[15px] bg-white px-7 pb-14 pt-8 box-shadow-md">
            <div class="flex justify-center text-xl font-bold">Pick up</div>
            <div class="h-24 w-20">
              <img
                  :src="img[0]"
                  alt="Image Clippathgroup"
                  class="object-cover w-full h-full"
              />
            </div>
            <div class="flex justify-center self-stretch text-base font-normal leading-normal">
              Kami akan menjemput sampah anda, anda hanya perlu mengisi data dari
              kami
            </div>
          </div>
        </div>
        <div class="md:mx-10 font-mont h-[30rem] flex-row flex-wrap items-center justify-center text-center text-neutral-800">
          <div class="shadow-xl flex w-[18rem] h-[22.5rem] flex-col items-center gap-y-7 rounded-[15px] bg-white px-7 pb-14 pt-8 box-shadow-md">
            <div class="flex justify-center text-xl font-bold">Drop off</div>
            <div class="h-24 w-20">
              <img
                  :src="img[1]"
                  alt="Image Clippathgroup"
                  class="object-cover w-full h-full"
              />
            </div>
            <div
                class="flex justify-center self-stretch text-base font-mont leading-normal"
            >
              Antar langsung sampah ke tempat re:cycle terdekat, anda dapat mendaur
              ulang sampah yang ukurannya tidak terlalu besar
            </div>
          </div>
        </div>
        <div class="font-mont h-[30rem] flex-row flex-wrap items-center justify-center text-center text-neutral-800">
          <div
              class="shadow-xl flex w-[18rem] h-[22.5rem] flex-col items-center gap-y-7 rounded-[15px] bg-white px-7 pb-14 pt-8 box-shadow-md"
          >
            <div class="flex justify-center text-xl font-bold">Point</div>
            <div class="h-24 w-20">
              <img
                  :src="img[2]"
                  alt="Image Clippathgroup"
                  class="object-cover w-full h-full"
              />
            </div>
            <div
                class="flex justify-center self-stretch text-base font-normal leading-normal"
            >
              Kami akan mengkonversi berat sampah anda menjadi mata uang digital
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

// import { EventBusPlugin } from '@/eventBus';

export default {
  name: "LayananComp",
  inject: ["eventBus"],

  data() {
    return {
      img: [
        require("@/assets/icons/MainPage/MainPageLayanan/PickupMainPageLayanan.svg"),
        require("@/assets/icons/MainPage/MainPageLayanan/DropoffMainPageLayanan.svg"),
        require("@/assets/icons/MainPage/MainPageLayanan/PointsMainPageLayanan.svg"),
        require("@/assets/images/DefaultImage/leaf2031.png"),
      ],
    };
  },
  // methods: {
  //   scrollToBottom() {
  //     this.$refs.layanan.scrollTo({
  //       top: this.$refs.layanan.scrollHeight,
  //       behavior: 'smooth'
  //     });
  //   }
  // }

  mounted() {
    this.eventBus.on("scrollToBottom", () => {
      this.$refs.LayananComp.scrollTo({
        top: this.$refs.LayananComp.scrollHeight,
        behavior: "smooth",
      });
    });
  },
};
</script>

<style scoped>

</style>
