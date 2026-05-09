<script setup lang="ts">
const { isVisible } = useStickyCta(600)
</script>

<template>
  <aside
    class="sticky-cta"
    :class="{ visible: isVisible }"
    :aria-hidden="!isVisible"
  >
    <a href="#final-cta" class="btn btn-primary">Записаться на диагностику</a>
  </aside>
</template>
