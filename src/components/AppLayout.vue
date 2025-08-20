<script setup>
import NavBar from './NavBar.vue';
</script>

<template>
    <div class=" flex w-full flex-col bg-slate-800 text-zinc-100">
        <NavBar/>
    </div>
    <main class="flex-1 w-full ">
    <slot></slot>
    </main>

    <footer class="bg-slate-800 text-center py-4 text-sm text-zinc-400">
        TMDB API
    </footer>
</template>