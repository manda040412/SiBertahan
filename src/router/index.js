import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Blog from '../views/blog.vue'
import Career from '../views/career.vue'

const routes = [
  { path: '/', redirect: '/Home' },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/home', name: 'Home', component: Home },
  { path: '/career', name: 'Career', component: Career },
  // Tambahkan page lain sesuai PDF
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
