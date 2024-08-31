<template>
  <RouterView />
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
 import { onMounted } from 'vue'
//  import axios from 'axios'
 import 'normalize.css'
//  axios.defaults.withCredentials = true


// const title = ref("Clock Safety")
// const msg = ref("")

// const test = () => {
//   console.log(process.env.VUE_APP_API_BASE_URL);
//   console.log(process.env.VUE_APP_API_BASE_URL);
//   console.log(axios.defaults.baseURL);
//   axios.get(`/api/v1/tests`,{
//     headers: {
//       'Content-Type': 'application/json',
//       "Access-Control-Allow-Origin": "*",
//     },
//     withCredentials: true
//   }).then((response) => {
//     msg.value = response.data
// })
// }

onMounted(() => {
  // test()
});
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
