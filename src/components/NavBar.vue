<script setup>
import { ref, onMounted, Static, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router';
import logo from '../assets/tmdb-logo.svg';

const route = useRoute()
//mobil için
const isOpen = ref(false);

function toggle() { isOpen.value = !isOpen.value }
function closeMenu() { isOpen.value = false }

watch(() => route.fullPath, () => closeMenu())
</script>

<template>
  <nav class="sticky top-0 z-50 bg-slate-900/95 text-white border-b border-slate-800
           backdrop-blur supports-[backdrop-filter]:backdrop-blur px-4 sm:px-6" @keydown.esc="closeMenu">
    <div class="h-14 max-w-screen-xl mx-auto flex items-center justify-between">
      <RouterLink to="/" class="text-lg sm:text-xl font-semibold">
         <img class="absolute max-w-[25vh] self-center left-10 sm:w-[20vh] lg:w-[25vh] " :src="logo"></img>
      </RouterLink>

      <!-- mobil -->
      <button class="lg:hidden p-2 rounded hover:bg-slate-800" @click="toggle" aria-label="Open menu">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="hidden lg:flex items-center gap-6">

        <RouterLink to="/movies/popular" class="hover:underline">Popular Movies</RouterLink>
        <RouterLink to="/movies/top-rated" class="hover:underline">Top Rated Movies</RouterLink>
        <RouterLink to="/movies/upcoming" class="hover:underline">Upcoming Movies</RouterLink>
        <RouterLink to="/tv/popular" class="hover:underline">Popular TV Shows</RouterLink>
        <RouterLink to="/tv/top-rated" class="hover:underline">Top Rated TV Shows</RouterLink>
        <RouterLink to="/tv/on-air" class="hover:underline">TV Shows On The Air</RouterLink>
      </div>
    </div>

    <div class="lg:hidden border-t border-slate-800" v-show="isOpen">
      <div class="max-w-screen-xl mx-auto py-3 flex flex-col gap-3">
        <RouterLink to="/movies/popular" class="py-2" @click="closeMenu">Popular Movies</RouterLink>
        <RouterLink to="/movies/top-rated" class="py-2" @click="closeMenu">Top Rated Movies</RouterLink>
        <RouterLink to="/movies/upcoming" class="py-2" @click="closeMenu">Upcoming Movies</RouterLink>
        <RouterLink to="/tv/popular" class="py-2" @click="closeMenu">Popular TV Shows</RouterLink>
        <RouterLink to="/tv/top-rated" class="py-2" @click="closeMenu">Top Rated TV Shows</RouterLink>
        <RouterLink to="/tv/on-air" class="py-2" @click="closeMenu">TV Shows On The Air</RouterLink>

      </div>

    </div>
  </nav>
</template>