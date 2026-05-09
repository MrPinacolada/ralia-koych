<script setup lang="ts">
const { credentials } = useLandingContent()
</script>

<template>
  <UiSectionWrapper anchor="credentials" bg="sand" spacing="md">
    <div class="max-w-wide mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-7">
        <p class="eyebrow mb-3">Образование</p>
        <h2 class="pull text-[34px] md:text-[48px] text-ink mb-5">
          Образование и сертификация
        </h2>
        <p class="font-sans text-[17px] text-ink/85 max-w-[58ch] mb-8 leading-[1.6]">
          Я работаю на основе формального образования и постоянной практики. Это не тренинг выходного дня.
        </p>

        <ul class="space-y-3 font-sans text-[15px] md:text-[16px] text-ink/90 max-w-[58ch] mb-8 leading-[1.55]">
          <li
            v-for="(c, i) in credentials"
            :key="i"
            class="flex gap-3"
          >
            <span class="text-clay mt-1 flex-shrink-0">—</span>
            <span>
              <span v-if="c.primary.includes('ACC ICF')">
                Сертификация
                <strong class="font-semibold">ACC ICF</strong>
                <span v-if="c.secondary"> — {{ c.secondary.replace(/^.*?— /, '') }}</span>
              </span>
              <span v-else>{{ c.primary }}</span>
            </span>
          </li>
        </ul>

        <hr class="border-sand mb-6 max-w-[58ch]" />
        <p class="font-sans font-medium text-[17px] md:text-[18px] text-ink leading-snug max-w-[55ch]">
          Я регулярно прохожу личную терапию. Я уверена: эксперт сначала проходит свой путь, и только потом ведёт.
        </p>
      </div>

      <div class="lg:col-span-5">
        <div
          class="img-placeholder rounded-lg aspect-[4/5] w-full max-w-[420px] mx-auto relative overflow-hidden"
        >
          <span
            class="absolute bottom-4 left-4 font-sans text-[11px] uppercase tracking-eyebrow text-fog"
          >
            Lifestyle photo — Раля в работе
          </span>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>
