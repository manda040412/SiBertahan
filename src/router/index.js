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

const routes = [
  { 
    path: '/', 
    redirect: '/home',
    // Anda bisa tambahkan meta title default untuk halaman redirect jika perlu
    meta: { title: 'SiBertahan' } 
  },
  { 
    path: '/home', 
    name: 'Home', 
    component: Home,
    meta: { title: 'SiBertahan - Home' } // Contoh: "SiBertahan - Home"
  },
  { 
    path: '/about', 
    name: 'About', 
    component: AboutUs,
    meta: { title: 'SiBertahan - About Us' } // Contoh: "SiBertahan - About Us"
  },
  { 
    path: '/blog', 
    name: 'Blog', 
    component: Blog,
    meta: { title: 'SiBertahan - Blog' } // Contoh: "SiBertahan - Blog"
  },
  { 
    path: '/blog/:id', 
    name: 'single-blog', // Pastikan nama ini sesuai dengan yang di blog.vue
    component: SingleBlog, 
    props: true,
    meta: { title: 'SiBertahan - Blog Post' } // Contoh: "SiBertahan - Blog Post"
    // Untuk judul dinamis seperti "SiBertahan - Judul Blog", Anda perlu mengakses data blog di SingleBlog.vue
    // dan update document.title dari dalam komponen SingleBlog.vue.
  },
  { 
    path: '/career', 
    name: 'Career', 
    component: Career,
    meta: { title: 'SiBertahan - Careers' } // Contoh: "SiBertahan - Careers"
  },
  { 
    path: '/services-siberjaga', 
    name: 'ServicesSiberjaga', 
    component: ServicesSiberjaga,
    meta: { title: 'SiBertahan - SiberJaga' }
  },
  { 
    path: '/services-siberserang', 
    name: 'ServicesSiberserang', 
    component: ServicesSiberserang,
    meta: { title: 'SiBertahan - SiberSerang' }
  },
  { 
    path: '/services-siberpatuh', 
    name: 'ServicesSiberpatuh', 
    component: ServicesSiberpatuh,
    meta: { title: 'SiBertahan - SiberPatuh' }
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: contact,
    meta: { title: 'SiBertahan - Contact Us' }
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
  document.title = to.meta.title || 'SiBertahan'; // Judul default jika tidak ada meta.title

  // Untuk rute dinamis seperti blog post, Anda mungkin ingin judulnya lebih spesifik.
  // Misalnya "SiBertahan - Judul Blog Post". Ini perlu dilakukan di dalam komponen SingleBlog.vue
  // karena data judul blog baru tersedia setelah API dipanggil.

  next();
});

export default router