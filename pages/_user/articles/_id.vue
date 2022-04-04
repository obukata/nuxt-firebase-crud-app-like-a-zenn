<template>
  <div class="ml-4 w-full p-6">
    <ul>
      <li v-for="currentPost in currentPosts" :key="currentPost.id">
        <div class="text-center">
          <div class="rounded-lg bg-white inline-flex justify-center items-center text-6xl p-6 bg-white">{{ currentPost.emoji }}</div>
          <div class="block"><h1 class="font-semibold text-3xl mt-6 inline-block text-left leading-normal">{{ currentPost.title }}</h1></div>
          <!-- <NuxtLink :to="`/${currentPost.user}/articles`" class="inline-flex items-center mt-6"> -->
          <NuxtLink :to="`/${$route.params.user }/articles`" class="inline-flex items-center mt-6">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs text-left">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">{{ $route.params.user }}</div>
              <div class="text-slate-500">{{ $timestampToDate(currentPost.createdDay) }}</div>
            </div>
          </NuxtLink>
        </div>
        <div class="rounded-lg bg-white p-12 mt-12">
          <div v-html="$md.render(currentPost.text)" class="prose prose-slate max-w-none"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPosts: [],
        posts: [],
      }
    },
    async created() {
      this.posts = await this.$setPostsData()
      this.currentPosts = this.posts.filter(post => post.id == this.$route.params.id)
    },
  }
</script>
