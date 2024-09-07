import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import HelthPage from './components/HelthPage.vue'
import TopPage from './components/TopPage.vue'
import SignIn from './components/SignIn.vue'
import AnomaliesPage from './components/AnomaliesPage.vue'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.vue'
import TermsofServicePage from './components/TermsofServicePage.vue'
import AuthCallBack from './components/AuthCallBack.vue'
import FitBitCallBackPage from './components/FitBitCallBackPage.vue'
// import NotFound from './components/NotFound.vue'

const routes = [
  { path: '/', name: 'top', component: TopPage },
  { path: '/auth/callback', name: 'callback', component: AuthCallBack },
  { path: '/signin', name: 'sign_in', component: SignIn },
  { path: '/helth', name: 'helth_index', component: HelthPage },
  { path: '/anomalies', name: 'helth_anomalies', component: AnomaliesPage },
  { path: '/privacypolicy', name: 'privacypolicy', component: PrivacyPolicyPage },
  { path: '/termsofservice', name: 'trouterermsofservice', component: TermsofServicePage },
  { path: '/fitbit/callback', name: 'fitbit_callback', component: FitBitCallBackPage },
  // {
  //   path: '/:catchAll(.*)', // これが新しいキャッチオールの書き方です
  //   name: 'error404',
  //   component: NotFound,
  // },
]
const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/Clock-Safety-Front/' : '/'),
  routes,
})

export default router
