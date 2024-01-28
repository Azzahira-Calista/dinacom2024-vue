<template>
  <div class="md:mx-0 mx-[3rem]" data-aos="zoom-in ">
    <div class="flex">
      <button class="my-5 bg-primary p-3 rounded-xl text-white font-semibold mr-5" @click="getLocation">Lokasi saya</button>
      <button class="my-5 bg-secondary p-3 rounded-xl text-white font-semibold" @click="recycleLocation">Lokasi Re:cycle</button>
      <!--      {{ lat }}, {{ lng }}-->
    </div>
    <div id="container">
      <div  ref="mapContainer" class="h-[600px] w-full -z-0 md:mb-o mb-[3rem]" ></div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import AOS from "aos";
// import * as events from "events";
export default {
  name: "LMap",
  mounted() {
    AOS.init();
  },
  setup() {

    const lat = ref(0)
    const lng = ref(0)
    const map = ref()
    const mapContainer = ref()
    const locationIcon = L.icon({
      iconUrl: require('@/assets/logo/location.svg'),
      iconSize: [32, 37],
      iconAnchor: [16, 37]
    })
    const recycleLocationIcon = L.icon({
      iconUrl: require('@/assets/logo/recycle_location.png'),
      iconSize: [32, 37],
      iconAnchor: [16, 37]
    })

    const data = {
      // Getassrabi: {
      //   coords: [-6.763868, 110.806805],
      //   title: 'Re:cycle di Getassrabi\n',
      //   address: 'Getassrabi'
      // },
      // Gondosari: {
      //   coords: [-6.726474, 110.843289],
      //   title: 'Re:cycle di Gondosari',
      //   address: 'Gondosari, Indonesia'
      // },
      Gribig: {
        coords: [-6.786495, 110.825964],
        title: 'Re:cycle di Gribig',
        address: 'Gribig, Indonesia'
      },
      Jurang: {
        coords: [-6.736807, 110.847722],
        title: 'Re:cycle di Jurang',
        address: 'Jurang, Indonesia'
      },
      // Karangmalang: {
      //   coords: [-6.764475, 110.834512],
      //   title: 'Re:cycle di Karangmalang',
      //   address: 'Karangmalang, Indonesia'
      // },
      Besito: {
        coords: [-6.7525, 110.8427],
        title: 'Re:cycle di Besito',
        address: 'Besito, Indonesia'
      },
      Kedungsari: {
        coords: [-6.717878, 110.832649],
        title: 'Re:cycle di Kedungsari',
        address: 'Kedungsari, Indonesia'
      },
      Klumpit: {
        coords: [-6.770702, 110.819753],
        title: 'Re:cycle di Klumpit',
        address: 'Klumpit, Indonesia'
      },
      // Menawan: {
      //   coords: [-6.696913, 110.842912],
      //   title: 'Re:cycle di Menawan',
      //   address: 'Menawan, Indonesia'
      // },
      // Padurenan: {
      //   coords: [-6.755053, 110.816695],
      //   title: 'Re:cycle di Padurenan',
      //   address: 'Padurenan, Indonesia'
      // },
    };


    onMounted(() => {
      map.value = L.map(mapContainer.value).setView([51.505, -0.09], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map.value);

      for (let key in data) {
        const lokasi = data[key];

        const marker = L.marker(lokasi.coords, {
          title: lokasi.title,
          address: lokasi.address,
          icon: recycleLocationIcon
        }).addTo(map.value);

        marker.bindPopup(`
          <span class="popup">
            ${lokasi.address}
          </span>
        `);
      }
    })

    function recycleLocation() {
      map.value.flyTo([-2.5489, 118.0149], 5, {duration: 3});
    }


    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          lat.value = position.coords.latitude
          lng.value = position.coords.longitude
          map.value.flyTo([lat.value, lng.value], 13, {duration: 3})

          L.marker([lat.value, lng.value], {icon: locationIcon})
              .addTo(map.value)
        })
      }

    }

    return {
      lat,
      lng,
      getLocation,
      map,
      mapContainer,
      recycleLocation
    }
  }

}
</script>