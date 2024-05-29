import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [
    // 自定义滚动条隐藏规则
    // [/^scrollbar-none$/, () => {
    //   return {
    //     '::-webkit-scrollbar': `{ display: 'none' }`,
    //     'scrollbar-width': 'none',
    //   }
    // }],
  ],
  shortcuts: [
    ['bg-theme', 'bg-m-light dark:bg-#1c1c1e'],
    ['bg-theme1', 'bg-#E5E5EA dark:bg-#2C2C2E'],
    ['bg-theme2', 'bg-#D1D1D6 dark:bg-#3A3A3C'],
    ['bg-theme3', 'bg-#C7C7CC dark:bg-#48484A'],
    ['bg-theme4', 'bg-#AEAEB2 dark:bg-#636366'],
    ['bg-theme5', 'bg-#8E8E93 dark:bg-#6C6C70'],
    ['boder-theme', 'b-1 b-solid b-op-80 dark:b-#48484A b-#E5E5EA'],
    ['color-theme', 'color-#000 dark:color-#fff'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      mLight: '#f2f2f7',
    },
    breakpoints: {
      xxs: '0px',
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1600px',
    },
  },
})
