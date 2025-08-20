<script setup>
import { ref, onMounted } from 'vue'
import { tmdb, posterUrl, backdropUrl } from '../lib/tmdb'
import bg from '../../src/assets/bg.jpg'

const loading = ref(true)
const error = ref('')
const items = ref([])

onMounted(async () => {
  try {
    const data = await tmdb.moviesPopular(1)
    items.value = data?.results ?? []
  } catch (e) {
    error.value = 'Unable to fetch data.'
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="w-full bg-slate-900 text-white">
    <section
  class="relative w-full min-h-[50vh] bg-cover bg-center"
  :style="{ backgroundImage: `url(${bg})` }"
>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/85 to-transparent"></div>
      <div class="relative p-4 sm:p-6 lg:p-8">
        <h1 class="text-4xl mt-20 sm:text-5xl lg:text-6xl font-bold leading-tight">
          Welcome.
        </h1>
        <h2 class="mt-2 max-w-3xl text-lg sm:text-xl lg:text-base text-zinc-200 line-clamp-3 lg:line-clamp-none">
          Millions of movies, TV shows, and people to discover. Explore now.
        </h2>
      </div>
    </section>

    <div class="w-full px-4 sm:px-6 lg:px-8 py-8">
  <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">Popular Movies</h2>
  <p v-if="loading" class="text-zinc-400">Loading...</p>
  <p v-else-if="error" class="text-red-400">{{ error }}</p>

  <ul
    v-else
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
  >
    <li v-for="m in items" :key="m.id" class="group text-center">
      <div class="aspect-[2/3] w-full overflow-hidden rounded-lg bg-slate-800 shadow hover:shadow-lg transition">
        <img
          v-if="m.poster_path"
          :src="posterUrl(m.poster_path, 'w342')"
          :alt="m.title || m.name"
          class="w-full h-full object-cover group-hover:scale-105 transition"
          loading="lazy"
        />
      </div>
      <div class="mt-2 text-xs sm:text-sm text-zinc-400">#{{ m.id }}</div>
      <div class="text-sm sm:text-base font-medium line-clamp-1">
        {{ m.title || m.name }}
      </div>
    </li>
  </ul>
</div>
  </div>
</template>
