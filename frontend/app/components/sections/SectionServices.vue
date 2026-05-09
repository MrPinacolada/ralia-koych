<script setup lang="ts">
const { pricingTiers } = useLandingContent()
</script>

<template>
  <section id="services">
    <div class="container">
      <header class="section-head reveal">
        <div class="section-num">V</div>
        <div>
          <p class="section-eyebrow">Услуги</p>
          <h2 class="section-title">Как начать работу</h2>
          <p class="section-lede">
            Первая встреча - всегда бесплатно. На диагностике мы разбираем вашу ситуацию, проясняем, что тормозит, и намечаем направление дальше.
          </p>
        </div>
      </header>

      <!-- Free diagnostic -->
      <div class="free-card reveal">
        <div>
          <p class="free-eyebrow">Шаг 1 · Бесплатно</p>
          <h3>Диагностическая сессия - 60 минут на Zoom</h3>
          <p>Полная диагностика и обсуждение, как двигаться дальше. Условие одно: вы готовы что-то менять, а не ждёте готовых ответов.</p>
        </div>
        <a href="#final-cta" class="btn btn-primary">Записаться</a>
      </div>

      <!-- Pricing comparison table -->
      <p class="section-eyebrow reveal" style="margin: 0 0 16px;">Шаг 2 · Пакеты коуч-сессий</p>

      <div class="pricing-table reveal">
        <div class="pricing-rows">
          <!-- Row 1: tier names + prices -->
          <div class="pricing-cell label-cell row-1">
            <span class="row-label">Пакет</span>
            <p class="row-sub">Цена за весь курс. Можно начать с любого.</p>
          </div>
          <div
            v-for="tier in pricingTiers"
            :key="`hdr-${tier.level}`"
            class="pricing-cell tier row-1"
            :class="{ popular: tier.highlighted }"
          >
            <span v-if="tier.highlighted" class="popular-corner">Чаще выбирают</span>
            <p class="tier-name">{{ tier.level }}</p>
            <p class="price">{{ tier.priceLabel }}<span class="ruble">₽</span></p>
            <p class="meta-line">{{ tier.duration }}</p>
          </div>

          <!-- Row 2: outcome / who fits -->
          <div class="pricing-cell label-cell">
            <span class="row-label">Подходит</span>
            <p class="row-sub">Если хотите попробовать формат и сделать первый шаг</p>
          </div>
          <div
            v-for="tier in pricingTiers"
            :key="`fit-${tier.level}`"
            class="pricing-cell tier"
            :class="{ popular: tier.highlighted }"
          >
            <p class="body-line">{{ tier.outcome }}</p>
          </div>

          <!-- Row 3: included -->
          <div class="pricing-cell label-cell">
            <span class="row-label">Что входит</span>
            <p class="row-sub">В каждый пакет - одинаково</p>
          </div>
          <div
            v-for="tier in pricingTiers"
            :key="`inc-${tier.level}`"
            class="pricing-cell tier"
            :class="{ popular: tier.highlighted }"
          >
            <p class="body-line">Сессия 60 мин, резюме, практики, контакт между сессиями</p>
          </div>
        </div>
      </div>

      <div class="pricing-cta-row reveal">
        <div class="label-empty"></div>
        <a
          v-for="tier in pricingTiers"
          :key="`cta-${tier.level}`"
          href="#final-cta"
          class="btn"
          :class="tier.highlighted ? 'btn-primary' : 'btn-secondary'"
        >
          Выбрать
        </a>
      </div>

      <div class="extras-grid reveal">
        <div class="extras-card">
          <p class="extras-eyebrow">Шаг 3 · Группа</p>
          <h3>Мастермайнд - 1 500 ₽ за встречу</h3>
          <p>Группа 5–8 человек. 10 встреч по 90 минут раз в неделю. Старт 15 мая. Полный цикл - 15 000 ₽.</p>
          <a href="#final-cta" class="btn btn-secondary btn-sm">Записаться</a>
        </div>
        <div class="extras-card dark">
          <p class="extras-eyebrow">В каждый пакет входит</p>
          <ul>
            <li><span class="check">✓</span><span>Сессия 60 мин на Zoom</span></li>
            <li><span class="check">✓</span><span>Письменное резюме встречи</span></li>
            <li><span class="check">✓</span><span>Практики между сессиями</span></li>
            <li><span class="check">✓</span><span>Личный контакт со мной</span></li>
          </ul>
          <p class="meta">
            Запись и любые вопросы - Telegram
            <a
              href="https://t.me/raliyaya"
              target="_blank"
              rel="noopener noreferrer"
              style="color: var(--clay); text-decoration: underline; text-underline-offset: 3px;"
            >@raliyaya</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
