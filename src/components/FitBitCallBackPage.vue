<template>
  <div>
    <h1>fitbit redirect...</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
// import { useAuthStore } from '../stores/auth.js'
import { supabase } from '../supabase'
const route = useRoute()
const router = useRouter()
// const auth = useAuthStore()
// import { supabase } from '../supabase'

onMounted(() => {
  //   const randomBytes = generateRandomBytes(64)
  //   const verifier = base64UrlEncode(randomBytes)
  getUser()
  //   fetchToken(process.env.VUE_APP_VEIFIER)
  //   sha256Hash(randomBytes).then((hash) => {
  //     const code_challenge = base64UrlEncode(hash)
  //     fetchHelthData(verifier,code_challenge)
  //   })
})

async function fetchToken(verifier, userData) {
  console.log('userData', userData)
  try {
    // const randomBytes = generateRandomBytes(64)
    // const verifier = base64UrlEncode(randomBytes)
    // const verifier = 'PonSLxcQ5EiBaEpI3J7Bmobia5y9osoqVuKO1Q-P6RM'
    // console.log('Base64 URL エンコード:', verifier)
    const clientId = process.env.VUE_APP_CLIENT_ID
    const secret = process.env.VUE_APP_SECRET
    const credentials = btoa(`${clientId}:${secret}`)
    const tokenUrl = 'https://api.fitbit.com/oauth2/token'
    const tokenResponse = await fetch(tokenUrl, {
      // <5>
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.VUE_APP_CLIENT_ID,
        code: route.query.code,
        code_verifier: verifier,
        redirect_uri: process.env.VUE_APP_REDIRECT_URL,
        grant_type: 'authorization_code',
      }).toString(),
    })

    const tokenBody = await tokenResponse.json()

    if (tokenBody) {
      updateUser(tokenBody, userData)
    }

    if (tokenBody.errors) {
      console.error(tokenBody.errors[0].message)
      return
    }

    const userId = '-'
    const date = 'today'
    const detailLevel = '1sec'
    const dataUrl = 'https://api.fitbit.com/' + ['1', 'user', userId, 'activities', 'heart', 'date', date, '1d', `${detailLevel}.json`].join('/')

    const dataResponse = await fetch(dataUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenBody['access_token']}`,
      },
    })

    const dataBody = await dataResponse.json()
    console.log('dataBody', dataBody)
    if (dataBody.errors) {
      console.error(dataBody.errors[0].message)
      return
    }
  } catch (err) {
    console.log(err)
  }
}

const updateUser = (tokenBody, userData) => {
  const params = {
    token_body: tokenBody,
    email: userData.user.email,
  }

  axios
    .put(`/api/v1/users`, params, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response)
      router.push({ name: 'helth_index' })
    })
}

async function getUser() {
  try {
    const { data, error } = await supabase.auth.getUser()

    if (data) {
      fetchToken(process.env.VUE_APP_VEIFIER, data)
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

// const generateRandomBytes = (length) => {
//   const array = new Uint8Array(length)
//   window.crypto.getRandomValues(array)
//   return array
// }

// const base64UrlEncode = (input) => {
//   const base64 = btoa(String.fromCharCode(...new Uint8Array(input)))
//   return base64
//     .replace(/\+/g, '-') // Base64 -> Base64Url
//     .replace(/\//g, '_') // Base64 -> Base64Url
//     .replace(/=+$/, '') // Remove padding
// }

// async function sha256Hash(buffer) {
//   // bufferはArrayBufferであるべきです
//   const hashBuffer = await window.crypto.subtle.digest('SHA-256', buffer)
//   return new Uint8Array(hashBuffer)
// }
</script>
