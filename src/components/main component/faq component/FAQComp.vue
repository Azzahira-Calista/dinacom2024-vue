<template>
  <div class="bg-[#FAFCFA] relative flex flex-col items-center">

    <img
        class="absolute bottom-0 -left-20 w-1/4 object-cover -mt-40 transform rotate-[2deg] overflow-hidden"
        :src="img[0]"
        alt="Background Image"
    />
    <img
        class="absolute -top-32 -right-20 w-1/3 object-cover -mt-40 transform rotate-[2deg] overflow-hidden"
        :src="img[1]"
        alt="Background Image"
    />

    <div class="text-start mt-[5rem] flex justify-center">
      <div class="font-montserrat font-bold text-[32px] text-[#FF8551]">
        FAQ
      </div>
      <div>
        <div class="relative w-[59rem] bg-white rounded-[15px] m-[2rem]">
          <input type="checkbox" id="input1" class="absolute peer opacity-0">
          <label for="input1" class="ml-[3rem] text-[20px] tracking mx-[2rem] h-[3.5rem] flex items-center">Bagaimana saya dapat melacak kontribusi saya di Recycle Platform?</label>
          <div class="absolute top-[1rem] rotate-0 peer-checked:rotate-180 duration-200">
            <img
              :src="img[2]"
              alt="Down"
            />
          </div>
          <div class="max-h-0 overflow-hidden peer-checked:max-h-full">
            <p class="p-[2rem] text-[16px]">
              Recycle Platform menyediakan fitur pelacakan kontribusi, di mana Anda dapat melihat jumlah sampah yang telah Anda kumpulkan dan kontribusi positif yang telah Anda berikan terhadap lingkungan.
            </p>
          </div>
        </div>

        <div class="relative w-[59rem] bg-white rounded-[15px] m-[2rem]">
          <input type="checkbox" id="input2" class="absolute peer opacity-0">
          <label for="input2" class="ml-[3rem] text-[20px] tracking mx-[2rem] h-[3.5rem] flex items-center">Apa yang terjadi dengan sampah yang saya kumpulkan?</label>
          <div class="absolute top-[1rem] rotate-0 peer-checked:rotate-180 duration-200">
            <img
              :src="img[2]"
              alt="Down"
            />
          </div>
          <div class="max-h-0 overflow-hidden peer-checked:max-h-full">
            <p class="p-[2rem] text-[16px]">
              Sampah yang Anda kumpulkan melalui Recycle Platform akan diarahkan ke proses daur ulang atau pengelolaan limbah yang sesuai. Kami berkomitmen untuk memastikan bahwa setiap langkah yang diambil mendukung tujuan keberlanjutan dan pengurangan dampak lingkungan.
            </p>
          </div>
        </div>

        <div class="relative w-[59rem] bg-white rounded-[15px] m-[2rem]">
          <input type="checkbox" id="input3" class="absolute peer opacity-0">
          <label for="input3" class="ml-[3rem] text-[20px] tracking mx-[2rem] h-[3.5rem] flex items-center">Apakah saya harus membayar untuk menggunakan Recycle Platform?</label>
          <div class="absolute top-[1rem] rotate-0 peer-checked:rotate-180 duration-200">
            <img
              :src="img[2]"
              alt="Down"
            />
          </div>
          <div class="max-h-0 overflow-hidden peer-checked:max-h-full">
            <p class="p-[2rem] text-[16px]">
              Tidak, penggunaan Recycle Platform adalah gratis. Kami ingin memberikan kesempatan kepada semua orang untuk berkontribusi dalam upaya menjaga keberlanjutan lingkungan tanpa biaya tambahan.
            </p>
          </div>
        </div>

        <div class="relative w-[59rem] bg-white rounded-[15px] m-[2rem]">
          <input type="checkbox" id="input4" class="absolute peer opacity-0">
          <label for="input4" class="ml-[3rem] text-[20px] tracking mx-[2rem] h-[3.5rem] flex items-center">Apakah Recycle Platform tersedia di seluruh wilayah?</label>
          <div class="absolute top-[1rem] rotate-0 peer-checked:rotate-180 duration-200">
            <img
              :src="img[2]"
              alt="Down"
            />
          </div>
          <div class="max-h-0 overflow-hidden peer-checked:max-h-full">
            <p class="p-[2rem] text-[16px]">
              Saat ini, Recycle Platform telah tersedia di beberapa wilayah. Kami terus memperluas cakupan layanan kami untuk mencakup lebih banyak area dan memberikan kontribusi positif pada skala yang lebih besar.
            </p>
          </div>
        </div>

        <div class="relative w-[59rem] bg-white rounded-[15px] m-[2rem]">
          <input type="checkbox" id="input5" class="absolute peer opacity-0">
          <label for="input5" class="ml-[3rem] text-[20px] tracking mx-[2rem] h-[3.5rem] flex items-center">Bisakah saya mengumpulkan berbagai jenis sampah di Recycle Platform?</label>
          <div class="absolute top-[1rem] rotate-0 peer-checked:rotate-180 duration-200">
            <img
              :src="img[2]"
              alt="Down"
            />
          </div>
          <div class="max-h-0 overflow-hidden peer-checked:max-h-full">
            <p class="p-[2rem] text-[16px]">
              Ya, Recycle Platform mendukung pengumpulan berbagai jenis barang bekas yang dapat didaur ulang. Dari kertas, plastik, logam, hingga barang elektronik, Anda dapat berkontribusi dengan beragam jenis sampah.
            </p>
          </div>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
  return{
     img: [
      require('@/assets/images/DefaultImage/leaf2024.png'),
      require('@/assets/images/DefaultImage/leaf5.png'),
      require('@/assets/icons/MainPage/MainPageFAQ/mingcute_down-fill.svg'),
    ]
    }
  }
}
</script>

<style>

</style>