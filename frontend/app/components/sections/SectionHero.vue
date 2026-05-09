<script setup lang="ts">
// Hero section — эмоциональный hook + позиционирование + первичный CTA
</script>

<template>
  <UiSectionWrapper
    anchor="hero"
    bg="bone"
    spacing="md"
    class="!pt-10 md:!pt-section-xs"
  >
    <div class="max-w-wide mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div class="order-2 lg:order-1 lg:col-span-7">
        <p class="eyebrow mb-5">
          Ралия Хабирова · Коуч по устойчивому росту · ACC ICF
        </p>

        <h1 class="pull text-[42px] md:text-[60px] lg:text-[72px] text-ink mb-6">
          Моя ценность не зависит от того, что я делаю.
          <span class="pull-italic text-clay block sm:inline">Она безусловна.</span>
        </h1>

        <p class="font-sans text-[17px] md:text-[18px] text-ink/85 max-w-[56ch] mb-4 leading-[1.55]">
          Помогаю специалистам и предпринимателям в период карьерных и жизненных перемен устойчиво двигаться к своим целям — без самосаботажа и парализующего внутреннего критика.
        </p>

        <p class="font-sans text-[15px] text-fog max-w-[56ch] mb-8 leading-[1.6]">
          Я работаю в коучинге ICF и опираюсь на эмоциональный интеллект. Не даю советов — помогаю вам увидеть собственное движение.
        </p>

        <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
          <UiAppButton variant="primary" size="md" href="#final-cta">
            Записаться на диагностику
          </UiAppButton>
          <span class="font-sans text-sm text-fog">
            Первая встреча — бесплатно, 60 минут
          </span>
        </div>

        <div class="mt-10 pt-6 border-t border-sand max-w-[56ch]">
          <p class="font-sans text-sm text-fog">
            <a
              href="https://t.me/raliyagovorit"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-ink transition-colors"
            >@raliyagovorit</a>
            · 10K+ в Telegram · ACC ICF · 100+ часов сессий
          </p>
        </div>
      </div>

      <div class="order-1 lg:order-2 lg:col-span-5">
        <div
          class="img-placeholder rounded-lg aspect-[3/4] w-full max-w-[480px] mx-auto relative overflow-hidden"
        >
          <span
            class="absolute bottom-4 left-4 font-sans text-[11px] uppercase tracking-eyebrow text-fog"
          >
            Editorial portrait — Раля Хабирова
          </span>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>
