<!--<script>-->
<!--import PointUser from "@/components/profile component/PointUser.vue";-->
<!--import axios from "axios";-->

<!--export default {-->
<!--  name: "DataUser",-->
<!--  components: {PointUser},-->
<!--  data(){-->
<!--    return{-->
<!--      name: "",-->
<!--      email: "",-->
<!--      icon: require ('@/assets/logo/logout_icon.svg')-->
<!--    }-->
<!--  },-->

<!--  async mounted()-->
<!--{-->
<!--  try {-->
<!--  const token = localStorage.getItem("token");-->
<!--    if (!token) {-->
<!--    console.error("Token not found. Redirect to login or handle accordingly.");-->
<!--    return;-->
<!--  }-->

<!--  const config = {-->
<!--    // headers: {-->
<!--      Authorization: `Bearer ${token}`,-->
<!--    // },-->
<!--  };-->

<!--  const response = await axios.get("https://f542-103-28-113-244.ngrok-free.app/api/user", config);-->
<!--    console.log(response.data.name + " " + response.data.email)-->

<!--  this.name = response.data.name;-->
<!--  this.email = response.data.email;-->
<!--} catch (error) {-->
<!--  console.error("Error fetching user data:", error);-->
<!--  if (error.response && error.response.status === 401) {-->
<!--    alert("Token expired. Please log in again.");-->
<!--    this.$router.push("/login");}-->
<!--}-->

<!--  //-->
<!--  // async created(){-->
<!--  //   const response = await axios.get("user", {-->
<!--  //     headers: {-->
<!--  //       Authorization: `Bearer` + {localStorage.getItem("token")},-->
<!--  //     },-->
<!--  //-->
<!--  //   });-->
<!--}};-->
<!--</script>-->

<!--<script>-->
<!--import PointUser from "@/components/profile component/PointUser.vue";-->
<!--import axios from "axios";-->
<!--import {useRouter} from "vue-router";-->


<!--export default {-->
<!--  name: "DataUser",-->
<!--  components: { PointUser },-->
<!--  data() {-->
<!--    return {-->
<!--      name: "",-->
<!--      email: "",-->
<!--      icon: require('@/assets/logo/logout_icon.svg')-->
<!--    };-->
<!--  },-->

<!--  async mounted() {-->
<!--    const router = useRouter();-->

<!--    try {-->

<!--      const token = localStorage.getItem("token");-->
<!--      console.log(token)-->
<!--      console.log("token")-->

<!--      const response = await axios.post("https://f542-103-28-113-244.ngrok-free.app/api/get-user", {-->
<!--        headers:{-->
<!--          "Content-Type": "application/json",-->
<!--          Accept: "application/json",-->
<!--          Authorization: `Bearer ${token}`,-->
<!--        },-->
<!--      })-->
<!--      console.log(response.data)-->

<!--    } catch (error) {-->
<!--      console.error("Error fetching user data:", error);-->
<!--      if (error.response && error.response.status === 401) {-->
<!--        alert("Token expired. Please log in again.");-->
<!--        router.push("/login");-->
<!--      }-->
<!--    }-->
<!--  },-->

<!--};-->
<!--</script>-->

<script>
import PointUser from "@/components/profile component/PointUser.vue";
import axios from "axios";
 export default {
   name: "DataUser",
   components: { PointUser },
  data() {
    return {
      name: "",
      email: "",
      icon: require('@/assets/logo/logout_icon.svg')
    };
  },

   async mounted(){
     try {
       const token = this.getToken();
       const response = await axios.get('http://127.0.0.1:8000/api/data-user', {
         headers: {
           'Authorization': `Bearer ${token}`
         }
       });

       console.log(response.data);

       this.name = response.data.name;
       this.email = response.data.email;

     } catch (error) {
       console.error(error);
     }
   },
   methods: {
     getToken() {
       return localStorage.getItem('token');
     },
   }

 }
</script>


<template>
  <div class=" flex w-align-middle font-mont items-center w-[70rem] justify-between">
    <div class="ps-11 flex flex-col align-middle font-mont items-start ">
      <!--    <div class="bg-secondary mb-[1.25rem] rounded-full w-[12.5rem] h-[12.5rem] cursor-pointer">-->

      <!--    </div>-->
      <div class="mb-[0.5rem] text-2xl text-white">
        {{ name }}
      </div>
      <div class="mb-[0.62rem] text-base text-white">
        {{ email }}
      </div>
    </div>
    <PointUser/>
  </div>
<!--  <div class=" flex flex-col align-middle font-mont items-center bg-blue-600">-->
<!--&lt;!&ndash;    <div class="bg-secondary mb-[1.25rem] rounded-full w-[12.5rem] h-[12.5rem] cursor-pointer">&ndash;&gt;-->

<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--    <div class="mb-[0.62rem] text-2xl ">-->
<!--&lt;!&ndash;      {{ name }}&ndash;&gt; nama-->
<!--    </div>-->
<!--    <div class="mb-[1.87rem] text-base">-->
<!--&lt;!&ndash;      {{ email }}&ndash;&gt; emailll-->
<!--    </div>-->
<!--    <point-user/>-->
<!--    <div class=" mt-[1.87rem] flex align-middle justify-center content-center items-center mr-auto cursor-pointer">-->
<!--      <div>-->
<!--        <img :src="icon">-->
<!--      </div>-->
<!--       <div class="ml-[20px] text-center text-red-600 font-mont mr-auto">Logout</div>-->
<!--    </div>-->

<!--  </div>-->
</template>

<style scoped>

</style>