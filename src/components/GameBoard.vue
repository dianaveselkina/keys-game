<template>
  <div class="room-one">
    <div class="key-container">
      <div v-for="clef in clefs" :key="clef.id" class="clef">
        <img
          :src="clef.image"
          :style="{
            width: '30px',
            height: '60px',
          }"
        />
      </div>
    </div>
    <div class="key-container1">
      <div v-for="(item, i) in items" :key="item.id">
        <img
          @click="add(item), items.splice(i, 1)"
          :src="item.image"
          :style="{
            width: item.width,
            height: item.height,
            top: item.top,
            left: item.left,
            position: item.position,
            cursor: item.cursor,
            rotate: item.rotate,
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
      <div class="door"></div>
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
    top: '364px',
    left: '53px',
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
    top: '247px',
    left: '979px',
    rotate: '146deg',
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
    top: '703px',
    left: '1283px',
    position: 'absolute',
    cursor: 'pointer',
    rotate: '-43deg',
  },
  {
    id: 6,
    image: '/img/clef6.png',
    width: '30px',
    height: '60px',
    top: '423px',
    left: '1210px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 6,
    image: '/img/clef6.png',
    width: '30px',
    height: '60px',
    top: '553px',
    left: '101px',
    position: 'absolute',
    cursor: 'pointer',
    rotate: '215deg',
  },
]);

const clefs = ref([]);
const add = (item) => {
  clefs.value.push(item);
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
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  margin: 220px auto 50px;
}
.start {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
.key-container1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 1400px;
  height: 1400px;
}
.door {
  position: absolute;
  top: 272px;
  left: 530px;
  width: 212px;
  height: 365px;
  background-image: url(/public/img/door.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.door:hover {
  transform: perspective(500px) rotateY(-90deg);
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
