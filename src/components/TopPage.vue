<template>
  <!-- メインコンテンツ -->
  <div class="main-content">
    <!-- <img alt="15362.png" src="../assets/15362.png" class="image"> -->

    <div class="mt-4">
      <v-row justify="center">
        <h1 class="large-text">Clock Safety</h1>
      </v-row>
      <p class="text">
        Googleスマートウォッチから得られる健康管理データを使用して、離れて暮らす高齢家族が健康な状態で暮らしているのかを確認できるサービスです。
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import 'normalize.css'
import { supabase } from '../supabase'
import { useAuthStore } from '../stores/auth'
const auth = useAuthStore()
axios.defaults.withCredentials = true

// const msg = ref('')

onMounted(() => {
  console.log('foo')
  // test()
  fetchUser()
})

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
.header {
  background-color: #212529;
  border-bottom: 1px solid #1b1e21;
  padding: 15px 0;
}

.header h1 {
  margin: 0;
  font-size: 24px;
  color: #fefefe;
  text-align: left;
  padding-left: 20px;
}

/* メインコンテンツのスタイル */
.main-content {
}

.text {
  font-size: 30px;
  text-decoration: underline;
  text-decoration-color: rgb(243, 99, 9);
  margin: 0 200px;
}

.main-content {
  padding: 0 40px;
}

.image {
  width: 300px;
  height: auto;
  max-width: 100%;
  float: right;
  margin-left: 20px;
}
.large-text {
  font-size: 120px;
  font-weight: bold;
  margin-top: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}
.gsi-material-button {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-appearance: none;
  background-color: WHITE;
  background-image: none;
  border: 1px solid #747775;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #1f1f1f;
  cursor: pointer;
  font-family: 'Roboto', arial, sans-serif;
  font-size: 14px;
  height: 40px;
  letter-spacing: 0.25px;
  outline: none;
  overflow: hidden;
  padding: 0 12px;
  position: relative;
  text-align: center;
  -webkit-transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;
  transition:
    background-color 0.218s,
    border-color 0.218s,
    box-shadow 0.218s;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  max-width: 400px;
  min-width: min-content;
}
.gsi-material-button .gsi-material-button-icon {
  height: 20px;
  margin-right: 12px;
  min-width: 20px;
  width: 20px;
}

.gsi-material-button .gsi-material-button-content-wrapper {
  -webkit-align-items: center;
  align-items: center;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;
}
.gsi-material-button .gsi-material-button-contents {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
.gsi-material-button .gsi-material-button-state {
  -webkit-transition: opacity 0.218s;
  transition: opacity 0.218s;
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.gsi-material-button:disabled {
  cursor: default;
  background-color: #ffffff61;
  border-color: #1f1f1f1f;
}
.gsi-material-button:disabled .gsi-material-button-contents {
  opacity: 38%;
}
.gsi-material-button:disabled .gsi-material-button-icon {
  opacity: 38%;
}
.gsi-material-button:not(:disabled):active .gsi-material-button-state,
.gsi-material-button:not(:disabled):focus .gsi-material-button-state {
  background-color: #303030;
  opacity: 12%;
}
.gsi-material-button:not(:disabled):hover {
  -webkit-box-shadow:
    0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  box-shadow:
    0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}
.gsi-material-button:not(:disabled):hover .gsi-material-button-state {
  background-color: #303030;
  opacity: 8%;
}
/* ゲストログインボタンのスタイル */
.guest-button {
  background-color: #f0f0f0;
  border: 1px solid #747775;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Roboto', arial, sans-serif;
}
/* フッターのスタイル */
.footer {
  background-color: #212529;
  padding: 20px 10px;
  border-top: 1px solid #1b1e21;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.footer a {
  color: #fefefe;
  text-decoration: none;
  margin: 0 10px;
}
.footer a:hover {
  text-decoration: underline;
}
</style>
