<script setup lang="ts">
const { methodSteps } = useLandingContent()
</script>

<template>
  <UiSectionWrapper anchor="method" bg="paper" spacing="md">
    <div class="max-w-wide mx-auto">
      <div class="max-w-text mb-12">
        <p class="eyebrow mb-3">Метод</p>
        <h2 class="pull text-[34px] md:text-[48px] text-ink mb-5">
          Я не даю советы. Я помогаю вам увидеть собственное движение.
        </h2>
        <p class="font-sans text-[17px] text-ink/85 max-w-[58ch] leading-[1.6]">
          Коучинг по стандартам ICF — про ориентацию на решения, а не на поиск причин. Я объединяю коучинг с опытом преподавателя эмоционального интеллекта. Это позволяет работать одновременно с целью и с тем, что вы чувствуете рядом с ней.
        </p>
      </div>

      <p class="eyebrow text-clay mb-6">Как проходит одна сессия</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
        <div v-for="step in methodSteps" :key="step.number">
          <p class="num text-[72px] md:text-[104px] text-clay mb-1">
            {{ step.number }}
          </p>
          <h3 class="font-sans font-semibold text-[18px] md:text-[19px] text-ink mb-2 tracking-tight">
            {{ step.title }}
          </h3>
          <p class="font-sans text-[15px] text-ink/75 leading-[1.6]">
            {{ step.description }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-text mx-auto">
        <div>
          <p class="eyebrow mb-3">Что я не делаю</p>
          <ul class="space-y-2.5 font-sans text-[15px] text-fog leading-[1.55]">
            <li class="flex gap-3">
              <span class="text-fog/40 mt-1">—</span>
              <span>Не выдаю готовых советов</span>
            </li>
            <li class="flex gap-3">
              <span class="text-fog/40 mt-1">—</span>
              <span>Не обещаю «исцелить за 5 сессий»</span>
            </li>
            <li class="flex gap-3">
              <span class="text-fog/40 mt-1">—</span>
              <span>Не выстраиваю позицию «учитель — ученица»</span>
            </li>
            <li class="flex gap-3">
              <span class="text-fog/40 mt-1">—</span>
              <span>Не работаю с тяжёлой клиникой; направлю к психотерапевту</span>
            </li>
          </ul>
        </div>
        <div>
          <p class="eyebrow text-clay mb-3">Что я делаю</p>
          <ul class="space-y-2.5 font-sans text-[15px] text-ink leading-[1.55]">
            <li class="flex gap-3">
              <span class="text-clay mt-1">—</span>
              <span>Вникаю в конкретику вашей ситуации</span>
            </li>
            <li class="flex gap-3">
              <span class="text-clay mt-1">—</span>
              <span>Работаю в партнёрстве — ответственность ваша, поддержка моя</span>
            </li>
            <li class="flex gap-3">
              <span class="text-clay mt-1">—</span>
              <span>Даю инструменты и практики для работы между сессиями</span>
            </li>
            <li class="flex gap-3">
              <span class="text-clay mt-1">—</span>
              <span>Говорю честно — даже когда это неудобно</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>
