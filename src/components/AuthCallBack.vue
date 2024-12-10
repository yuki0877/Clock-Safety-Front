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
  console.log('onMounted: getUserを呼び出します'); // onMountedの開始ログ
  getUser();
})

async function getUser() {
  console.log('getUser: 処理開始'); // getUserの開始ログ

  try {
    const { data, error } = await supabase.auth.getUser();
    console.log('getUser: 取得結果:', { data, error }); // supabase.auth.getUserの結果をログに表示

    if (data) {
      console.log('getUser: ユーザー情報をcreateUserに渡します', data.user); // ユーザー情報をcreateUserに渡す直前
      createUser(data.user);
    }

    if (error) {
      console.error('認証エラー:', error.message); // 認証エラー時のログ
      // router.push({ name: 'signin' })
    } else if (data) {
      console.log('getUser: セッションあり。トップページにリダイレクト予定'); // セッションがある場合のログ
      // router.push({ name: 'top' })
    } else {
      console.log('getUser: セッションなし。トップページにリダイレクト予定'); // セッションがない場合のログ
      // router.push({ name: 'top' })
    }
  } catch (err) {
    console.error('getUser: エラーが発生しました:', err); // 例外発生時のログ
  }

  console.log('getUser: 処理終了'); // getUserの終了ログ
}

const createUser = (user) => {
  console.log('createUser: ユーザーを作成します', user); // createUserの開始ログ

  axios
    .post(`/api/v1/users`, user, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log('createUser: サーバーからの応答:', response); // サーバー応答のログ

      if (response.status == 201) {
        console.log('createUser: ユーザー作成に成功しました。Fitbit認証ページにリダイレクトします'); // ユーザー作成成功時のログ

        // リダイレクトを一時的に停止
        // const url =
        //   'https://www.fitbit.com/oauth2/authorize?client_id=23PNS5&response_type=code&code_challenge=-4cf-Mzo_qg9-uq0F4QwWhRh4AjcAqNx7SbYVsdmyQM&code_challenge_method=S256&scope=activity%20heartrate%20location%20nutrition%20oxygen_saturation%20profile%20respiratory_rate%20settings%20sleep'
        // window.location.href = url;
      }
    })
    .catch((error) => {
      console.error('createUser: サーバーへのリクエスト中にエラーが発生しました:', error); // Axiosエラー時のログ
    });

  console.log('createUser: 処理終了'); // createUserの終了ログ
}
</script>
