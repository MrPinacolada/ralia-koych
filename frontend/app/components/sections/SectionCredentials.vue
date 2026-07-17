<script setup lang="ts">
const { credentials } = useLandingContent()

// Served from frontend/public/. Bound (not static) so the build doesn't try to
// bundle it — it resolves at runtime, and falls back to a placeholder if missing.
const certSrc = '/certificate-icf.jpeg'
const certOk = ref(true)
const certImg = ref<HTMLImageElement | null>(null)

onMounted(() => {
  // Catch a 404 that fired before Vue attached @error (SSR hydration race)
  const el = certImg.value
  if (el && el.complete && el.naturalWidth === 0) certOk.value = false
})
</script>

<template>
  <section id="credentials" class="bg-sand">
    <div class="container">
      <div class="creds-grid">
        <div class="reveal">
          <header class="section-head" style="margin-bottom: 24px;">
            <div class="section-num">IV</div>
            <div>
              <p class="section-eyebrow">Образование</p>
              <h2 class="section-title nowrap-lines" style="font-size: 30px; max-width: none;">Я работаю на основе постоянной практики<br>как сертифицированный эксперт и коуч ICF.</h2>
            </div>
          </header>

          <p class="section-eyebrow" style="color: var(--clay); margin: 0 0 16px;">Обучение</p>
          <ul class="creds-list" style="margin-top: 0;">
            <li v-for="(c, i) in credentials" :key="i">
              <span class="dash">—</span>
              <span v-if="c.secondary"><strong>{{ c.primary }}</strong> — {{ c.secondary }}</span>
              <span v-else>{{ c.primary }}</span>
            </li>
          </ul>

          <p class="creds-quote">
            Как помогающий практик я постоянно обучаюсь и прохожу личную терапию с 2020 года.
          </p>
        </div>
        <div class="reveal">
          <figure class="creds-cert" :class="{ 'is-empty': !certOk }">
            <img
              v-show="certOk"
              ref="certImg"
              :src="certSrc"
              alt="Сертификат ICF — BE a COACH, Level 1, 100 часов, Human Capital. Выдан Ралии Хабировой 03.07.2024"
              width="900"
              height="636"
              loading="lazy"
              decoding="async"
              @error="certOk = false"
            >
            <span v-if="!certOk" class="placeholder-label">Сертификат ICF · Level 1 · 2024</span>
            <figcaption v-if="certOk"><span>Certificate of Completion · ICF Level 1</span><span>2024</span></figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
