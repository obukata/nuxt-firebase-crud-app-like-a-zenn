<template>
  <header class="border-b relative z-10">
    <div class="max-w-6xl m-auto p-6 flex justify-between items-center">
      <div class="font-semibold text-2xl tracking-wider"><NuxtLink to="/">社内Wiki</NuxtLink></div>
      <div class="flex items-center space-x-6">
        <NuxtLink to="/search" class="text-slate-500 hover:text-slate-800"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></NuxtLink>
        <NuxtLink to="/login" class="bg-blue-400 hover:bg-blue-500 px-5 py-2 shadow text-sm font-semibold rounded-md text-white">Log in</NuxtLink>
      </div>
    </div>
  </header>
</template>
