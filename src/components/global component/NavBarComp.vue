
<template>
  <nav class="fixed top-0 z-10">
    <div class="bg-bgColor w-screen h-[3.75rem] pl-[1rem] pr-[2rem] shadow-md">
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
            Re:cycle
          </router-link>
        </div>
        <!--        <div class="flex font-mont text-base text-black items-center" >-->
        <!--          <router-link to="/about-us" class="relative mr-7 cursor-pointer block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{{-->
        <!--              isi-->
        <!--            }}</router-link>-->
        <!--          <div class="mr-7 cursor-pointer" @click="showComponent('Layanan')">Layanan</div>-->
        <!--          <button @click="scrollToBottom" class="relative mr-7 cursor-pointer block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">-->
        <!--            Layanan-->
        <!--          </button>-->
        <!--          <div class="relative mr-7 cursor-pointer block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Lokasi</div>-->
        <!--          <div class="relative mr-7 cursor-pointer block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">FAQ</div>-->
        <!--        </div>-->
        <div class="flex align-middle items-center justify-center font-mont ">

          <div>
            <router-link
                v-if="!hasToken"
                to="/login"
                class="mr-7 cursor-pointer text-primary">
              Masuk / Daftar
            </router-link>

            <div v-else class="relative flex">
              <div>
                <div
                    class="rounded-2xl font-semibold md:text-base mr-[1.25rem] text-white md:px-[20px] md:py-[8px] p-[8px]  bg-primary cursor-pointer"
                    @click="showPopupPickup = true"
                >
                  Pick Up
                </div>
                <PickUpForm :showPopupPickup="showPopupPickup" @closePopupPickup="showPopupPickup = false"/>
              </div>


              <button @click="show = !show" class="flex items-center w-[2.5rem] h-[2.5rem] bg-secondary rounded-full cursor-pointer overflow-hidden">
                <img :src="require('@/assets/logo/icon_person.svg')" alt="user" class="flex items-center w-full h-full -mb-2 overflow-hidden" />
              </button>
              <div v-show="show" class="absolute right-0 py-2 mt-14 bg-bgColor rounded-md shadow-xl w-32 flex flex-col font-mont text-[#303030]">
                <router-link to="/profile" class="align-middle px-2 hover:bg-secondaryBgColor py-1">Profile</router-link>
                <router-link to="" @click="showPopup = true" class="align-middle px-2 hover:bg-secondaryBgColor py-1">Tukar point</router-link>
                <PopupPointsVue :showPopup="showPopup" @closePopup="showPopup = false" />
                <button @click="confirmLogout" class="text-left px-2 text-red-500 hover:text-white hover:bg-red-300 py-1">Logout</button>
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
import { useRouter } from "vue-router";
import PopupPointsVue from './PopupPoints.vue';
import Swal from 'sweetalert2';
import PickUpForm from '@/components/global component/PickUpComp/PickUpFormComp.vue';


export default {
  inject: ["eventBus"],
  setup() {

    const isi = ref("Tentang kami");
    const logo = require("@/assets/logo/logo.png");
    const show = ref(false);
    const showPopupPickup = ref(false);

    const router = useRouter();
    const hasToken = ref(false);
    const hasUserId = ref(false);

    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      hasToken.value = false;
      hasUserId.value = false;
      router.push("/");
    };

    const confirmLogout = () => {
      Swal.fire({
        title: "Apakah anda yakin ingin keluar?",
        text: "Anda akan keluar dari akun ini!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Batal",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#E88A1B",
        confirmButtonText: "Iya, Keluarkan saya!",
      }).then((result) => {
        if (result.isConfirmed) {
          logout();
          Swal.fire({
            title: "Keluar!",
            text: "Anda telah keluar dari akun ini. Terima kasih telah menggunakan layanan kami!",
            icon: "success",
            confirmButtonColor: "#E88A1B",
          });
        } else {
          Swal.fire({
            title: "Batal",
            text: "Anda telah membatalkan keluar dari akun ini!",
            icon: "error",
            confirmButtonColor: "#E88A1B",
          });
        }
      });
    };

    onMounted(async () => {
      try {
        const token = localStorage.getItem("token");
        hasToken.value = token !== null;
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    });

    const scrollToBottom = () => {
      this.$refs.LayananComp.scrollToBottom({
        top: this.$refs.LayananComp.scrollHeight,
        behavior: "smooth",
      });
    };

    const togglePopupPickup = () => {
      showPopupPickup.value = !showPopupPickup.value;
    };

    return {
      PickUpForm,
      PopupPointsVue,
      isi,
      logo,
      show,
      hasToken,
      logout,
      confirmLogout,
      scrollToBottom,
      togglePopupPickup
    };
  },

  data() {
    return {
      showPopup: false,
      showPopupPickup: false,

    };
  },

  components: {
    PopupPointsVue,
    PickUpForm
  }
};
</script>
