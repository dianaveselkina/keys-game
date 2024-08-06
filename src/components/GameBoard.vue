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
          v-if="keyVisibility"
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
      <div :class="message ? 'in' : 'out'" class="fade">
        <p class="level">
          Вы переходите<br />
          на сдедующий уровень!
        </p>
      </div>
      <transition name="fade">
        <RulesDiv v-if="!show" class="rules" />
      </transition>
      <transition name="disappear">
        <MyButton v-if="!show" @click="(show = !show), showKey()" class="start"
          >Начать игру</MyButton
        >
      </transition>

      <div class="clue__block">
        <p class="clue__text">Подсказки</p>
        <div class="clue__key">
          <img
            @click="showClueImg(i)"
            :src="'/img/key-icon1.png'"
            :style="{
              width: '60px',
              height: '60px',
            }"
          />
        </div>
      </div>

      <div class="clue__image" v-if="showClue">
        <img @click="deleteImg(), count++" class="clue__img" :src="clueImage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import RulesDiv from './RulesDiv.vue';
import MyButton from './MyButton.vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const message = ref(false);
const keyVisibility = ref(false);
const addMessage = () => {
  message.value = !message.value;
};
const show = ref(false);

const notify = () => {
  toast('Вы использовали все свои подсказки!!!', {
    hideProgressBar: true,
    toastStyle: {
      left: '50%',
      top: '5em',
      transform: 'translateX(-50%)',
      fontSize: '56px',
      padding: '16px',
      width: '500px',
      height: '500px',
      background:
        'linear-gradient(rgba(186, 124, 55, 0.5), rgba(181, 182, 33, 0.5))',
      borderRadius: '5%',
      border: '4px solid #413e15',
      textAlign: 'center',
      color: '#472f14',
    },
    position: toast.POSITION.TOP_CENTER,
    transition: toast.TRANSITIONS.ZOOM,
    autoClose: 2000,
  });
};
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
    clue: '/img/clue1.png',
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
    clue: '/img/clue2.png',
  },
  {
    id: 3,
    image: '/img/clef3.png',
    width: '30px',
    height: '60px',
    top: '908px',
    left: '342px',
    rotate: '146deg',
    position: 'absolute',
    cursor: 'pointer',
    clue: '/img/clue3.png',
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
    clue: '/img/clue4.png',
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
    clue: '/img/clue5.png',
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
    clue: '/img/clue6.png',
  },
  {
    id: 7,
    image: '/img/clef7.png',
    width: '30px',
    height: '60px',
    top: '370px',
    left: '1312px',
    position: 'absolute',
    cursor: 'pointer',
    clue: '/img/clue7.png',
  },
]);
let clueImage = ref('');
const showKey = () => {
  keyVisibility.value = true;
};
const showClueImg = () => {
  clueImage.value = items.value[0].clue;
  if (count.value > 1) {
    notify();
    clueImage.value = false;
  }
};
const showClue = () => {
  showClue.value = false;
};
const deleteImg = () => {
  clueImage.value = false;
};
const router = useRouter();

const clefs = ref([]);
const count = ref(0);
const add = (item) => {
  clefs.value.push(item);
  if (clefs.value.length === 7) {
    setTimeout(() => {
      addMessage();
    }, '1500');
    setTimeout(() => {
      router.push({ path: '/game' });
    }, '3000');
  }
};
</script>

<style scoped>
:root {
  --toastify-color-progress-light: linear-gradient(
    rgba(186, 124, 55, 0.5),
    rgba(181, 182, 33, 0.5)
  );
}
p {
  padding: 0;
  margin: 0;
}
.clue__text {
  font-size: 48px;
  padding: 22px 16px;
  margin: 0;
  font-weight: 700;
  color: #472f14;
}
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
.fancy-progress-bar222 {
  color: #472f14;
}
.rules {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  margin: 24px auto 50px;
}
.fade {
  width: 800px;
  height: 190px;
  z-index: 15;
  background: linear-gradient(rgba(186, 124, 55, 0.5), rgba(181, 182, 33, 0.5));
  border-radius: 3%;
  border: 4px solid #413e15;
  text-align: center;
  position: relative;
  opacity: 0%;
  display: block;
  flex-direction: column;
  font-size: 72px;
  color: #e6e4e1;
  margin: 10px auto 50px;
}
.level {
  text-align: center;
}
@keyframes fadeIn {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
.in {
  animation: fadeIn 0.5s ease forwards;
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
.active {
  display: none;
}
.clue__image {
  position: absolute;
  bottom: 740px;
  left: 484px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.clue__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 160px;
  position: absolute;
  bottom: 100px;
  right: 60px;
}
.clue__key {
  background: linear-gradient(rgba(186, 124, 55, 0.5), rgba(181, 182, 33, 0.5));
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 2px;
  border-radius: 20px;
  border: 6px solid #413e15;
  width: 120px;
  height: 80px;
  align-items: center;
  cursor: pointer;
}
.clue__img {
  width: 300px;
  height: 430px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 80%;
  border-radius: 26px;
  cursor: pointer;
}
.key-container1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 1400px;
  height: 1400px;
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
.fadeClue-enter-active,
.fadeClue-leave-active {
  opacity: 1;
  transition: all 2s;
}
.fadeClue-enter-from,
.fadeClue-leave-to {
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
