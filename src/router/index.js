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
      name: 'Home',
      component: () => import(/*webpackChunkName: "Home" */ '../views/index.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/*webpackChunkName: "Contact" */ '../views/Contact.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/*webpackChunkName: "About" */ '../views/About.vue')
    },
    {
      path: '/articles',
      name: 'Articles',
      component: () => import(/*webpackChunkName: "Articles" */ '../views/Articles.vue')
    },
    
    
  ]
})

export default router
