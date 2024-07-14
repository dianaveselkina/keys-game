<template>
  <div class="room-three">
    <transition name="fade">
      <RulesDiv2 v-if="!show" class="rules" />
    </transition>
    <transition name="disappear">
      <MyButton v-if="!show" @click="show = !show" class="start"
        >Начать игру</MyButton
      >
    </transition>

    <div class="diamond-container">
      <img
        v-for="diamond in diamonds"
        :key="diamond.id"
        :src="diamond.image"
        :style="{
          width: '60px',
          height: '60px',
        }"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import RulesDiv2 from './RulesDiv2.vue';
import MyButton from './MyButton.vue';
const show = ref(false);
const diamonds = ref([
  {
    id: 1,
    image: '/img/diamond1.png',
  },
  {
    id: 2,
    image: '/img/diamond1.png',
  },
  {
    id: 3,
    image: '/img/diamond1.png',
  },
  {
    id: 4,
    image: '/img/diamond1.png',
  },
  {
    id: 5,
    image: '/img/diamond1.png',
  },
  {
    id: 6,
    image: '/img/diamond1.png',
  },
  {
    id: 7,
    image: '/img/diamond1.png',
  },
]);
</script>
<style scoped>
.room-three {
  background-image: url(/public/img/room3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  width: 1400px;
  height: 1400px;
}
.rules {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  margin: 35px auto 50px;
}
.start {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.diamond-container {
  border: solid 4px #eef13c;
  display: flex;
  border-radius: 12px;
  padding: 8px;
  gap: 28px;
  width: 588px;
  height: 58px;
  margin: 1294px auto;
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
