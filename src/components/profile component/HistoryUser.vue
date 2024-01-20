<script>
import axios from "axios";

export default{
  components: {},
  data() {
    return {
      heading: "Detail Pick Up",

      dataPickup: []
    };
  },
  methods: {
    async pickup(){
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/pick-up/", this.dataPickup);

        console.log(response.data.data);
        this.dataPickup = response.data.data;
        console.log("Data Pikup")
        console.log(this.dataPickup[0].detail_location)
      }catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.pickup()
  }
}
</script>

<template>
  <div class="flex-col flex bg-bgColor px-9">
    <div class="font-mont text-2xl">{{ heading }}</div>
    <div class="mt-16 bg-white rounded-[1rem] p-[20px]">
      <table class="font-mont table-fixed w-full ">
        <thead>
        <tr>
          <th>No</th>
          <th>Waktu</th>
          <th>Lokasi</th>
          <th>Berat</th>
          <th>Jenis</th>
          <th>Deskripsi</th>

        </tr>
        <tr>
          <td colspan=6 class="p-1">
            <hr class="border-b my-2">
          </td>
        </tr>
        </thead>
        <tbody>

        <tr v-for="item in dataPickup" :key="item.id">
          <td>1</td>
          <td>{{ new Date() }}</td>
          <td>{{ item.detail_location }}</td>
          <td>{{ item.weight }} gram</td>
          <td>{{ item.type }}</td>
          <td>{{ item.description }}</td>
        </tr>

        </tbody>
      </table>
    </div>

  </div>
</template>