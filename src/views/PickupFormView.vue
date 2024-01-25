<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <!--    <PickUpImageComp/>-->
          <PickUpFormComp/>
    </div>
  </div>
</template>

<script>
import PickUpFormComp from '@/components/global component/PickUpComp/PickUpFormComp.vue';
// import PickUpImageComp from '@/components/global component/PickUpComp/PickUpImageComp.vue';

// import axios from "axios";

export default {
  components: {
    PickUpFormComp,
    // PickUpImageComp
  },
  // data() {
  //   return {
  //     dataPick: []
  //   }
  // },
  // mounted() {
  //   axios.get(
  //       "http://127.0.0.1:8000/api/pick-up"
  //   ).then(response => console.log(response.data))
  // }
}
</script>

<style>

</style>