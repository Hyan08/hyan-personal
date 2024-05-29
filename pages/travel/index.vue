<script setup lang='ts'>

</script>

<template>
  <div class="box" />
</template>

<style scoped>
.box {
  width: 150px;
  height: 150px;
  background-color: #172033;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}
.box::before {
  content: '';
  position: absolute;
  height: 300px;
  width: 300px;
  background: radial-gradient(#01d17d, transparent, transparent);
  animation: animate 1.5s linear infinite;
}
.box::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 10px;
  background-color: #172033;
}
.box:hover::before {
  animation: none;
  background: transparent;
}
.box:hover {
  box-shadow:
    0 0 4px #01d17d,
    0 0 4px #01d17d,
    0 0 80px #01d17d;
}
@keyframes animate {
  0% {
    transform: translate(-150px, -150px);
  }
  25% {
    transform: translate(0, -150px);
  }
  50% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(-150px, 0);
  }
  100% {
    transform: translate(-150px, -150px);
  }
}
</style>
