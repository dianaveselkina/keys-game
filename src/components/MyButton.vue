<template>
  <button class="game-start"><slot></slot></button>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.game-start {
  margin-top: 4rem;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  background-color: rgba(104, 72, 35, 0.5);
  border: 4px solid rgb(104, 72, 35);
  font-size: 3rem;
  color: #664017;
}
.game__start:hover {
  box-shadow: 0 0 14px 14px rgba(65, 62, 21, 1.6);
}
</style>
