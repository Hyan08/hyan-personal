<script setup lang="ts">
// import gsap from 'gsap'
import mySignature from './components/mySignature.vue'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// function excute() {
// }
// onMounted(() => {
//   gsap.registerPlugin(ScrollTrigger)
//   const t1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.box',
//       scrub: true,
//       // markers: true,
//       start: '0% 0%',
//       end: '1000px 100%',
//       scroller: '#content',
//     },
//   })
//   t1.fromTo('.box', { y: 0 }, { y: 500 })
// })
</script>

<template>
  <div class="relative">
    <div class="mb-5 size-20 rounded-10 bg-theme5" />
    <!-- 标签 -->
    <div class="flex items-center text-8">
      <span class="hello inline-block h-12 w-12 origin-bottom-right">👋</span>
      <h1 class="font-700">
        Hello!
      </h1>
    </div>
    <div class="flex items-center">
      <span class="text-4">I am </span>
      <mySignature class="h-12" />
      <span class="text-4">!</span>
    </div>
    <!-- 简介 -->
    <div class="">
      <span class="text-4">In the flood of darkness, hope is the light. It brings comfort, faith, and confidence. It gives us guidance when we are lost, and gives support when we are afraid. And the moment we give up hope, we give up our lives. The world we live in is disintegrating into a place of malice and hatred, where we need hope and find it harder. In this world of fear, hope to find better, but easier said than done, the more meaningful life of faith will make life meaningful.</span>
    </div>
  </div>
</template>

<style scoped>
.hello {
  animation: hello 2.5s linear infinite;
}

@keyframes hello {
  0% {
    transform: rotate(0deg);
  }

  15% {
    transform: rotate(14deg);
  }

  30% {
    transform: rotate(-8deg);
  }

  40% {
    transform: rotate(14deg);
  }

  50% {
    transform: rotate(-4deg);
  }

  60% {
    transform: rotate(10deg);
  }

  70% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
