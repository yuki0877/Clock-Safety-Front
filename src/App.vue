<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="title"/>
  <h2 style="color: red;">
    {{ msg }}
  </h2>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
 import { ref, onMounted } from 'vue'
 import axios from 'axios'
 axios.defaults.withCredentials = true


const title = ref("Clock Safety")
const msg = ref("")


const test = () => {
  axios.get("/api/v1/tests").then((response) => {
    msg.value = response.data
})
}

onMounted(() => {
  test()
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
