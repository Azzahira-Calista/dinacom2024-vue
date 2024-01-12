<template>
    <div>
        <div class="flex flex-col w-[50.5rem] h-screen items-center justify-center font-mont">
            <h1 class="font-bold text-3xl text-secondary text-center mb-[3.125rem]">
                {{ heading }}
            </h1>
            <form action="" method="post" class="flex flex-col">
                <!-- mb-[1.875rem] border border-black-->
                <input type="email" name="email" id="email" placeholder="Email" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
                <input type="text" name="password" id="password" placeholder="Password" class="bg-[#F1F0F0] mb-[1.25rem] h-[3.125rem] w-[21.5625rem] px-[1rem] rounded-[0.9375rem] focus:outline-none focus:border-[#31936D]">
            </form>
            <router-link to="/" class="font-mont font-semibold h-[3.125rem] w-[21.5625rem] my-[3.125rem] text-center py-[0.625rem] bg-primary font-montserrat font-[w600] text-white text-2xl rounded-[0.9375rem]">
                {{ register }}
            </router-link>
            <div class="flex">
                <p class="mr-1">{{ subheading }}</p>
                <router-link to="/register" class="mr-7 cursor-pointer text-primary font-mont">
                    {{ button_text }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        components: {},
        data() {
            return {
            heading: "Masuk",
            subheading: "Belum memiliki akun?",
            register: "Masuk",
            button_text: "Daftar",
            };
        },
    }
</script>