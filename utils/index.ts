export function debounce(func: () => void, wait: number) {
  let timeout: number
  return () => {
    clearTimeout(timeout)
    timeout = window.setTimeout(func, wait)
  }
}

// 截流
export function throttle(func: () => void, wait: number) {
  let lastCallTime: number | null = null
  return () => {
    const now = Date.now()
    if (!lastCallTime || now - lastCallTime >= wait) {
      lastCallTime = now
      func()
    }
  }
}
