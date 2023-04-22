<script >


import Navbar from "@/views/Navbar.vue";

import Header from "@/views/Header.vue";

import Footer from "@/views/Footer.vue";

import Articles from "@/views/Articles.vue";

import { RouterView } from 'vue-router';


export default {
    name: "App",

    components: {

        Navbar,
        Header,
        Articles,
        Footer,

    },
};
</script>

<template>
    <div><Navbar/></div>
   
    <div><Header></Header></div>

        <RouterView/>

    <div><Footer></Footer></div>


</template> 