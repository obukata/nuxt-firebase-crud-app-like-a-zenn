<template>
  <div class="w-full px-6 py-24">
    <h2 class="text-2xl font-semibold border-b mb-4 pb-4">ログイン</h2>
    <form action="" class="grid grid-cols-1 gap-6 mt-6">
      <label class="block">
        <span class="text-gray-700">Email address</span>
        <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="sample@example.com">
      </label>
      <label class="block">
        <span class="text-gray-700">Password</span>
        <input type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
      </label>
      <label class="block">
        <button class="w-full bg-blue-400 hover:bg-blue-500 px-5 py-3 shadow text-sm font-semibold rounded-md text-white">Log in</button>
      </label>
    </form>
  </div>

</template>

<script>
  export default {
    layout: 'simple'
  }
</script>


