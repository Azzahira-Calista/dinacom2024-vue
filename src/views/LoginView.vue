<template>
  <div
    class="w-screen h-screen bg-white"
  >
    <div class="flex">
      <ImageComp/>
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