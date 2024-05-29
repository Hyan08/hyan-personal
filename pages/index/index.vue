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
    <div class="size-20 bg-theme5" />
    <!-- 标签 -->
    <div class="h-20 flex items-center gap-2">
      <span class="text-10">I am </span>
      <mySignature />
      <span class="text-10">.</span>
    </div>
    <!-- <button class="bg-gradient-from-bluegray p-8px" @click="excute">
      执行动画
    </button>
    <div class="box absolute left-0 top-0 h-100px w-100px bg-blue-300 dark:bg-pink">
      123
    </div> -->
  </div>
</template>
