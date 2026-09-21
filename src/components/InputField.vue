<template>
  <div class="input-field">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      @blur="touched = true"
      class="input"
    />
    <!-- 값이 비어 있고 한 번이라도 입력창을 벗어났으면 에러 메시지 표시 -->
    <p v-if="touched && !modelValue" class="error">{{ errorMsg }}</p>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  // props: 부모(LoginPage)에서 내려받는 값
  props: {
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    modelValue: { type: String, default: '' },
    errorMsg: { type: String, default: '' },
  },
  // emit: 부모에게 값을 되돌려줄 때 쓰는 이벤트
  emits: ['update:modelValue'],
  data() {
    return { touched: false }
  },
  methods: {
    onInput(event) {
      // 입력할 때마다 부모의 v-model 값을 갱신
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
  color: #ff5555;
  font-size: 12px;
  margin: 4px 0 0;
}
</style>