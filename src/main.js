import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // <- pastikan ini ADA
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.min.css'

const pinia = createPinia()
createApp(App).use(pinia).use(router).mount('#app')
