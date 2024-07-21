// createRouter: 创建router实例对象
//createWebHistory: 创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 导入组件
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置path 和component对应关系的位置
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    // {
    //   path: '/',
    //   component: Layout
    // },
    // {
    //   path: '/login',
    //   component: Login
    // }


  ]
})

export default router
