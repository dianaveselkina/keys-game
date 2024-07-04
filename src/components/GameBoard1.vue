<template>
  <div class="room-two">
    <div class="key-container">
      <div v-for="clef in clefs" :key="clef.id" class="clef">
        <img
          @click="add(clef)"
          :src="clef.image"
          :style="{
            width: '30px',
            height: '60px',
          }"
        />
      </div>
    </div>
    <div id="11" @click="select($event)" class="key-box key1"></div>
    <div id="12" @click="select($event)" class="key-box key2"></div>
    <div id="13" @click="select($event)" class="key-box key3"></div>
    <div id="14" @click="select($event)" class="key-box key4"></div>
    <div id="15" @click="select($event)" class="key-box key5"></div>
    <div id="16" @click="select($event)" class="key-box key6"></div>
    <div id="17" @click="select($event)" class="key-box key7"></div>

    <div class="diamond-container">
      <!-- <div v-show="targetId - 10 === magicKey"> -->
      <div v-for="adamant in adamants" :key="adamant.id">
        <img
          :src="adamant.image"
          :style="{
            width: '60px',
            height: '60px',
          }"
        />
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(false);
const clefs = ref([
  {
    id: 1,
    image: '/img/clef1.png',
    width: '30px',
    height: '60px',
  },
  {
    id: 2,
    image: '/img/clef2.png',
    width: '30px',
    height: '60px',
  },
  {
    id: 3,
    image: '/img/clef3.png',
    width: '30px',
    height: '60px',
  },
  {
    id: 4,
    image: '/img/clef4.png',
    width: '30px',
    height: '60px',
  },
  {
    id: 5,
    image: '/img/clef5.png',
    width: '30px',
    height: '60px',
  },
  {
    id: 6,
    image: '/img/clef6.png',
    width: '30px',
    height: '60px',
  },
  {
    id: 7,
    image: '/img/clef6.png',
    width: '30px',
    height: '60px',
  },
]);
const adamants = ref([
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
let magicKey = '';
const add = (clef) => {
  magicKey = clef.id;
  console.log(magicKey);
};

const select = (event) => {
  let targetId = event.target.id;

  // targetId - 10 === magicKey ? addDiamond() : console.log('!!!!');
};

const diamonds = ref([]);
const addDiamond = (adamant) => {
  diamonds.value.push(adamant);
  console.log('Diamond');
};
</script>

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
  bottom: 20px;
  left: 224px;
  background-image: url(/public/img/key-container.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 9px;
  width: 380px;
  height: 68px;
  cursor: pointer;
}
.key-box {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #fff;
  opacity: 10%;
  border-radius: 50%;
  cursor: pointer;
}
.key1 {
  top: 829px;
  left: 350px;
}
.key2 {
  top: 1029px;
  left: 1096px;
}
.key3 {
  top: 849px;
  left: 1012px;
}
.key4 {
  top: 1021px;
  left: 136px;
}
.key5 {
  top: 1288px;
  left: 139px;
}
.key6 {
  top: 1166px;
  left: 339px;
}
.key7 {
  top: 159px;
  left: 913px;
}
.diamond-container {
  position: absolute;
  display: flex;
  padding: 8px;
  gap: 28px;
  width: 588px;
  height: 58px;
  bottom: 20px;
  left: 700px;
  background-color: #fff;
  opacity: 90%;
}
</style>
