import { createRouter, createWebHistory } from 'vue-router'
import HelthPage from './components/HelthPage.vue'
import TopPage from './components/TopPage.vue'
import AnomaliesPage from './components/AnomaliesPage.vue'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.vue'
import TermsofServicePage from './components/TermsofServicePage.vue'

const routes = [
  { path: '/', name: 'top', component: TopPage },
  { path: '/helth', name: 'helth_index', component: HelthPage },
  { path: '/anomalies', name: 'helth_anomalies', component: AnomaliesPage },
  { path: '/privacypolicy', name: 'privacypolicy', component: PrivacyPolicyPage },
  { path: '/termsofservice', name: 'termsofservice', component: TermsofServicePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router