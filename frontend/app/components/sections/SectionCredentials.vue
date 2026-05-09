<script setup lang="ts">
const { credentials } = useLandingContent()
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
              <h2 class="section-title">Я работаю на основе формального образования и постоянной практики.</h2>
              <p class="section-lede">Это не тренинг выходного дня. И не «я наработала свой метод».</p>
            </div>
          </header>

          <ul class="creds-list">
            <li v-for="(c, i) in credentials" :key="i">
              <span class="dash">-</span>
              <span v-if="c.secondary"><strong>{{ c.primary }}</strong> - {{ c.secondary }}</span>
              <span v-else>{{ c.primary }}</span>
            </li>
          </ul>

          <p class="creds-quote">
            Я регулярно прохожу личную терапию. Эксперт сначала проходит свой путь - и только потом ведёт.
          </p>
        </div>
        <div class="reveal">
          <div class="creds-portrait">
            <span class="label">Lifestyle photo - Ралия в работе</span>
          </div>
          <div class="portrait-credit">
            <span><em>Lifestyle</em> &nbsp;/&nbsp; in session</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
