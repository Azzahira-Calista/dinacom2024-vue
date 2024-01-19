<template>
    <div v-if="showPopupPickup" 
    class="fixed inset-0 bg-black-opacity-45 backdrop-blur-sm flex justify-center items-center z-30" 
    @click="closePopup($event)">
    <div class=" fixed w-screen h-screen items-center justify-center right-[-2rem] bottom-4 flex" >

        <div class="flex flex-col w-[50.5rem] h-screen justify-center font-mont">
            <h1 class="font-bold text-3xl text-secondary text-start mb-[3rem]">
                {{ heading }}
            </h1>
            <form action="" method="post" class="flex flex-col">
                <!-- mb-[1.875rem] border border-black-->
                <input type="text" name="detail-lokasi" id="deail-lokasi" placeholder="Detail Lokasi" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
                <input type="number" name="berat" id="berat" placeholder="Berat Perkiraan" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
                <input type="text" name="jenis" id="jenis" placeholder="Jenis Sampah" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
                <input type="text" name="deskripsi" id="deskripsi" placeholder="Deskripsi" class="bg-[#F1F0F0] mb-[1.25rem] h-[9.375rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D] text-start">
            </form>
            <button @click="showAlert " class="font-mont font-semibold h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary  text-white text-2xl rounded-[0.9375rem]">
                <router-link to="">
                    {{ button_text }}
                </router-link>
            </button>
        </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: "PickUpForm",
  components: {},
  props: {
    showPopupPickup: Boolean,
  },
  data() {
    return {
      heading: "Detail Pick Up",
      buttonText: "Pick Up",
      detailLokasi: "",
      berat: 0,
      jenisSampah: "",
      deskripsi: "",
    };
  },
  methods: {
    closePopupPickup(event) {
      if (event.target === event.currentTarget) {
        this.$emit("closePopupPickup");
      }
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
          Swal.fire({
            title: "Berhasil!",
            text: "Pick up berhasil dilakukan",
            icon: "success",
            confirmButtonColor: "#E88A1B",
          });
          this.$emit("closePopupPickup");
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
  },
};
</script>