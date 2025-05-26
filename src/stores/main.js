import { defineStore } from 'pinia'
import './assets/main.css'


export const useMainStore = defineStore('main', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    login() {
      this.isLoggedIn = true
    }
  }
})
