<template>
  <div class="rules">
    <p class="title">Правила игры</p>
    <p class="description">
      чтобы перейти <br />
      на следующий<br />
      уровень<br />
      собери все ключи,<br />
      кликая по ним мышкой<br />
      <br />
      можно использовать<br />
      две подсказки
    </p>
  </div>
</template>
<script></script>
<style scoped>
p {
  padding: 0;
  margin: 0;
}
.rules {
  z-index: 5;
  width: 450px;
  height: 594px;
  background: linear-gradient(rgba(186, 124, 55, 0.5), rgba(181, 182, 33, 0.5));
  border-radius: 10%;
  border: 4px solid #413e15;
  text-align: center;
}
.title {
  z-index: 5;
  padding: 30px 0 20px;
  font-size: 3rem;
  color: #472f14;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}
.description {
  z-index: 5;
  font-size: 1.8rem;
  color: #140d06;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 3rem;
  padding: 20px;
}
</style>
