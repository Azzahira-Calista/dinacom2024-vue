<!--<template>-->
<!--  <div>-->
<!--    <Splide :options="options" :extensions="extensions">-->
<!--      <SplideSlide v-for="(item, index) in items" :key="index">-->
<!--        <div class="item bg-white rounded-md overflow-hidden transition-transform duration-500 transform hover:scale-50">-->
<!--          <img :src="item.imageUrl" :alt="item.title" class="w-full h-full object-cover" />-->
<!--          <div class="p-4">-->
<!--            <h3 class="text-xl font-semibold">{{ item.title }}</h3>-->
<!--            &lt;!&ndash; Include other details here &ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--      </SplideSlide>-->
<!--    </Splide>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div>
    <Splide :options="options" :extensions="extensions">
      <SplideSlide v-for="(item, index) in items" :key="index">
        <div class="item bg-white rounded-md shadow-lg p-4  transition duration-300 ease-in-out hover:shadow-xl hover:shadow-secondary"  style="margin-right: 50px;">
          <div class="flex flex-col">
            <div class="mb-5">
              <iframe
                  width="100%"
                  height="150"
                  :src="`https://www.youtube.com/embed/${item.videoId}`"
                  title="YouTube video player"
                  frameborder="0"
                  allowfullscreen
              ></iframe>
            </div>
            <div class="">
              <h3 class="text-xl font-semibold text-[#303030]">{{ item.title }}</h3>
            </div>
            <div>
              <a :href="'https://www.youtube.com/watch?v=' + item.videoId" target="_blank" rel="noopener noreferrer">
                <img
                    :src="icon"
                    class="mt-5 bottom-0 transform hover:rotate-[35deg] transition-transform duration-300 ease-in-out cursor-pointer"
                    alt="Clickable Rotating Image"
                />
              </a>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import {defineComponent} from "vue";
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },

  data() {
    return {
      icon: [
        require ('@/assets/logo/share_icon.svg'),
      ],
      items: [
        {
          videoId: "ogE3n_KdYfg",
          title: "Membuat bunga dari botol dan gelas plastik bekas",
        },
        {
          videoId: "li-ylRo7VEc", // tolong gantiin videonya
          title: "Title 2", // deskripsiny jgn sampe lebih dari 2 lineS
        },
        {
          videoId: "MJd3bo_XRaU",
          title: "Title 3",
        },
        {
          videoId: "QNPZ2-4PcBc",
          title: "Title 4",
        },
        {
          videoId: "T2Hu0fjuX5k",
          title: "Title 5",
        },

      ],
    };
  },

  setup() {
    const options = {
      type: "loop",
      drag: "free",
      focus: "center",
      autoWidth: true,
      pagination: false,
      arrows: false,
      gap: 30,
      autoScroll: {
        speed: 0.5,
      },
    };

    return {
      options: options,
      extensions: {
        AutoScroll,
      },
    };
  },
});
</script>

<style scoped>
.item {
  width: 280px;
  height: 320px;
  transition: transform 0.5s ease;
}

.item:hover img {
  transform: rotate(35deg);
}
</style>