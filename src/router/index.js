import { createRouter, createWebHashHistory } from 'vue-router'

import MainView from "../views/MainView.vue";

const routes = [
  {
    path: '/',
    name: 'main page',
    component: MainView,
  },
  {
    path: '/login',
    name: 'login page',
    component: () => import('../views/LoginView.vue')  
  },
  {
    path: '/register',
    name: 'register page',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/profile',
    name: 'profile page',
    component: () => import('../views/ProfileView.vue')  
  },
  {
    path: '/form',
    name: 'pick up form page',
    component: () => import('../views/PickupFormView.vue')  
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
