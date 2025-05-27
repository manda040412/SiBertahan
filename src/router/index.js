import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import AboutUs from '../views/aboutUs.vue'

const routes = [
  { path: '/', redirect: '/Home' },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/home', name: 'Home', component: Home },
  // Tambahkan page lain sesuai PDF
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
