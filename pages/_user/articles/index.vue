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
          <NuxtLink :to="`/${$route.params.user}/articles/${filteredPost.id}`">
            <div class="bg-blue-100 text-5xl text-center p-6">{{ filteredPost.emoji }}</div>
            <h3 class="font-semibold px-4 pt-4">{{ filteredPost.title }}</h3>
          </NuxtLink>
          <NuxtLink :to="`/${$route.params.user}/articles`" class="flex items-center w-full p-4 hover:underline">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">{{ $route.params.user }}</div>
              <div class="text-slate-500">2日前</div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filteredPosts: [],
        posts: [],
        user: [],
      }
    },
    async created() {
      this.posts = await this.$setPostsData()
      this.user = await this.$setUserData()
      this.filteredPosts = this.posts.filter(item => item.user == this.$nameToId(this.$route.params.user, this.user))
    },
  }
</script>
