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
            <span :id="item.id">{{ item.question }}</span>
            <span class="toggle" aria-hidden="true"></span>
          </summary>
          <!-- eslint-disable-next-line vue/no-v-html — answers are trusted static content -->
          <p
            v-for="(para, p) in item.answer"
            :key="p"
            class="answer"
            :style="p > 0 ? { marginTop: '12px' } : undefined"
            v-html="para"
          ></p>
        </details>
      </div>
    </div>
  </section>
</template>
