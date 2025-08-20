import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'

import Detail from '../pages/movie/Detail.vue'

import Popular from '../pages/movies/Popular.vue'
import TopRated from '../pages/movies/TopRated.vue'
import Upcoming from '../pages/movies/Upcoming.vue'

import OnAir from '../pages/tv/OnAir.vue'
import TVPopular from '../pages/tv/TVPopular.vue'
import TVTopRated from '../pages/tv/TVTopRated.vue'

const routes = [
  { path: '/', name: 'home', component: Home, alias: ['/home', '/index'] },
    { path: '/movie/:id', name: 'movie-detail', component: Detail},
    
    { path: '/movies/popular', name: 'movies-popular', component: Popular},
    { path: '/movies/top-rated', name: 'movies-top-rated', component: TopRated},
    { path: '/movies/upcoming', name: 'movies-upcoming', component: Upcoming},

    { path: '/tv/popular', name: 'tv-popular', component: TVPopular},
    { path: '/tv/top-rated', name: 'tv-top-rated', component: TVTopRated},
    { path: '/tv/on-air', name: 'tv-on-air', component: OnAir}        
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0}
    }
})

export default router