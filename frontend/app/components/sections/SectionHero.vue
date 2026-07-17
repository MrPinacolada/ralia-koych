<script setup lang="ts">
// Magazine hero — masthead line folded into hero-corner, asymmetric grid, portrait cut-out
const portraitSrc = '/portrait-hero.png'
</script>

<template>
  <section id="hero" class="hero">
    <div class="container">
      <p class="hero-corner"><span class="accent">№ 01</span> · 2026 · Казань — Бали</p>
      <p class="section-eyebrow hero-eyebrow">Коуч ACC ICF</p>
      <p class="hero-eyebrow-sub">реализация и самоценность для экспертов</p>

      <h1 class="h1">
        Перестать <em>бороться с собой</em> — <br>и наконец двигаться туда, <br>куда давно хочется
      </h1>

      <div class="hero-grid">
        <div class="hero-text">
          <div class="hero-lede-wrap">
            <p class="hero-lede">Работаю с экспертами и предпринимательницами, <br>которые устали от внутреннего давления, <br>обесценивания себя и самосаботажа.</p>
          </div>

          <p class="hero-meta">
            Я не даю советов и готовых ответов — помогаю вам через контакт с собой и пошаговую структуру <strong>честно признать, чего вы хотите</strong>, выдержать сопротивление, найти решение и устойчиво внедрить перемены в жизнь.
          </p>
          <p class="hero-meta hero-meta--sub">
            В своём подходе объединяю <strong>коучинг по стандартам ICF</strong> и техники работы с эмоциональным интеллектом.
          </p>

          <div class="hero-cta-row">
            <a href="#final-cta" class="btn btn-gold">Разобрать свою ситуацию</a>
            <a
              href="https://t.me/raliyagovoritbot"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-ghost"
            >Начать с практики</a>
          </div>

          <p class="hero-cta-meta">Стратегическая сессия · 2 встречи · 7 000 ₽</p>
        </div>

        <div class="hero-image">
          <figure class="portrait">
            <img :src="portraitSrc" alt="Ралия Хабирова — коуч ACC ICF">
          </figure>
        </div>
      </div>
    </div>

    <div class="hero-trust">
      <div class="container hero-trust-inner">
        <a href="https://t.me/raliyagovorit" target="_blank" rel="noopener noreferrer">@raliyagovorit</a>
        <span>Коуч ACC ICF · 100+ часов практики</span>
        <a href="#case">Кейсы и отзывы ↓</a>
      </div>
    </div>
  </section>
</template>
