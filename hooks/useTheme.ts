/**
 * 当前主题色是否是暗色
 */
function isDark() {
  const color = useColorMode()
  return color.value === 'dark'
}

function onChangeTheme() {
  const color = useColorMode()
  color.preference = isDark() ? 'light' : 'dark'
}

/**
 * 检测用户的系统是否被开启了动画减弱功能
 * @link https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion
 */
function isReducedMotion() {
  return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
}

export function useTheme(event: MouseEvent) {
  const willDark = !isDark()
  // 浏览器新特性不支持 或者 开启了动画减弱
  if (!document.startViewTransition || isReducedMotion()) {
    onChangeTheme()
    return
  }

  const transition = document.startViewTransition(() => {
    onChangeTheme()
  })

  // 传入点击事件，从点击处开始扩散。否则，从右上角开始扩散
  const x = event?.clientX ?? window.innerWidth
  const y = event?.clientY ?? 0
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  void transition.ready.then(() => {
    const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: willDark ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: willDark
          ? '::view-transition-new(root)'
          : '::view-transition-old(root)',
      },
    )
  })
}
