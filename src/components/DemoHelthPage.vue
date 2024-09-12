<template>
  <!-- メインコンテンツ -->
  <div class="main-content mt-3">
    <v-row>
      <h3>心拍数</h3>
      <v-data-table :headers="heartRateHeaders" :items="heat_rates" class="elevation-1"></v-data-table>
    </v-row>

    <v-row class="mt-4">
      <h3>睡眠</h3>
      <v-data-table :headers="sleepHeaders" :items="sleeps" class="elevation-1"></v-data-table>
    </v-row>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
  fetchHeartData()
})
const sleeps = ref([])
const heat_rates = ref([])

const fetchHeartData = async () => {
  const params = {
    email: 'akemi.sample.1203@gmail.com',
  }
  axios
    .get(`/api/v1/demo_healths`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then((response) => {
      heat_rates.value = response.data.demo_heat_rates
      sleeps.value = response.data.demo_sleeps
    })
}

const heartRateHeaders = [
  { title: '日時', key: 'action_date' },
  {
    title: '平均心拍数',
    key: 'avg_heart_rate',
  },
  { title: '最大心拍数', key: 'max_heart_rate' },
  { title: '最低心拍数', key: 'min_heart_rate' },
]

const sleepHeaders = [
  {
    title: '日時',
    key: 'action_date',
  },
  { title: '睡眠時間', key: 'sleep_time' },
  {
    title: '睡眠スコア',
    key: 'sleep_score',
  },
]
</script>
