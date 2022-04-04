<template>
  <div class="ml-4 w-full p-6">
    <div>
      <h2 class="text-2xl font-semibold border-b mb-4 pb-4">Articles</h2>
      <ul class="grid grid-cols-2 gap-x-8">

        <li v-for="filteredPost in filteredPosts" :key="filteredPost.id" class="py-4 flex items-center border-b justify-between">
          <div class="flex items-center">
            <NuxtLink :to="`/${idToName(filteredPost.user)}/articles/${filteredPost.id}`">
              <div class="rounded-lg bg-white flex justify-center items-center text-2xl p-4 bg-white leading-none">{{ filteredPost.emoji }}</div>
            </NuxtLink>
            <NuxtLink :to="`/${idToName(filteredPost.user)}/articles/${filteredPost.id}`" class="flex items-start ml-4">
              <h3 class="font-semibold text-lg line-clamp-3">{{ filteredPost.title }}</h3>
            </NuxtLink>
          </div>
          <div class="ml-4">
            <NuxtLink :to="`/edit/${filteredPost.id}`" class="bg-blue-400 hover:bg-blue-500 px-5 py-2 shadow text-sm font-semibold rounded-md text-white inline-block">編集</NuxtLink>
            <button @click="modal(filteredPost.id)" class="bg-red-400 hover:bg-red-500 px-5 py-2 shadow text-sm font-semibold rounded-md text-white inline-block">削除</button>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    // layout: 'simple',
    data() {
      return {
        filteredPosts: [],
        posts: [],
        user: []
      }
    },
    async created() {
      this.posts = await this.$setPostsData()
      this.filteredPosts = this.posts.filter(item => item.user == this.$store.state.auth.userUid)
      this.user = await this.$setUserData()
    },
    methods: {
      idToName(user) {
        let filtered
        this.user.filter(item => {
          if(item.id == user) {
            filtered = item.name
          }
        })
        return filtered
      },
      // filterByUsername(item) {
      //   if(item.user === this.$store.state.auth.userUid) {
      //     return true
      //   }
      // },
      modal(id) {
        if(window.confirm('本当に削除してもよろしいですか？')) {
          this.deleteData(id)
        }
      },
      deleteData(id) {
        this.filteredPosts.splice(this.filteredPosts.findIndex(element => element.id === id), 1)
        this.$deleteData(id)
      }
    }
  }
</script>
