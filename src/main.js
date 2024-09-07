import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios'
import router from './router.js'
import vuetify from './vuetify'
import VueCryptojs from 'vue-cryptojs'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = 'X-CSRF-Token'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(pinia)
app.use(VueCryptojs)
app.mount('#app')
