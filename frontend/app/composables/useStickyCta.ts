import { useWindowScroll } from '@vueuse/core'

/**
 * Returns reactive boolean - true when user has scrolled past the threshold.
 * Used by sticky mobile CTA bar to appear after hero scroll.
 */
export function useStickyCta(threshold = 600) {
  const { y } = useWindowScroll()
  const isVisible = computed(() => y.value > threshold)
  return { isVisible }
}
