import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import vue3GoogleLogin from 'vue3-google-login'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '201528631962-ug8pe1jbincpc4n4bvr242v4ia3capco.apps.googleusercontent.com',
})

app.mount('#app')
