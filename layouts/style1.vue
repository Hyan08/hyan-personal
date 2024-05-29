<script setup lang="ts">
// 滚动条滚动
const isShowNav = ref(true)
let oldScroll: number = 0
let scrollTimer: number = 0
const SCORLL_TIMER = 200
const SCORLL_DIS = 0

function onScroll(e: Event) {
  const { scrollTop } = e.target as HTMLElement
  const timer = new Date().getTime()
  if (timer - scrollTimer > SCORLL_TIMER) {
    scrollTimer = timer
    const distance = scrollTop - oldScroll
    oldScroll = scrollTop
    // 大于0向下滚动
    if (distance - SCORLL_DIS > 0)
      isShowNav.value = false

    else if (distance - SCORLL_DIS < 0)
      isShowNav.value = true
  }
  if (scrollTop <= 40)
    isShowNav.value = true
}
</script>

<template>
  <div id="content" class="h-100vh flex flex-col overflow-auto" @scroll="onScroll($event)">
    <!-- <VNav :visable="isShowNav" /> -->
    <main class="bg-theme flex-1 px-10px pt-20px">
      <slot />
    </main>
  </div>
</template>
