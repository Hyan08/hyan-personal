<script setup lang='ts'>

</script>

<template>
  <div
    class="box relative inline-block w-auto overflow-hidden"
  >
    <VSvg class="animation w-full" name="signature" text="40" />
  </div>
</template>

<style scoped>
:deep(.svg-icon) {
  height: 100%;
}
@media (prefers-reduced-motion) {
  animation {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}

@keyframes grow {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 800px;
    opacity: 0;
    color: #00aeef;
  }

  10% {
    opacity: 1;
  }

  40% {
    stroke-dasharray: 800px 0;
    color: #ed1c24;
  }

  /* Moving back */
  85% {
    stroke-dasharray: 800px 0;
    color: #8cd790;
  }

  95%,
  to {
    stroke-dasharray: 0 800px;
    color: #f69f37;
  }
}

.animation {
  stroke-dashoffset: 0;
  stroke-dasharray: 800px 0;
  animation: grow 10s ease forwards infinite;
  transform-origin: left;
  color: #303030;
  animation-delay: 0s;
}
</style>
