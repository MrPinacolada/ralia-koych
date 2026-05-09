<script setup lang="ts">
interface Props {
  width?: 'narrow' | 'text' | 'wide'
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 'text',
  as: 'div',
})

const widthClass = computed(() => {
  switch (props.width) {
    case 'narrow':
      return 'max-w-narrow'
    case 'text':
      return 'max-w-text'
    case 'wide':
      return 'max-w-wide'
  }
})
</script>

<template>
  <component :is="as" :class="[widthClass, 'mx-auto']">
    <slot />
  </component>
</template>
