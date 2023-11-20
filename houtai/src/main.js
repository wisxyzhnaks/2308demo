
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import api from './axios/api'

const app = createApp(App)

app.config.globalProperties.$http = api;
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
