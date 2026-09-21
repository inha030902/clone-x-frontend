<template>
  <div class="main-container">
    <!-- 헤더 -->
    <div class="main-header">
      <h1 class="home-title">Home</h1>
      <span class="user-name">{{ userName }}님</span>
    </div>

    <!-- 피드 입력: 공통 컴포넌트(InputField) 사용 (rule.1) -->
    <div class="feed-input">
      <InputField
        type="text"
        :placeholder="`what's good, ${userName}?`"
        v-model="newContent"
      />
      <button class="post-button" @click="addFeed">🐦</button>
    </div>

    <!-- 피드 리스트: v-for로 반복 (rule.2), 각 Feed에 props로 데이터 전달 (rule.3) -->
    <Feed
      v-for="feed in feeds"
      :key="feed.id"
      :feed="feed"
    />
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue'
import Feed from '@/components/Feed.vue'

export default {
  name: 'MainPage',
  components: { InputField, Feed },
  data() {
    return {
      userName: '최인하', // 화면에 표시할 사용자 이름
      newContent: '',     // 입력창에 적히는 새 피드 내용
      // 피드 목록 (v-for로 돌릴 데이터)
      feeds: [
        { id: 1, content: '안녕하세요', user: { name: '최인하' } },
        { id: 2, content: '안녕하세요', user: { name: '최인하' } },
        { id: 3, content: '안녕하세요', user: { name: '최인하' } },
        { id: 4, content: '안녕하세요', user: { name: '최인하' } },
        { id: 5, content: '안녕하세요', user: { name: '최인하' } },
      ],
    }
  },
  methods: {
    // 입력한 내용을 새 피드로 목록 맨 위에 추가
    addFeed() {
      if (!this.newContent) return
      this.feeds.unshift({
        id: Date.now(),
        content: this.newContent,
        user: { name: this.userName },
      })
      this.newContent = '' // 입력창 비우기
    },
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