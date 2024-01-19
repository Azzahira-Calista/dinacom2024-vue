<script>
import axios from "axios";

export default{
  components: {},
  data() {
    // const router = useRouter()
    return {
      heading: "Detail Pick Up",
      button_text: "Pick Up",
      back: "Batal",

      // dataPickup: {
      //   detail_location: "",
      //   weight: "",
      //   type: "",
      //   description: ""
      // }
    };
  },
  // methods: {
  //
  //   async pickup(){
  //     try {
  //       const response = await axios.get("http://127.0.0.1:8000/api/pick-up/", this.dataPickup);
  //
  //       console.log(response);
  //       this.dataPickup.detail_location = "";
  //       this.dataPickup.weight = "";
  //       this.dataPickup.type = "";
  //       this.dataPickup.description = "";
  //     }catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }
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

<!--        <tr v-for="data in dataPickup" :key="data">-->
<!--          <td>1</td>-->
<!--          <td>now</td>-->
<!--          <td>{{ dataPickup.detail_location }}</td>-->
<!--          <td>{{ data.weight }} g</td>-->
<!--          <td>{{ dataPickup.type }}</td>-->
<!--          <td>{{ data.description }}</td>-->

<!--        </tr>-->
        <tr>
          <td>1</td>
          <td>03/01/2024</td>
          <td>Tangerang</td>
          <td>700gr</td>
          <td>Plastik sampah</td>
          <td>berwarna merah, kuning, hijau,biru</td>

        </tr><tr>
          <td>2</td>
          <td>20/01/2024</td>
          <td>Jakarta</td>
          <td>700gr</td>
          <td>kaleng</td>
          <td>berwarna merah, kuning, hijau,biru</td>

        </tr>
<!--        <tr>-->
<!--          <td>1</td>-->
<!--          <td>03/01/2024</td>-->
<!--          <td>Tangerang</td>-->
<!--          <td>700gr</td>-->
<!--          <td>Plastik sampah</td>-->
<!--          <td>berwarna merah, kuning, hijau,biru</td>-->

<!--        </tr><tr>-->
<!--          <td>1</td>-->
<!--          <td>03/01/2024</td>-->
<!--          <td>Tangerang</td>-->
<!--          <td>700gr</td>-->
<!--          <td>Plastik sampah</td>-->
<!--          <td>berwarna merah, kuning, hijau,biru</td>-->

<!--        </tr>-->
<!--        <tr>-->
<!--          <td>1</td>-->
<!--          <td>03/01/2024</td>-->
<!--          <td>Tangerang</td>-->
<!--          <td>700gr</td>-->
<!--          <td>Plastik sampah</td>-->
<!--          <td>berwarna merah, kuning, hijau,biru</td>-->

<!--        </tr><tr>-->
<!--          <td>1</td>-->
<!--          <td>03/01/2024</td>-->
<!--          <td>Tangerang</td>-->
<!--          <td>700gr</td>-->
<!--          <td>Plastik sampah</td>-->
<!--          <td>berwarna merah, kuning, hijau,biru</td>-->

<!--        </tr><tr>-->
<!--          <td>1</td>-->
<!--          <td>03/01/2024</td>-->
<!--          <td>Tangerang</td>-->
<!--          <td>700gr</td>-->
<!--          <td>Plastik sampah</td>-->
<!--          <td>berwarna merah, kuning, hijau,biru</td>-->

<!--        </tr><tr>-->
<!--          <td>1</td>-->
<!--          <td>03/01/2024</td>-->
<!--          <td>Tangerang</td>-->
<!--          <td>700gr</td>-->
<!--          <td>Plastik sampah</td>-->
<!--          <td>berwarna merah, kuning, hijau,biru</td>-->

<!--        </tr><tr>-->
<!--          <td>1</td>-->
<!--          <td>03/01/2024</td>-->
<!--          <td>Tangerang</td>-->
<!--          <td>700gr</td>-->
<!--          <td>Plastik sampah</td>-->
<!--          <td>berwarna merah, kuning, hijau,biru</td>-->

<!--        </tr><tr>-->
<!--          <td>1</td>-->
<!--          <td>03/01/2024</td>-->
<!--          <td>Tangerang</td>-->
<!--          <td>700gr</td>-->
<!--          <td>Plastik sampah</td>-->
<!--          <td>berwarna merah, kuning, hijau,biru</td>-->

<!--        </tr><tr>-->
<!--          <td>1</td>-->
<!--          <td>03/01/2024</td>-->
<!--          <td>Tangerang</td>-->
<!--          <td>700gr</td>-->
<!--          <td>Plastik sampah</td>-->
<!--          <td>berwarna merah, kuning, hijau,biru</td>-->

<!--        </tr>-->

        </tbody>
      </table>
    </div>

  </div>
</template>

<style scoped>

</style>

<!--<template>-->
<!--  <div class="flex-col flex">-->
<!--    <div class="font-mont text-2xl">History</div>-->
<!--    <div class="mt-16 bg-white rounded-[1rem] p-[20px]">-->
<!--      <table class="table-fixed w-full">-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <th>No</th>-->
<!--          <th>Waktu</th>-->
<!--          <th>Lokasi</th>-->
<!--          <th>Berat</th>-->
<!--          <th>Jenis</th>-->
<!--          <th>Deskripsi</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr v-for="(item, index) in apiData" :key="index">-->
<!--          <td>{{ index + 1 }}</td>-->
<!--          <td>{{ item.waktu }}</td>-->
<!--          <td>{{ item.lokasi }}</td>-->
<!--          <td>{{ item.berat }}</td>-->
<!--          <td>{{ item.jenis }}</td>-->
<!--          <td>{{ item.deskripsi }}</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td colspan="6" class="p-1">-->
<!--            <hr class="border-b my-2">-->
<!--          </td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      // Data api contoh-->
<!--      apiData: [-->
<!--        { waktu: 'Waktu 1', lokasi: 'Lokasi 1', berat: 'Berat 1', jenis: 'Jenis 1', deskripsi: 'Deskripsi 1' },-->
<!--        { waktu: 'Waktu 2', lokasi: 'Lokasi 2', berat: 'Berat 2', jenis: 'Jenis 2', deskripsi: 'Deskripsi 2' },-->
<!--        // Tambahkan data api lainnya sesuai kebutuhan-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
