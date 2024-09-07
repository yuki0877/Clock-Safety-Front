<template>
  <div>
    <AppHeaders></AppHeaders>
    <AppFooters></AppFooters>
  </div>

  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'
import AppFooters from './components/Utilities/AppFooters.vue'
import AppHeaders from './components/Utilities/AppHeaders.vue'
import { supabase } from './supabase'
import { useAuthStore } from './stores/auth'
import axios from 'axios'

onMounted(() => {
  getUser()
})

const auth = useAuthStore()

const getHeartRateToday = async (access_token) => {
  try {
    const userId = '-'
    const date = 'today'
    const detailLevel = '15min'
    // /1/user/[user-id]/activities/heart/date/[date]/1d/[detail-level]/time/[start-time]/[end-time].json
    const dataUrl = 'https://api.fitbit.com/' + ['1', 'user', userId, 'activities', 'heart', 'date', date, '1d', `${detailLevel}.json`].join('/')

    const dataResponse = await fetch(dataUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const dataBody = await dataResponse.json()
    const dateTime = dataBody['activities-heart'][0].dateTime
    const todayHeartDate = dataBody['activities-heart'][0].value.heartRateZones.find((zone) => zone.name == 'Out of Range')
    const maxNum = 145
    const minNum = 50
    if (todayHeartDate.max >= maxNum) {
      // 異常値登録
      createAnomaly({ max: todayHeartDate.max, abnormal_day: dateTime })
    }
    if (todayHeartDate.min <= minNum) {
      // 異常値登録
      createAnomaly({ min: todayHeartDate.min, abnormal_day: dateTime })
    }
    if (dataBody.errors) {
      console.error(dataBody.errors[0].message)
      return
    }
  } catch (err) {
    console.log(err)
  }
}

const createAnomaly = (anomalyData, abnormalDay) => {
  const params = {
    anomalies: anomalyData,
    abnormalDay,
    email: auth.isLoggedIn.email,
  }
  axios
    .post(`/api/v1/anomalies`, params, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then(() => {})
}

async function getUser() {
  try {
    const { data, error } = await supabase.auth.getUser()

    if (data) {
      userAuthenticate(data)
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

const userAuthenticate = (userData) => {
  const params = {
    email: userData.user.email,
  }
  axios
    .get(`/api/v1/authenticates`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.user) {
        getHeartRateToday(response.data.user.access_token)
      }
    })
}
</script>
