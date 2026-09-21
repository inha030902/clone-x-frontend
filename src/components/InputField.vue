<template>
  <div class="input-field">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      @blur="isTouched = true"
      class="input"
    />
    <!-- showError가 true일 때만 에러 문구 표시 -->
    <span v-if="showError" class="error">{{ errorMsg }}</span>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  // props: 부모(SignupPage)에서 내려받는 값
  props: {
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    modelValue: { type: String, default: '' },
    errorMsg: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  data() {
    return { isTouched: false } // 입력창을 한 번이라도 건드렸는지
  },
  computed: {
    // 에러 표시 조건을 computed로 판단 (이번 강의 주제)
    // 1) 입력창을 건드렸고  2) 값이 비었고  3) 보여줄 에러 문구가 있을 때만 true
    showError() {
      return this.isTouched && !this.modelValue && this.errorMsg
    },
  },
  methods: {
    onInput(event) {
      // 입력할 때마다 부모의 v-model 값을 갱신 (emit)
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style scoped>
.input-field {
  margin: 10px 0;
}
.input {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #555;
  background-color: black;
  color: white;
  font-size: 15px;
  box-sizing: border-box;
}
.error {
  display: block;
  color: #ff5555;
  font-size: 12px;
  margin-top: 4px;
}
</style>