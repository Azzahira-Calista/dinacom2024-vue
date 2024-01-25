<template>
  <div class=" bg-bgColor pt-[3.12rem] md:px-[15.62rem]  flex flex-col justify-center items-center relative overflow-hidden">
    <img
        class="absolute top-0 -right-20 w-1/3 object-cover -mt-40 transform rotate-[-75deg] overflow-hidden"
        :src="img[0]"
        alt="Background Image"
    />
    <img
        class="absolute -bottom-15 -left-52 w-1/3 object-cover transform rotate-[-30deg] overflow-hidden"
        :src="img[1]"
        alt="Background Image"
    />
    <img
        class="absolute -bottom-20 -left-16 w-1/4 object-cover transform rotate-[16deg] overflow-hidden"
        :src="img[1]"
        alt="Background Image"
    />

    <div class="flex flex-col align-center items-center justify-center overflow-hidden md:flex-col" data-aos="fade-down ">
      <div class="md:flex flex font-bold font-mont mx-10 md:text-[2rem] text-[1.5rem] text-primary  md:w-screen  md:items-center md:px-[15.62rem]">{{ title }}</div>
      <div class="md:flex md:flex-row flex flex-col justify-center items-center content-center">
      <div class="max-w-[25rem] my-10 w-full md:mr-20 ">
        <canvas
            ref="chart"
            class="chart-canvas "
            width="450"
            height="450"
        ></canvas>
      </div>
      <div class="w-96 text-[#303030] md:text-left text-center justify-center items-center font-mont text-base">
        <swiper
            :options="swiperConfig"
            :autoplay="{ delay: 5000 }"
            :slides-per-view="1"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>Berdasarkan laporannya kepada Presiden RI Joko Widodo, Menteri Lingkungan Hidup dan Kehutanan Siti Nurbaya mengatakan jenis sampah yang dihasilkan didominasi oleh sampah organik yang mencapai sekitar 60 persen dan sampah plastik yang mencapai 15 persen.</swiper-slide>
            <swiper-slide>sistem pengumpulan sampah plastik turut memberikan kontribusi lebih dari Rp. 1 Triliun dalam mendukung sirkular ekonomi selama tahun 2019-2020. Angka tersebut diperoleh melalui Bank Sampah, TPS 3R, TPST, PDU, sektor informat (pemulung/pelapak), dan social enterpreneur, dengan asumsi harga 1 kg plastik sebesar Rp. 2.400/kg. Dari pengumpulan sampah kertas, memberikan kontribusi terhadap sirkular ekonomi lebih kurang Rp. 7,3 T dengan asumsi harga 1 kg kertas Rp. 3.500/kg.</swiper-slide>
            <swiper-slide>"Mengutip data dari Kementerian Lingkungan Hidup dan Kehutanan (KLHK), pada tahun 2022 sebanyak 64 persen timbulan sampah telah berhasil dikelola dari total 68,5 juta ton sampah nasional. Dari total 68,5 juta ton sampah nasional, tercatat komposisi sampah yang paling dominan adalah sisa makanan, plastik, dan kertas," kata dia saat membuka acara Parlemen Kampus 2023 yang diselenggarakan oleh Biro Protokol dan Humas, Sekretariat Jenderal DPR RI, di Padang, Sumatera Barat, Rabu (15/03/2023).</swiper-slide>
            ...
          </swiper>
        </div>
      </div>

    </div>

  </div>


</template>

<script>
import Chart from "chart.js/auto";
import AOS from "aos";
import { Swiper, SwiperSlide,  } from 'swiper/vue';
import 'swiper/css'
export default {
  nama: "ChartComp",
  data(){
    return{
      img: [
        require("@/assets/image/leaf_bg1.svg"),
        require("@/assets/image/leaf_bg2.svg"),
      ],
      title: "Penghasilan sampah di indonesia pada tahun 2023",
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperConfig = {
      autoplay: {
        delay: 5,
        disableOnInteraction: false,

      },
    };
    const onSwiper = (swiper) => {

      console.log(swiper);
    };
    const onSlideChange = (swiper) => {
      console.log(swiper);
    };
    return {
      onSwiper,
      onSlideChange,
      swiperConfig
    };
  },
  mounted() {
    this.renderChart();
    AOS.init();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chart.getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: [
            "Sampah organik",
            "Sampah non-organik",
            "Lainnya",
          ],
          datasets: [
            {
              data: [44.42, 33.38, 22.20],
              backgroundColor: ["#EC4310FF", "#EC7310FF", "#ECAE10FF"],
            },
          ],
        },
        options: {
          // layout: {
          //   padding: {
          //     right: 5,
          //   },
          // },

          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: {
                  family: "Montserrat, sans-serif",
                },
              },
            },
          },
        },
      });
    },
  },
}
</script>