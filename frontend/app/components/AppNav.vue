<script setup lang="ts">
import { useWindowScroll, useEventListener } from '@vueuse/core'

const { y } = useWindowScroll()

const progress = computed(() => {
  if (!import.meta.client) return 0
  const h = document.documentElement
  const total = h.scrollHeight - h.clientHeight
  if (total <= 0) return 0
  return Math.min(100, Math.max(0, (y.value / total) * 100))
})

const navItems = [
  { href: '#whom', label: 'Для кого' },
  { href: '#method', label: 'Метод' },
  { href: '#services', label: 'Форматы' },
  { href: '#case', label: 'Отзывы' },
  { href: '#faq', label: 'Вопросы' },
]

const open = ref(false)
const close = () => (open.value = false)

// Escape closes the mobile menu
useEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
})
</script>

<template>
  <header class="nav-bar">
    <nav class="nav-inner" aria-label="Главное меню" style="padding-block: 12px;">
      <a class="nav-logo" href="#hero" @click="close">Ралия Хабирова</a>

      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href">{{ item.label }}</a>
        </li>
      </ul>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Закрыть меню' : 'Открыть меню'"
        @click="open = !open"
      >
        <span class="nav-toggle-bar" :class="{ open }"></span>
      </button>
    </nav>

    <div class="scroll-progress" :style="{ transform: `scaleX(${progress / 100})` }"></div>

    <div id="mobile-menu" class="nav-mobile" :class="{ open }">
      <ul>
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href" @click="close">{{ item.label }}</a>
        </li>
      </ul>
      <a href="#final-cta" class="btn btn-primary" @click="close">Разобрать свою ситуацию</a>
    </div>
  </header>
</template>
