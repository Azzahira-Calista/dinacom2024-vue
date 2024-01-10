<template>
  <div class="bg-[#FAFCFA] relative">
    <div>
      <div class="font-montserrat font-bold text-[32px] text-[#FF8551]">
        FAQ
      </div>
    </div>
    <img
      :src="img[0]"
      alt="Background Image"
      class="object-cover max-w-[24.375rem] bottom-0 right-0 "
    />
  </div>
</template>

<script>
export default {
  data(){
  return{
     img: [require('@/assets/images/DefaultImage/leaf.png')]
    }
  }
}
</script>

<style>

</style>