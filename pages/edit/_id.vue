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
      <textarea v-model="currentPosts.text" class="p-12 focus:ring-0 border-0 w-full h-96 resize-none rounded-lg bg-white" placeholder="内容を入力してください"></textarea>
      <div class="p-12 focus:ring-0 border-0 w-full h-full resize-none rounded-lg bg-white">
        <div v-html="$md.render(currentPosts.text)" class="prose"></div>
      </div>
    </div>
    <div class="mt-12 text-center">
      <button @click="updateData" class="bg-blue-400 hover:bg-blue-500 px-5 py-3 shadow text-sm font-semibold rounded-md text-white">更新する</button>
    </div>
  </div>
</template>

<script>
  import { getFirestore, doc, updateDoc, Timestamp } from 'firebase/firestore'
  import data from "emoji-mart-vue-fast/data/apple.json"
  import "emoji-mart-vue-fast/css/emoji-mart.css"
  import { Picker, EmojiIndex } from 'emoji-mart-vue-fast'
  let emojiIndex = new EmojiIndex(data)

  export default {
    name: 'App',
    // layout: 'simple',
    components: {
      Picker
    },
    data() {
      return {
        emojiIndex: emojiIndex,
        emojiPicker: false,
        user: [],
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
      this.posts = await this.$setPostsData()
      this.currentPosts = this.posts.filter(post => post.id == this.$route.params.id)[0]
      this.user = await this.$setUserData()
    },
    methods: {
      showEmoji(emoji) {
        this.currentPosts.emoji = emoji.native
      },
      async updateData() {
        try {
          const db = getFirestore(this.$firebase)
          const docRef = doc(db, 'posts', this.currentPosts.id)
          await updateDoc(docRef, {
            emoji: this.currentPosts.emoji,
            title: this.currentPosts.title,
            text: this.currentPosts.text,
            createdDay: Timestamp.now()
          })
        } catch(e) {
          console.error('error:', e)
        }
        this.$router.push(`/${this.$idToName(this.currentPosts.user, this.user)}/articles/${this.currentPosts.id}`)
      }
    },
  }
</script>
