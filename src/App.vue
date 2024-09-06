<template>
  <div>
    <AppHeaders></AppHeaders>
    <AppFooters></AppFooters>
  </div>
  <RouterView />
</template>

<script setup>
import AppFooters from './components/Utilities/AppFooters.vue';
import AppHeaders from './components/Utilities/AppHeaders.vue'
</script>
