<template>
    <!-- <div
        v-if="showPopup"
        class="fixed inset-0 bg-black-opacity-45 backdrop-blur-sm flex justify-center items-center z-30"
    > -->

    <div v-if="showPopup" class="fixed inset-0 bg-black-opacity-45 backdrop-blur-sm flex justify-center items-center z-30">

        <div class=" fixed w-screen h-screen items-center justify-center flex" >

            <div class="h-[40rem] md:w-96 p-10 mx-2 bg-bgColor shadow-2xl rounded-[20px] flex flex-col justify-between">
                <p class="font-mont text-[#669940] text-[24px] font-bold">Tukar Pointmu !</p>

                <point-user/>

                <div class="flex w-[18rem] align-middle items-center px-[20px] py-[20px] bg-white rounded-[1rem] shadow-lg ">
                    <p class="mr-[20px] text-primary">Rp</p>
                    <div class="text-xl">{{ point }}</div>
                </div> 

                <div class="flex items-center">
                    <button @click="selectLogo('logo_gopay')" class="cursor-pointer">
                        <img
                            :src="img[0]"
                            alt="logo_gopay"
                            class="h-10"
                        />        
                    </button>
                    <button @click="selectLogo('logo_shopee')" class="cursor-pointer">
                        <img
                            :src="img[1]"
                            alt="logo_shopee"
                            class="h-10"
                        />      
                    </button>
                    <button @click="selectLogo('logo_dana')" class="cursor-pointer">
                        <img
                            :src="img[2]"
                            alt="logo_dana"
                            class="h-10 mx-2"
                        />      
                    </button>
                    <button @click="selectLogo('logo_ovo')" class="cursor-pointer">
                        <img
                            :src="img[3]"
                            alt="logo_ovo"
                            class="h-6"
                            
                        />      
                    </button>
                </div>

                <div class="relative bg-white rounded-[1rem] p-8 h-76 overflow-hidden">
                    <p class="text-[12] font-semibold pb-8">Masukkan nomor handphone kamu yang terdaftar di aplikasi</p>
                    <div class="flex ">
                        <input type="number" name="nomorhp" class="w-3/5 border-b focus:border-b-2" placeholder="Nomor Kamu">
                        
                        <img
                            v-if="selectedLogo === 'logo_gopay' ? true : false"
                            :src="img[4]"
                            alt="logo gopay"
                            class="h-[7rem] absolute left-52 -bottom-8"
                        />
                        <img
                            v-if="selectedLogo === 'logo_shopee' ? true : false"
                            :src="img[5]"
                            alt="logo shopee"
                            class="h-[8rem] absolute left-52 -bottom-10"
                        />
                        <img
                            v-if="selectedLogo === 'logo_dana' ? true : false"
                            :src="img[6]"
                            alt="logo dana"
                            class="h-[7rem] absolute left-44 -bottom-8"
                        />
                        <img
                            v-if="selectedLogo === 'logo_ovo' ? true : false"
                            :src="img[7]"
                            alt="logo ovo"
                            class="h-[7rem] absolute left-52 -bottom-8"
                        />
                    </div>
                </div>

                <div class="flex h-[3.125rem] my-[1.75rem] items-center justify-between ">
                    <router-link @click="closePopup" to="/" class="font-mont font-semibold h-[2.75rem] w-[7.5rem] text-center py-[0.625rem] bg-gray-400 font-[w600] text-white text-xl rounded-[0.9375rem]">
                        Close
                    </router-link>
                    <button
                        @click="showAlert"
                        class="font-mont font-semibold h-[2.75rem] w-[9rem] text-center py-[0.625rem] bg-primary font-[w600] text-white text-xl rounded-[0.9375rem]"
                    >
                        Tukar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import PointUser from '@/components/profile component/PointUser.vue';
import axios from "axios";

export default {
    components: {
        PointUser,
    },

    data() {
        return {
          point:null,
            selectedLogo: false,
            show: true,
            showPopupSuccess: false,
            img: [
                require("@/assets/icons/Payments/gopay.png"),
                require("@/assets/icons/Payments/shopeepay.png"),
                require("@/assets/icons/Payments/dana.png"),
                require("@/assets/icons/Payments/ovo.png"),
                require("@/assets/icons/Payments/logo_gopay.png"),
                require("@/assets/icons/Payments/logo_shopee.png"),
                require("@/assets/icons/Payments/logo_dana.png"),
                require("@/assets/icons/Payments/logo_ovo.png"),
            ],

            dataPoint: {
                nomorhp: "",
            },
        }
    },

    props: {
        showPopup: Boolean,
    },

    methods: {

        closePopup(event) {
            Swal.fire({
              title: "Batal",
              text: "Tukar point dibatalkan",
              icon: "error",
              confirmButtonColor: "#E88A1B",
            });
            this.$emit("closePopup", event);
        },
        selectLogo(logoKey) {
            this.selectedLogo = logoKey;
        },
        showAlert() {
            if (this.point < 20000) {
                    Swal.fire({
                        title: "Belum Cukup",
                        text: "Jumlah point kamu belum memenuhi syarat batas penukaran point, kumpulkan lebih banyak lagi!",
                        icon: "error",
                        confirmButtonColor: "#E88A1B",
                    });
                    return; // Don't proceed with redemption if the condition is not met
                }

                // Continue with the redemption process
                this.$emit('closePopup');

                // Perform other actions related to successful redemption
                if (this.dataPoint.nomorhp == "") {
                    alert("Isi nomor hp terlebih dahulu!");
                    // Check if the point balance is sufficient for redemption            
                    return;
                } else {
                    Swal.fire({
                            title: 'Berhasil!',
                            text: 'Points sudah berhasil ditukar, Terimakasih sudah bergabung bersama kami!',
                            icon: 'success',
                            confirmButtonColor: '#E88A1B',
                        });
                }
        },

      async points(){
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`http://dinacom.unisains.com/api/data-user`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          console.log("ini data");
          console.log(token);
          console.log(response);

          console.log(this.dataPoint.nomorhp);

          this.point = response.data.points;

          console.log(this.point)
        }catch (error) {
          console.error(error)
        }
      }
    },
  mounted() {
      this.points();
  }

}
</script>

<style>

</style>