<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="title"/>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
 import { ref } from 'vue'


const title = ref("Clock Safety")
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
