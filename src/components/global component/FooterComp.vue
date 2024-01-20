<template>

  <div class="py-[3.12rem] bg-primary flex flex-col font-mont text-white relative overflow-hidden">
    <div class="relative ">
      <img
          class="absolute bottom-0 -right-10 w-1/4 h-auto object-cover -mb-96 transform rotate-[-8deg]"
          :src="img"
          alt="Background Image"
      />
    </div>
    <div class="px-[15.62rem]">
      <div class="flex justify-between ">
        <div class="flex flex-col ">
          <h2 class="text-2xl font-bold mb-[1.87rem]">re:cycle</h2>
          <div class="w-[25rem]">{{ desc }}</div>
        </div>
        <div class="flex flex-col ml-[9.68rem] ">
          <h2 class="text-2xl font-bold mb-[1.87rem]">Layanan</h2>
          <div class="cursor-pointer"  v-for="(item, index) in layanan" :key="index" @click="handleLayananClick(item)">
            {{ item.text }}
          </div>
        </div>
        <div class="flex flex-col">
          <h2 class="text-2xl font-bold mb-[1.87rem]">Eksplor</h2>
          <div class="cursor-pointer"  v-for="(item, index) in eksplor" :key="index" @click="handleEksplorClick(item)">
            {{ item.text }}
          </div>
        </div>
      </div>
      <hr class="cursor-none w-full w-full bg-white border-1 mb-[2rem] mt-[5rem]"/>
      <div>{{ cr }}</div>
    </div>
    </div>


</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      img: require ('@/assets/image/leaf_bg3.svg'),
      cr: 'copyright © re:cycle 2024 ️',
      desc: "Kami mengajak anda untuk membangun kebiasaan baru untuk mengelola sampah, guna mendukung terciptanya ekosistem yang ideal bagi lingkungan kita.",
      layanan: [
        { text: 'Drop off', link: '/login' },
        { text: 'Pick up', link: '/page2' },
        { text: 'Point', link: '/page3' },
        { text: 'Tutorial recycle', link: '/page4' }
      ],
      eksplor: [
        { text: 'FAQ', link: '/login' },
        { text: 'Kebijakan pribadi', link: '/syarat-kebijakan' },
        { text: 'Kontak kami (+62)81808893706', link: '/' },
        { text: 'Syarat & ketentuan', link: '/syarat-kebijakan' }
      ]
    };
  },
  methods: {
    handleLayananClick(link) {
      window.location.href = link;
    },
    handleEksplorClick(item) {
      this.$router.push({ path: item.link });
    }
  }
};
</script>

<style scoped>
</style>
