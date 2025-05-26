import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // Tambahkan page lain sesuai PDF
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
