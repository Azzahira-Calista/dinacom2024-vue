<template>
  <div class="flex justify-center">
    <div class="flex flex-col md:w-[45.5rem] mx-[1rem] p-5 items-center justify-center ">
      <h1 class="font-mont font-bold text-3xl text-secondary text-center my-[2rem]">
        {{ heading }}
      </h1>
      <form @submit.prevent="registerUserPost" action="" method="post" class="flex flex-col">
        <input
            type="text"
            v-model="postData.name"
            placeholder="Nama Lengkap"
            class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
        />
        <input
            type="email"
            v-model="postData.email"
            placeholder="Email"
            class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
        />
        <input
            type="text"
            v-model="postData.phone_number"
            placeholder="Nomor Ponsel"
            class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
        />
        <input
            type="password"
            v-model="postData.password"
            placeholder="Sandi"
            class="bg-[#F1F0F0]  h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
        />
        <p class="text-sm  mb-[1rem] font-mont text-gray-500">* Sandi minimal 8 karakter</p>
        <input
            type="password"
            placeholder="Konfirmasi Sandi"
            class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
        />
        <button type="submit" class="font-mont font-semibold h-[3.125rem] w-[21.5625rem] mb-[3.125rem] text-center py-[0.625rem] bg-primary text-white rounded-2xl">
          Daftar
        </button>
      </form>
      <div class="flex">
        <p class="mr-1">{{ subheading }}</p>
        <router-link to="/login" class="mr-7 cursor-pointer text-primary">
          {{ button_text }}
        </router-link>

      </div>
      <p class="mt-[1.5625rem] max-w-[21.5625rem] text-center">{{ description }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2';

export default {

  data() {
    return {
      heading: "Registrasi",
      subheading: "sudeh memiliki akun?",
      next: "Lanjut",
      register: "Daftar",
      button_text: "Masuk",
      description: "Dengan mendaftar, Anda setuju dengan syarat & ketentuan re:cycle dan kebijakan privasi",

      postData: {
        name: "",
        email: "",
        phone_number: "",
        password: "",
      },
    }
  },
  methods: {
    async registerUserPost() {
      try {
        if (!this.postData.name || !this.postData.email || !this.postData.phone_number || !this.postData.password) {
          alert("Form belum lengkap. Mohon isi semua field.");
          return;
        }

        const response = await axios.post('https://dinacom.unisains.com/api/register', this.postData);
        console.log(response);

        const token = response.data.token;
        const user_id = response.data.user.id;
        console.log(token);
        console.log(user_id);
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id);

        this.postData.name = "";
        this.postData.email = "";
        this.postData.phone_number = "";
        this.postData.password = "";

        Swal.fire({
          title: 'Registrasi berhasil.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#E88A1B'
        }).then(() => {
          this.$router.push("/");
        });

      } catch (error) {
        console.error(error);

        if (error.response && error.response.status) {
          if (error.response.status === 500) {
            // alert("Email is already registered. Please use a different email.");
            Swal.fire({
              title: 'Email sudah terdaftar. Silahkan gunakan email lain.',
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#d33'
            });
          } else {
            // alert("Registration failed. Please try again later.");
            Swal.fire({
              title: 'Registrasi gagal. Silahkan coba lagi nanti.',
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#d33'
            });
          }
        }
      }
    },
  }
}
</script>