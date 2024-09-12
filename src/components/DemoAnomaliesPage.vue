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
import { supabase } from '../supabase'
import axios from 'axios'

onMounted(() => {
  getUser()
})

const anomalies = ref([])
async function getUser() {
  try {
    const { data, error } = await supabase.auth.getUser()

    if (data) {
      fetchanomalies(data.user.email)
      // fetchToken(process.env.VUE_APP_VEIFIER, data)
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

const fetchanomalies = (email) => {
  const params = {
    email: email,
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
