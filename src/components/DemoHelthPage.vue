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
import { supabase } from '../supabase'
import axios from 'axios'

onMounted(() => {
  getUser()
})
const sleeps = ref([])
const heat_rates = ref([])

async function getUser() {
  try {
    const { data, error } = await supabase.auth.getUser()

    if (data) {
      fetchHeartData(data)
    }

    if (error) {
      console.error('認証エラー:', error.message)
      // router.push({ name: 'signin' })
    } else if (data) {
      // ユーザーがセッションを持っている場合の処理
      // router.push({ name: 'top' })
    } else {
      // セッションがない場合の処理
      // router.push({ name: 'top' })
    }
  } catch (err) {
    console.error('エラーが発生しました:', err)
  }
}

const fetchHeartData = async (userData) => {
  const params = {
    email: userData.user.email,
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
