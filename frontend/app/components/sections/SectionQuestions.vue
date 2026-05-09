<script setup lang="ts">
const { coachingQuestions } = useLandingContent()
</script>

<template>
  <UiSectionWrapper anchor="questions" bg="bone" spacing="md">
    <UiAppContainer width="text">
      <p class="eyebrow mb-3">Что мы исследуем</p>
      <h2 class="pull text-[34px] md:text-[48px] text-ink mb-3">
        Пять вопросов, которые я задаю на сессии
      </h2>
      <p class="font-sans text-[17px] text-fog mb-10 max-w-[55ch] leading-[1.55]">
        Это не про то, чтобы получить от меня ответы. Это про то, чтобы вы услышали себя.
      </p>

      <div>
        <article
          v-for="(q, i) in coachingQuestions"
          :key="q.number"
          class="grid grid-cols-12 gap-5 py-7"
          :class="i < coachingQuestions.length - 1 ? 'border-b border-sand' : ''"
        >
          <div class="col-span-3 md:col-span-2">
            <span class="num text-[56px] md:text-[76px] text-clay">
              {{ q.number }}
            </span>
          </div>
          <div class="col-span-9 md:col-span-10">
            <p class="font-sans font-semibold text-[18px] md:text-[20px] text-ink mb-2 tracking-tight leading-snug">
              {{ q.question }}
            </p>
            <p class="font-sans text-[15px] text-fog leading-[1.6]">
              {{ q.description }}
            </p>
          </div>
        </article>
      </div>
    </UiAppContainer>
  </UiSectionWrapper>
</template>
