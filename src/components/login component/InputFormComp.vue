<template>
    <div class="justify-center">
        <div class="flex flex-col w-[45.5rem] h-screen p-5 items-center justify-center font-mont">
            <h1 class="font-bold text-3xl text-secondary text-center mb-[3.125rem]">
                {{ heading }}
            </h1>
            <form @submit.prevent="loginUserPost" action="" method="post" class="flex flex-col">
                <!-- mb-[1.875rem] border border-black-->
                <input type="email" v-model="email" name="email" id="email" placeholder="Email" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
                <input type="password" v-model="password" name="password" id="password" placeholder="Password" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
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

export default {
  components: {},
  data() {
    return {
      heading: "Masuk",
      subheading: "Belum memiliki akun?",
      register: "Masuk",
      button_text: "Daftar",
      email: "",
      password: "",
    };
  },
  methods: {
    loginUserPost() {
      if (!this.email || !this.password) {
        alert("Form belum lengkap. Mohon isi semua field.");
        return;
      }

      axios.post(
          `https://f542-103-28-113-244.ngrok-free.app/login`,
          {
            email: this.email,
            password: this.password,
          }
      ).then((response) => {
        console.log(response);
        this.email = "";
        this.password = "";

        localStorage.setItem("token", response.data.token);

        this.$router.push("/");
      }).catch((error) => {
        console.error(error);

        if (error.response && error.response.status) {
          if (error.response.status === 401) {
            alert("Email atau password salah.");
          } else if (error.response.status === 404) {
            alert("Email tidak terdaftar.");
          } else {
            alert("Login failed. Please try again later.");
          }
        } else {
          alert("Login failed. Please try again later.");
        }
      });
    },
  },
};
</script>
