<script>
import PointUser from "@/components/profile component/PointUser.vue";
import axios from "axios";

export default {
  name: "DataUser",
  components: {PointUser},
  data(){
    return{
      name: "",
      email: "",
      icon: require ('@/assets/logo/logout_icon.svg')
    }
  },

  async mounted()
{
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("http://localhost:8000/api/user", config);
  console.log(response.data);

  this.name = response.data.name;
  this.email = response.data.email;
}

  //
  // async created(){
  //   const response = await axios.get("user", {
  //     headers: {
  //       Authorization: `Bearer` + {localStorage.getItem("token")},
  //     },
  //
  //   });
}
</script>

<template>
  <div class=" flex flex-col align-middle font-mont items-center ">
    <div class="bg-secondary mb-[1.25rem] rounded-full w-[12.5rem] h-[12.5rem] cursor-pointer">

    </div>
    <div class="mb-[0.62rem] text-2xl ">
      {{ name }}
    </div>
    <div class="mb-[1.87rem] text-base">
      {{ email }}
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