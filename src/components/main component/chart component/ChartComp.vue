<template>
  <div class="mt-10 min-w-screen pt-[3.12rem] px-[15.62rem]  flex flex-col justify-center items-center relative ">
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
        class="absolute -bottom-20 -left-16 w-1/4 object-cover transform rotate-[16deg]"
        :src="img[1]"
        alt="Background Image"
    />


    <div class="font-bold font-mont text-[2rem] text-primary ">{{ title }}</div>
    <div class="max-w-[30rem] w-full ">
        <canvas
            ref="chart"
            class="chart-canvas"
            width="450"
            height="450"
        ></canvas>
    </div>
  </div>


</template>

<script>
import Chart from "chart.js/auto";

export default {

  data(){
    return{
      img: [
        require("@/assets/image/leaf_bg1.svg"),
        require("@/assets/image/leaf_bg2.svg"),
      ],
      title: "Penghasilan sampah di indonesia pada tahun 2023",
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chart.getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: [
            "Sampah makanan",
            "Kayu",
            "Plastik",
            "Kertas",
            "Kain",
            "Lainnya",
          ],
          datasets: [
            {
              data: [39.74, 19.98, 16.97, 11.9, 2.76, 28.63],
              backgroundColor: ["#EC4310FF", "#EC7310FF", "#ECAE10FF","#ECE810FF", "#AEEC10FF", "#5BB710FF"],
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
              position: "right",
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