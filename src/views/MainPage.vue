<template>
  <div class="main-container">
    <!-- 헤더 -->
    <div class="main-header">
      <h1 class="home-title">Home</h1>
      <span class="user-name">{{ userName }}님</span>
    </div>

    <!-- 피드 입력 (공통 컴포넌트 InputField) -->
    <div class="feed-input">
      <InputField
        type="text"
        :placeholder="`what's good, ${userName}?`"
        v-model="newContent"
      />
      <button class="post-button">🐦</button>
    </div>

    <!-- 피드 리스트: 데이터·초기화는 FeedList가 담당 -->
    <FeedList />
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue'
import FeedList from '@/components/FeedList.vue'

export default {
  name: 'MainPage',
  components: { InputField, FeedList },
  data() {
    return {
      userName: '최인하',
      newContent: '',
    }
  },
}
</script>

<style scoped>
.main-container {
  width: 360px;
}
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.home-title {
  font-size: 28px;
  margin: 0;
}
.user-name {
  font-size: 14px;
}
.feed-input {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}
.feed-input :deep(.input-field) {
  flex: 1;
  margin: 0;
}
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