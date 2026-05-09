<script setup lang="ts">
interface Props {
  question: string
  isLast?: boolean
}

defineProps<Props>()
</script>

<template>
  <details
    class="group py-5 md:py-6"
    :class="!isLast ? 'border-b border-sand' : ''"
  >
    <summary
      class="flex items-center justify-between gap-6 cursor-pointer font-sans font-semibold text-[18px] md:text-[20px] text-ink list-none tracking-tight leading-snug"
    >
      <span>{{ question }}</span>
      <span
        class="flex-shrink-0 w-7 h-7 flex items-center justify-center text-clay text-xl font-display transition-transform duration-300 group-open:rotate-45"
        aria-hidden="true"
      >
        +
      </span>
    </summary>
    <div class="mt-3 max-w-[62ch] font-sans text-[15px] md:text-[16px] text-ink/80 leading-[1.65]">
      <slot />
    </div>
  </details>
</template>
