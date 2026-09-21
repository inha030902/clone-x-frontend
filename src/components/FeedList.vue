<template>
  <div class="feed-list-container">
    <div v-if="feedStore.feedData.length > 0">
      <FeedItem v-for="feed in feedStore.feedData" :key="feed.id" :feed="feed" />
    </div>
    <div v-else>
      <div>피드가 없습니다.</div>
    </div>
  </div>
</template>

<script>
import FeedItem from '@/components/FeedItem.vue'
import { useFeedStore } from '@/store/feed'

export default {
  name: 'FeedList',
  components: { FeedItem },
  data() {
    return {
      feedStore: useFeedStore(), // 스토어 연결
    }
  },
  created() {
    this.feedStore.getFeedData() // action 호출로 초기 데이터 주입 (rule.3)
  },
}
</script>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
}
</style>