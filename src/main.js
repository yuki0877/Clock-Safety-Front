import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRF-Token";

createApp(App).mount('#app')

