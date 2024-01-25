<template>
  <div class="bg-bgColor py-[3.12rem] md:px-[15.62rem] relative flex flex-col items-center overflow-hidden">

    <img
        class="absolute bottom-0 -left-20 w-1/4 object-cover -mt-40 transform rotate-[2deg] overflow-hidden"
        :src="img[0]"
        alt="Background Image"
    />
    <img
        class="absolute -top-32 -right-20 w-1/3 object-cover -mt-40 transform rotate-[2deg] overflow-hidden"
        :src="img[1]"
        alt="Background Image"
    />
    <div data-aos="fade-up"
         data-aos-duration="3000">
      <div class=" font-mont font-bold text-[32px] text-primary">
        FAQ
      </div>
      <div class=" text-start font-mont  flex justify-center">

        <div class="mt-5">
          <AccordionComp/>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import AccordionComp from "@/components/main component/faq component/AccordionComp.vue";
export default {
  components:{AccordionComp},
  data(){
    return{
      img: [
        require('@/assets/images/DefaultImage/leaf2024.png'),
        require('@/assets/images/DefaultImage/leaf5.png'),
      ],
    }
  }
}
</script>

<style>

</style>