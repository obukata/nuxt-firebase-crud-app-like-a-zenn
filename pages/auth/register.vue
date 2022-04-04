<template>
  <div class="max-w-md w-full m-auto px-6 py-24">
    <div class="bg-white shadow-lg rounded-md px-8 py-10">
      <h2 class="text-2xl font-semibold border-b mb-4 pb-4">会員登録</h2>
      <div class="grid grid-cols-1 gap-6 mt-6">
        <label class="block">
          <span class="text-gray-700">ユーザーネーム</span>
          <input v-model="user.name" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder:text-slate-400 placeholder:font-extralight" placeholder="johndoe">
        </label>
        <label class="block">
          <span class="text-gray-700">メールアドレス</span>
          <input v-model="user.email" @click="error.email = ''" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder:text-slate-400 placeholder:font-extralight" placeholder="john@example.com">
          <p v-show="error.email" class="text-red-500 text-sm mt-2">{{ error.email }}</p>
        </label>
        <label class="block">
          <span class="text-gray-700">パスワード</span>
          <input v-model="user.password" @click="error.password = ''" type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder:text-slate-400 placeholder:font-extralight">
          <p v-show="error.password" class="text-red-500 text-sm mt-2">{{ error.password }}</p>
        </label>
        <label class="inline-flex items-center">
          <input @click="termsCheck = !termsCheck" type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50">
          <span class="ml-2">会員規約に同意します</span>
        </label>
        <label class="block">
          <button v-if="user.name && user.email && user.password && termsCheck" @click="addUser" class="w-full bg-blue-400 hover:bg-blue-500 px-5 py-3 shadow text-sm font-semibold rounded-md text-white">登録する</button>
          <div v-else class="w-full bg-slate-400 px-5 py-3 shadow text-sm font-semibold rounded-md text-white pointer-events-none text-center">登録する</div>
        </label>
      </div>
    </div>
  </div>

</template>

<script>
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import { getFirestore, doc, setDoc } from 'firebase/firestore'

  export default {
    // layout: 'simple',
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
          // console.log(userCredential, '登録完了')
          this.addUserToDB(userCredential)
          this.$router.push('/auth/complete')
        })
        .catch((error) => {
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
        })
      },
      async addUserToDB(obj) {
        try {
          console.log(obj)
          const db = getFirestore(this.$firebase)
          await setDoc(doc(db, 'user', obj.user.uid), {
            name: this.user.name,
          })
        } catch(e) {
          console.error('error:', e)
        }
      }
    }
  }
</script>


