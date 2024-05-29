<script setup lang='ts'>
import { type MenuItem, menuItems } from './config'

const props = defineProps<{
  visable: boolean
}>()

// 路由跳转
const router = useRouter()
function handleRouterPush(route: MenuItem) {
  router.push({ name: route.routeName })
}
</script>

<template>
  <!-- <transition name="run"> -->
  <nav
    class="sticky top-0 z-100 box-border h-60px flex flex-justify-between flex-items-center bg-#fff px-20px transition-all dark:bg-#363638 dark:color-#fff"
    :class="[props.visable ? '' : '-translate-y-60px opacity-0']"
  >
    <button class="lg:hidden !outline-none">
      <div class="i-carbon-list" />
    </button>
    <div id="logo-container">
      <VLogo id="logo" />
    </div>
    <div class="hidden gap-20px lg:flex">
      <button
        v-for="item in menuItems" :key="item.name" class="p-10px hover-rounded-5px hover-bg-gray-100"
        @click="handleRouterPush(item)"
      >
        {{ item.name }}
      </button>
    </div>
    <div class="lg:hidden" />
    <DarkToggle class="hidden lg:inline" />
  </nav>
  <!-- </transition> -->
  <!-- <div v-show="!props.visable" class="h-60px bg-transparent transition-all" /> -->
  <!-- <div class="sticky top-60px hidden bg-blueGray">
    折叠框
  </div> -->
</template>
