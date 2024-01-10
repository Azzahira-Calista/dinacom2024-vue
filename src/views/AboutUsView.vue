<template>
    <div>
        <AboutCompHero/>
        <AboutCompMission/>
    </div>
</template>

<script>
    import AboutCompHero from "@/components/about component/AboutCompHero.vue";
    import AboutCompMission from "@/components/about component/AboutCompMission.vue";

    export default {
        components: {
            AboutCompHero,
            AboutCompMission
        }
    };
</script>