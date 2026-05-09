<script setup lang="ts">
const navItems = [
  { href: '#method', label: 'Метод' },
  { href: '#credentials', label: 'Образование' },
  { href: '#services', label: 'Услуги' },
  { href: '#faq', label: 'Вопросы' },
]
</script>

<template>
  <header
    class="sticky top-0 z-40 bg-bone/90 backdrop-blur-sm border-b border-sand"
  >
    <nav
      class="max-w-wide mx-auto flex items-center justify-between gap-8 px-6 md:px-12 py-4"
      aria-label="Главное меню"
    >
      <a href="#hero" class="font-display italic text-xl text-ink whitespace-nowrap">
        Раля Говорит
      </a>

      <ul class="hidden md:flex items-center gap-7 font-sans text-sm text-fog">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="hover:text-ink transition-colors duration-200"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <UiAppButton variant="secondary" size="sm" href="#final-cta">
        Записаться
      </UiAppButton>
    </nav>
  </header>
</template>
