<template>
  <div class="w-full h-[100rem] bg-bgColor">
    <nav-bar-comp/>
    <profile-comp/>
  </div>

</template>

<script>
import profileComp from "@/components/profile component/ProfileComp.vue";
import navBarComp from "@/components/global component/NavBarComp.vue";

export default {
components:{
  profileComp,
  navBarComp
}
}
</script>

<style>

</style>