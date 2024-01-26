<template>
    <div class="md:mt-[3.75rem] md:flex bg-bgColor"  data-aos="fade-up">

      <div class="w-30 md:w-[40rem]">
        <img :src="image" alt="Trash Pic" class="h-full w-full object-cover"/>
      </div>
        <div class="font-mont flex flex-column justify-center items-center mx-4 md:ml-[5rem]">
          <div>
            <h2 class="mb-[1.875rem] md:text-[2rem] text-1 font-mont font-bold">{{ title }}</h2>
            <p class="max-w-[29rem] mb-[1.25rem] md:text-[1.25rem] text-0.5 text-justify">{{ description }}</p>
            <p class="max-w-[29rem] md:text-[1.25rem] text-0.5 text-justify">{{ description2 }}</p>
          </div>
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
            return {
                title: 'Tentang Kami',
                description: 'Recycle, sebuah inisiatif yang didedikasikan untuk menciptakan perubahan positif dalam pengelolaan sampah dan keberlanjutan lingkungan.',
                description2: 'Kami adalah tim yang terdiri dari individu-individu bersemangat yang percaya bahwa setiap langkah kecil dapat membawa dampak besar terhadap ekosistem.',
                image: require('@/assets/images/about_us.png')
            }
        }
    };
</script>