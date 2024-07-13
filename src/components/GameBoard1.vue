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
      <img
        v-for="diamond in diamonds"
        :key="diamond.id"
        :src="adamant"
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
    image: '/img/clef7.png',
    width: '30px',
    height: '60px',
  },
]);

let magicKey = '';
const add = (clef) => {
  magicKey = clef.id;
};
const select = (event) => {
  let targetId = event.target.id;
  targetId - 10 === magicKey
    ? success(magicKey)
    : alert('вы не угадали. попробуйте еще раз 😉');
};
const adamant = '/img/diamond1.png';
const diamonds = ref([]);
const success = (magicKey) => {
  addDiamond();
  filterClef(magicKey);
};
const addDiamond = () => {
  diamonds.value.push(adamant);
};
const filterClef = (magicKey) => {
  clefs.value = clefs.value.filter((clef) => clef.id !== magicKey);
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
.test {
  position: absolute;
  bottom: 500px;
  left: 224px;
  background-color: #fff;
  width: 380px;
  height: 68px;
  cursor: pointer;
}
.key-container {
  display: flex;
  padding: 8px;
  gap: 28px;
  position: absolute;
  top: 140px;
  left: 76px;
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
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
}
.key1 {
  background-image: url(/public/img//key-icon1.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 838px;
  left: 360px;
}
.key2 {
  background-image: url(/public/img//key-icon1.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 784px;
  left: 690px;
}
.key3 {
  background-image: url(/public/img//key-icon1.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 1004px;
  left: 1158px;
}
.key4 {
  background-image: url(/public/img//key-icon1.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 1032px;
  left: 150px;
}
.key5 {
  background-image: url(/public/img//key-icon1.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 508px;
  left: 90px;
}
.key6 {
  background-image: url(/public/img//key-icon1.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 1008px;
  left: 1322px;
}
.key7 {
  background-image: url(/public/img//key-icon1.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 910px;
  left: 892px;
}
.diamond-container {
  border: solid 4px #eef13c;
  display: flex;
  border-radius: 12px;
  padding: 8px;
  gap: 28px;
  width: 588px;
  height: 58px;
  margin: 1290px auto;
}
</style>
