import svgIcon from '@/components/VSvg/index.vue'
import 'virtual:svg-icons-register'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('svg-icon', svgIcon)
})
