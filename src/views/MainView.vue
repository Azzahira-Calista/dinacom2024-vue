<template>
  main view
  <!-- <router-link class="text-gray-500" :to="{ name: 'login page' }">Login</router-link> -->
  <div class="w-screen h-screen bg-bgColor">

    <chart-comp-vue />
  </div>

</template>

<script>
import ChartCompVue from "@/components/main component/chart component/ChartComp.vue";

export default {
  components: {
    ChartCompVue,

  },
};
</script>

<style></style>
