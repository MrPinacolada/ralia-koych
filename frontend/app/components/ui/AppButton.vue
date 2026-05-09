<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  external: false,
  type: 'button',
  disabled: false,
  fullWidth: false,
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-moss text-paper hover:bg-moss/90 disabled:bg-fog disabled:cursor-not-allowed'
    case 'secondary':
      return 'border border-ink text-ink bg-transparent hover:bg-ink hover:text-paper disabled:border-fog disabled:text-fog disabled:cursor-not-allowed'
    case 'ghost':
      return 'text-ink underline decoration-clay underline-offset-4 hover:decoration-2 disabled:text-fog disabled:cursor-not-allowed'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 min-h-[36px] text-sm'
    case 'md':
      return 'px-6 py-3 min-h-[48px] text-base'
    case 'lg':
      return 'px-7 py-4 min-h-[56px] text-base md:text-lg'
  }
})

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-sans font-medium rounded-sm transition-colors duration-200 ease-out-soft focus-visible:outline-none focus-visible:shadow-focus'

const targetAttrs = computed(() =>
  props.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
)
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :disabled="!href ? disabled : undefined"
    :class="[
      baseClasses,
      variantClasses,
      sizeClasses,
      fullWidth ? 'w-full' : '',
    ]"
    v-bind="targetAttrs"
  >
    <slot />
  </component>
</template>
