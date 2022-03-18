<template>
  <div class="max-w-6xl mx-auto">
    <div class="p-6 w-full">
      <div class="text-center">
        <div class="rounded-lg bg-white inline-flex justify-center items-center text-6xl p-6 bg-white">🚧</div>
        <h1 v-if="error.statusCode === 404" class="font-semibold text-3xl mt-6">Page not found</h1>
        <div class="rounded-lg bg-white p-12 mt-12">
          <div class="prose prose-slate max-w-none">
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    computed: {
      statusCode() {
        return (this.error && this.error.statusCode) || 500
      },
      message() {
        return this.error.message || '<%= messages.client_error %>'
      }
    },
    head() {
      return {
        title: this.message,
        meta: [
          {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
          }
        ]
      }
    }
  }
</script>
