import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import { languages } from './I18n'

const messages = Object.assign(languages)

const i18n = createI18n({
  legacy: false,
  locale: 'Ru',
  fallbackLocale: 'En',
  messages,
})
const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
