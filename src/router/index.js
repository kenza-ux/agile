import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ArtisanPage from '../views/ArtisanPage.vue'
import LandingPage from '../views/LandingPage.vue'
import ClientLogin from "@/views/ClientLogin";
import ArtisansListe from "@/views/ArtisansListe";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/landingpage',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/artisan',
        name: 'ArtisanPage',
        component: ArtisanPage
    },
    {
        path: '/client/login',
        name: 'ClientLogin',
        component: ClientLogin
    },
    {
        path: '/artisansListe',
        name: 'ArtisansListe',
        component: ArtisansListe
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
