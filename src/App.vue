<script >
import Navbar from './views/Navbar.vue';
import Main from './views/Home.vue';
import { RouterView } from 'vue-router';
 
export default {
    name: "App",

    components: {
        Navbar,
         
    },
};
</script>

<template>
  <Navbar>
  <RouterView/> 
      <RouterLink />
</Navbar>
<Hero />
</template>