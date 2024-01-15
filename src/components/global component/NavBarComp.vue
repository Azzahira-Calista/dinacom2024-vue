<template>
  <nav class="fixed top-0 left-0 right-0 z-10">
    <div class="bg-bgColor w-screen h-[3.75rem] px-[1rem] shadow-md">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img :src="logo" alt="logo" style="width: 70px; height: auto" />
          <div
              class="text-transparent bg-clip-text font-semibold text-2xl font-mont"
              style="
              background-image: linear-gradient(to bottom, #669940, #02353c);">
            re:cycle
          </div>
        </div>
        <div class="flex font-mont text-base text-black items-center">
          <router-link
              to="/about-us"
              class="mr-7 cursor-pointer"
          >{{ isi }}</router-link>
          <div class="mr-7 cursor-pointer">Layanan</div>
          <div class="mr-7 cursor-pointer">Lokasi</div>
          <div class="mr-7 cursor-pointer">FAQ</div>

          <router-link
              v-if="!isLoggedIn"
              to="/login"
              class="mr-7 cursor-pointer text-primary"
          >Daftar / Masuk</router-link>

          <router-link
              v-else
              to="/profile"
              class="w-[2.5rem] h-[2.5rem] bg-secondary rounded-full mr-7 cursor-pointer"
          ></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isi: "Tentang kami",
      logo: require("@/assets/logo/logo.png"),
      isLoggedIn: false,
    };
  },
};
</script>

<style></style>
