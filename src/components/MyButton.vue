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
<style scoped>
.game-start {
  margin-top: 4rem;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  background-color: rgba(181, 182, 33, 0.7);
  border: 4px solid #413e15;
  font-size: 3rem;
  color: #472f14;
}
.game__start:hover {
  box-shadow: 0 0 14px 14px rgba(65, 62, 21, 1.6);
}
</style>
