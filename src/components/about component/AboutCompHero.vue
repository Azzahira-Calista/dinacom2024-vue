<template>
    <div class="mt-[3.75rem] flex ">
        <div class=" w-[40rem]">
            <img :src="image" alt="Trash Pic" class="h-full w-full object-cover"/>
        </div>
        <div class="font-mont flex flex-column justify-center items-center ml-[5rem]">
            <div>
                <h2 class="mb-[1.875rem] text-[2rem] font-mont font-bold">{{ title }}</h2>
                <p class="max-w-[29rem] mb-[1.25rem] text-[1.25rem] text-justify">{{ description }}</p>
                <p class="max-w-[29rem] text-[1.25rem] text-justify">{{ description2 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        components: {},
        data(){
            return {
                title: 'Tentang Kami',
                description: 'Recycle, sebuah inisiatif yang didedikasikan untuk menciptakan perubahan positif dalam pengelolaan sampah dan keberlanjutan lingkungan.',
                description2: 'Kami adalah tim yang terdiri dari individu-individu bersemangat yang percaya bahwa setiap langkah kecil dapat membawa dampak besar terhadap ekosistem.',
                image: require('@/assets/images/about_us.png')
            }
        }
    };
</script>