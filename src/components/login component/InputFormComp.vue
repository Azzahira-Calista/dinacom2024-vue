<template>
    <div class="">
        <div class="flex flex-col md:w-[45.5rem] mx-[1rem] h-screen p-5 items-center justify-center font-mont">
            <h1 class="font-bold text-3xl text-secondary text-center mb-[3.125rem]">
                {{ heading }}
            </h1>
            <form @submit.prevent="loginUserPost" action="" method="post" class="flex flex-col">
                <!-- mb-[1.875rem] border border-black-->
                <input type="email" v-model="postData.email" name="email" id="email" placeholder="Email" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
                <input type="password" v-model="postData.password" name="password" id="password" placeholder="Password" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
              <button type="submit" class="font-mont font-semibold h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary text-white rounded-2xl">
                Masuk
              </button>
            </form>
<!--            <router-link to="/" class="font-mont font-semibold h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary font-montserrat font-[w600] text-white text-2xl rounded-[0.9375rem]">-->
<!--                {{ register }}-->
<!--            </router-link>-->
            <div class="flex">
                <p class="mr-1">{{ subheading }}</p>
                <router-link to="/register" class="mr-7 cursor-pointer text-primary font-mont">
                    {{ button_text }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';

export default {

  data() {
    return {
      heading: "Masuk",
      subheading: "Belum memiliki akun?",
      register: "Masuk",
      button_text: "Daftar",
      postData: {
        email: "",
        password: "",
      }

    };
  },

  methods: {
    async loginUserPost() {
      try {
        if (!this.postData) {
          alert("Form belum lengkap. Mohon isi semua field.");
          return;
        }

        const response = await axios.post('http://127.0.0.1:8000/api/login', this.postData);

        console.log(response);
        this.postData.email = "";
        this.postData.password = "";

        const token = response.data.token;
        const user_id = response.data.user.id;

        console.log(token);
        console.log(user_id);

        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id);

        Swal.fire({
          title: 'Login berhasil.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#E88A1B'
        }).then(() => {
          this.$router.push("/");
        });

      } catch(error) {
        console.error(error);

        if (error.response && error.response.status) {
          if (error.response.status === 401) {
            // alert("Email atau password salah.");
            Swal.fire({
              title: 'Email atau password salah.',
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#d33'
            });
          } else if (error.response.status === 404) {
            // alert("Email tidak terdaftar.");
            Swal.fire({
              title: 'Email tidak terdaftar.',
              icon: 'warning',
              confirmButtonText: 'OK',
              confirmButtonColor: '#d33'
            });
          } else {
            // alert("Login failed. Please try again later.");
            Swal.fire({
              title: 'Login failed. Please try again later.',
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#d33'
            });
          }
        }
      }
    },
  },
};
</script>
