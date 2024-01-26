<script>
import videoCard from "@/components/main component/kerjinan component/VideoCard.vue";
import AOS from "aos";
export default {
  name: "KerajinanComp",

  mounted() {
    AOS.init();
  },
  data(){
    return {
      img:
        require("@/assets/image/leaf_bg1.svg"),

      title: 'Kerajinan',
      subTitle: 'Kerajinan dari barang bekas adalah proses kreatif mengubah barang-barang terbuang menjadi karya seni atau produk fungsional baru yang memiliki nilai estetika.'
    }
  },
  components: {
    videoCard,
  }
}
</script>

<template>
  <div class="py-[3.12rem] md:px-[15.62rem] px-10 bg-secondaryBgColor relative overflow-hidden">

    <img
        class="absolute -top-20 -left-52 w-[35rem] object-cover transform rotate-[84deg] overflow-hidden"
        :src="img"
        alt="Background Image"
    />
    <img
        class="absolute -bottom-20 -right-52 w-[35rem] object-cover transform rotate-[-90deg] overflow-hidden"
        :src="img"
        alt="Background Image"
    />
    <div data-aos="fade-left">
      <div class="flex flex-col justify-center items-center relative ">
        <div class="font-bold font-mont text-[2rem] text-secondary">{{ title }}</div>
        <div class=" text-base font-mont pb-[3.12rem] pt-2 text-center text-[#303030]">{{ subTitle }}</div>
      </div>
      <video-card/>
    </div>

  </div>
</template>

<style scoped>

</style>