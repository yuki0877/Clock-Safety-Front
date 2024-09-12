<template>
  <div class="main-content">
    <h1>異常値表示ページ</h1>
    <v-row>
      <h3>心拍数</h3>
      <v-data-table :headers="headers" :items="anomalies" class="elevation-1"></v-data-table>
    </v-row>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

onMounted(() => {
  fetchanomalies()
})

const anomalies = ref([])

const fetchanomalies = () => {
  const params = {
    email: 'akemi.sample.1203@gmail.com',
  }

  axios
    .get(`/api/v1/demo_anomalies`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then((response) => {
      anomalies.value = response.data.demo_anomalies
    })
}

const headers = [
  {
    title: '日時',
    key: 'abnormal_day',
  },
  {
    title: '異常種類',
    key: 'anomaly_type',
  },
  { title: '最小値', key: 'min' },
  { title: '最大値', key: 'max' },
]
</script>
