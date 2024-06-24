<script setup>
defineProps({
  imageUrl: String,
});
</script>
<template>
  <div class="key">
    <img class="key__img" :src="imageUrl" alt="key" />
  </div>
</template>
<style scoped>
.key {
  display: inline-block;
}
.key__img {
  width: 25px;
  height: 50px;
}
.key:hover {
  cursor: pointer;
  box-shadow: 0 0 14px 14px rgba(65, 62, 21, 1.6);
}
</style>
