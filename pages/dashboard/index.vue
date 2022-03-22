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
      this.posts = await this.$setData()
      this.filteredPosts = this.posts.filter(this.filterByUsername)
    },
    methods: {
      filterByUsername(item) {
        if(item.user === this.user) {
          return true
        }
      },
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
