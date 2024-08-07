<template>
  <div class="room-three">
    <transition name="showPrize">
      <div class="prize" v-if="prizeVisibility">
        <div class="prize-image"></div>
        <p class="prize-text">
          Супер!!!<br />
          Ты прошел<br />
          все уровни<br />
          и выиграл <br />
          главный приз
        </p>
      </div>
    </transition>
    <transition name="fade">
      <RulesDiv2 v-if="!show" class="rules" />
    </transition>
    <transition name="disappear">
      <MyButton
        v-if="!show"
        @click="(show = !show), showCrystal()"
        class="start"
        >Начать игру</MyButton
      >
    </transition>
    <div v-for="crystal in crystals" :key="crystal.id">
      <img
        v-if="crystalVisibility"
        @click="emersion(), addImage(crystal)"
        :src="crystal.image"
        :style="{
          width: '25px',
          height: '25px',
          top: crystal.top,
          left: crystal.left,
          position: crystal.position,
          cursor: crystal.cursor,
          userSelect: 'none',
        }"
      />
    </div>

    <div class="form">
      <form
        @submit.prevent="submitForm"
        class="conundrum"
        v-show="showConundrum"
      >
        <img class="conundrum" :src="imageSrc" />
        <label>Ваш ответ:</label>
        <input
          v-model="answer"
          type="text"
          placeholder="Ваш ответ..."
          @input="answer = $event.target.value"
          ref="answerInput"
        />
        <button @click="compare()" class="btn__form">Ok</button>
      </form>
    </div>

    <div class="diamond-container" v-if="diamondVisibility">
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
import { ref, onUpdated } from 'vue';
import RulesDiv2 from './RulesDiv2.vue';
import MyButton from './MyButton.vue';
const show = ref(false);
const showConundrum = ref(false);
const emersion = () => {
  showConundrum.value = !showConundrum.value;
};
const prizeVisibility = ref(false);
const crystalVisibility = ref(false);
const diamondVisibility = ref(true);
let imageSrc = '';
let textStr = '';
const answerInput = ref(null);
onUpdated(() => {
  answerInput.value.focus();
});
let crystalID = ref('');
const addImage = (crystal) => {
  imageSrc = crystal.conundrumImg;
  textStr = crystal.guessStr;
  crystalID.value = crystal.id;
};
const answer = ref('');
const compare = () => {
  const answer1 = answer;
  if (textStr === answer1.value) {
    deleteCrystal();
    deletePinkCrystal();
    showConundrum.value = false;
    answer1.value = '';
  }
};
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

const deleteCrystal = () => {
  diamonds.value = diamonds.value.splice(1);
  if (diamonds.value.length === 0) {
    setTimeout(() => {
      showPrize();
      deleteDiamond();
    }, '1500');
  }
};
const deletePinkCrystal = () => {
  crystals.value = crystals.value.filter(
    (crystal) => crystal.id !== crystalID.value
  );
};
const showPrize = () => {
  prizeVisibility.value = true;
};
const deleteDiamond = () => {
  diamondVisibility.value = false;
};
diamondVisibility;
const crystals = ref([
  {
    id: 21,
    image: '/img/diamond2.png',
    top: '366px',
    left: '389px',
    position: 'absolute',
    cursor: 'pointer',
    conundrumImg: '/img/conundrum1.png',
    guessStr: 'ёж',
  },
  {
    id: 22,
    image: '/img/diamond2.png',
    top: '620px',
    left: '526px',
    position: 'absolute',
    cursor: 'pointer',
    conundrumImg: '/img/conundrum2.png',
    guessStr: 'мост',
  },
  {
    id: 23,
    image: '/img/diamond2.png',
    top: '530px',
    left: '1160px',
    position: 'absolute',
    cursor: 'pointer',
    conundrumImg: '/img/conundrum3.png',
    guessStr: 'зонт',
  },
  {
    id: 24,
    image: '/img/diamond2.png',
    top: '1066px',
    left: '106px',
    position: 'absolute',
    cursor: 'pointer',
    conundrumImg: '/img/conundrum4.png',
    guessStr: 'банан',
  },
  {
    id: 25,
    image: '/img/diamond2.png',
    top: '602px',
    left: '76px',
    position: 'absolute',
    cursor: 'pointer',
    conundrumImg: '/img/conundrum5.png',
    guessStr: 'лук',
  },
  {
    id: 26,
    image: '/img/diamond2.png',
    top: '1042px',
    left: '1216px',
    position: 'absolute',
    cursor: 'pointer',
    conundrumImg: '/img/conundrum6.png',
    guessStr: 'белка',
  },
  {
    id: 27,
    image: '/img/diamond2.png',
    top: '0px',
    left: '732px',
    position: 'absolute',
    cursor: 'pointer',
    conundrumImg: '/img/conundrum7.png',
    guessStr: 'заяц',
  },
]);
const showCrystal = () => {
  crystalVisibility.value = true;
};
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
.prize {
  display: flex;
  flex-direction: column;
  height: 700px;
}
.prize-image {
  background-image: url(/public/img/prize.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  z-index: 20;
  position: absolute;
  bottom: 220px;
  left: 50%;
  transform: translate(-50%);
  width: 490px;
  height: 470px;
}
.prize-text {
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translate(-50%);
  font-size: 3rem;
  color: #1f2ac2d5;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.4;
  padding: 20px;
}
.rules {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  margin: 200px auto 50px;
}
.form {
  z-index: 15;
}
label {
  padding-bottom: 20px;
  font-size: 38px;
  color: #1d1212;
}
input {
  padding: 20px;
  font-size: 38px;
  border-radius: 10px;
  color: #1d1212;
}
.btn__form {
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
  font-size: 38px;
  color: #1d1212;
}
.conundrum {
  width: 600px;
  height: 400px;
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
.crystal {
  border-radius: 50%;
}
.diamond-container {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  border: solid 4px #eef13c;
  display: flex;
  border-radius: 12px;
  padding: 8px;
  gap: 28px;
  width: 588px;
  height: 58px;
  margin: 1294px auto 0px;
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
.showPrize-enter-active,
.showPrize-leave-active {
  opacity: 1;
  transition: all 3s;
}
.showPrize-enter-from,
.showPrize-leave-to {
  opacity: 0;
}
</style>
