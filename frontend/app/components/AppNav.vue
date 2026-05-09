<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

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
  { href: '#services', label: 'Услуги' },
  { href: '#case', label: 'Кейс' },
  { href: '#faq', label: 'Вопросы' },
]
</script>

<template>
  <header class="nav-bar">
    <nav class="nav-inner" aria-label="Главное меню" style="padding-block: 12px;">
      <a class="nav-logo" href="#hero">Ралия Хабирова</a>
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
    <div class="scroll-progress" :style="{ width: progress + '%' }"></div>
  </header>
</template>
