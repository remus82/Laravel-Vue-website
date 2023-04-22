
<script>

import Navbar from "./Navbar.vue";

import Header from "./Header.vue";

import Articles from "./Articles.vue";

import Footer from "./Footer.vue";

export default{

   name: 'Home',
   
   components: {

    Navbar,

    Header,

    Articles,

    Footer,

   }
}

</script>

<template>
   
   <RouterView/>
   
</template>
  
