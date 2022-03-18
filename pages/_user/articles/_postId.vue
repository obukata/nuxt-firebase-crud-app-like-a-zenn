<template>
  <div class="ml-4 w-full p-6">
    <div class="text-center">
      <div class="rounded-lg bg-white inline-flex justify-center items-center text-6xl p-6 bg-white">{{ currentPosts.emoji }}</div>
      <div class="block"><h1 class="font-semibold text-3xl mt-6 inline-block text-left leading-normal">{{ currentPosts.title }}</h1></div>
      <NuxtLink :to="`/${currentPosts.user}/articles`" class="inline-flex items-center mt-6">
        <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
        <div class="ml-2 text-xs text-left">
          <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">{{ $route.params.user }}</div>
          <div class="text-slate-500">2022.03.02</div>
        </div>
      </NuxtLink>
    </div>
    <div class="rounded-lg bg-white p-12 mt-12">
      <div class="prose prose-slate max-w-none">
        {{ currentPosts.text }}
      </div>
    </div>

  </div>
</template>

<script>
  import { getFirestore, collection, getDocs } from 'firebase/firestore'

  export default {
    data() {
      return {
        currentPosts: [],
        posts: [],
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
        this.currentPosts = this.posts.filter(post => post.id == this.$route.params.postId)[0]
      }
      catch(e) {
        console.error('error:', e)
      }
    },
  }
</script>
