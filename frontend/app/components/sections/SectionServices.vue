<script setup lang="ts">
const { pricingTiers } = useLandingContent()
</script>

<template>
  <UiSectionWrapper anchor="services" bg="bone" spacing="md">
    <div class="max-w-wide mx-auto">
      <div class="max-w-text mb-10">
        <p class="eyebrow mb-3">Услуги</p>
        <h2 class="pull text-[34px] md:text-[48px] text-ink mb-5">
          Как начать работу
        </h2>
        <p class="font-sans text-[17px] text-ink/85 max-w-[58ch] leading-[1.6]">
          Первая встреча — всегда бесплатно. На диагностике мы разбираем вашу ситуацию, проясняем, что тормозит, и намечаем направление.
        </p>
      </div>

      <!-- Free diagnostic -->
      <div class="bg-paper rounded-md p-7 md:p-10 shadow-soft mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <p class="eyebrow mb-3">Уровень 1 · Бесплатно</p>
            <h3 class="pull text-[28px] md:text-[36px] text-ink mb-3 leading-[1.1]">
              Диагностическая сессия
            </h3>
            <p class="font-sans text-[15px] md:text-[16px] text-ink/85 max-w-[42ch] leading-[1.6]">
              60 минут на Zoom, полная диагностика и обсуждение, как двигаться дальше. Условие: вы готовы что-то менять, а не ждёте готовых ответов.
            </p>
          </div>
          <div class="md:text-right">
            <UiAppButton variant="primary" size="md" href="#final-cta">
              Записаться на диагностику
            </UiAppButton>
          </div>
        </div>
      </div>

      <!-- Strategic + Mastermind row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
        <div class="bg-paper rounded-md p-8 md:p-10 shadow-soft">
          <p class="eyebrow mb-4">Уровень 2 · Стратегическая сессия</p>
          <p class="num text-[64px] md:text-[80px] text-clay">
            7 000<span class="text-[24px] align-top ml-1">₽</span>
          </p>
          <p class="font-sans text-sm text-fog mt-2 mb-6">
            2 встречи · 4 часа работы над запросом
          </p>
          <ul class="space-y-2 font-sans text-sm text-ink/85 mb-8 leading-[1.55]">
            <li class="flex gap-2"><span class="text-clay">—</span> Диагностика и анализ текущей ситуации</li>
            <li class="flex gap-2"><span class="text-clay">—</span> Определение цели и ключевых ограничений</li>
            <li class="flex gap-2"><span class="text-clay">—</span> Анализ ресурсов и точек опоры</li>
            <li class="flex gap-2"><span class="text-clay">—</span> Конкретные шаги и план действий</li>
          </ul>
          <UiAppButton variant="secondary" size="md" href="#final-cta">
            Записаться
          </UiAppButton>
        </div>

        <div class="bg-paper rounded-md p-8 md:p-10 shadow-soft">
          <p class="eyebrow mb-4">Уровень 4 · Мастермайнд</p>
          <p class="num text-[64px] md:text-[80px] text-clay">
            1 500<span class="text-[24px] align-top ml-1">₽</span>
          </p>
          <p class="font-sans text-sm text-fog mt-2 mb-6">
            за встречу · 10 встреч с 15 мая
          </p>
          <ul class="space-y-2 font-sans text-sm text-ink/85 mb-8 leading-[1.55]">
            <li class="flex gap-2"><span class="text-clay">—</span> Группа 5–8 человек</li>
            <li class="flex gap-2"><span class="text-clay">—</span> Zoom, 90 минут</li>
            <li class="flex gap-2"><span class="text-clay">—</span> Раз в неделю, 2,5 месяца</li>
            <li class="flex gap-2"><span class="text-clay">—</span> Полный цикл — 15 000 ₽</li>
          </ul>
          <UiAppButton variant="secondary" size="md" href="#final-cta">
            Записаться
          </UiAppButton>
        </div>
      </div>

      <!-- Coaching packages -->
      <p class="eyebrow text-center mb-10">
        Уровень 3 · Пакеты коуч-сессий
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
        <div
          v-for="(tier, i) in pricingTiers"
          :key="i"
          :class="[
            'rounded-md p-8 transition-shadow duration-250',
            tier.highlighted
              ? 'bg-moss text-paper shadow-lift relative'
              : 'bg-paper shadow-soft hover:shadow-lift',
          ]"
        >
          <span
            v-if="tier.highlighted"
            class="absolute top-4 right-4 font-sans text-[10px] uppercase tracking-eyebrow text-cream/80"
          >
            Чаще выбирают
          </span>
          <p
            class="eyebrow mb-4"
            :class="tier.highlighted ? 'text-cream/80' : ''"
          >
            {{ tier.level }}
          </p>
          <p
            class="num text-[64px] md:text-[72px]"
            :class="tier.highlighted ? 'text-cream' : 'text-clay'"
          >
            {{ tier.priceLabel }}<span class="text-[20px] align-top ml-1">₽</span>
          </p>
          <p
            class="font-sans text-sm mt-2 mb-6"
            :class="tier.highlighted ? 'text-cream/70' : 'text-fog'"
          >
            {{ tier.duration }}
          </p>
          <p
            class="font-sans text-[14px] mb-6 leading-[1.55]"
            :class="tier.highlighted ? 'text-paper/95' : 'text-ink/80'"
          >
            {{ tier.outcome }}
          </p>
          <UiAppButton
            :variant="tier.highlighted ? 'primary' : 'secondary'"
            size="md"
            :class="tier.highlighted ? 'bg-paper !text-ink hover:!bg-cream' : ''"
            full-width
            href="#final-cta"
          >
            Записаться
          </UiAppButton>
        </div>
      </div>

      <div class="max-w-text mx-auto bg-cream rounded-md p-8 md:p-10">
        <p class="eyebrow mb-4 text-clay">В каждый пакет входит</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 font-sans text-base text-ink leading-[1.55]">
          <li class="flex gap-2">
            <span class="text-moss">✔️</span>
            <span>Сессия 60 минут на Zoom в удобное время</span>
          </li>
          <li class="flex gap-2">
            <span class="text-moss">✔️</span>
            <span>Письменное резюме каждой встречи</span>
          </li>
          <li class="flex gap-2">
            <span class="text-moss">✔️</span>
            <span>Практики и материалы между сессиями</span>
          </li>
          <li class="flex gap-2">
            <span class="text-moss">✔️</span>
            <span>Личный контакт со мной между сессиями</span>
          </li>
        </ul>
        <p class="font-sans text-sm text-fog mt-6 leading-[1.6]">
          Гарантирую полную конфиденциальность. Запись и любые вопросы — в Telegram
          <a
            href="https://t.me/raliyaya"
            target="_blank"
            rel="noopener noreferrer"
            class="text-ink hover:text-clay transition-colors"
          >@raliyaya</a>.
        </p>
      </div>
    </div>
  </UiSectionWrapper>
</template>
