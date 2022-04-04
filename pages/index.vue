<template>
  <div class="ml-4 w-full p-6">
    <h2 class="text-2xl font-semibold border-b mb-4 pb-4">新着記事</h2>
    <ul class="grid gap-4 grid-cols-2">

      <li v-for="post in posts" :key="post.id" class="py-4 flex items-start">
        <NuxtLink :to="`/${idToName(post.user)}/articles/${post.id}`">
          <div class="rounded-lg bg-white flex justify-center items-center text-6xl p-6 bg-white">{{ post.emoji }}</div>
        </NuxtLink>
        <div class="ml-4">
          <NuxtLink :to="`/${idToName(post.user)}/articles/${post.id}`" class="flex items-start">
            <h3 class="font-semibold text-lg mb-2 line-clamp-3">{{ post.title }}</h3>
          </NuxtLink>
          <NuxtLink :to="`/${idToName(post.user)}/articles`" class="flex items-center w-full">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">{{ idToName(post.user) }}</div>
              <div class="text-slate-500">{{ $timestampToDate(post.createdDay) }}</div>
            </div>
          </NuxtLink>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    transition: 'fade',
    data() {
      return {
        posts: [],
        user: [],
      }
    },
    async created() {
      this.posts = await this.$setPostsData()
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
    }
  }
</script>