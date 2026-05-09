<script setup lang="ts">
const { faqItems } = useLandingContent()
</script>

<template>
  <UiSectionWrapper anchor="faq" bg="sand" spacing="md">
    <UiAppContainer width="text">
      <p class="eyebrow mb-3">Частые вопросы</p>
      <h2 class="pull text-[34px] md:text-[48px] text-ink mb-8">
        Что обычно спрашивают
      </h2>

      <div>
        <UiAccordionItem
          v-for="(item, i) in faqItems"
          :key="i"
          :question="item.question"
          :is-last="i === faqItems.length - 1"
        >
          <p>{{ item.answer }}</p>
        </UiAccordionItem>
      </div>
    </UiAppContainer>
  </UiSectionWrapper>
</template>
