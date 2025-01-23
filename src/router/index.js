import AppNavigation from '@/components/AppNavigation.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppNavigation,
    },
  ],
})

export default router
