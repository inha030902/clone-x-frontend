import { defineStore } from 'pinia'

// 첫 번째 인자 'userStore'가 devtools에 표시되는 이름
export const useUserStore = defineStore('userStore', {
  // state: 중앙에서 관리할 데이터
  state: () => ({
    id: 13,
    name: '다미장',
    email: 'dm@dm.com',
  }),
  // getters: state를 가공해서 반환 (rule.2)
  getters: {
    placeholder: (state) => `what's good, ${state.name}?`,
  },
})