import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../HomePage.vue'
import ArtisanPage from '../ArtisanPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/artisan', name: 'ArtisanPage', component: ArtisanPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
