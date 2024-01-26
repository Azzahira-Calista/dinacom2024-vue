<template>
    <div class="font-mont flex relative justify-center items-center mt-[5rem]">
        <div class="absolute max-w-[45rem] text-center text-0.5 md:text-[1.25rem]" data-aos="fade-up">
            <p class="text-white mx-8">{{ text }}</p>
        </div>
        <div>
            <img :src="image" class="h-[44.3125rem] w-screen object-cover"/>
        </div>
    </div>
</template>

<script>
    import AOS from "aos";

    export default{
        components: {},
      mounted() {
        AOS.init();
      },
        data(){
            return{
                text: 'Mengajak dan memberdayakan masyarakat untuk mengadopsi kebiasaan positif dalam pengelolaan sampah. Kami berkomitmen untuk mencegah sampah berakhir di tempat pembuangan akhir, mengurangi dampak lingkungan, dan menciptakan ekosistem yang lebih berkelanjutan.',
                image: require('@/assets/images/about_us_bg.png')
            }
        }
    };
</script>