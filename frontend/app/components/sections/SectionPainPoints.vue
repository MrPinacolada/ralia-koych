<script setup lang="ts">
const { painPoints } = useLandingContent()

// Split 8 quotes into 2 columns of 4 (markers continue across columns: col1 = 01–04, col2 = 05–08)
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
          <p class="section-eyebrow">Для кого это</p>
          <h2 class="section-title">Узнаёте себя в одной из этих фраз?</h2>
          <p class="section-lede">
            Я собрала восемь самых частых формулировок, с которыми ко мне приходят. Если хотя бы одна звучит знакомо - вам сюда.
          </p>
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
        <p>Если узнали себя - приходите на первую встречу. Разберёмся вместе, что за этим стоит и как двигаться устойчиво.</p>
        <a href="#final-cta" class="btn btn-primary">Записаться на диагностику</a>
      </div>
    </div>
  </section>
</template>
