<script setup lang='ts'>
import { type MenuItem, menus } from './config'

const router = useRouter()
const route = useRoute()
// 菜单栏变化
const navActive = ref(route.path)
function onChangeNav(item: MenuItem) {
  if (item.cb)
    return item.cb()

  if (item.route) {
    navActive.value = item.route
    router.push(item.route)
  }
}
const navOrder = computed(() => {
  return menus.findIndex((item: MenuItem) => item.route === navActive.value)
})
</script>

<template>
  <nav
    class="fixed left-50% top-4 z-99 max-w-2xl translate-x-[-50%]"
  >
    <ul
      class="relative h-12 flex items-center gap-2 border-rd-8 px-5 shadow-gray-800/5 shadow-lg boder-theme color-theme"
      bg="theme2 light:white"
    >
      <!-- 菜单区域 -->
      <li
        v-for="(item, index) in menus" :key="index"
        class="group relative size-8 flex items-center justify-center border-rd-8"
        hover="cursor-pointer"
        :class="{ 'bg-theme': item.route === navActive }"
        @click="onChangeNav(item)"
      >
        <div
          :class="[item.route === navActive ? 'bg-#01d17d' : 'dark:bg-white ', item.icon]"
          group-hover="bg-#01d17d"
        />
        <!-- 描述 -->
        <div
          v-if="item.title" class="absolute top-12 hidden w-a ws-nowrap b-rounded-1 px-1 py-.8 text-xs shadow boder-theme bg-theme2 light:bg-white"
          group-hover="block"
        >
          {{ item.title }}
        </div>
      </li>
      <span
        v-if="navOrder !== -1"
        transition="all duration-400"
        class="absolute bottom-[-1px] h-1px w-9 from-transparent via-green-500 to-transparent bg-gradient-to-r"
        :style="{ left: `${(navOrder * 10 + 5) / 4}rem` }"
      />
    </ul>
  </nav>
</template>
