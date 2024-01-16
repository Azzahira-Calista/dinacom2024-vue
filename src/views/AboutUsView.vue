<template>
    <div class="bg-bgColor text-[#303030]">
      <nav-bar-comp/>
        <AboutCompHero/>
        <AboutCompMission/>
    </div>
</template>

<script>
    import AboutCompHero from "@/components/about component/AboutCompHero.vue";
    import AboutCompMission from "@/components/about component/AboutCompMission.vue";
    import NavBarComp from "@/components/global component/NavBarComp.vue";

    export default {
        components: {
          NavBarComp,
            AboutCompHero,
            AboutCompMission
        }
    };
</script>