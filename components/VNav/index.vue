<script setup lang='ts'>
import { type MenuItem, menus } from './config'

const router = useRouter()
const route = useRoute()

// 路由变化 及时处理
const navActive = ref<string>('')
watch(() => route.path, () => {
  navActive.value = route.path
}, {
  immediate: true,
})
// 菜单栏变化
function onChangeNav($event: MouseEvent, item: MenuItem) {
  if (item.cb)
    return item.cb($event)

  if (item.route)
    router.push(item.route)
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
      bg="theme1 light:white"
    >
      <!-- 菜单区域 -->
      <li
        v-for="(item, index) in menus" :key="index"
        class="group relative size-8 flex items-center justify-center border-rd-8"
        hover="cursor-pointer"
        :class="{ 'bg-theme': item.route === navActive }"
        @click="onChangeNav($event, item)"
      >
        <div
          :class="[item.route === navActive ? 'bg-mTheme' : 'dark:bg-white ', item.icon]"
          group-hover="bg-mTheme"
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
        class="absolute bottom-[-1px] h-1px w-8 from-transparent via-green-500 to-transparent bg-gradient-to-r"
        :style="{ left: `${(navOrder * 10 + 5) / 4}rem` }"
      />
    </ul>
  </nav>
</template>

<style>
/* html,
body {
  height: 100%;
} */
/* .toggle {
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 25px;
  font-size: 150%;
} */

/* .toggle:before {
  content: '☀️';
}

.toggle.active:before {
  content: '🌒';
}
.toggle.animate {
  animation: animate 0.3s cubic-bezier(0.4, 0, 0.2, 1);
} */

/* @keyframes animate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
} */

/* .text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
} */

/**
 Animated Theme Toggle
 */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

.dark::view-transition-old(root) {
  z-index: 1;
}
.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}
::view-transition-new(root) {
  z-index: 1;
}
</style>
