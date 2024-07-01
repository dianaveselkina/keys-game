<template>
  <div class="room-two"></div>
</template>

<script setup></script>

<style scoped>
.room-two {
  background-image: url(/public/img/room2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  width: 1400px;
  height: 1400px;
}

.key-container {
  display: flex;
  padding: 8px;
  gap: 28px;
  position: absolute;
  top: 120px;
  left: 430px;
  background-image: url(/public/img/key-container.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 9px;
  width: 380px;
  height: 68px;
}
</style>
