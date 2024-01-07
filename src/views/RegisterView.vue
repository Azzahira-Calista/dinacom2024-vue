<template>
  <div
    class="w-screen h-screen bg-white"
  >
    <div class="flex">
      <div class="flex flex-col w-[45.5rem] h-screen items-center justify-center">
        <h1 class="font-Montserrat font-bold text-4xl text-[#31936D] text-center mb-[3.125rem] mt-[3.75rem]">
          {{ heading }}
        </h1>
        <form action="" method="post" class="flex flex-col">
          <!-- mb-[1.875rem] border border-black-->
          <div class="flex">
            <font-awesome-icon icon="user" />
            <input type="text" name="name" id="name" placeholder="Nama Lengkap" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          </div>
          <input type="text" name="name" id="name" placeholder="Nama Lengkap" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          <input type="text" name="name" id="name" placeholder="Nama Lengkap" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          <input type="text" name="name" id="name" placeholder="Nama Lengkap" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          <input type="text" name="name" id="name" placeholder="Nama Lengkap" class="bg-[#F1F0F0] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
        </form>
        <a href="" class="h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-[#FF8551] font-montserrat font-[w600] text-white text-2xl rounded-[0.9375rem]">Daftar</a>
        <div class="flex">
          <p class="mr-1">{{ subheading }}</p>
          <p>{{ button_text }}</p>
        </div>
        <p class="mt-[1.5625rem] max-w-[21.5625rem] text-center">{{ description }}</p>
      </div>

      <div class="flex flex-col w-[61.5rem] h-screen">
          <img :src="imgs" alt="" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components:{
    FontAwesomeIcon
  },
  data() {
    return {
      heading: "Registrasi",
      subheading: "Sudah memiliki akun?",
      button_text: "Masuk",
      description: "Dengan mendaftar, Anda setuju dengan syarat & ketentuan re:cycle dan kebijakan privasi",
      imgs: require("@/assets/images/register.png"),
    };
  },
};
</script>