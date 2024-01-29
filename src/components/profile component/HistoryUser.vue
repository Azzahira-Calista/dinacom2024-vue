<script>
import axios from "axios";

export default{
  components: {},
  data() {

    // var date = new Date();
    // var options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};

    // var display = date.getMonth('long') + ` ${date.getDay()}, ${date.getFullYear()}`;

    return {
      heading: "Riwayat Pick Up",
      // date: display,
      dataPickup: []
    };
  },
  methods: {
    async pickup(){
      try {

        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem('user_id');
        const response = await axios.get(`https://dinacom.unisains.com/api/pickup/data-user/${user_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log("ini data");
        console.log(response);
        this.dataPickup = response.data.data;

        // console.log("Data Pikup")
        // console.log(this.dataPickup[0].detail_location)
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
  <div class="flex-col flex  md:px-9">
    <div class="font-mont text-2xl">{{ heading }}</div>
    <div class="md:mt-16 mt-6 bg-white rounded-[1rem] md:p-[20px]">
      <table class="font-mont table-fixed w-full">
        <thead>
        <tr>
<!--          <th>No</th>-->
          <th>Waktu</th>
          <th>Lokasi</th>
          <th>Berat</th>
          <th>Jenis</th>
          <th>Deskripsi</th>
          <th>Status</th>

        </tr>
        <tr>
          <td colspan=5 class="p-1">
            <hr class="border-b my-2">
          </td>
        </tr>
        </thead>
        <tbody>

        <tr v-for="item in dataPickup" :key="item.id" class="text-center my-5 md:text-base text-sm">
<!--          <td>{{ noList }}</td>-->
          <td>{{ new Date(item.created_at).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}) }}</td>
          <td>{{ item.detail_location }}</td>
          <td>{{ item.weight }} kg</td>
          <td>{{ item.type }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.status }}</td>
        </tr>

        </tbody>
      </table>
    </div>

  </div>
</template>