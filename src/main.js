import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRF-Token"

createApp(App).mount('#app')

