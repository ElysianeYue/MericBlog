import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import router from "./routers/routes.ts";


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')

