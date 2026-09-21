<template>
  <div class="app">
    <!-- 현재 주소에 맞는 페이지가 여기에 표시됨 -->
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
</style>