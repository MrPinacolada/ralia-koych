<script setup lang="ts">
const { isVisible } = useStickyCta(600)
</script>

<template>
  <div
    class="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-bone/95 backdrop-blur-sm border-t border-sand shadow-lift transition-transform duration-300 ease-out-soft"
    :class="isVisible ? 'translate-y-0' : 'translate-y-full'"
    :aria-hidden="!isVisible"
  >
    <UiAppButton variant="primary" size="md" full-width href="#final-cta">
      Записаться на диагностику
    </UiAppButton>
  </div>
</template>
