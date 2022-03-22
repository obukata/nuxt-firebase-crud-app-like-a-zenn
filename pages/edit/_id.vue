<template>
  <div class="ml-4 w-full py-24 px-6">
    <div class="text-center">
      <div class="relative inline-flex cursor-pointer">
        <div @click="emojiPicker = !emojiPicker" class="rounded-lg bg-white justify-center items-center text-6xl p-6 bg-white">{{ currentPosts.emoji }}</div>
        <div v-show="emojiPicker" @click="emojiPicker = false" class="fixed flex items-center justify-center bg-transparent inset-0 cursor-auto z-10"></div>
        <picker v-show="emojiPicker" :data="emojiIndex" @select="showEmoji" :showPreview="false" class="absolute top-full left-0 z-20" />
      </div>
      <div class="mt-6">
        <input v-model="currentPosts.title" type="text" class="font-semibold text-3xl w-full border-0 bg-transparent focus:ring-0" placeholder="タイトルを入力">
      </div>
    </div>
    <div class="mt-12">
      <textarea v-model="currentPosts.text" class="p-12 focus:ring-0 border-0 w-full h-full resize-none rounded-lg bg-white" placeholder="内容を入力してください"></textarea>
    </div>
    <div class="mt-12 text-center">
      <button @click="updateData" class="bg-blue-400 hover:bg-blue-500 px-5 py-3 shadow text-sm font-semibold rounded-md text-white">更新する</button>
    </div>
  </div>
</template>

<script>
  import data from "emoji-mart-vue-fast/data/apple.json"
  import "emoji-mart-vue-fast/css/emoji-mart.css"
  import { Picker, EmojiIndex } from 'emoji-mart-vue-fast'
  let emojiIndex = new EmojiIndex(data)

  export default {
    name: 'App',
    layout: 'simple',
    components: {
      Picker
    },
    data() {
      return {
        emojiIndex: emojiIndex,
        emojiPicker: false,
        user: 'obukata',
        posts: [],
        currentPosts: {
          emoji: '😀',
          title: '',
          text: '',
          user: ''
        },
        post: {},
      }
    },
    async created() {
      this.posts = await this.$setData()
      this.currentPosts = this.posts.filter(post => post.id == this.$route.params.id)[0]
    },
    methods: {
      showEmoji(emoji) {
        this.currentPosts.emoji = emoji.native
      },
      updateData() {
        this.$updateData(this.currentPosts)
        this.$router.push(`/${this.currentPosts.user}/articles/${this.currentPosts.id}`)
      }
    },
  }
</script>
