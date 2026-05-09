<script setup lang="ts">
const { coachingQuestions } = useLandingContent()
</script>

<template>
  <section id="questions" class="tight">
    <div class="container">
      <header class="section-head reveal">
        <div class="section-num">VII</div>
        <div>
          <p class="section-eyebrow">Что мы исследуем</p>
          <h2 class="section-title">Пять вопросов, которые я задаю на сессии</h2>
          <p class="section-lede">Это не про ответы от меня. Это про то, чтобы вы услышали себя.</p>
        </div>
      </header>

      <div class="reveal" style="max-width: 80ch;">
        <article
          v-for="q in coachingQuestions"
          :key="q.number"
          class="question-row"
        >
          <div class="num">{{ q.number }}</div>
          <div>
            <h3>{{ q.question }}</h3>
            <p>{{ q.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
