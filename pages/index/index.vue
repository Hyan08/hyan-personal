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
    <div
      class="mb-5 size-20 overflow-hidden rounded-50% ring-2 ring-mLight3 transition-300 hover:ring-size-5 dark:ring-mDark3"
    >
      <img class="size-20" src="http://images.lihuihuang.cn/hyan.png">
    </div>
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
      <span class="text-4">
        As a Gen Z-er, I'm all about freedom and sunshine, both in life and in the digital realm where I craft web wonders using
        <div class="i-bxl-javascript inline-block bg-#f3e050" />,
        <div class="i-iconoir-vue-js inline-block bg-#64b687" />,
        <div class="i-bxl-typescript inline-block bg-#4476c0" />,
        My newly launched website is a testament to breaking free from procrastination,
        serving as my personal corner on the internet.
        It's where I share my tech experiments, creative projects,
        and musings on technology and design, all underlined by a sunny, optimistic vibe. Come, explore my world of code and creativity!
      </span>
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
