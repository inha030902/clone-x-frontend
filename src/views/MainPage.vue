<template>
  <div class="main-container">
    <!-- 헤더: 스토어의 유저 이름 표시 (rule.2) -->
    <div class="main-header">
      <h1 class="home-title">Home</h1>
      <span class="user-name">{{ userStore.name }}님</span>
    </div>

    <!-- 입력창 placeholder에 getter 사용 (rule.2) -->
    <div class="feed-input">
      <InputField type="text" :placeholder="userStore.placeholder" v-model="newContent" />
      <button class="post-button">🐦</button>
    </div>

    <FeedList />
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue'
import FeedList from '@/components/FeedList.vue'
import { useUserStore } from '@/store/user'

export default {
  name: 'MainPage',
  components: { InputField, FeedList },
  data() {
    return {
      userStore: useUserStore(), // 스토어 연결
      newContent: '',
    }
  },
}
</script>

<style scoped>
.main-container { width: 360px; }
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.home-title { font-size: 28px; margin: 0; }
.user-name { font-size: 14px; }
.feed-input {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.feed-input :deep(.input-field) { flex: 1; margin: 0; }
.post-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #1d9bf0;
  color: white;
  font-size: 16px;
  cursor: pointer;
  flex-shrink: 0;
}
</style>