<template>
  <div class="login-container">
    <div class="logo-container">
      <!-- X 로고를 SVG로 직접 그림 (이미지 파일 불필요) -->
      <svg class="logo" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
      </svg>
    </div>

    <!-- v-model: 입력값이 email/password와 양방향 연결 (rule.1) -->
    <InputField :type="'text'" :placeholder="'Email'" v-model="email" errorMsg="이메일을 입력하세요" />
    <InputField :type="'password'" :placeholder="'Password'" v-model="password" errorMsg="비밀번호를 입력하세요" />

    <!-- v-on(@click): 버튼 클릭 시 login 실행 (rule.2) -->
    <button class="login-button" @click="login">로그인하기</button>

    <div class="signup-text">
      계정이 없으신가요?
      <RouterLink class="signup-button" to="/signup">SignUp</RouterLink>
    </div>
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue'

export default {
  name: 'LoginPage',
  components: { InputField },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('모든 필드를 입력해주세요.')
        return
      }
      this.$router.push('/main')
    },
  },
}
</script>

<style scoped>
.login-container {
  width: 300px;
  display: flex;
  flex-direction: column;
}
.logo-container {
  text-align: center;
  margin-bottom: 20px;
}
.logo {
  width: 40px;
  height: 40px;
}
.login-button {
  border-radius: 20px;
  border: 1px solid white;
  background-color: white;
  color: black;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}
.signup-text {
  margin-top: 15px;
  font-size: 14px;
  text-align: center;
}
.signup-button {
  color: aqua;
  cursor: pointer;
  text-decoration: none;
}
</style>