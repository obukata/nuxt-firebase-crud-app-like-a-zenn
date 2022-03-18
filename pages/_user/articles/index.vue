<template>
  <div class="ml-4 w-full p-6">
    <div class="flex">
      <div class="rounded-full overflow-hidden w-32 h-32 bg-slate-500"></div>
      <div class="ml-8">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-semibold">{{ $route.params.user }}</h1>
          <NuxtLink to="" class="rounded-full text-blue-400 border border-blue-400 py-2 px-6 inline-block text-sm">Follow</NuxtLink>
        </div>
        <p class="mt-4">ユーザのbio情報テキストテキストテキストテキストテキストテキストテキスト</p>
        <div class="text-sm mt-4">
          <div class="inline-block"><div class="font-semibold inline-block">000</div> Likes</div>
          <div class="inline-block ml-2"><div class="font-semibold inline-block">000</div> Followers</div>
        </div>
      </div>
    </div>
    <div class="mt-12">
      <h2 class="text-2xl font-semibold border-b mb-4 pb-4">Articles</h2>
      <ul class="grid gap-8 grid-cols-3">
        <li v-for="filteredPost in filteredPosts" :key="filteredPost.id" class="rounded-md shadow-md bg-white overflow-hidden hover:shadow-lg">
          <NuxtLink :to="`/${filteredPost.user}/articles/${filteredPost.id}`">
            <div class="bg-blue-100 text-5xl text-center p-6">{{ filteredPost.emoji }}</div>
            <h3 class="font-semibold px-4 pt-4">{{ filteredPost.title }}</h3>
          </NuxtLink>
          <NuxtLink :to="`/${filteredPost.user}/articles`" class="flex items-center w-full p-4 hover:underline">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">{{ filteredPost.user }}</div>
              <div class="text-slate-500">2日前</div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getFirestore, collection, getDocs } from 'firebase/firestore'

  export default {
    data() {
      return {
        filteredPosts: [],
        posts: []
      }
    },
    async created() {
      try {
        const db = getFirestore(this.$firebase)
        const querySnapshot = await getDocs(collection(db, 'posts'))
        querySnapshot.forEach(doc => {
          this.posts.push({
            id: doc.id,
            emoji: doc.data().emoji,
            title: doc.data().title,
            text: doc.data().text,
            user: doc.data().user
          })
        })
        this.filteredPosts = this.posts.filter(this.filterByUsername)
      }
      catch(e) {
        console.error('error:', e)
      }
    },
    methods: {
      filterByUsername(item) {
        if(item.user === this.$route.params.user) {
          return true
        }
      }
    }
  }
</script>
