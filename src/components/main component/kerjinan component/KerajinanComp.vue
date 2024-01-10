<script>
import videoCard from "@/components/main component/kerjinan component/VideoCard.vue";
export default {
  name: "KerajinanComp",

  data(){
    return {
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
  <div class="py-[3.12rem] px-[15.62rem] bg-secondaryBgColor">
    <div class="flex flex-col  justify-center items-center relative ">
      <div class="font-bold font-mont text-[2rem] text-secondary">{{ title }}</div>
      <div class=" text-base font-mont pb-[3.12rem] pt-2 text-center">{{ subTitle }}</div>
    </div>
    <video-card/>
  </div>
</template>

<style scoped>

</style>