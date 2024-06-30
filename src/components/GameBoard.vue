<template>
  <div class="room-one">
    <div class="key-container"></div>

    <div class="key-container1">
      <div v-for="(item, i) in items" :key="item.id">
        <img
          @click="moving, items.splice(i, 1)"
          :src="item.image"
          :style="{
            width: item.width,
            height: item.height,
            top: item.top,
            left: item.left,
            position: item.position,
            cursor: item.cursor,
          }"
        />
      </div>
      <transition name="fade">
        <RulesDiv v-if="!show" class="rules" />
      </transition>
      <transition name="disappear">
        <MyButton v-if="!show" @click="show = !show" class="start"
          >Начать игру</MyButton
        >
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RulesDiv from './RulesDiv.vue';
import MyButton from './MyButton.vue';

const show = ref(false);
const items = ref([
  {
    id: 1,
    image: '/img/clef1.png',
    width: '30px',
    height: '60px',
    top: '359px',
    left: '47px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 2,
    image: '/img/clef2.png',
    width: '30px',
    height: '60px',
    top: '2px',
    left: '1317px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 3,
    image: '/img/clef3.png',
    width: '30px',
    height: '60px',
    top: '244px',
    left: '985px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 4,
    image: '/img/clef4.png',
    width: '30px',
    height: '60px',
    top: '821px',
    left: '1283px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 5,
    image: '/img/clef5.png',
    width: '30px',
    height: '60px',
    top: '670px',
    left: '1284px',
    position: 'absolute',
    cursor: 'pointer',
  },
]);

const moving = (event) => {
  alert(event.target.id);
};
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
.key-container {
  position: absolute;
  top: 140px;
  left: 440px;
  background-image: url(/public/img/key-container.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  width: 380px;
  height: 68px;
}
.key-container1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 1400px;
  height: 1400px;
}
.clef {
  cursor: pointer;
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
