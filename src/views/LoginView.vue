<template>
  <div
    class="h-screen bg-white"
  >
    <div class="md:flex">
      <ImageComp class="hidden md:block"/>
      <InputFormComp/>
    </div>
  </div>
</template>

<script>
import InputFormComp from '@/components/login component/InputFormComp.vue';
import ImageComp from '@/components/login component/ImageComp.vue';

export default {
  components:{
    InputFormComp,
    ImageComp
  }
}
</script>

<style>

</style>