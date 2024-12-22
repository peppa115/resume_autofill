import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'home',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/resume',
      component: () => import('../views/resume/index.vue')
    },
    {
      path: '/job_info',
      component: () => import('../views/jobInfo/index.vue')
    },
    {
      path: '/personal',
      component: () => import('../views/personal/index.vue')
    }
  ]
})

export default router
