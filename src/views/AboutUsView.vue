<template>
    <div class="bg-bgColor text-[#303030]">
      <nav-bar-comp/>
      <AboutCompHero/>
      <AboutCompMission/>
      <AboutCompGoals/>
      <FooterComp/>
    </div>
</template>

<script>
    import AboutCompHero from "@/components/about component/AboutCompHero.vue";
    import AboutCompMission from "@/components/about component/AboutCompMission.vue";
    import NavBarComp from "@/components/global component/NavBarComp.vue";
    import AboutCompGoals from "@/components/about component/AboutCompGoals.vue";
    import FooterComp from "@/components/global component/FooterComp.vue";

    export default {
        components: {
          NavBarComp,
          AboutCompHero,
          AboutCompMission,
          AboutCompGoals,
          FooterComp
        }
    };
</script>