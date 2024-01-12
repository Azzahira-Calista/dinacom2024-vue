<template>
  <div
    class="w-screen h-screen bg-white"
  >
    <div class="flex">
      <InputFormComp/>
      <ImageComp/>
    </div>
  </div>
</template>

<script>
import InputFormComp from '@/components/register component/InputFormComp.vue';
import ImageComp from '@/components/register component/ImageComp.vue';

export default {
  components:{
    InputFormComp,
    ImageComp
  },
  data() {
    return {
      imgs: require("@/assets/images/register.png"),
    };
  },
};
</script>