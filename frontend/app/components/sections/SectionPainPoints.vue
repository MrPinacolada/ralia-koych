<script setup lang="ts">
const { painPoints } = useLandingContent()
</script>

<template>
  <UiSectionWrapper anchor="for-whom" bg="bone" spacing="md">
    <div class="max-w-wide mx-auto">
      <div class="max-w-text mb-10">
        <h2 class="pull text-[34px] md:text-[48px] text-ink mb-3">
          Узнаёте себя?
        </h2>
        <p class="font-sans text-[17px] text-fog max-w-[56ch] leading-[1.55]">
          Ко мне приходят специалисты и предприниматели в период перехода. Вот что я слышу на сессиях чаще всего — дословно.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 md:gap-y-12">
        <div v-for="(group, gi) in painPoints" :key="gi">
          <p class="eyebrow text-clay mb-4">{{ group.eyebrow }}</p>
          <ul class="divide-y divide-sand">
            <li
              v-for="(point, pi) in group.items"
              :key="pi"
              class="py-3.5 first:pt-0"
            >
              <p class="lede text-[17px] md:text-[18px]">
                {{ point.quote }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-14 pt-10 border-t border-sand max-w-text mx-auto text-center">
        <p
          class="font-sans font-medium text-[18px] md:text-[20px] text-ink mb-6 max-w-[48ch] mx-auto leading-snug"
        >
          Узнали себя? Приходите на первую встречу. Разберёмся, что за этим стоит и как двигаться устойчиво.
        </p>
        <UiAppButton variant="primary" size="md" href="#final-cta">
          Записаться на диагностику
        </UiAppButton>
      </div>
    </div>
  </UiSectionWrapper>
</template>
