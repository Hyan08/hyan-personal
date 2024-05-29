<script setup lang="ts">
import { appName } from '@/constants'

useHead({
  title: appName,
  bodyAttrs: {
    class: 'bg-theme',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
