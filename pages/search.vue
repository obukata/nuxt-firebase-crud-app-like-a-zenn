<template>
  <div class="ml-4 w-full p-6">

    <form class="mb-12 relative">
      <input type="text" class="py-4 px-6 bg-white block w-full rounded-full border-slate-100 focus:border-indigo-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="キーワードを入力…">
      <button class="text-slate-500 hover:text-slate-800 absolute top-0 bottom-0 right-4 m-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
    </form>
    <!-- <h2 class="text-2xl font-semibold border-b mb-4 pb-4">新着記事</h2>
    <ul class="grid gap-4 grid-cols-2">
      <li class="py-4 flex items-start">
        <NuxtLink to="/username/articles/postId">
          <div class="rounded-lg bg-white flex justify-center items-center text-6xl p-6 bg-white">✌️</div>
        </NuxtLink>
        <div class="ml-4">
          <NuxtLink to="/username/articles/postId" class="flex items-start">
            <h3 class="font-semibold text-lg mb-2">Web フロントエンドエンジニアのための Rust 製 Web フロントフレームワーク Yew 入門</h3>
          </NuxtLink>
          <NuxtLink to="/username" class="flex items-center w-full">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">User name</div>
              <div class="text-slate-500">2日前</div>
            </div>
          </NuxtLink>
        </div>
      </li>
      <li class="py-4 flex items-start">
        <NuxtLink to="/username/articles/postId">
          <div class="rounded-lg bg-white flex justify-center items-center text-6xl p-6 bg-white">✌️</div>
        </NuxtLink>
        <div class="ml-4">
          <NuxtLink to="/username/articles/postId" class="flex items-start">
            <h3 class="font-semibold text-lg mb-2">Web フロントエンドエンジニアのための Rust 製 Web フロントフレームワーク Yew 入門</h3>
          </NuxtLink>
          <NuxtLink to="/username" class="flex items-center w-full">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">User name</div>
              <div class="text-slate-500">2日前</div>
            </div>
          </NuxtLink>
        </div>
      </li>
      <li class="py-4 flex items-start">
        <NuxtLink to="/username/articles/postId">
          <div class="rounded-lg bg-white flex justify-center items-center text-6xl p-6 bg-white">✌️</div>
        </NuxtLink>
        <div class="ml-4">
          <NuxtLink to="/username/articles/postId" class="flex items-start">
            <h3 class="font-semibold text-lg mb-2">Web フロントエンドエンジニアのための Rust 製 Web フロントフレームワーク Yew 入門</h3>
          </NuxtLink>
          <NuxtLink to="/username" class="flex items-center w-full">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">User name</div>
              <div class="text-slate-500">2日前</div>
            </div>
          </NuxtLink>
        </div>
      </li>
      <li class="py-4 flex items-start">
        <NuxtLink to="/username/articles/postId">
          <div class="rounded-lg bg-white flex justify-center items-center text-6xl p-6 bg-white">✌️</div>
        </NuxtLink>
        <div class="ml-4">
          <NuxtLink to="/username/articles/postId" class="flex items-start">
            <h3 class="font-semibold text-lg mb-2">Web フロントエンドエンジニアのための Rust 製 Web フロントフレームワーク Yew 入門</h3>
          </NuxtLink>
          <NuxtLink to="/username" class="flex items-center w-full">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">User name</div>
              <div class="text-slate-500">2日前</div>
            </div>
          </NuxtLink>
        </div>
      </li>
      <li class="py-4 flex items-start">
        <NuxtLink to="/username/articles/postId">
          <div class="rounded-lg bg-white flex justify-center items-center text-6xl p-6 bg-white">✌️</div>
        </NuxtLink>
        <div class="ml-4">
          <NuxtLink to="/username/articles/postId" class="flex items-start">
            <h3 class="font-semibold text-lg mb-2">Web フロントエンドエンジニアのための Rust 製 Web フロントフレームワーク Yew 入門</h3>
          </NuxtLink>
          <NuxtLink to="/username" class="flex items-center w-full">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">User name</div>
              <div class="text-slate-500">2日前</div>
            </div>
          </NuxtLink>
        </div>
      </li>
      <li class="py-4 flex items-start">
        <NuxtLink to="/username/articles/postId">
          <div class="rounded-lg bg-white flex justify-center items-center text-6xl p-6 bg-white">✌️</div>
        </NuxtLink>
        <div class="ml-4">
          <NuxtLink to="/username/articles/postId" class="flex items-start">
            <h3 class="font-semibold text-lg mb-2">Web フロントエンドエンジニアのための Rust 製 Web フロントフレームワーク Yew 入門</h3>
          </NuxtLink>
          <NuxtLink to="/username" class="flex items-center w-full">
            <div class="rounded-full overflow-hidden w-8 h-8 bg-slate-500"></div>
            <div class="ml-2 text-xs">
              <div class="overflow-ellipsis whitespace-nowrap overflow-hidden">User name</div>
              <div class="text-slate-500">2日前</div>
            </div>
          </NuxtLink>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  layout: 'simple'
}
</script>
