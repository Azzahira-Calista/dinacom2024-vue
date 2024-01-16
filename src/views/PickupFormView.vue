<template>
  <div class="flex space-x-9">
    <PickUpImageComp/>
    <PickUpFormComp/>
  </div>
</template>

<script>
import PickUpFormComp from '@/components/global component/PickUpComp/PickUpFormComp.vue';
import PickUpImageComp from '@/components/global component/PickUpComp/PickUpImageComp.vue';

export default {
  components: {
    PickUpFormComp,
    PickUpImageComp
  }
}
</script>

<style>

</style>