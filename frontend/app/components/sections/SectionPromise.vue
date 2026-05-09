<script setup lang="ts">
const { promiseLists } = useLandingContent()
</script>

<template>
  <section id="promise">
    <div class="container">
      <header class="section-head reveal">
        <div class="section-num">III</div>
        <div>
          <p class="section-eyebrow">Что вы получите</p>
          <h2 class="section-title">К концу работы у вас будут не «инсайты», а конкретные результаты.</h2>
        </div>
      </header>

      <div class="promise-card reveal">
        <div v-for="(list, i) in promiseLists" :key="i" class="col">
          <p class="promise-col-eyebrow" :class="list.accent">{{ list.eyebrow }}</p>
          <ul>
            <li v-for="(item, idx) in list.items" :key="idx">
              <span class="check" :style="list.accent === 'clay' ? { color: 'var(--clay)' } : undefined">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
