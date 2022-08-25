import { configProviderContextKey } from 'element-plus'
import { createRouter, createWebHashHistory } from 'vue-router'
// import layout from '@/layout/index'

const routes = [
  {
    path: '/',
    name: 'home',
    // component: layout,
    redirect: '/users'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

// router.replace('/') 跳转页面

// 请求拦截器，可以用于添加token
// service。interceptors.request.use(config => {
//   configProviderContextKey.headers.Authorization = localStorage.getItem('token')
//   return config
// }), error => {reject()})

// 路由守卫