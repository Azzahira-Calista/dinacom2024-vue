<!--<template>-->
<!--    <div>-->
<!--        <div class="flex flex-col w-[50.5rem] h-screen items-center justify-center">-->
<!--        <h1 class="font-mont font-bold text-3xl text-secondary text-center mb-[3.125rem]">-->
<!--          {{ heading }}-->
<!--        </h1>-->
<!--        <form  @submit.prevent="registerUser" action="" method="post" class="flex flex-col">-->
<!--          &lt;!&ndash; mb-[1.875rem] border border-black&ndash;&gt;-->
<!--          <input type="text" v-model="name" name="name" id="name" placeholder="Nama Lengkap" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">-->
<!--          <input type="email" v-model="email" name="email" id="email" placeholder="Email" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">-->
<!--          <input type="text" v-model="phone_number" name="phone_number" id="phone_number" placeholder="Phone Number" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">-->
<!--          <input type="text" v-model="password" name="password" id="password" placeholder="Password" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">-->
<!--          <input type="text" name="confirm_password" id="confirm_password" placeholder="Confirm Password" class="bg-[#F1F0F0] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">-->
<!--        </form>-->
<!--        <router-link to="/" class="h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary font-montserrat font-[w600] text-white text-2xl rounded-[0.9375rem]">-->
<!--          {{ register }}-->
<!--        </router-link>-->
<!--        <div class="flex">-->
<!--          <p class="mr-1">{{ subheading }}</p>-->
<!--          <router-link to="/login" class="mr-7 cursor-pointer text-primary">-->
<!--            {{ button_text }}-->
<!--          </router-link>-->
<!--        </div>-->
<!--        <p class="mt-[1.5625rem] max-w-[21.5625rem] text-center">{{ description }}</p>-->
<!--      </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import axios from "axios";-->

<!--export default {-->
<!--  components: {},-->
<!--  data() {-->
<!--    return {-->
<!--      heading: "Registrasi",-->
<!--      subheading: "Sudah memiliki akun?",-->
<!--      register: "Daftar",-->
<!--      button_text: "Masuk",-->
<!--      description:-->
<!--          "Dengan mendaftar, Anda setuju dengan syarat & ketentuan re:cycle dan kebijakan privasi",-->

<!--      name: "",-->
<!--      email: "",-->
<!--      phone_number: "",-->
<!--      password: "",-->
<!--    };-->
<!--  },-->

<!--  setup() {-->
<!--    const registerUser = async () => {-->
<!--      try {-->
<!--        const response = await axios.post(-->
<!--            "https://0350-182-2-70-56.ngrok-free.app/api/register",-->
<!--            {-->
<!--              name: this.name,-->
<!--              email: this.email,-->
<!--              phone_number: this.phone_number,-->
<!--              password: this.password,-->
<!--            }-->
<!--        );-->
<!--        console.log("User registered successfully", response.data);-->
<!--      } catch (e) {-->
<!--        console.error("Error registering user", e.response.data);-->
<!--      }-->
<!--    };-->

<!--    return {-->
<!--      registerUser,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<template>
  <div>
    <div class="flex flex-col w-[50.5rem] h-screen items-center justify-center">
      <h1 class="font-mont font-bold text-3xl text-secondary text-center mb-[3.125rem]">
        {{ heading }}
      </h1>
      <form @submit.prevent="registerUserPost" action="" method="post" class="flex flex-col">
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
            type="number"
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
        <p class="text-sm  mt-[1rem] font-mont text-gray-500">* Sandi minimal 8 karakter</p>

        <input
            type="password"
            v-model="confirm_password"
            placeholder="Konfirmasi Sandi"
            class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]"
        />
        <button type="submit" class="font-mont font-semibold h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary text-white rounded-2xl">
          Daftar
        </button>
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

export default {
  components: {},
  data() {
    return {
      heading: "Registrasi",
      subheading: "Sudah memiliki akun?",
      register: "Daftar",
      button_text: "Masuk",
      description: "Dengan mendaftar, Anda setuju dengan syarat & ketentuan re:cycle dan kebijakan privasi",

      // isRegistered: false,
      name: "",
      email: "",
      phone_number: "",
      password: "",
    };
  },
  methods: {
    registerUserPost(){
      if (!this.name || !this.email || !this.phone_number || !this.password || !this.confirm_password) {
        alert("Form belum lengkap. Mohon isi semua field.");
        return;
      }

      if (this.password !== this.confirm_password) {
        alert("Password and Confirm Password must match");
        return;
      }
      axios.post(
          `https://f542-103-28-113-244.ngrok-free.app//register`,
          {
            name: this.name,
            email: this.email,
            phone_number: this.phone_number,
            password: this.password,
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
    }
  }
};
</script>
