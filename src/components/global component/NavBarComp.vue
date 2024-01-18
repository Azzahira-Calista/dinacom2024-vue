<template>
  <nav class="fixed top-0 right-0 z-10">
    <div class="bg-bgColor w-screen h-[3.75rem] px-[1rem] shadow-md">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img :src="logo" alt="logo" style="width: 70px; height: auto" />
          <router-link
            to="/"
            class="text-transparent bg-clip-text font-semibold text-2xl font-mont"
            style="
              background-image: linear-gradient(to bottom, #669940, #02353c);
            "
          >
            re:cycle
          </router-link>
        </div>
        <div class="flex font-mont text-base text-black items-center" >
          <router-link to="/about-us" class="relative mr-7 cursor-pointer block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{{
            isi
          }}</router-link>
          <!--          <div class="mr-7 cursor-pointer" @click="showComponent('Layanan')">Layanan</div>-->
          <button @click="scrollToBottom" class="relative mr-7 cursor-pointer block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Layanan
          </button>
          <div class="relative mr-7 cursor-pointer block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Lokasi</div>
          <div class="relative mr-7 cursor-pointer block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">FAQ</div>
        </div>
        <div class="flex align-middle items-center justify-center font-mont">
          <div
            class="rounded-2xl font-semibold text-base mr-[1.25rem] text-white px-[20px] py-[8px] bg-primary cursor-pointer"
          >
            Pick Up
          </div>
          <div>
            <router-link
                v-if="!hasToken"
                to="/login"
              class="mr-7 cursor-pointer text-primary"
              >Masuk</router-link
            >

            <div v-else class="relative">
              <button @click="show = !show" class="flex items-center w-[2.5rem] h-[2.5rem] bg-secondary rounded-full cursor-pointer"></button>
              <div v-show="show" class="absolute right-0 py-2 mt-2 bg-bgColor rounded-md shadow-xl w-32 flex flex-col font-mont text-[#303030]">
                <router-link to="/profile" class=" px-2 hover:bg-secondaryBgColor py-1">Profile</router-link>
                <router-link to="" class=" px-2 hover:bg-secondaryBgColor py-1">Tukar point</router-link>
                <router-link to="" class=" px-2 text-red-500 hover:text-white hover:bg-red-300 py-1">Logout</router-link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from "vue";
// import axios from "axios";

export default {
  data() {
    return {
      isi: "Tentang kami",
      logo: require("@/assets/logo/logo.png"),
      show: false,
      // hasToken: false,
      // loggedIn: false,
    };
  },
  inject: ["eventBus"],
  methods: {
    scrollToBottom() {
      this.$refs.LayananComp.scrollToBottom({
        top: this.$refs.LayananComp.scrollHeight,
        behavior: "smooth",
      });
    },
  },

  setup() {
    const hasToken = ref(false);

    onMounted(async () => {
      try {
        const token = localStorage.getItem("token");
        hasToken.value = token !== null;
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    });

    return {
      hasToken,
    };
  },
};
</script>


<style></style>
