<template>
  <div class="relative">
    <div class="aspect-w-7 aspect-h-2">
<!--      <div -->
<!--        class="absolute inset-1" -->
<!--        style="background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(49, 147, 109, 0.3));">-->
<!--      </div>-->
      <div class="absolute inset-0 bg-black bg-opacity-50 h-full"></div>

      <img
        :src="img[0]"
        alt="Background Image"
        class="object-cover w-full h-full"
      />
      <div class="absolute flex flex-col inset-0 items-center justify-center text-center m-24">
        <p class="font-mont md:text-2xl text-sm text-white max-w-[50rem]">
          “Sampah tidak hanya menciptakan polusi visual, tetapi juga mengancam keberlanjutan hidup kita di planet ini. Setiap orang memiliki tanggung jawab untuk berkontribusi pada solusi”        </p>
        <p class="font-montserrat md:text-2xl text-sm text-white max-w-[50rem]">
            -Sylvia Earle-
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
     img: [
         require('@/assets/images/MainPage/MainPageQuote/MainPageQuoteBackground.jpg'),
         require('@/assets/logo/logo.png'),
     ]
    }
  }
}
</script>

<style>

</style>