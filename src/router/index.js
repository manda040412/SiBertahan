import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import AboutUs from '../views/about.vue'
import Blog from '../views/blog.vue'
import Career from '../views/career.vue'
import ServicesSiberjaga from '../views/services-siberjaga.vue'
import ServicesSiberserang from '../views/services-siberserang.vue'
import ServicesSiberpatuh from '../views/services-siberpatuh.vue'
import contact from '../views/contact.vue'
import SingleBlog from '../views/singleBlog.vue'
import SingleCareer from '../views/singleCareer.vue'

const routes = [
  { 
    path: '/', 
    redirect: '/home',
    // Anda bisa tambahkan meta title default untuk halaman redirect jika perlu
    meta: { title: 'Sibertahan' } 
  },
  { 
    path: '/home', 
    name: 'Home', 
    component: Home,
    meta: { title: 'Sibertahan - Home' } // Contoh: "SiBertahan - Home"
  },
  { 
    path: '/about', 
    name: 'About', 
    component: AboutUs,
    meta: { title: 'Sibertahan - About Us' } // Contoh: "SiBertahan - About Us"
  },
  { 
    path: '/blog', 
    name: 'Blog', 
    component: Blog,
    meta: { title: 'Sibertahan - Blog' } // Contoh: "SiBertahan - Blog"
  },
  { 
    path: '/blog/:id', 
    name: 'single-blog', // Pastikan nama ini sesuai dengan yang di blog.vue
    component: SingleBlog, 
    props: true,
    meta: { title: 'Sibertahan - Blog Post' } // Contoh: "SiBertahan - Blog Post"
    // Untuk judul dinamis seperti "SiBertahan - Judul Blog", Anda perlu mengakses data blog di SingleBlog.vue
    // dan update document.title dari dalam komponen SingleBlog.vue.
  },
  { 
    path: '/career', 
    name: 'Career', 
    component: Career,
    meta: { title: 'Sibertahan - Careers' } // Contoh: "SiBertahan - Careers"
  },
  {
    path: '/career/:id', // Rute baru untuk detail karir
    name: 'single-career', // Nama rute yang sama dengan yang digunakan di Career.vue
    component: SingleCareer, // Menggunakan komponen SingleCareer.vue
    props: true, // Untuk meneruskan params sebagai props (opsional, tapi bagus)
    meta: { title: 'Sibertahan - Career Detail' } // Judul default, akan diupdate oleh komponen
  },
  { 
    path: '/services-siberjaga', 
    name: 'ServicesSiberjaga', 
    component: ServicesSiberjaga,
    meta: { title: 'Sibertahan - SiberJaga' }
  },
  { 
    path: '/services-siberserang', 
    name: 'ServicesSiberserang', 
    component: ServicesSiberserang,
    meta: { title: 'Sibertahan - SiberSerang' }
  },
  { 
    path: '/services-siberpatuh', 
    name: 'ServicesSiberpatuh', 
    component: ServicesSiberpatuh,
    meta: { title: 'Sibertahan - SiberPatuh' }
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: contact,
    meta: { title: 'Sibertahan - Contact Us' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (back/forward navigation), use it
    if (savedPosition) {
      return savedPosition
    }
    // For new navigation, scroll to top
    return { top: 0 }
  }
})

// Navigation Guard untuk mengatur judul halaman
router.beforeEach((to, from, next) => {
  // Jika rute memiliki meta.title, gunakan itu. Jika tidak, gunakan judul default.
  document.title = to.meta.title || 'Sibertahan'; // Judul default jika tidak ada meta.title

  // Untuk rute dinamis seperti blog post, Anda mungkin ingin judulnya lebih spesifik.
  // Misalnya "SiBertahan - Judul Blog Post". Ini perlu dilakukan di dalam komponen SingleBlog.vue
  // karena data judul blog baru tersedia setelah API dipanggil.

  next();
});

export default router