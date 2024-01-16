<template>
  <div class="w-full h-full bg-bgColor">
    <hero-comp/>
    <chart-comp-vue />
    <layanan-comp/>
    <location-comp/>
    <kerajinan-comp/>
    <quote-comp/>
    <faq-comp/>
    <syarat-comp/>
    <kebijakan-comp/>
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
import footerComp from "@/components/global component/FooterComp.vue";
import FaqComp from '@/components/main component/faq component/FaqComp.vue';
import SyaratComp from '@/components/main component/syarat component/SyaratComp.vue';
import KebijakanComp from '@/components/main component/kebijakan component/KebijakanComp.vue';

export default {
  components: {
    HeroComp,
    ChartCompVue,
    LayananComp,
    locationComp,
    kerajinanComp,
    QuoteComp,
    FaqComp,
    SyaratComp,
    KebijakanComp,
    footerComp
  },
};
</script>

<style></style>
