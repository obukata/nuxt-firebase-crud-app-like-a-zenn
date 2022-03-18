<template>
  <div class="ml-4 w-full p-6">
    <div>
      <h2 class="text-2xl font-semibold border-b mb-4 pb-4">Articles</h2>
      <ul class="grid gap-8 grid-cols-2">

        <li v-for="filteredPost in filteredPosts" :key="filteredPost.id" class="py-4 flex items-start">
          <NuxtLink :to="`/${filteredPost.user}/articles/${filteredPost.id}`">
            <div class="rounded-lg bg-white flex justify-center items-center text-6xl p-6 bg-white">{{ filteredPost.emoji }}</div>
          </NuxtLink>
          <div class="ml-4">
            <NuxtLink :to="`/${filteredPost.user}/articles/${filteredPost.id}`" class="flex items-start">
              <h3 class="font-semibold text-lg mb-2 line-clamp-3">{{ filteredPost.title }}</h3>
            </NuxtLink>
            <div class="p-4">
              <NuxtLink :to="`/edit/${filteredPost.id}`" class="bg-blue-400 hover:bg-blue-500 px-5 py-2 shadow text-sm font-semibold rounded-md text-white inline-block">編集</NuxtLink>
              <button @click="modal(filteredPost.id)" class="bg-red-400 hover:bg-red-500 px-5 py-2 shadow text-sm font-semibold rounded-md text-white inline-block">削除</button>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import { getFirestore, collection, getDocs } from 'firebase/firestore'

  export default {
    layout: 'simple',
    data() {
      return {
        user: 'obukata',
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
        if(item.user === this.user) {
          return true
        }
      }
    }
    // methods: {
    //   remove(id) {
    //     this.$removePost(this.posts.findIndex(element => element.id === id), this.posts)
    //     this.filteredPosts.splice(this.filteredPosts.findIndex(element => element.id === id), 1)
    //   },
    //   modal(id) {
    //     if(window.confirm('本当に削除してもよろしいですか？')) {
    //       this.remove(id)
    //     }
    //   }
    // }
  }
</script>
