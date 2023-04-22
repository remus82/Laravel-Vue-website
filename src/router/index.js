import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/index.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Articles from '../views/Articles.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path: '/articles',
      name: 'Articles',
      component: () => import('../views/Articles.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/*webpackChunkName: "about" */ '../views/About.vue')
    },
     
    
  ]
})

export default router
