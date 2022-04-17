export function mix(color1: string, color2: string, weight: number) {
  weight = Math.max(Math.min(Number(weight), 1), 0)
  const r1 = parseInt(color1.substring(1, 3), 16)
  const g1 = parseInt(color1.substring(3, 5), 16)
  const b1 = parseInt(color1.substring(5, 7), 16)
  const r2 = parseInt(color2.substring(1, 3), 16)
  const g2 = parseInt(color2.substring(3, 5), 16)
  const b2 = parseInt(color2.substring(5, 7), 16)
  let r: number | string = Math.round(r1 * (1 - weight) + r2 * weight)
  let g: number | string = Math.round(g1 * (1 - weight) + g2 * weight)
  let b: number | string = Math.round(b1 * (1 - weight) + b2 * weight)
  r = ('0' + (r || 0).toString(16)).slice(-2)
  g = ('0' + (g || 0).toString(16)).slice(-2)
  b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}

export function debounce(fn: () => void, delay = 150) {
  let timer = 0
  return function () {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, arguments) // 透传 this 和参数
      timer = 0
    }, delay)
  }
}

export function getScrollTop() {
  let scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0
  if (document.body) bodyScrollTop = document.body.scrollTop
  if (document.documentElement)
    documentScrollTop = document.documentElement.scrollTop
  scrollTop =
    bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop
  return scrollTop
}

export function GenNonDuplicateID(randomLength = 18) {
  return Number(
    Math.random().toString().substring(3, randomLength) + Date.now()
  ).toString(36)
}