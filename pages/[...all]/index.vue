<script setup lang="ts">
const fast = ref<boolean>(false)
const streakSpeed = computed(() => (fast.value ? '0.5s' : '2s'))

function onStartFast() {
  fast.value = true
}
function onCancelFast() {
  fast.value = false
}
</script>

<template>
  <ClientOnly>
    <main
      relative
      h-full
      w-full
      flex
      select-none
      items-center justify-center overflow-hidden
      :style="{ '--streak-speed': streakSpeed }"
      @touchstart="onStartFast"
      @mousedown="onStartFast"
      @touchend="onCancelFast"
      @mouseup="onCancelFast"
    >
      <div
        class="rocket move"
        :class="{ shake: fast }"
        i-iconoir:rocket size-10
      />
      <span
        v-for="n in 5"
        :key="n"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1}s`,
          animationDuration: streakSpeed,
        }"
        class="streak absolute top-[-20%] h-1/5 w-0.5 rounded from-transparent to-black/60 bg-gradient-to-b dark:to-white/60"
      />
    </main>
  </ClientOnly>
</template>

<style scoped>
.rocket.move {
  animation: move 1s linear infinite;
}

.rocket.shake {
  animation: shake 0.5s linear infinite;
}

.streak {
  animation: streaks linear infinite;
  animation-duration: var(--streak-speed);
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes streaks {
  to {
    top: 100%;
  }
}

@keyframes shake {
  2% {
    transform: translate(2.5px, 1.5px) rotate(-0.5deg);
  }

  4% {
    transform: translate(2.5px, 0.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(2.5px, 0.5px) rotate(0.5deg);
  }
  8% {
    transform: translate(2.5px, 2.5px) rotate(1.5deg);
  }
  10% {
    transform: translate(1.5px, -1.5px) rotate(-0.5deg);
  }
  12% {
    transform: translate(-1.5px, 0.5px) rotate(0.5deg);
  }
  14% {
    transform: translate(0.5px, 1.5px) rotate(-0.5deg);
  }
  16% {
    transform: translate(-1.5px, 0.5px) rotate(0.5deg);
  }
  18% {
    transform: translate(1.5px, -1.5px) rotate(0.5deg);
  }
  20% {
    transform: translate(2.5px, 1.5px) rotate(-0.5deg);
  }
  22% {
    transform: translate(0.5px, -1.5px) rotate(1.5deg);
  }
  24% {
    transform: translate(0.5px, -0.5px) rotate(-0.5deg);
  }
  26% {
    transform: translate(0.5px, -1.5px) rotate(1.5deg);
  }
  28% {
    transform: translate(0.5px, 0.5px) rotate(0.5deg);
  }
  30% {
    transform: translate(2.5px, 0.5px) rotate(0.5deg);
  }
  32% {
    transform: translate(-0.5px, 0.5px) rotate(0.5deg);
  }
  34% {
    transform: translate(2.5px, 0.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0.5px, 2.5px) rotate(0.5deg);
  }
  38% {
    transform: translate(-0.5px, 0.5px) rotate(-0.5deg);
  }
  40% {
    transform: translate(-1.5px, 1.5px) rotate(-0.5deg);
  }
  42% {
    transform: translate(1.5px, 2.5px) rotate(-0.5deg);
  }
  44% {
    transform: translate(-0.5px, 0.5px) rotate(-0.5deg);
  }
  46% {
    transform: translate(2.5px, 1.5px) rotate(-0.5deg);
  }
  48% {
    transform: translate(-1.5px, 2.5px) rotate(1.5deg);
  }
  50% {
    transform: translate(-0.5px, -1.5px) rotate(-0.5deg);
  }
  52% {
    transform: translate(-1.5px, 1.5px) rotate(1.5deg);
  }
  54% {
    transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
  }
  56% {
    transform: translate(2.5px, 1.5px) rotate(0.5deg);
  }
  58% {
    transform: translate(-1.5px, -1.5px) rotate(0.5deg);
  }
  60% {
    transform: translate(1.5px, 0.5px) rotate(0.5deg);
  }
  62% {
    transform: translate(-0.5px, -1.5px) rotate(1.5deg);
  }
  64% {
    transform: translate(0.5px, 1.5px) rotate(-0.5deg);
  }
  66% {
    transform: translate(-0.5px, 2.5px) rotate(0.5deg);
  }
  68% {
    transform: translate(2.5px, 2.5px) rotate(1.5deg);
  }
  70% {
    transform: translate(1.5px, -1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0.5px, 2.5px) rotate(-0.5deg);
  }
  74% {
    transform: translate(0.5px, -1.5px) rotate(1.5deg);
  }
  76% {
    transform: translate(-0.5px, 0.5px) rotate(0.5deg);
  }
  78% {
    transform: translate(1.5px, -0.5px) rotate(0.5deg);
  }
  80% {
    transform: translate(-0.5px, 2.5px) rotate(-0.5deg);
  }
  82% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg);
  }
  84% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
  }
  86% {
    transform: translate(1.5px, -0.5px) rotate(0.5deg);
  }
  88% {
    transform: translate(-1.5px, 0.5px) rotate(0.5deg);
  }
  90% {
    transform: translate(0.5px, 0.5px) rotate(0.5deg);
  }
  92% {
    transform: translate(0.5px, -1.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0.5px, 0.5px) rotate(-0.5deg);
  }
  96% {
    transform: translate(2.5px, 2.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(1.5px, 2.5px) rotate(0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0);
  }
}
</style>
