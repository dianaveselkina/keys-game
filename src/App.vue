<template>
  <div class="app">
    <transition name="excel">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  components: {},

  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
main {
  display: block;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}
ol,
ul {
  list-style: none;
}
img {
  max-width: 100%;
  width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  color: inherit;
  font-family: inherit;
  border: 0;
}
.app {
  max-width: 1200px;
  margin: 90px auto;
  background-color: #ffffff;
}
.excel-enter-active,
.excel-leave-active {
  opacity: 1;
  transition: 0.5s ease forwards;
}
.excel-enter-from,
.excel-leave-to {
  opacity: 70%;
}
</style>
