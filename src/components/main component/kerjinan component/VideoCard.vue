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
        <div class="item bg-white rounded-md shadow-md p-4 "  style="margin-right: 50px;">
          <div class="flex flex-col">
            <div class="mb-10">
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
              <h3 class="text-xl font-semibold">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
<!--            <div>-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500">-->
<!--                <path-->
<!--                    fill="currentColor"-->
<!--                    d="M12 2a10 10 0 00-7 2.5A10 10 0 004 12a9.8 9.8 0 001.5 5.2 1 1 0 01-1.6 1.2A11.83 11.83 0 012 12a12 12 0 0110-11.8V0h.2A12 12 0 0112 2zm6.8 3.4A11.9 11.9 0 0124 12a11.83 11.83 0 01-2.5 7.2 1 1 0 01-1.6-1.2A9.8 9.8 0 0020 12a9.8 9.8 0 00-1.5-5.2 1 1 0 011.6-1.2A11.83 11.83 0 0122 12a11.9 11.9 0 01-3.2 8.6A11.9 11.9 0 0112 24a11.9 11.9 0 01-8.8-3.4A11.9 11.9 0 012 12a11.9 11.9 0 013.4-8.6A11.9 11.9 0 0112 2a11.9 11.9 0 018.6 3.4zM16 13h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 010 2z"-->
<!--                />-->
<!--              </svg>-->
<!--            </div>-->
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
      items: [
        {
        videoId: "ogE3n_KdYfg",
        title: "Title 1",
        description: "Description 1",
        },
        {
        videoId: "li-ylRo7VEc",
        title: "Title 2",
        description: "Description 2",
        },
        {
          videoId: "MJd3bo_XRaU",
          title: "Title 2",
          description: "Description 2",
        },
        {
          videoId: "QNPZ2-4PcBc",
          title: "Title 2",
          description: "Description 2",
        },
        {
          videoId: "T2Hu0fjuX5k",
          title: "Title 2",
          description: "Description 2",
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

.item:hover {
  cursor: pointer;
  transform: scale(1.2);
  z-index: 1;}
</style>
