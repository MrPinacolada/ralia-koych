<script setup lang="ts">
interface Props {
  anchor?: string
  bg?: 'bone' | 'paper' | 'sand' | 'cream' | 'ink'
  spacing?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  bg: 'bone',
  spacing: 'md',
})

const bgClass = computed(() => {
  switch (props.bg) {
    case 'bone':
      return 'bg-bone'
    case 'paper':
      return 'bg-paper'
    case 'sand':
      return 'bg-sand/40'
    case 'cream':
      return 'bg-cream'
    case 'ink':
      return 'bg-ink text-bone'
  }
})

const spacingClass = computed(() => {
  switch (props.spacing) {
    case 'sm':
      return 'py-12 md:py-section-xs'
    case 'md':
      return 'py-section-xs md:py-section-sm'
    case 'lg':
      return 'py-section-sm md:py-section'
  }
})
</script>

<template>
  <section
    :id="anchor"
    :class="[
      bgClass,
      spacingClass,
      'px-6 md:px-12 lg:px-16 scroll-mt-24',
    ]"
  >
    <slot />
  </section>
</template>
