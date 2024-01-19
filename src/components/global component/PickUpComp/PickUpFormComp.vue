<template>
    <div>
      <div class="flex flex-col w-[37.5rem] h-[34.5rem] items-center justify-center font-mont bg-bgColor">
        <h1 class="font-bold text-3xl text-secondary text-start mb-[1.75rem]">
            {{ heading }}
        </h1>
        <form @submit.prevent="pickup" action="" method="post" class="flex flex-col">
            <!-- mb-[1.875rem] border border-black-->
          <input type="text" v-model="dataPickup.detail_location" name="detail_location" id="detail_location" placeholder="Detail Lokasi" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[29.5rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          <div class="flex h-[3.125rem] w-[29.5rem] items-center justify-between mb-[1.25rem]">
            <input type="number" v-model="dataPickup.weight" name="weight" id="weight" placeholder="Berat Perkiraan" class="bg-[#F1F0F0] h-[3.125rem] w-[24.5rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
            <div class="flex justify-center items-center text-center bg-[#F1F0F0] h-[3.125rem] w-[4.25rem] px-[1rem] rounded-[0.9375rem] focus:outline-none">
              <p>gram</p>
            </div>
          </div>
          <input type="text" v-model="dataPickup.type" name="type" id="type" placeholder="Jenis Sampah" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[29.5rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          <textarea type="text" v-model="dataPickup.description" name="description" id="description" placeholder="Deskripsi" class="resize-none bg-[#F1F0F0] h-[9.375rem] w-[29.5rem] p-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D] text-start"></textarea>

          <div class="flex h-[3.125rem] w-[29.5rem] my-[1.75rem] items-center justify-between ">
            <router-link to="/" class="font-mont font-semibold h-[2.75rem] w-[7.5rem] text-center py-[0.625rem] bg-gray-400 font-montserrat font-[w600] text-white text-xl rounded-[0.9375rem]">
              {{ back }}
            </router-link>

            <button type="submit" class="font-mont font-semibold h-[2.75rem] w-[13.5rem] text-center py-[0.625rem] bg-primary font-montserrat font-[w600] text-white text-xl rounded-[0.9375rem]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import axios from "axios";
// import {useRouter} from "vue-router";
// import router from "@/router";

    export default{
      components: {},
      data() {
        // const router = useRouter()
        return {
          heading: "Detail Pick Up",
          button_text: "Pick Up",
          back: "Batal",

          dataPickup: {
            detail_location: "",
            weight: "",
            type: "",
            description: ""
          }
        };
      },
      // mounted() {
      //   axios.post(
      //       "http://127.0.0.1:8000/api/pick-up", this.dataPickup
      //   ).then(response => console.log(response))
      //       .catch(error => console.error(error)); // Add error handling
      // }
      methods: {

        async pickup(){
          try {
            if(!this.dataPickup.detail_location || !this.dataPickup.weight || !this.dataPickup.type || !this.dataPickup.description){
             alert("Form belum lengkap. Mohon isi semua field.");
             return;
            }

            const response = await axios.post("http://127.0.0.1:8000/api/pick-up", this.dataPickup);

            console.log(response);
            this.dataPickup.detail_location = "";
            this.dataPickup.weight = "";
            this.dataPickup.type = "";
            this.dataPickup.description = "";

            this.$router.push("/")
          }catch (error) {
            console.error(error)
          }
        }


        // async pickup() {
        //   console.log('Data to be sent:', {
        //     detail_location: this.data.detail_location,
        //     weight: this.data.weight,
        //     type: this.data.type,
        //     description: this.data.description,
        //   });
        //
        //   if (!this.data.detail_location || !this.data.weight || !this.data.type) {
        //     alert("Form belum lengkap. Mohon isi field.");
        //     return;
        //   }
        //
        //   axios.post(
        //       'http://127.0.0.1:8000/api/pick-up',
        //       this.data
        //   ).then((response) => {
        //     console.log(response);
        //     this.dataPickup.detail_location = "";
        //     this.dataPickup.weight = "";
        //     this.dataPickup.type = "";
        //     this.dataPickup.description = "";
        //
        //     this.$router.push("/");
        //   }).catch((error) => {
        //     console.error(error);
        //   });
        // }
      }
    }
</script>