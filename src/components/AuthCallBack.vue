<template>
  <div>
    <h1>認証を処理しています...</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
// import { useRouter } from 'vue-router'
import { supabase } from '../supabase'
import axios from 'axios'

// const router = useRouter()

onMounted(() => {
  getUser()
})

async function getUser() {
  try {
    const { data, error } = await supabase.auth.getUser()

    console.log(data)

    if (data) {
      createUser(data.user)
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

const createUser = (user) => {
  axios
    .post(`/api/v1/users`, user, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response)
      if (response.status == 201) {
        const url =
          'https://www.fitbit.com/oauth2/authorize?client_id=23PNS5&response_type=code&code_challenge=-4cf-Mzo_qg9-uq0F4QwWhRh4AjcAqNx7SbYVsdmyQM&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep'
        window.location.href = url
      }
    })
}
</script>
