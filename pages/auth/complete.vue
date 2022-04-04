<template>
  <div class="max-w-md w-full m-auto px-6 py-24">
    <div class="bg-white shadow-lg rounded-md px-8 py-10">
      <h2 class="text-2xl font-semibold border-b mb-4 pb-4">会員登録完了</h2>
      <div class="grid grid-cols-1 gap-6 mt-6">
        会員登録が完了しました。<br>
        以下ページよりログインを行なって下さい。<br>
        <NuxtLink to="/auth/login" class="bg-blue-400 hover:bg-blue-500 px-5 py-2 shadow text-sm font-semibold rounded-md text-white text-center">ログイン</NuxtLink>
      </div>
    </div>
  </div>

</template>

<script>
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  
  export default {
    layout: 'simple',
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
        },
        error: {
          email: '',
          password: ''
        },
        termsCheck: false
      }
    },
    methods: {
      addUser() {
        const auth = getAuth(this.$firebase)
        createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          console.log(userCredential, '登録完了')
          this.$router.push('/auth/complete')
        })
        .catch((error) => {
          console.log(error.code)
          console.log(error.message)
          switch(error.code) {
            case 'auth/email-already-exists':
              this.error.email = 'メールアドレスはすでに既存のユーザーによって使用されています。'
              break
            case 'auth/invalid-email':
              this.error.email = 'メールアドレスの形式が無効です。'
              break
            case 'auth/invalid-password':
              this.error.password = 'パスワードは6文字以上の文字列を指定する必要があります。'
              break
            case 'auth/weak-password':
              this.error.password = 'パスワードは6文字以上の文字列を指定する必要があります。'
              break
          }
          // const errorCode = error.code
          // const errorMessage = error.message
        })
      }
    }
  }
</script>


