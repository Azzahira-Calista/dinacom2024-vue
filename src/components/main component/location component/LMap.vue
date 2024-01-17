<template>
  <div class="" data-aos="zoom-in ">
    <div class="flex">
      <button class="my-5 bg-primary p-3 rounded-xl text-white font-semibold mr-5" @click="getLocation">Lokasi saya</button>
      <button class="my-5 bg-secondary p-3 rounded-xl text-white font-semibold" @click="recycleLocation">Lokasi Re:cycle</button>
      <!--      {{ lat }}, {{ lng }}-->
    </div>
    <div id="container">
      <div  ref="mapContainer" class="h-[600px] w-full -z-0" ></div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import * as events from "events";
export default {
  name: "LMap",
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
      jakarta: {
        coords: [-6.2088, 106.8456],
        title: 'Re:cycle di Jakarta',
        address: 'Jakarta, Indonesia'
      },
      bogor: {
        coords: [-6.5950, 106.8166],
        title: 'Re:cycle di Bogor',
        address: 'Bogor, Indonesia'
      },
      depok: {
        coords: [-6.4025, 106.7942],
        title: 'Re:cycle di Depok',
        address: 'Depok, Indonesia'
      },
      tangerang: {
        coords: [-6.1780, 106.6296],
        title: 'Re:cycle di Tangerang',
        address: 'Tangerang, Indonesia'
      },
      bekasi: {
        coords: [-6.2383, 106.9756],
        title: 'Re:cycle di Bekasi',
        address: 'Bekasi, Indonesia'
      },
      kudus: {
        coords: [-6.7525, 110.8427],
        title: 'Re:cycle di Kudus',
        address: 'Kudus, Indonesia'
      },
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