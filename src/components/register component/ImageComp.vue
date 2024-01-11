<template>
    <div>
        <div class="flex flex-col w-[56.15rem] h-screen">
          <img :src="imgs" alt="Trash Image" class="w-full h-full object-cover" />
      </div>
    </div>
</template>

<script>
    export default {
        components:{},
        data() {
            return {
            imgs: require("@/assets/images/register_2.png"),
            };
        },
    };
</script>