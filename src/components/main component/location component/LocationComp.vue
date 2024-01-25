<template>
  <div class="scroll-container md:py-[3.12rem] md:px-[15.62rem]  flex flex-col">
    <div class="font-bold font-mont text-[2rem] text-primary ml-[3rem] md:ml-0 md:mt-0 mt-[3rem]">{{ title }}</div>
    <l-map/>
  </div>
</template>

<script>
import LMap from "@/components/main component/location component/LMap.vue";


export default {
  name: "LocationComp",
  data(){
    return{
      title: "Lokasi re:cycle"
    }
  },
components: {
  LMap
}
}
</script>

<style scoped>

</style>