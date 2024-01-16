import { createRouter, createWebHashHistory } from 'vue-router'
// import axios from 'axios';
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
  {
    path: '/about-us',
    name: 'About Us',
    component: () => import('../views/AboutUsView.vue')
  },
  {
   path: '/layanan',
   name:  'Layanan',
   component: () => import('../components/main component/layanan component/LayananComp.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//
// router.beforeEach(async (to, from, next) => {
//   const isAuthenticated = await checkAuthentication();
//
//
//   if (to.name !== 'login page' && !isAuthenticated) {
//     next({ name: 'login page' });
//   } else if (to.name === 'login page' && isAuthenticated) {
//     next({ name: 'main page' });
//   } else {
//     next();
//   }
// });
//
// async function checkAuthentication() {
//   try {
//     const response = await axios.get('https://f542-103-28-113-244.ngrok-free.app/api/login');
//     return response.data.isAuthenticated;
//   } catch (error) {
//     console.error('Error checking authentication status:', error);
//     return false;
//   }
// }


export default router
