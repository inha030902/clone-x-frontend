<template>
  <div class="login-container">
    <div class="logo-container">
      <img src="@/assets/x-logo.png" class="logo" />
    </div>

    <!-- v-model: 입력값이 email/password와 양방향 연결 (rule.1) -->
    <InputField :type="'text'" :placeholder="'Email'" v-model="email" errorMsg="이메일을 입력하세요" />
    <InputField :type="'password'" :placeholder="'Password'" v-model="password" errorMsg="비밀번호를 입력하세요" />

    <!-- v-on(@click): 버튼 클릭 시 login 실행 (rule.2) -->
    <button class="button" @click="login">로그인하기</button>

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