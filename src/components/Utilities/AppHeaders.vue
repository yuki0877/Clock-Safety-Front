<template>
    <header class="header">
      <ul class="nav-list">
        <li>
          <router-link class="nav-link" to="/">{{ title }}</router-link>
        </li>
        <li v-if="auth.isLoggedIn">
          <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="!auth.isLoggedIn">
          <router-link class="nav-link" to="/signin">サインイン</router-link>
        </li>
        <button class="nav-link guest-login-button" @click="guestLogin">ゲストログイン</button>
      </ul>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '../../stores/auth'
  
  const auth = useAuthStore()
  const title = ref('Clock Safety')
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