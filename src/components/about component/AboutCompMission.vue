<template>
    <div class="flex relative justify-center items-center mt-[5rem]">
        <div class="absolute max-w-[38rem] text-center text-[1.25rem]">
            <p class="text-white">{{ text }}</p>
        </div>
        <div>
            <img :src="image" class="h-[44.3125rem] w-screen object-cover"/>
        </div>
    </div>
</template>

<script>
    export default{
        components: {},
        data(){
            return{
                text: 'Mengajak dan memberdayakan masyarakat untuk mengadopsi kebiasaan positif dalam pengelolaan sampah. Kami berkomitmen untuk mencegah sampah berakhir di tempat pembuangan akhir, mengurangi dampak lingkungan, dan menciptakan ekosistem yang lebih berkelanjutan.',
                image: require('@/assets/images/about_us_bg.png')
            }
        }
    };
</script>