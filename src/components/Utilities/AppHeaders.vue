<template>
  <header class="header">
    <ul class="nav-list">
      <li>
        <router-link class="nav-link" to="/">{{ title }}</router-link>
      </li>

      <li v-if="auth.isLoggedIn">
        <v-btn class="nav-link" @click="logout">ログアウト</v-btn>
      </li>
      <li v-if="!auth.isLoggedIn">
        <router-link class="nav-link" to="/signin">サインイン</router-link>
      </li>
      <li v-if="auth.isLoggedIn">
        <v-btn class="nav-link" @click="router.push({ name: 'helth_index' })">健康データ</v-btn>
      </li>
      <li v-if="auth.isLoggedIn">
        <v-btn class="nav-link" @click="router.push({ name: 'helth_anomalies' })">異常値</v-btn>
      </li>
      <button class="nav-link guest-login-button" @click="guestLogin">ゲストログイン</button>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { supabase } from '../../supabase'
import { useRouter } from 'vue-router'
const router = useRouter()

const auth = useAuthStore()
const title = ref('Clock Safety')

const logout = async () => {
  try {
    const { data, error } = await supabase.auth.signOut()

    if (error) {
      console.error('エラー:', error.message)
      // router.push({ name: 'signin' })
    } else if (data) {
      // ユーザーがセッションを持っている場合の処理
      // router.push({ name: 'top' })
    } else {
      // セッションがない場合の処理
      // router.push({ name: 'top' })
    }
  } catch (err) {
    console.error('エラーが発生しました:', err)
  }
}
</script>

<style scoped>
.header {
  background-color: #333;
  padding: 1rem;
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  font-size: 1.3rem;
  color: white;
  margin-right: 30px;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

.nav-link {
  font-size: 1.3rem;
  color: white;
  margin-right: 30px;
  text-decoration: none;
  background: none; /* ボタンの背景を無くす */
  border: none; /* ボタンの境界線を消す */
  padding: 0; /* ボタンの余白を無くす */
  cursor: pointer; /* ボタンにカーソルを適用 */
}
</style>
