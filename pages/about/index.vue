<script setup lang='ts'>
import gsap from 'gsap'

// logo移动动画
let x: number = 0
let y: number = 0
onMounted(() => {
  const logo: Element | null = document.getElementById('logo')
  const logoTarget: Element | null = document.getElementById('logo-target')
  // 如果元素不存在
  if (!logo || !logoTarget)
    return
  const logo1Rect = logo.getBoundingClientRect()
  const logo2Rect = logoTarget.getBoundingClientRect()
  x = -(logo2Rect.x - logo1Rect.x)
  y = -(logo2Rect.y - logo1Rect.y)
  // 初始化样式
  gsap.set('#logo', {
    opacity: 0,
    pointerEvents: 'none',
    cursor: 'default',
  })
  gsap.set('#logo-target', {
    zIndex: 100,
    opacity: 1,
  })
  // 动画
  gsap.from('#logo-target', {
    x,
    y,
    onComplete() {
      gsap.set('#logo-target', {
        zIndex: 'inherit',
      })
    },
  })
})
onUnmounted(() => {
  // 重制样式
  gsap.set('#logo', {
    opacity: 1,
    pointerEvents: 'inherit',
    cursor: 'pointer',
  })
  gsap.from('#logo', {
    x: 0 - x,
    y: 0 - y,
  })
})
</script>

<template>
  <div class="h-1000px">
    我是about页面
    <div id="logo-container2" class="inline-block flex justify-center">
      <VLogo id="logo-target" class="opacity0" />
    </div>
  </div>
</template>

<style lang='scss' scoped></style>
