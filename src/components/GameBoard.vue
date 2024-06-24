<template>
  <div class="room-one">
    <KeyDiv imageUrl="/img/key1.png" />
    <KeyDiv imageUrl="/img/key2.png" />
    <KeyDiv imageUrl="/img/key3.png" />
    <KeyDiv imageUrl="/img/key4.png" />
    <KeyDiv imageUrl="/img/key5.png" />
    <transition name="fade">
      <RulesDiv v-if="!show" class="rules" />
    </transition>
    <transition name="disappear">
      <MyButton v-if="!show" @click="show = !show" class="start"
        >Начать игру</MyButton
      >
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RulesDiv from './RulesDiv.vue';
import MyButton from './MyButton.vue';
import KeyDiv from './KeyDiv.vue';
const show = ref(false);
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
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 2s;
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(-350px);
  opacity: 0;
}
.disappear-enter-active,
.disappear-leave-active {
  opacity: 1;
  transition: all 2s;
}
.disappear-enter-from,
.disappear-leave-to {
  transform: translateY(350px);
  opacity: 0;
}
</style>
