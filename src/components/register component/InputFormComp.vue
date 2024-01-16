<template>
    <div>
        <div class="flex flex-col w-[50.5rem] h-screen items-center justify-center">
        <h1 class="font-mont font-bold text-3xl text-secondary text-center mb-[3.125rem]">
          {{ heading }}
        </h1>
        <form action="" method="post" class="flex flex-col">
          <!-- mb-[1.875rem] border border-black-->
          <input type="text" name="name" id="name" placeholder="Nama Lengkap" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          <input type="email" name="email" id="email" placeholder="Email" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          <input type="text" name="phone_number" id="phone_number" placeholder="Phone Number" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          <input type="text" name="password" id="password" placeholder="Password" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          <input type="text" name="confirm_password" id="confirm_password" placeholder="Confirm Password" class="bg-[#F1F0F0] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
        </form>
        <router-link to="/" class="h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary font-montserrat font-[w600] text-white text-2xl rounded-[0.9375rem]">
          {{ register }}
        </router-link>
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
    export default{
        components: {},
        data() {
            return {
            heading: "Registrasi",
            subheading: "Sudah memiliki akun?",
            register: "Daftar",
            button_text: "Masuk",
            description: "Dengan mendaftar, Anda setuju dengan syarat & ketentuan re:cycle dan kebijakan privasi",
            };
        },
    }
</script>