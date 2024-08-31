import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.js'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = 'X-CSRF-Token'

const app = createApp(App)

app.use(router)

app.mount('#app')

console.log(app)
