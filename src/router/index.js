import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'
import SignupPage from '@/views/SignupPage.vue'

// 주소(path)와 보여줄 페이지(component)를 연결
const routes = [
  { path: '/', name: 'login', component: LoginPage },
  { path: '/main', name: 'main', component: MainPage },
  { path: '/signup', name: 'signup', component: SignupPage },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router