<template>
  <header class="header">
    <div class="logo-container">
      <router-link class="nav-link" to="/">{{ title }}</router-link>
    </div>

    <div class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>

    <ul class="nav-list" :class="{ open: menuOpen }">
      <li v-if="auth.isLoggedIn">
        <v-btn class="nav-link" @click="router.push({ name: 'top' })">トップ</v-btn>
      </li>
      <li v-if="!auth.isLoggedIn">
        <router-link class="nav-link" to="/signin">ログイン</router-link>
      </li>
      <li v-if="auth.isLoggedIn">
        <v-btn class="nav-link" @click="router.push({ name: 'helth_index' })">健康データ</v-btn>
      </li>
      <li v-if="auth.isLoggedIn">
        <v-btn class="nav-link" @click="router.push({ name: 'helth_anomalies' })">異常値</v-btn>
      </li>
      <li v-if="auth.isLoggedIn">
        <v-btn class="nav-link" @click="logout">ログアウト</v-btn>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { supabase } from '../../supabase';
import { useRouter } from 'vue-router';

const router = useRouter();
const auth = useAuthStore();
const title = ref('Clock Safety');
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('エラー:', error.message);
    } else {
      router.push({ name: 'top' });
    }
  } catch (err) {
    console.error('エラーが発生しました:', err);
  }
};
</script>

<style scoped>
.header {
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.nav-link {
  font-size: 1.3rem;
  color: white;
  margin-right: 30px;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}


.v-btn {
  background: transparent;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

.v-btn:hover {
  background: white;
  color: #333;
}

.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.bar {
  background-color: white;
  height: 3px;
  width: 100%;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .nav-list {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }

  .nav-list.open {
    display: flex;
  }

  .hamburger {
    display: flex;
  }
}

@media (max-width: 480px) {
  .nav-link {
    font-size: 1.1rem;
    padding: 10px;
  }
}
</style>
