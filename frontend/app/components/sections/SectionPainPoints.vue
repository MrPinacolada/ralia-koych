<script setup lang="ts">
const { painPoints } = useLandingContent()

// Split 8 quotes into 2 columns of 4 (markers 01–04 / 05–08)
const colLeft = computed(() => painPoints.slice(0, 4))
const colRight = computed(() => painPoints.slice(4, 8))

function marker(i: number) {
  return String(i + 1).padStart(2, '0')
}
</script>

<template>
  <section id="whom">
    <div class="container">
      <header class="section-head reveal">
        <div class="section-num">I</div>
        <div>
          <p class="section-eyebrow">Для кого</p>
          <h2 class="section-title nowrap-lines">Узнаёте себя в одной из этих фраз?</h2>
          <p class="section-lede nowrap-lines">Я собрала восемь самых частых запросов, с которыми ко мне приходят:</p>
        </div>
      </header>

      <div class="pain-grid reveal">
        <div class="pain-col">
          <ul>
            <li v-for="(p, i) in colLeft" :key="i">
              <span class="marker">{{ marker(i) }}</span>
              <span>{{ p.quote }}</span>
            </li>
          </ul>
        </div>
        <div class="pain-col">
          <ul>
            <li v-for="(p, i) in colRight" :key="i">
              <span class="marker">{{ marker(i + 4) }}</span>
              <span>{{ p.quote }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pain-cta reveal">
        <div class="pain-cta-main">
          <p>Если узнали себя — приходите на разбор вашей ситуации: увидим ключевые точки работы и слепые зоны, наметим конкретное направление движения.</p>
          <a href="#final-cta" class="btn btn-primary">Записаться на разбор</a>
        </div>
        <div class="pain-cta-practice">
          <p class="pain-cta-note">Бесплатно в Telegram: видео + практика<br>«Почему я саботирую свою цель — и как начать действовать»</p>
          <a
            href="https://t.me/raliyagovoritbot"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost"
          >Получить практику</a>
        </div>
      </div>
    </div>
  </section>
</template>
