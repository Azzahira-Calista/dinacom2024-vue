<script>
// import axios from "axios";

import axios from "axios";

export default {
  name: "PointUser",
  data() {
    return {
      heading: "Riwayat Pick Up",
      point: null
    };
  },
  methods: {
    async points(){
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`https://dinacom.unisains.com/api/data-user`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log("ini data");
        console.log(response);
        this.point = response.data.points;

        console.log(this.point)
        // console.log(this.dataPickup[0].detail_location)
      }catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.points()
  }
}
</script>

<template>
<div class="flex w-[18rem] align-middle items-center p-[20px] bg-white rounded-[1rem] shadow-lg ">
  <p class="mr-[20px] text-primary">Point</p>
  <div class="text-xl">{{ point }}</div>
</div>
</template>

<style scoped>

</style>