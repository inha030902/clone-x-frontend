<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  margin: 0;
  background-color: black;
  color: white;
  font-family: sans-serif;
}
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* 로그인 · 회원가입 공통 버튼 스타일 */
.button {
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
</style>