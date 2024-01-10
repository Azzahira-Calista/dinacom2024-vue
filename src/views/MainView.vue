<template >
  <div class="w-full h-full bg-bgColor">
    <chart-comp-vue />
    <location-comp/>
    <kerajinan-comp/>
    <footer-comp/>
  </div>

</template>

<script>
import ChartCompVue from "@/components/main component/chart component/ChartComp.vue";
import locationComp from "@/components/main component/location component/LocationComp.vue";
import kerajinanComp from "@/components/main component/kerjinan component/KerajinanComp.vue";
import footerComp from "@/components/global component/FooterComp.vue";


export default {
  components: {
    ChartCompVue,
    locationComp,
    kerajinanComp,
    footerComp

  },
};
</script>

<style></style>
