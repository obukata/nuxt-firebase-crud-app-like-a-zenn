<template>
  <div class="max-w-md w-full m-auto px-6 py-24">
    <div class="bg-white shadow-lg rounded-md px-8 py-10">
      <h2 class="text-2xl font-semibold border-b mb-4 pb-4">ログイン</h2>
      <div class="grid grid-cols-1 gap-6 mt-6">
        <label class="block">
          <span class="text-gray-700">メールアドレス</span>
          <input v-model="email" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder:text-slate-400 placeholder:font-extralight" placeholder="john@example.com">
          <p v-show="error.email" class="text-red-500 text-sm mt-2">{{ error.email }}</p>
        </label>
        <label class="block">
          <span class="text-gray-700">パスワード</span>
          <input v-model="password" type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder:text-slate-400 placeholder:font-extralight">
          <p v-show="error.password" class="text-red-500 text-sm mt-2">{{ error.password }}</p>
        </label>
        <label class="block">
          <button v-if="email && password" @click="login" class="w-full bg-blue-400 hover:bg-blue-500 px-5 py-3 shadow text-sm font-semibold rounded-md text-white">ログイン</button>
          <div v-else class="w-full bg-slate-400 px-5 py-3 shadow text-sm font-semibold rounded-md text-white pointer-events-none text-center">ログイン</div>
        </label>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    // layout: 'simple',
    data() {
      return {
        email: '',
        password: '',
      }
    },
    computed: {
      error() {
        return this.$store.state.auth.error
      }
    },
    methods: {
      async login() {
        await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password
        })
      },
    }
  }
</script>


