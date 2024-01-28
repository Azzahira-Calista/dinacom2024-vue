<template>
  <div class="w-full h-full relative bg-bgColor">
    <div class="relative  h-56">
      <img :src="bgImg" class="w-full h-full" alt="Background Image">
      <div class="absolute inset-0 bg-black opacity-30"></div>
    </div>
    <div class="md:px-[9rem] mx-[1.5rem] absolute flex flex-col">
      <div class="-mt-20 mr-[5.25rem]">
        <data-user/>
      </div>
      <div class="mt-16">
        <history-user/>
      </div>
    </div>
  </div>
</template>
<script>
import DataUser from "@/components/profile component/DataUser.vue";
import HistoryUser from "@/components/profile component/HistoryUser.vue";

export default {
  name: "ProfileComp",
  components: {HistoryUser, DataUser},
  data() {
    return {
      bgImg: require('@/assets/image/account_page_bg.jpg')
    };
  }
};
</script>

<style scoped>

</style>