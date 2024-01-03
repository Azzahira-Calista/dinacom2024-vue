<template>
  <nav-bar-comp/>
  <router-view/>
</template>

<script>
import NavBarComp from './components/global component/NavBarComp.vue';

export default {
  components: { NavBarComp },
  name: 'App',
  
}
</script>

