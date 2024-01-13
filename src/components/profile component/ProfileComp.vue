<template>
  <div class="w-full h-full relative">
    <div class="relative">
      <img :src="bgImg" class="w-full" alt="Background Image">
      <div class="absolute inset-0 bg-black opacity-30"></div>
    </div>
    <div class="px-[13.12rem] absolute flex ">
      <div class="-mt-32 mr-[5.25rem]">
        <data-user/>
      </div>
      <div class="mt-24 ">
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