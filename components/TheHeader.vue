<template>
  <header class="border-b relative z-10">
    <div class="max-w-6xl m-auto p-6 flex justify-between items-center">
      <div class="font-semibold text-2xl tracking-wider"><NuxtLink to="/">社内Wiki</NuxtLink></div>
      <div v-if="isLoggedIn" class="flex items-center space-x-6">
        <!-- <NuxtLink to="/search" class="text-slate-500 hover:text-slate-800"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></NuxtLink> -->
        <button @click="userNavi" class="relative">
          <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
        </button>
        <NuxtLink to="/create" class="bg-blue-400 hover:bg-blue-500 px-5 py-2 shadow text-sm font-semibold rounded-md text-white">Add new</NuxtLink>
      </div>
      <div v-else class="flex items-center space-x-4">
        <!-- <NuxtLink to="/search" class="text-slate-500 hover:text-slate-800 px-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></NuxtLink> -->
        <NuxtLink to="/auth/login" class="bg-blue-400 hover:bg-blue-500 px-5 py-2 shadow text-sm font-semibold rounded-md text-white">ログイン</NuxtLink>
        <NuxtLink to="/auth/register" class="bg-red-400 hover:bg-red-500 px-5 py-2 shadow text-sm font-semibold rounded-md text-white">会員登録</NuxtLink>
      </div>
    </div>

    <div v-show="isOpen" @click="isOpen = false">
      <div :style="navPosition" class="absolute z-20 shadow rounded-md bg-white w-56">
        <div class="p-4 hover:bg-slate-100">
          <div class="font-semibold text-sm whitespace-nowrap overflow-ellipsis overflow-hidden">{{ $idToName(this.$store.state.auth.userUid, this.user) }}</div>
          <div class="text-slate-400 text-xs whitespace-nowrap overflow-ellipsis overflow-hidden">{{ this.$store.state.auth.email }}</div>
        </div>
        <div class="border-t">
          <NuxtLink to="/dashboard" class="block text-sm py-2.5 px-4 hover:bg-slate-100">🗒 記事の管理</NuxtLink>
          <!-- <div class="block text-sm py-2.5 px-4 hover:bg-slate-100">❤️ いいねした投稿</div> -->
          <!-- <div class="block text-sm py-2.5 px-4 hover:bg-slate-100">⚙️ アカウント設定</div> -->
        </div>
        <div class="border-t">
          <NuxtLink to="/auth/logout" class="block text-sm py-2.5 px-4 hover:bg-slate-100">🏝 ログアウト</NuxtLink>
        </div>
      </div>
      <div @click="isOpen = false" class="absolute z-10 w-screen h-screen"></div>
    </div>

  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        navPosition: {
          top: '0px',
          right: '0px',
        },
        user: [],
      }
    },
    methods: {
      userNavi(e) {
        this.isOpen = !this.isOpen
        const area = e.path[0].getBoundingClientRect()
        this.navPosition = {
          top: area.top + area.height + 10 + 'px',
          right: window.innerWidth - area.left - area.width  + 'px'
        }
      }
    },
    async created() {
      this.user = await this.$setUserData()
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters['auth/getLoggedIn']
      }
    }
  }
</script>
