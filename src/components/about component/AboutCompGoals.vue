<script>
import AOS from "aos";

export default {
  name: "AboutCompGoals",
  components: {},
  mounted() {
    AOS.init();
  },
  data() {
    return {
      title: "Goals Kami",
      image: require('@/assets/images/about_us_goals.png'),
      items: [
        {
          no: 1,
          text: "Meningkatkan Kebersihan Lingkungan"
        }, {
          no: 2,
          text: "Hai"
        }, {
          no: 3,
          text: "Hallo"
        }, {
          no: 4,
          text: "Log"
        }
      ],
    }
  }
}
</script>

<template>
  <div>
    <div class="h-[40rem] items-center justify-center font-mont font-bold mt-12 mb-20">
      <h2 class="text-center mt-3.5 mb-5 text-[2rem]">{{ title }}</h2>
      <div class="flex space-x-5 h-[34rem] justify-center">
        <div data-aos="fade-left" class="flex flex-col justify-center items-center w-[43rem]">
          <img :src="image" class="w-full h-full">
        </div>
        <div data-aos="fade-right" data-aos-duration="3000" class="flex flex-col items-center w-[45rem] py-16 justify-center" >
          <div v-for="(item, index) in items" :key="index">
            <div class="flex justify-start relative items-center w-[45rem] my-3.5">
              <div class="absolute flex ms-2 w-12 h-12 items-center justify-center bg-primary rounded-full">
                <p class="text-white">{{ item.no }}</p>
              </div>
              <div class="py-1 ps-11 ms-6 max-w-[45rem] pe-2 bg-bgColor text-justify text-[1.25rem]">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>