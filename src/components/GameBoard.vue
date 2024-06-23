<template>
  <div class="room-one">
    <RulesDiv class="rules" />
    <MyButton class="start">Начать игру</MyButton>
  </div>
</template>

<script setup>
import RulesDiv from './RulesDiv.vue';
import MyButton from './MyButton.vue';
</script>

<style scoped>
.room-one {
  background-image: url(/public/img/room1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  width: 1400px;
  height: 1400px;
}
.rules {
  display: flex;
  flex-direction: column;
  margin: 300px auto 50px;
}
.start {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
