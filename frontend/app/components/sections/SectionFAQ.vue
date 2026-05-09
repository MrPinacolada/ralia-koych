<script setup lang="ts">
const { faqItems } = useLandingContent()
</script>

<template>
  <section id="faq" class="bg-sand">
    <div class="container">
      <header class="section-head reveal">
        <div class="section-num">VIII</div>
        <div>
          <p class="section-eyebrow">Частые вопросы</p>
          <h2 class="section-title">Что обычно спрашивают</h2>
        </div>
      </header>

      <div class="faq reveal" style="max-width: 80ch;">
        <details v-for="(item, i) in faqItems" :key="i">
          <summary>
            <span>{{ item.question }}</span>
            <span class="toggle" aria-hidden="true">+</span>
          </summary>
          <p class="answer">{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
