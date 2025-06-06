import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/about.vue'
import Blog from '../views/blog.vue'
import Career from '../views/career.vue'
import ServicesSiberjaga from '../views/services-siberjaga.vue'
import ServicesSiberserang from '../views/services-siberserang.vue'
import ServicesSiberpatuh from '../views/services-siberpatuh.vue'
import contact from '../views/contact.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: AboutUs },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/career', name: 'Career', component: Career },
  { path: '/services-siberjaga', name: 'ServicesSiberjaga', component: ServicesSiberjaga },
  { path: '/services-siberserang', name: 'ServicesSiberserang', component: ServicesSiberserang },
  { path: '/services-siberpatuh', name: 'ServicesSiberpatuh', component: ServicesSiberpatuh },
  { path: '/contact', name: 'Contact', component: contact },
  // Tambahkan page lain sesuai PDF
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router