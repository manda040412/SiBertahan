import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/about.vue'
import Blog from '../views/blog.vue'
import Career from '../views/career.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: AboutUs },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/career', name: 'Career', component: Career },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router