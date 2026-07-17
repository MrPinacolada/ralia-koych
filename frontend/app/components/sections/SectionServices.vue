<script setup lang="ts">
const { pricingTiers } = useLandingContent()
</script>

<template>
  <section id="services">
    <div class="container">
      <!-- Trust plaque · teaser before prices -->
      <div class="trust-card reveal" style="margin-bottom: 56px;">
        <p class="trust-case-line">Реальный кейс · 5 сессий: от страха публичных выступлений — к регулярным эфирам и твёрдому экспертному голосу.</p>
        <a href="#case" class="trust-link">Полный кейс →</a>
      </div>

      <header class="section-head reveal">
        <div class="section-num">V</div>
        <div>
          <p class="section-eyebrow">С чего начать</p>
          <h2 class="section-title">Форматы работы</h2>
        </div>
      </header>

      <!-- Step 1 · Strategic session -->
      <div class="offer-card reveal">
        <div class="offer-head">
          <p class="offer-eyebrow">Шаг 1 · Стратегическая сессия</p>
          <h3>Стратегическая сессия — 7 000 ₽</h3>
          <p class="offer-meta">2 встречи · 4 часа работы над вашим запросом</p>
        </div>
        <p class="offer-sub">Подойдёт, если важно быстро разобраться в ситуации и получить ясность.</p>
        <p class="offer-incl-label">Что входит</p>
        <ul>
          <li><span class="check">✓</span><span>Мы разберём вашу текущую ситуацию, определим точку А и точку Б</span></li>
          <li><span class="check">✓</span><span>Наметим ключевые точки работы: основные препятствия и слепые зоны</span></li>
          <li><span class="check">✓</span><span>Сформулируем конкретную стратегию движения и первые шаги</span></li>
          <li><span class="check">✓</span><span>Анализ ресурсов и точек опоры</span></li>
          <li><span class="check">✓</span><span>При необходимости — список вопросов для предварительной самостоятельной работы</span></li>
          <li><span class="check">✓</span><span>Итоговая сессия с конкретными шагами и понятным планом дальнейших действий</span></li>
        </ul>
        <a href="#final-cta" class="btn btn-primary">Записаться на сессию</a>
      </div>

      <!-- Step 2 · Coaching packages (comparison table) -->
      <p class="section-eyebrow reveal" style="margin: 0 0 16px;">Шаг 2 · Пакеты коуч-сессий</p>
      <p class="section-lede reveal" style="margin: 0 0 28px; max-width: 64ch;">Индивидуальная работа с фокусом на ваших задачах и движении: мы быстрее находим точные решения, определяем ключевые шаги и выстраиваем реализацию без внутреннего саботажа.</p>

      <div class="pricing-table reveal">
        <div class="pricing-rows">
          <!-- Row 1: tier names + prices -->
          <div class="pricing-cell label-cell row-1">
            <span class="row-label">Пакет</span>
            <p class="row-sub">Цена за весь курс. Можно начать с любого.</p>
          </div>
          <div
            v-for="tier in pricingTiers"
            :key="`hdr-${tier.name}`"
            class="pricing-cell tier row-1"
            :class="{ popular: tier.highlighted }"
          >
            <span v-if="tier.highlighted" class="popular-corner">Чаще выбирают</span>
            <p class="tier-name">{{ tier.name }}</p>
            <p class="price">{{ tier.priceLabel }}<span class="ruble">₽</span></p>
            <p class="meta-line">{{ tier.duration }}</p>
          </div>

          <!-- Row 2: who it fits -->
          <div class="pricing-cell label-cell">
            <span class="row-label">Подходит</span>
            <p class="row-sub">Если хотите попробовать формат и сделать первый шаг</p>
          </div>
          <div
            v-for="tier in pricingTiers"
            :key="`fit-${tier.name}`"
            class="pricing-cell tier"
            :class="{ popular: tier.highlighted }"
          >
            <p class="body-line">{{ tier.fits }}</p>
          </div>

          <!-- Row 3: included (spans all tiers) -->
          <div class="pricing-cell label-cell">
            <span class="row-label">Что входит</span>
            <p class="row-sub">В каждый пакет — одинаково</p>
          </div>
          <div class="pricing-cell tier pricing-incl-span">
            <p class="body-line">Сессия 60 мин, резюме, практики, контакт между сессиями</p>
          </div>
        </div>
      </div>

      <div class="pricing-cta-single reveal">
        <div class="spacer"></div>
        <a href="#final-cta" class="btn btn-primary">Выбрать пакет</a>
      </div>

      <p class="reveal" style="font-family: var(--font-sans); font-size: 13px; color: var(--fog); margin: 0 0 40px; max-width: var(--max-text);">
        Сколько нужно сессий и есть ли гарантия результата — в разделе
        <a href="#faq-sessions" style="color: var(--burgundy); text-decoration: underline; text-underline-offset: 3px;">«Вопросы»</a>.
      </p>

      <!-- Step 3 · Group -->
      <div class="extras-grid reveal">
        <div class="extras-card">
          <p class="extras-eyebrow">Шаг 3 · Группа</p>
          <h3>Мастермайнд — 1 500 ₽ за встречу</h3>
          <p>Группа 5–8 человек. 10 встреч по 90 минут раз в неделю. Старт 15 июля. Полный цикл — 15 000 ₽.</p>
          <a href="#final-cta" class="btn btn-secondary btn-sm">Записаться в группу</a>
        </div>
      </div>
    </div>
  </section>
</template>
