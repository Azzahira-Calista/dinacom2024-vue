<template>
  <div>
    <NavBarComp/>
    <SyaratComp/>
    <KebijakanComp/>
  </div>
</template>

<script>
  import SyaratComp from "@/components/main component/syarat component/SyaratComp.vue";
  import KebijakanComp from "@/components/main component/kebijakan component/KebijakanComp.vue";
  import NavBarComp from "@/components/global component/NavBarComp.vue";

  export default {
    components: {
      NavBarComp,
      SyaratComp,
      KebijakanComp
    }
  }
</script>