<template>
    <div>
        <div class="flex flex-col w-[50.5rem] h-screen items-end justify-center font-mont">
          <div class="h-[27.5rem] w-[21.5rem] bg-[#F1F0F0] mb-7 me-1 relative items-center justify-center text-center">
            <input type="file" accept="image/*" ref="file" name="detail-lokasi" id="deail-lokasi" placeholder="Image" class="bg-[#F1F0F0] mb-[1.25rem] h-full w-full px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
          </div>
          <router-link to="/" class="font-mont font-semibold me-32 h-[3.125rem] w-[13.5rem] mt-10 mb-10 text-center py-[0.625rem] bg-gray-400  text-white text-2xl rounded-[0.9375rem]">
            Batal
          </router-link>
        </div>
    </div>
</template>

<script>
    export default{
        components:{}
    }
</script>