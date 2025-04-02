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
        path: '/artisans',
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
    {
        path: '/artisan/dashboard',
        component: () => import('@/views/ArtisanDash.vue'),
        meta: { requiresAuth: true, role: 'artisan' }
    },
    {
        path: '/client/dashboard',
        component: () => import('@/views/ClientDash.vue'),
        meta: { requiresAuth: true, role: 'client' }
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
