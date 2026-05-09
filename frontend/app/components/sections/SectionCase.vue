<script setup lang="ts">
const { testimonials } = useLandingContent()
</script>

<template>
  <UiSectionWrapper anchor="case" bg="paper" spacing="md">
    <UiAppContainer width="text">
      <p class="eyebrow mb-3">Кейс</p>
      <h2 class="pull text-[34px] md:text-[48px] text-ink mb-8">
        Что меняется после нашей работы
      </h2>

      <article class="border-l-2 border-clay pl-6 md:pl-8 mb-12">
        <p class="eyebrow text-clay mb-5">Реальный кейс · 5 коуч-сессий</p>

        <p class="font-sans text-[16px] md:text-[17px] text-ink/85 mb-5 leading-[1.7]">
          На первой сессии мы разобрали запрос на несколько составляющих: страх перед людьми более высокого ранга, стратегия наказывать себя за провалы, чувство недостоинства и стыда.
        </p>
        <p class="font-sans text-[16px] md:text-[17px] text-ink/85 mb-5 leading-[1.7]">
          Такой паттерн чувств и действий не даёт нужного результата — позволения себе уверенно проявляться.
        </p>
        <p class="font-sans font-medium text-[16px] md:text-[17px] text-ink mb-5 leading-[1.7]">
          А что даёт?
        </p>

        <p class="pull-italic text-[26px] md:text-[34px] text-moss leading-[1.15] my-8">
          Принятие и поддержка тех частей, которых мы стыдимся, порицаем и осуждаем.
        </p>

        <p class="font-sans text-[16px] md:text-[17px] text-ink/85 mb-5 leading-[1.7]">
          Пока мы внутри себя носим порицание каких-либо своих проявлений — мы будем избегать ситуаций, где можем проявиться именно такими.
        </p>

        <p class="font-sans font-medium text-[18px] md:text-[20px] text-ink leading-snug my-8 max-w-[58ch]">
          Парадокс в том, что мы проявляемся не одной своей частью — успешной, доброй, профессиональной, — а всеми сразу: и ошибающейся, и эгоистичной, и неуверенной.
        </p>

        <p class="font-sans text-[16px] md:text-[17px] text-ink/85 mb-5 leading-[1.7]">
          Если мне страшно показать себя зазнайкой, вычурной или непрофессиональной — я просто не буду проявляться вовсе.
        </p>
        <p class="font-sans text-[16px] md:text-[17px] text-ink/85 mb-5 leading-[1.7]">
          Принятие себя слабой, неудачницей, некрасивой — это про то, что я в любом проявлении достойна любви и поддержки. В первую очередь своей. И тогда то же самое можно видеть и получать в мире.
        </p>

        <p class="pull-italic text-[24px] md:text-[30px] text-clay leading-[1.2] my-8">
          Испытывать такие чувства — естественно.<br>
          Не естественно — насиловать себя из-за этих чувств.
        </p>

        <p class="font-sans text-sm text-fog mt-6">
          — Ралия Хабирова,
          <a
            href="https://telegra.ph/Kejs---rezultat-5-kouch-sessij-12-23"
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-clay underline-offset-4 text-ink hover:decoration-2 transition-all"
          >
            полный кейс →
          </a>
        </p>
      </article>
    </UiAppContainer>

    <div class="max-w-wide mx-auto mt-14">
      <p class="eyebrow text-center mb-8">Мини-кейсы клиенток</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        <article
          v-for="(t, i) in testimonials"
          :key="i"
          class="bg-bone rounded-md p-7 shadow-subtle"
        >
          <blockquote class="font-sans text-[16px] md:text-[17px] text-ink leading-[1.6] mb-5">
            {{ t.quote }}
          </blockquote>
          <footer class="flex items-center gap-3 pt-4 border-t border-sand">
            <div class="w-10 h-10 rounded-full bg-sand" aria-hidden="true"></div>
            <p class="font-sans text-[13px] text-fog leading-snug">
              {{ t.name }}, {{ t.age }} · {{ t.role }} · {{ t.city }}
            </p>
          </footer>
        </article>
      </div>
    </div>
  </UiSectionWrapper>
</template>
