<template>
  <!-- メインコンテンツ -->
  <div class="main-content mt-3">
    <v-row>
      <h3>心拍数</h3>
      <v-data-table :headers="heartRateHeaders" :items="activityHearts" class="elevation-1"></v-data-table>
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
const activityHearts = ref([])
const sleeps = ref([])

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
      fetchHeartData(response.data.user.access_token)
      fetchSleepData(response.data.user.access_token)
      // fetchStep(response.data.user.access_token)
    })
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

// const fetchStep = async (access_token) => {
//   const userId = '-'
//   // const today = formatDate(new Date())
//   const testDate = '2024-08-29'
//   const dataUrl = 'https://api.fitbit.com/' + ['1', 'user', userId, 'activities', `steps`, `date`, `${testDate}`, `1d`, `15min.json`].join('/')

//   try {

//     const dataResponse = await fetch(dataUrl, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//       },
//     })

//     const dataBody = await dataResponse.json()
//     setStepData(dataBody)
//     if (dataBody.errors) {
//       console.error(dataBody.errors[0].message)
//       return
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

// const setStepData = (stepData) => {
//   console.log('stepData', stepData.activities)
// }

const fetchHeartData = async (access_token) => {
  try {
    const userId = '-'
    const date = 'today'
    const detailLevel = '1sec'
    const dataUrl = 'https://api.fitbit.com/' + ['1', 'user', userId, 'activities', 'heart', 'date', date, '30d', `${detailLevel}.json`].join('/')

    const dataResponse = await fetch(dataUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const dataBody = await dataResponse.json()
    setActivityHearts(dataBody['activities-heart'])
    if (dataBody.errors) {
      console.error(dataBody.errors[0].message)
      return
    }
  } catch (err) {
    console.log(err)
  }
}
const fetchSleepData = async (access_token) => {
  try {
    const dateRange = getStartAndEndDates()
    const startDate = dateRange.start_date
    const endDate = dateRange.end_date
    const userId = '-'
    const dataUrl = 'https://api.fitbit.com/' + ['1.2', 'user', userId, 'sleep', 'date', `${startDate}`, `${endDate}.json`].join('/')

    const dataResponse = await fetch(dataUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const dataBody = await dataResponse.json()
    setSleepData(dataBody)
    if (dataBody.errors) {
      console.error(dataBody.errors[0].message)
      return
    }
  } catch (err) {
    console.log(err)
  }
}

const setSleepData = (sleepData) => {
  sleepData.sleep.forEach((element) => {
    const sleepObj = {
      duration: returnHours(element.duration),
      efficiency: element.efficiency,
      datetime: element.dateOfSleep,
    }
    sleeps.value.push(sleepObj)
  })
}

const returnHours = (duration) => {
  const hoursMilliseconds = duration / (1000 * 60 * 60)
  const hours = parseFloat(hoursMilliseconds.toFixed(1))
  return `${hours}時間`
}

const setActivityHearts = (activities_hearts) => {
  activities_hearts.forEach((activities_heart) => {
    const dateTIme = activities_heart.dateTime
    const target = activities_heart.value.heartRateZones.find((zone) => zone.name == 'Out of Range')
    const data = {
      date_time: dateTIme,
      value: target,
      heart_rate: (target.max + target.min) / 2,
    }
    activityHearts.value.push(data)
  })
}

const getStartAndEndDates = () => {
  const now = new Date()

  // 現在の年月を取得
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() // 0-based month

  // 先月の初めの日付を計算
  const lastMonthStartDate = new Date(currentYear, currentMonth - 1, 1)

  // 今月の末の日付を計算
  const thisMonthEndDate = new Date(currentYear, currentMonth + 1, 0)

  const formatDate = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return {
    start_date: formatDate(lastMonthStartDate),
    end_date: formatDate(thisMonthEndDate),
  }
}

const heartRateHeaders = [
  { title: '日時', key: 'date_time' },
  {
    title: '平均心拍数',
    key: 'heart_rate',
  },
  { title: '最大心拍数', key: 'value.max' },
  { title: '最低心拍数', key: 'value.min' },
]

const sleepHeaders = [
  {
    title: '日時',
    key: 'datetime',
  },
  { title: '睡眠時間', key: 'duration' },
  {
    title: '睡眠スコア',
    key: 'efficiency',
  },
]
</script>
