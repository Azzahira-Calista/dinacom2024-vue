<script>
export default {
  name: "AccordionComp",
  data(){
    return{
      img: require('@/assets/icons/MainPage/MainPageFAQ/mingcute_down-fill.svg'),
      question: "Bagaimana cara perhitungan point di platform Recycle?",
      answer: "haloooooooooooooooooo",
      open: false,
      faqs: [
        {
          question: "Bagaimana cara perhitungan point di platform Recycle?",
          answer: "Kami menyediakan fitur point yang dapat ditukarkan dengan uang. Anda dapat menukarkan point anda menjai uang non-tunai melalui beberapa metode yang tersedia.<br/> Setiap >0.5kg sampah = 25 point, 1kg sampah = 50 point, >1.5kg sampah = 100 point, >3kg sampah = 1000 point",
          open: false
        },
        {
          question: "Apa yang terjadi dengan sampah yang saya kumpulkan?",
          answer: "Sampah yang Anda kumpulkan melalui Recycle Platform akan diarahkan ke proses daur ulang atau pengelolaan limbah yang sesuai. Kami berkomitmen untuk memastikan bahwa setiap langkah yang diambil mendukung tujuan keberlanjutan dan pengurangan dampak lingkungan.",
          open: false
        },
        {
          question: "Apakah saya harus membayar untuk menggunakan Recycle Platform?",
          answer: "Tidak, penggunaan Recycle Platform adalah gratis. Kami ingin memberikan kesempatan kepada semua orang untuk berkontribusi dalam upaya menjaga keberlanjutan lingkungan tanpa biaya tambahan.",
          open: false
        },
        {
          question: "Apakah Recycle Platform tersedia di seluruh wilayah?",
          answer: "Saat ini, Recycle Platform telah tersedia di beberapa wilayah. Kami terus memperluas cakupan layanan kami untuk mencakup lebih banyak area dan memberikan kontribusi positif pada skala yang lebih besar.",
          open: false
        },
        {
          question: "Bisakah saya mengumpulkan berbagai jenis sampah di Recycle Platform?",
          answer: "Ya, Recycle Platform mendukung pengumpulan berbagai jenis barang bekas yang dapat didaur ulang. Dari kertas, plastik, logam, hingga barang elektronik, Anda dapat berkontribusi dengan beragam jenis sampah.",
          open: false
        }
      ]
    }
  }
}
</script>

<template>
  <div @click="item.open = !item.open" class="md:w-[59rem] bg-white rounded-[15px] md:m-[2rem] my-[1.5rem]" v-for="(item, index) in faqs" :key="index">
    <div class=" flex items-center justify-between cursor-pointer mx-[1.5rem]">
      <h2 class="md:text-[20px] text-[16px] pr-[1.5rem] py-1 flex items-center">{{ item.question }}</h2>
      <img :src="img">
    </div>
    <p class="p-[1.5rem] md:text-[16px] text-[12px]" :class="item.open ? 'd-block' : 'hidden'">{{ item.answer }}</p>
  </div>
</template>

<style scoped>

</style>