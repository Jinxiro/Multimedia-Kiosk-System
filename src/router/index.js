import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Homepage from '@/views/Homepage.vue'
import InquiryPage from '@/views/InquiryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/InquiryPage',
      name: 'inquiry',
      component: InquiryPage
    },
    {
      path: '/about', 
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
