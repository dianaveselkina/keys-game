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
    <div v-for="crystal in crystals" :key="crystal.id">
      <img
        @click="emersion(($event, crystal.id))"
        :src="crystal.image"
        :style="{
          width: '25px',
          height: '25px',
          top: crystal.top,
          left: crystal.left,
          position: crystal.position,
          cursor: crystal.cursor,
        }"
      />
    </div>
    <form class="conundrum" v-show="showConundrum">
      @submit.prevent="submitForm"
      <img
        v-for="picture in pictures"
        :key="picture.id"
        :src="picture.image"
        :style="{
          width: '600px',
          height: '600px',
        }"
      />
      <label>Ответ</label>
      <input v-model="answer" type="text" placeholder="Ваш ответ" />
      <p>{{ answer }}</p>
      <button type="submit">Ok</button>
    </form>
    <!-- <div id="21" @click="emersion" class="crystal crystal1">
      <form
        @submit.prevent="submitForm"
        class="conundrum"
        v-show="showConundrum"
      >
        <div class="conundrum__img"></div>
        <label>Ответ</label>
        <input v-model="answer" type="text" placeholder="Ваш ответ" />
      </form>
    </div>
    <div id="22" @click="emersion" class="crystal crystal2"></div>
    <div id="23" @click="emersion" class="crystal crystal3"></div>
    <div id="24" @click="emersion" class="crystal crystal4"></div>
    <div id="25" @click="emersion" class="crystal crystal5"></div>
    <div id="24" @click="emersion" class="crystal crystal4"></div>
    <div id="26" @click="emersion" class="crystal crystal6"></div>
    <div id="27" @click="emersion" class="crystal crystal7"></div> -->
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
const showConundrum = ref(false);
const emersion = (event) => {
  console.log(event);
  showConundrum.value = !showConundrum.value;
};
const answer = ref('');

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
const crystals = ref([
  {
    id: 21,
    image: '/img/diamond2.png',
    top: '366px',
    left: '389px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 22,
    image: '/img/diamond2.png',
    top: '620px',
    left: '526px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 23,
    image: '/img/diamond2.png',
    top: '530px',
    left: '1160px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 24,
    image: '/img/diamond2.png',
    top: '1066px',
    left: '106px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 25,
    image: '/img/diamond2.png',
    top: '602px',
    left: '76px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 26,
    image: '/img/diamond2.png',
    top: '1042px',
    left: '1216px',
    position: 'absolute',
    cursor: 'pointer',
  },
  {
    id: 27,
    image: '/img/diamond2.png',
    top: '0px',
    left: '732px',
    position: 'absolute',
    cursor: 'pointer',
  },
]);

const pictures = ref([
  {
    id: 31,
    image: '/img/conundrum1.png',
  },
  {
    id: 32,
    image: '/img/conundrum2.png',
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
.conundrum {
  width: 600px;
  height: 700px;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  margin: 35px auto 50px;
}
.conundrum__img {
  /* background-image: url(/public/img/conundrum1.png); */
  background-repeat: no-repeat;
  background-size: cover;
  width: 550px;
  height: 400px;
}
.start {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.crystal {
  /* position: absolute;
  width: 25px;
  height: 25px; */
  border-radius: 50%;
  /* cursor: pointer; */
}
/* .crystal1 {
  background-image: url(/public/img/diamond2.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 366px;
  left: 389px;
} */
/* .crystal2 {
  background-image: url(/public/img/diamond2.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 620px;
  left: 526px;
} */
/* .crystal3 {
  background-image: url(/public/img/diamond2.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 530px;
  left: 1160px;
} */
/* .crystal4 {
  background-image: url(/public/img/diamond2.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 1066px;
  left: 106px;
} */
/* .crystal5 {
  background-image: url(/public/img/diamond2.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 602px;
  left: 76px;
} */
/* .crystal6 {
  background-image: url(/public/img/diamond2.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 1042px;
  left: 1216px;
} */
/* .crystal7 {
  background-image: url(/public/img/diamond2.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 0px;
  left: 732px;
} */
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
