import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vue3ConfirmDialog from 'vue3-confirm-dialog' // Dialog 라이브러리 (rule.1)
import 'vue3-confirm-dialog/style'

// use() 시 <vue3-confirm-dialog> 컴포넌트와 this.$confirm이 전역 등록됨 (rule.1)
createApp(App).use(router).use(createPinia()).use(Vue3ConfirmDialog).mount('#app')
