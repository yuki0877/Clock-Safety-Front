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

    if (data) {
      createUser(data.user)
    }

    if (error) {
      console.error('認証エラー:', error.message) // 認証エラー時のログ
      // router.push({ name: 'signin' })
    } else if (data) {
      // router.push({ name: 'top' })
    } else {
      // router.push({ name: 'top' })
    }
  } catch (err) {
    console.error('getUser: エラーが発生しました:', err) // 例外発生時のログ
  }

}

const createUser = (user) => {
  //console.log('createUser: ユーザーを作成します', user) // createUserの開始ログ

  axios
    .post(`/api/v1/users`, user, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then((response) => {
      //console.log('createUser: サーバーからの応答:', response) // サーバー応答のログ

      if (response.status == 201) {
        //console.log('createUser: ユーザー作成に成功しました。Fitbit認証ページにリダイレクトします') // ユーザー作成成功時のログ

        const url =
          'https://www.fitbit.com/oauth2/authorize?client_id=23PNS5&response_type=code&code_challenge=-4cf-Mzo_qg9-uq0F4QwWhRh4AjcAqNx7SbYVsdmyQM&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep'
        window.location.href = url
      }
    })
    .catch((error) => {
      console.error('createUser: サーバーへのリクエスト中にエラーが発生しました:', error) // Axiosエラー時のログ
    })

}
</script>
