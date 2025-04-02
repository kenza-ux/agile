import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import correct du router
const app = createApp(App)
app.use(router).mount('#app')
