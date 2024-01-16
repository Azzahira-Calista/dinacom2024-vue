<template>
    <div>
        <div class="flex flex-col w-[50.5rem] h-screen justify-center font-mont">
            <h1 class="font-bold text-3xl text-secondary text-start mb-[3rem]">
                {{ heading }}
            </h1>
            <form action="" method="post" class="flex flex-col">
                <!-- mb-[1.875rem] border border-black-->
                <input type="text" name="detail-lokasi" id="deail-lokasi" placeholder="Detail Lokasi" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
                <input type="number" name="berat" id="berat" placeholder="Berat Perkiraan" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
                <input type="text" name="jenis" id="jenis" placeholder="Jenis Sampah" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
                <input type="text" name="deskripsi" id="deskripsi" placeholder="Deskripsi" class="bg-[#F1F0F0] mb-[1.25rem] h-[9.375rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D] text-start">
            </form>
            <router-link to="/" class="font-mont font-semibold h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary font-montserrat font-[w600] text-white text-2xl rounded-[0.9375rem]">
                {{ button_text }}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default{
        components: {},
        data() {
            return {
            heading: "Detail Pick Up",
            button_text: "Pick Up",
            };
        },
    }
</script>