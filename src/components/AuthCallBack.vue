<template>
  <div>
    <h1>認証を処理しています...</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
// import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

// const router = useRouter()

onMounted(() => {
  setTimeout(async () => {
    // 非同期関数にする
    try {
      // const {
      //   data: { session },
      //   error,
      // } = await supabase.auth.getSession()

      // const { data, error } = await supabase.auth.getSession()
      const { data, error } = await supabase.auth.getUser()

      console.log(data)

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
  }, 1000)
  setTimeout(async () => {
    // 非同期関数にする
    try {
      // const {
      //   data: { session },
      //   error,
      // } = await supabase.auth.getSession()

      const { data, error } = await supabase.auth.getSession()

      console.log(data)

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
  }, 1000)
})

// async function getUser() {
//   const { data, error } = await supabase.auth.getUser()
//   if (error) {
//     console.error('Error fetching user:', error.message)
//   } else {
//     console.log(data) // デバッグ用
//     // user.value = data.user;
//   }
// }
</script>
