<template >
  <div class="w-full h-full bg-bgColor">
    <nav-bar-comp/>
    <hero-comp/>
    <chart-comp/>
    <layanan-comp/>
    <location-comp/>
    <kerajinan-comp/>
    <quote-comp/>
    <f-a-q-comp/>
    <!-- <popup-points-success/> -->
    <footer-comp/>
    <PickUpFormComp/>
  </div>
</template>

<script>

import HeroComp from "@/components/main component/hero component/HeroComp.vue";
import NavBarComp from "@/components/global component/NavBarComp.vue";
import ChartComp from "@/components/main component/chart component/ChartComp.vue";
import LayananComp from "@/components/main component/layanan component/LayananComp.vue";
import LocationComp from "@/components/main component/location component/LocationComp.vue";
import KerajinanComp from "@/components/main component/kerjinan component/KerajinanComp.vue";
import QuoteComp from "@/components/main component/quote component/QuoteComp.vue";
import FooterComp from "@/components/global component/FooterComp.vue";
// import PopupPointsSuccess from "@/components/global component/SuccessTukarPoint.vue";
import FAQComp from "@/components/main component/faq component/FAQComp.vue";
import PickUpFormComp from "@/components/global component/PickUpComp/PickUpFormComp.vue";

export default {
  components: {
    FAQComp,
    KerajinanComp,
    FooterComp,
    QuoteComp,
    LocationComp,
    LayananComp,
    ChartComp,
    NavBarComp,
    HeroComp,
    PickUpFormComp
    // PopupPointsSuccess
  },
};
</script>

<style></style>
