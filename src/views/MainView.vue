<template>
  <div class="w-full h-full bg-bgColor">
    <hero-comp/>
    <chart-comp-vue />
    <layanan-comp/>
    <location-comp/>
    <kerajinan-comp/>
    <quote-comp/>
    <faq-comp/> <!-- Include FAQComp in the template -->
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

export default {
  components: {
    HeroComp,
    ChartCompVue,
    LayananComp,
    locationComp,
    kerajinanComp,
    QuoteComp,
    FaqComp,
  },
};
</script>

<style></style>
