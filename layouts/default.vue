<script setup lang="ts">
</script>

<template>
  <div class="h-100vh w-100vw flex flex-col items-center overflow-auto py-25 bg-theme dark:color-#fff">
    <MNav />
    <div class="max-w-2xl w-full flex-1 px-4">
      <slot />
    </div>
  </div>
</template>
