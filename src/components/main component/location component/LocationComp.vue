<template>
  <div class="py-[3.12rem] px-[15.62rem]  flex flex-col">
    <div class="font-bold font-mont text-[2rem] text-primary ">{{ title }}</div>
    <l-map/>
  </div>
</template>

<script>
import LMap from "@/components/main component/location component/LMap.vue";


export default {
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