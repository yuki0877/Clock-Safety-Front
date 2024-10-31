<template>
  <div class="main-content">
    <h1>異常値表示ページ</h1>
    <v-row>
      <v-col>
        <v-btn color="primary" class="mt-4" @click="dialog = true"> 異常値通知の登録 </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <h3>心拍数</h3>
      <v-data-table :headers="headers" :items="anomalies" class="elevation-1"></v-data-table>
    </v-row>

    <!-- ダイアログコンポーネント -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">異常値通知の登録</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" label="メールアドレス" :rules="emailRules" required></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="submitEmail">登録</v-btn>
          <v-btn color="red darken-1" text @click="dialog = false">キャンセル</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '../supabase'
import axios from 'axios'

const dialog = ref(false) // ダイアログの開閉状態を管理
const email = ref('') // メールアドレスを管理
const emailRules = [(v) => !!v || 'メールアドレスは必須です', (v) => /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください']
const userEmal = ref(null)

onMounted(() => {
  getUser()
})

const anomalies = ref([])
async function getUser() {
  try {
    const { data, error } = await supabase.auth.getUser()

    if (data) {
      fetchanomalies(data.user.email)
      userEmal.value = data.user.email
    }

    if (error) {
      console.error('認証エラー:', error.message)
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
    .get(`/api/v1/anomalies`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then((response) => {
      anomalies.value = response.data.anomalies
    })
}

const submitEmail = async () => {
  console.log('送信するメールアドレス:', email.value)
  if (email.value) {
    try {
      const response = await axios.post(
        '/api/v1/users/update_mails',
        {
          email: email.value, // フロントエンドから送信するメールアドレス
          current_user_email: userEmal.value,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true, // 必要に応じてクッキーを含める
        },
      )

      // 成功時の処理
      console.log('メールアドレスが登録されました:', response.data)
      dialog.value = false // ダイアログを閉じる

      // メールアドレス登録後の処理をここに追加することも可能です
    } catch (error) {
      console.error('メールアドレスの登録に失敗しました:', error)
      // エラーメッセージを表示するための処理を追加することもできます
    }
  } else {
    console.log('メールアドレスは必須です。')
  }
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

<style scoped>
/* スタイルをここに追加 */
</style>
