<template>
  <div v-if="showPopupPickup" class="fixed inset-0 bg-black-opacity-45 backdrop-blur-sm flex justify-center items-center z-30" >
    <div class=" fixed w-screen h-screen items-center justify-center flex" >
      <div class=" md:p-10 p-8 mx-2 bg-bgColor shadow-2xl rounded-md flex flex-col justify-between items-center font-mont">
        <h1 class="font-bold text-3xl text-secondary text-start mb-10">
          {{ heading }}
        </h1>
        <form @submit.prevent="pickup" action="" method="post" class="flex flex-col">
          <div class="md:flex flex-col md:flex-row items-center justify-between mb-[1.25rem]">
            <button
              type="button"
              class="relative flex items-center mb-[1.25rem] md:mb-0 px-4 h-[3.125rem] md:w-1/2 w-full bg-[#F1F0F0] justify-between rounded-[0.9375rem] focus:outline-none shadow text-gray-600 focus:ring ring-gray-200 group"
              @click="toggleMenu"
            >
              <p>Pilih: {{ selectedOption }}</p>
              <img :src="img" class="ml-2 h-5 w-5"/>
              <div
                v-if="isActive"
                class="absolute top-full min-w-full w-max bg-white shadow-md mt-1 rounded"
              >
                <ul class="text-left border rounded">
                  <li
                    v-for="(option, index) in options"
                    :key="index"
                    @click="selectOption(option.text)"
                    class="px-4 py-1 hover:bg-gray-100 border-b"
                  >
                    {{ option.text }}
                  </li>
                </ul>
              </div>
            </button>
            <input type="text" v-model="dataPickup.detail_location" name="detail_location" id="detail_location" placeholder="Detail Lokasi" class="bg-[#F1F0F0] h-[3.125rem] md:ml-3 px-[1rem] rounded-[0.9375rem] w-full focus:outline-none focus:border-[#31936D]">
          </div>
          <div class="flex h-[3.125rem]  items-center justify-between mb-[1.25rem]">
            <input type="number" v-model="dataPickup.weight" name="weight" id="weight" placeholder="Berat Perkiraan (minimal pickup 500 g)" class="bg-[#F1F0F0] h-[3.125rem] md:w-[24.5rem] w-full px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
            <div class="flex justify-center items-center text-center bg-[#F1F0F0] h-[3.125rem] w-[4.25rem] px-[1rem] rounded-[0.9375rem] ml-2 focus:outline-none">
              <p>KG</p>
            </div>
          </div>
          <input type="text" v-model="dataPickup.type" name="type" id="type" placeholder="Jenis Sampah (organik / non-organik)" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
            <textarea type="text" v-model="dataPickup.description" name="description" id="description" placeholder="Deskripsi" class="resize-none bg-[#F1F0F0] h-[9.375rem] p-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D] text-start"></textarea>
            <div class="flex h-[3.125rem] my-[1.75rem] items-center justify-between ">
              <router-link @click="closePopupPickup" to="/" class="font-mont font-semibold h-[2.75rem] w-[7.5rem] text-center py-[0.625rem] bg-gray-400 font-[w600] text-white text-xl rounded-[0.9375rem]">
                Close
              </router-link>
              <button @click="showAlert " type="submit" class="font-mont font-semibold h-[2.75rem] w-[10.5rem] text-center py-[0.625rem] bg-primary font-[w600] text-white text-xl rounded-[0.9375rem]">
                Submit
              </button>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import axios from "axios";
  import Swal from 'sweetalert2';
  
      export default{
        components: {},
        props: {
          showPopupPickup: Boolean,
        },
        data() {
          return {
            heading: "Detail Pick Up",
            button_text: "Pick Up",
            back: "Batal",
  
            dataPickup: {
              detail_location: "",
              weight: "",
              type: "",
              description: ""
            },

            img: require('@/assets/icons/MainPage/MainPageFAQ/mingcute_down-fill.svg'),

            isActive: false,
            selectedOption: "Desa",
            options: [
              { text: "Besito" },
              { text: "Getassrabi" },
              { text: "Gondosari" },
              { text: "Gribig" },
              { text: "Jurang" },
              { text: "Karangmalang" },
              { text: "Kedungsari" },
              { text: "Klumpit" },
              { text: "Menawan" },
              { text: "Padurenan" },
              { text: "Rahtawu" },
            ],
          };
        },
        methods: {
          async pickup(){
            try {
              if(!this.dataPickup.detail_location || !this.dataPickup.weight || !this.dataPickup.type || !this.dataPickup.description){
               alert("Form belum lengkap. Mohon isi semua field.");
               return;
              }

              const token = localStorage.getItem('token');
              const response = await axios.post("http://dinacom.unisains.com/api/pickup/store", this.dataPickup, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });

              console.log(response);
              console.log(token);

              this.dataPickup.detail_location = "";
              this.dataPickup.weight = 0;
              this.dataPickup.type = "";
              this.dataPickup.description = "";
  
              this.$router.push("/")
            }catch (error) {
              console.error(error)
            }
          },
          closePopupPickup(event) {
            Swal.fire({
              title: "Batal",
              text: "Pick up dibatalkan",
              icon: "error",
              confirmButtonColor: "#E88A1B",
            });
            this.$emit("closePopupPickup", event);
          },
          showAlert() {
              Swal.fire({
                  title: "Apakah anda yakin data sudah benar?",
                  text: "Anda akan melakukan pick up",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#e88a1b",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Ya, saya yakin!",
                  cancelButtonText: "Batal",
  
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$emit("closePopupPickup", event);
    
                Swal.fire({
                    title: "Berhasil!",
                    text: "Pick up berhasil dilakukan",
                    icon: "success",
                    confirmButtonColor: "#E88A1B",
                })  
                } else {
                Swal.fire({
                    title: "Batal",
                    text: "Pick up dibatalkan",
                    icon: "error",
                    confirmButtonColor: "#E88A1B",
                });
                }
            });
          },

          toggleMenu() {
            this.isActive = !this.isActive;
          },
          selectOption(selectedOption) {
            this.selectedOption = selectedOption;
            this.isActive = false;
          },
        },
  
  }
  </script>
  
  <style>
  
  </style>