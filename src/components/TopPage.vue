<template>
  <div class="main-content">
    <v-row justify="center">
      <h1 class="large-text">Clock Safety</h1>
    </v-row>
    <p class="text">離れて暮らす家族の健康を見守る安心のサービス。</p>
    <p class="text">スマートウォッチの健康データを使って、家族の健康をチェックできます。</p>

    <v-row justify="center" no-gutters class="mt-4 guest-login-row">
      <p class="text">ゲストログインで気軽に試してみませんか？</p>
      <p class="text small-text">※ 本サービスはGoogleスマートウォッチを使用し、Fitbitに登録している方が対象です。</p>
      <v-btn @click="guestLogin" class="guest-login-btn">ゲストログインで試す</v-btn>
    </v-row>

    <div class="mt-8 card">
      <h2 class="section-heading">サービスの特徴</h2>
      <ul class="feature-list">
        <li>健康データを確認（心拍数・睡眠時間・歩数）</li>
        <li>異常値検知時に通知</li>
        <li>安心できる生活をサポート</li>
      </ul>
    </div>

    <div class="mt-8 card">
      <h2 class="section-heading">ゲストログインでできること</h2>
      <p class="text">サンプルデータを使用して、Clock Safetyの機能をお試しください。</p>
    </div>

    <section class="real-users-section">
      <p class="info-text">
        <strong>Fitbitユーザーの方へ</strong><br />
        本サービスのすべての機能を利用するには、Googleログインが必要です。<br />
        ヘッダーのログインボタンから開始してください。
      </p>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import axios from 'axios'
import 'normalize.css'
import { supabase } from '../supabase'
import { useAuthStore } from '../stores/auth'
const auth = useAuthStore()
axios.defaults.withCredentials = true

const router = useRouter()

onMounted(() => {
  //console.log('foo')
  // test()
  fetchUser()
})

const guestLogin = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: 'mark_8556@yahoo.co.jp',
    password: 'guest_taro0927',
  })

  router.push({ name: 'fitbit_callback', query: { code: 'b6117843c7c94350c8e659911dca9a1cba09731c#_=_' } })

  if (error) {
    console.error('Login failed:', error.message)
  }
}

async function fetchUser() {
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    console.error('Error fetching session:', error)
    auth.clearUser()
  } else {
    auth.setUser(data.session?.user ?? null)
  }
}

supabase.auth.onAuthStateChange(async (event, session) => {
  if (event === 'SIGNED_IN' && session) {
    auth.setUser(session.user)
  } else if (event === 'SIGNED_OUT') {
    auth.clearUser()
  }
})
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.large-text {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.main-content {
  padding: 2rem;
  text-align: center;
}

.large-text {
  font-size: 8vw;
  font-weight: bold;
  margin-top: 1rem;
}

.text {
  font-size: 1.2rem;
  text-decoration: underline;
  text-decoration-color: rgb(243, 99, 9);
  margin: 0 auto;
  max-width: 80%;
}

.small-text {
  font-size: 0.9rem;
  color: gray;
}
.guest-login-row {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  width: 100% !important;
  max-width: 600px !important;
  margin: 1.5rem auto !important;
  padding: 1rem !important;
  text-align: center !important;
  background-color: #fbfde7 !important;
  border: 2px solid #131211 !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
}

.card {
  background-color: #fbfde7;
  border: 2px solid #131211;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  max-width: 600px;
}

.section-heading {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.feature-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  font-size: 1rem;
  margin: 0.5rem 0;
  text-align: center;
}

.guest-login-btn {
  background-color: orange;
  color: rgb(255, 255, 255);
  font-size: 1rem;
  border-radius: 4px;
  transition:
    transform 0.2s,
    background-color 0.2s;
}

.guest-login-btn:hover {
  transform: scale(1.05);
  background-color: darkorange;
}

.real-users-section {
  margin-top: 3rem;
  background-color: #e0e0e0;
  padding: 1.5rem;
  border-radius: 10px;
}

.info-text {
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-8 {
  margin-top: 2rem;
}

@media screen and (max-width: 768px) {
  .large-text {
    font-size: 6vw;
  }
  .text {
    font-size: 1rem;
    max-width: 90%;
  }
  .section-heading {
    font-size: 1.3rem;
  }
  .feature-list li {
    font-size: 0.9rem;
  }
  .info-text {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 480px) {
  .large-text {
    font-size: 5vw;
  }
  .text {
    font-size: 0.9rem;
  }
  .section-heading {
    font-size: 1.1rem;
  }
  .info-text {
    font-size: 0.8rem;
  }
}
</style>
