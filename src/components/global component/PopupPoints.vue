<template>
    <!-- <div
        v-if="showPopup"
        class="fixed inset-0 bg-black-opacity-45 backdrop-blur-sm flex justify-center items-center z-30"
    > -->

    <div v-if="showPopup" class="fixed inset-0 bg-black-opacity-45 backdrop-blur-sm flex justify-center items-center z-30" 
    @click="closePopup($event)">

        <div class=" fixed w-screen h-screen items-center justify-center right-[-2rem] bottom-4 flex" >

            <div class="h-[40rem] w-96 p-12 bg-bgColor shadow-2xl rounded-[20px] flex flex-col justify-between">
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
                        <input type="number" class="w-3/5 border-b focus:border-b-2" placeholder="Nomor Kamu">
                        
                        <img
                            v-if="selectedLogo === 'logo_gopay' ? true : false"
                            :src="img[4]"
                            alt="logo gopay"
                            class="h-[10rem] absolute left-40 -bottom-16"
                        />
                        <img
                            v-if="selectedLogo === 'logo_shopee' ? true : false"
                            :src="img[5]"
                            alt="logo shopee"
                            class="h-[10rem] absolute left-48 -bottom-16"
                        />
                        <img
                            v-if="selectedLogo === 'logo_dana' ? true : false"
                            :src="img[6]"
                            alt="logo dana"
                            class="h-[10rem] absolute left-32 -bottom-12"
                        />
                        <img
                            v-if="selectedLogo === 'logo_ovo' ? true : false"
                            :src="img[7]"
                            alt="logo ovo"
                            class="h-[10rem] absolute left-40 -bottom-16"
                        />
                    </div>
                </div>

                <button @click="showAlert " class="bg-primary hover:bg-blend-overlay text-white text-center font-bold py-2 px-4 rounded-xl">
                    <router-link to=""  >Tukar</router-link>
                </button>
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
        }
    },

    props: {
        showPopup: Boolean,
    },

    methods: {
        closePopup(event) {
            console.log('closePopup called', event);
            const clickedElement = event.target;
            if (clickedElement.classList.contains('bg-black-opacity-45')) {
                this.show = false;
                this.showSuccess = false;
                this.$emit('closePopup');
            }
        },
        selectLogo(logoKey) {
            this.selectedLogo = logoKey;
        },
        showAlert() {
            this.$emit('closePopup');
            Swal.fire({
                title: 'Berhasil!',
                text: 'Points sudah berhasil ditukar, Terimakasih sudah bergabung bersama kami!',
                icon: 'success',
                confirmButtonColor: '#E88A1B',
            });
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
      this.points();
  }

}
</script>

<style>

</style>