<template>
  <div class="feed-container">
    <div class="feed-header">
      <div class="feed-content">{{ feed.content }}</div>
      <button class="feed-delete-button" @click="onDeleteClick">X</button>
    </div>
    <div class="feed-name">{{ feed.user.name }}</div>
  </div>
</template>

<script>
import { useFeedStore } from '@/store/feed'

export default {
  name: 'FeedItem',
  props: {
    feed: { type: Object, required: true },
  },
  data() {
    return {
      feedStore: useFeedStore(), // 스토어 연결
    }
  },
  methods: {
    // 피드 아이템에서 Dialog 보여주기 (rule.2)
    onDeleteClick() {
      this.$confirm({
        message: '피드를 삭제하시겠어요?',
        button: {
          no: '아뇨',
          yes: '네',
        },
        // 아뇨/네 버튼 클릭 케이스별 처리 (rule.3)
        callback: (confirm) => {
          if (confirm) {
            this.feedStore.deleteFeed(this.feed.id) // Dialog에서 삭제 action 호출 (rule.4)
          } else {
            console.log('피드 삭제 취소')
          }
        },
      })
    },
  },
}
</script>

<style scoped>
.feed-container {
  height: 80px;
  background-color: white;
  margin: 10px 0px;
  color: black;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}
.feed-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.feed-content { padding: 1%; }
.feed-delete-button {
  background: none;
  border: none;
  cursor: pointer;
}
.feed-name {
  text-align: right;
  font-size: 12px;
}
</style>