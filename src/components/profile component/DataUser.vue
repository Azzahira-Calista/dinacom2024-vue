<script>
import PointUser from "@/components/profile component/PointUser.vue";

export default {
  name: "DataUser",
  components: {PointUser},
  data(){
    return{
      icon: require ('@/assets/logo/logout_icon.svg')
    }
  }
}
</script>

<template>
  <div class=" flex flex-col align-middle font-mont items-center ">
    <div class="bg-secondary mb-[1.25rem] rounded-full w-[12.5rem] h-[12.5rem] cursor-pointer">

    </div>
    <div class="mb-[0.62rem] text-2xl ">
      Username
    </div>
    <div class="mb-[1.87rem] text-base">
      Gmail
    </div>
    <point-user/>
    <div class=" mt-[1.87rem] flex align-middle justify-center content-center items-center mr-auto cursor-pointer">
      <div>
        <img :src="icon">
      </div>
       <div class="ml-[20px] text-center text-red-600 font-mont mr-auto">Logout</div>
    </div>

  </div>
</template>

<style scoped>

</style>