<template>
  <div class="justify-center">
    <div class="flex flex-col w-[45.5rem] p-5 items-center justify-center">
      <h1 class="font-mont font-bold text-3xl text-secondary text-center my-[2rem]">
        {{ heading }}
      </h1>
      <form @submit.prevent="registerUserPost" action="" method="post" class="flex flex-col">
        <Splide :options="options">
          <SplideSlide class="flex flex-col w-[43.5rem] items-center justify-center">
              <input
                  type="text"
                  v-model="name"
                  placeholder="Nama Lengkap"
                  class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
              />
              <input
                  type="email"
                  v-model="email"
                  placeholder="Email"
                  class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
              />
              <input
                  type="text"
                  v-model="phone_number"
                  placeholder="Nomor Ponsel"
                  class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
              />
              <input
                  type="password"
                  v-model="password"
                  placeholder="Sandi"
                  class="bg-[#F1F0F0]  h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
              />
              <p class="text-sm  mb-[1rem] font-mont text-gray-500">* Sandi minimal 8 karakter</p>

              <input
                  type="password"
                  v-model="confirm_password"
                  placeholder="Konfirmasi Sandi"
                  class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
              />
  <!--            <button type="button" class="font-mont font-semibold h-[3.125rem] w-[21.5625rem] mb-[3.125rem] text-center py-[0.625rem] bg-primary text-white rounded-2xl">-->
  <!--              {{ next }}-->
  <!--            </button>-->

            <div class="flex">
              <p class="mr-1">{{ subheading }}</p>
              <router-link to="/login" class="mr-7 cursor-pointer text-primary">
                {{ button_text }}
              </router-link>
            </div>
          </SplideSlide>
          <SplideSlide class="flex flex-col w-[43.5rem] items-center justify-center">
              <picture-input
                ref="pictureInput"
                width="270"
                height="270"
                margin="16"
                accept="image/jpeg,image/png,image/jpg"
                size="10"
                button-class="btn"
                :custom-strings="{
                  upload: '<h1>Bummer!</h1>',
                  drag: 'Drag a 😺 GIF or GTFO'
                }"
                @change="onChange">
              </picture-input>
              <button @click="registerUserPost" type="submit" class="font-mont font-semibold h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary text-white rounded-2xl">
                {{ register }}
              </button>
          </SplideSlide>
        </Splide>
      </form>
<!--      <router-link v-if="isRegistered" to="/" class="text-primary">-->
<!--        Go to Main Page-->
<!--      </router-link>-->

<!--      <router-link-->
<!--          to="/"-->
<!--          class="h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary font-montserrat font-[w600] text-white text-2xl rounded-[0.9375rem]"-->
<!--      >-->
<!--        {{ register }}-->
<!--      </router-link>-->
      <div></div>
      <p class="mt-[1.5625rem] max-w-[21.5625rem] text-center">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PictureInput from 'vue-picture-input'


export default {
  components: {Splide, SplideSlide, PictureInput},
  data() {
    return {
      heading: "Registrasi",
      subheading: "Sudah memiliki akun?",
      next: "Lanjut",
      register: "Daftar",
      button_text: "Masuk",
      description: "Dengan mendaftar, Anda setuju dengan syarat & ketentuan re:cycle dan kebijakan privasi",

      // isRegistered: false,
      name: "",
      email: "",
      phone_number: "",
      password: "",
      image: ""
    };
  },
  // props: {
  //   value: File
  // },
  methods: {
    registerUserPost(){
      if (!this.name || !this.email || !this.phone_number || !this.password || !this.confirm_password || !this.image) {
        alert("Form belum lengkap. Mohon isi semua field.");
        return;
      }

      if (this.password !== this.confirm_password) {
        alert("Password and Confirm Password must match");
        return;
      }
      axios.post(
          `https://f542-103-28-113-244.ngrok-free.app/api/register`,
          {
            name: this.name,
            email: this.email,
            phone_number: this.phone_number,
            password: this.password,
            image: this.image
          }
      ).then((response) => {
        console.log(response);
        this.name = "";
        this.email = "";
        this.phone_number = "";
        this.password = "";
        this.confirm_password = "";

        // this.isRegistered = true;

        this.$router.push("/");


      }).catch((error) => {
        console.error(error);

        if (error.response && error.response.status) {
          if (error.response.status === 500) {
            alert("Email is already registered. Please use a different email.");
          } else {
            alert("Registration failed. Please try again later.");
          }
        }
      });
    },
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
    // browse(){
    //   this.$refs.file.click();
    // },
    // change(e){
    //   this.$emit('input', e.target.file[0]);
    //
    //   let reader = new FileReader();
    //   reader.readAsDataURL(e.target.file[0]);
    //   reader.onload = (e) => {
    //     this.src = e.target.result;
    //   }
    // }
  },
  setup() {
    const options = {
      type: 'slide',
      pagination: true,
      arrows: false,
      drag: true
    };

    return {
      options: options,
    };
  },
};
</script>
