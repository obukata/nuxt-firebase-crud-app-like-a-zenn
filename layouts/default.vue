<template>
  <div class="text-slate-700">
    <TheHeader/>

    <main class="bg-slate-100">
      <div class="flex justify-between max-w-6xl mx-auto">
        <!-- <TheSidebar/> -->
        <Nuxt/>
      </div>
    </main>

    <TheFooter/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style>
  .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
  .fade-enter, .fade-leave-active { opacity: 0; }
</style>
