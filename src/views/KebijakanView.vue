<template>
  <div>
    <NavBarComp/>
    <SyaratComp/>
    <KebijakanComp/>
    <footer-comp/>
  </div>
</template>

<script>
  import SyaratComp from "@/components/main component/syarat component/SyaratComp.vue";
  import KebijakanComp from "@/components/main component/kebijakan component/KebijakanComp.vue";
  import NavBarComp from "@/components/global component/NavBarComp.vue";
  import FooterComp from "@/components/global component/FooterComp.vue";

  export default {
    components: {
      FooterComp,
      NavBarComp,
      SyaratComp,
      KebijakanComp
    }
  }
</script>