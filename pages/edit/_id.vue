<template>
  <div class="ml-4 w-full py-24 px-6">
    <div class="text-center">
      <div class="relative inline-flex cursor-pointer">
        <div @click="openEmoji" class="rounded-lg bg-white justify-center items-center text-6xl p-6 bg-white">{{ emojisOutput }}</div>
        <div v-show="emojiShow" @click="closeEmoji" class="fixed flex items-center justify-center bg-transparent inset-0 cursor-auto z-10"></div>
        <picker v-show="emojiShow" :data="emojiIndex" @select="showEmoji" :showPreview="false" class="absolute top-full left-0 z-20" />
      </div>
      <div class="mt-6">
        <input v-model="title" type="text" class="font-semibold text-3xl w-full border-0 bg-transparent focus:ring-0" placeholder="タイトルを入力">
      </div>
    </div>
    <div class="mt-12">
      <textarea v-model="textarea" ref="area" :style="styles" class="p-12 focus:ring-0 border-0 w-full h-full resize-none rounded-lg bg-white" placeholder="内容を入力してください"></textarea>
    </div>
    <div class="mt-12 text-center">
      <button @click="updatePostInfo" class="bg-blue-400 hover:bg-blue-500 px-5 py-3 shadow text-sm font-semibold rounded-md text-white">更新する</button>
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
      height: 'auto',
      emojiIndex: emojiIndex,
      emojisOutput: '😀',
      emojiShow: false,
      textarea: null,
      title: null,
      user: 'obukata',
      posts: [],
      post: {},
    }
  },
  computed: {
    styles() {
      return {
        'height': this.height
      }
    }
  },
  mounted() {
    this.resize()
    this.setStorage()
  },
  methods: {
    setStorage() {
      if(this.$setStorage()) {
        this.posts = this.$setStorage()
        this.post = this.posts.filter(post => post.id == this.$route.params.id)[0]
        this.emojisOutput = this.post.emoji
        this.title = this.post.title
        this.textarea = this.post.text
      }
    },
    resize() {
      this.height = this.$refs.area.scrollHeight + 'px'
      this.height = 'auto'
      this.$nextTick(() => {
        this.height = this.$refs.area.scrollHeight + 'px'
      })
    },
    showEmoji(emoji) {
      this.emojisOutput = emoji.native
    },
    openEmoji() {
      this.emojiShow = true
    },
    closeEmoji() {
      this.emojiShow = false
    },
    updatePostInfo() {
      this.post = {
        id: this.post.id,
        emoji: this.emojisOutput,
        title: this.title,
        text: this.textarea,
        user: this.post.user
      }
      this.$updatePostInfo(this.posts, this.post)
      this.$router.push(`/${this.post.user}/articles/${this.post.id}`)
    },
  },
  watch: {
    textarea() {
      this.resize()
    }
  }
}
</script>
