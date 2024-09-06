<template>
  <!-- ヘッダー -->
  <header class="header">
    <ul style="display: flex; text-decoration: none">
      <router-link style="font-size: 1.3rem; color: white; margin-right: 30px" to="/">{{ title }}</router-link>
      <li v-if="auth.isLoggedIn">
        <router-link style="color: white" to="/dashboard">Dashboard</router-link>
      </li>
      <li v-if="!auth.isLoggedIn">
        <router-link style="color: white" to="/signin">SignIn</router-link>
      </li>
    </ul>
  </header>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from './stores/auth'
const auth = useAuthStore()
const title = ref('Clock Safety')
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
