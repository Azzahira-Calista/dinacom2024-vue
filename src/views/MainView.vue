
<template >

  <div class="w-full h-full bg-bgColor">
    <nav-bar-comp/>
    <landing-comp-hero/>
    <chart-comp-vue />
    <landing-comp-layanan/>
    <location-comp/>
    <kerajinan-comp/>
    <landing-page-quote/>
    <landing-comp-f-a-q/>

    <footer-comp/>
  </div>
</template>

<script>
import HeroComp from "@/components/main component/hero component/HeroComp.vue";
import ChartCompVue from "@/components/main component/chart component/ChartComp.vue";
import LayananComp from "@/components/main component/layanan component/LayananComp.vue";
import locationComp from "@/components/main component/location component/LocationComp.vue";
import kerajinanComp from "@/components/main component/kerjinan component/KerajinanComp.vue";
import QuoteComp from "@/components/main component/quote component/QuoteComp.vue";
import FaqComp from "@/components/main component/faq component/FAQComp.vue";
import footerComp from "@/components/global component/FooterComp.vue";
import navBarComp from "@/components/global component/NavBarComp.vue";
import landingCompHero from "@/components/LandingComponent/LandingCompHero/LandingCompHero.vue";
import landingCompLayanan from "@/components/LandingComponent/LandingCompLayanan/LandingCompLayanan.vue";
import LandingPageQuote from "@/components/LandingComponent/LandingPageQuote/LandingPageQuote.vue";
import LandingCompFAQ from "@/components/LandingComponent/LandingCompFAQ/LandingCompFAQ.vue";

export default {
  components: {
    LandingCompFAQ,
    LandingPageQuote,
    landingCompHero,
    landingCompLayanan,
    ChartCompVue,
    LayananComp,
    locationComp,
    kerajinanComp,
    footerComp,
    navBarComp

  },
};
</script>

<style></style>
