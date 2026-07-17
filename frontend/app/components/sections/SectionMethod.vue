<script setup lang="ts">
const { methodSteps } = useLandingContent()
</script>

<template>
  <section id="method" class="bg-paper">
    <div class="container">
      <header class="section-head reveal">
        <div class="section-num">II</div>
        <div>
          <p class="section-eyebrow">Метод</p>
          <h2 class="section-title nowrap-lines">Я помогаю вам найти ваши ответы,<br>решить внутренние конфликты и<br>начать действовать в согласии с собой.</h2>
          <p class="section-lede nowrap-lines">Коучинг по стандартам ICF — про ориентацию на решения, а не на поиск причин.<br>Я объединяю его с эмоциональным интеллектом: благодаря чему удаётся эффективнее<br>работать с вашей целью и с сопротивлением, которое поднимается в ответ.</p>
        </div>
      </header>

      <p class="section-eyebrow reveal" style="color: var(--clay); margin: 8px 0 0;">
        Как проходит сессия
      </p>

      <div class="method-grid reveal">
        <div v-for="step in methodSteps" :key="step.number" class="method-step">
          <div class="num">{{ step.number }}</div>
          <h3 style="font-family: var(--font-sans); font-weight: 600; font-size: 20px; margin: 0 0 10px; letter-spacing: -0.01em; color: var(--ink);">
            {{ step.title }}
          </h3>
          <p style="font-family: var(--font-sans); font-size: 15px; line-height: 1.6; color: rgba(26, 24, 20, 0.78); margin: 0; max-width: 34ch;">
            {{ step.description }}
          </p>
        </div>
      </div>

      <div class="method-spread reveal">
      <div class="method-twocol">
        <div class="neutral">
          <p class="section-eyebrow" style="margin: 0 0 16px;">Что я не делаю</p>
          <ul>
            <li><span>—</span><span>Не выдаю готовых советов</span></li>
            <li><span>—</span><span>Не обещаю «исцелить за 5 сессий»</span></li>
            <li><span>—</span><span>Не выстраиваю позицию «учитель — ученик»</span></li>
            <li><span>—</span><span>Не работаю с тяжёлой клиникой; направлю к психотерапевту</span></li>
          </ul>
        </div>
        <div>
          <p class="section-eyebrow" style="color: var(--clay); margin: 0 0 16px;">Что я делаю</p>
          <ul>
            <li><span>—</span><span>Вникаю в конкретику вашей ситуации</span></li>
            <li><span>—</span><span>Работаю в партнёрстве</span></li>
            <li><span>—</span><span>Даю инструменты и практики между сессиями</span></li>
            <li><span>—</span><span>Задаю неудобные вопросы</span></li>
          </ul>
        </div>
      </div>

      <div class="promise-proof">
        <blockquote class="promise-proof-quote">«Было очень бережно, вовлечённо и профессионально. В ходе сессии мы выяснили, в чём моя основная сложность и на что обращать внимание.»</blockquote>
        <p class="promise-proof-attrib">— из отзывов клиентов</p>
      </div>
      </div>

      <p class="reveal" style="font-family: var(--font-sans); font-size: 13px; color: var(--fog); margin: 24px 0 0; max-width: var(--max-text);">
        Коуч, психолог или ментор — в чём разница, рассказываю в разделе
        <a href="#faq-roles" style="color: var(--burgundy); text-decoration: underline; text-underline-offset: 3px;">«Вопросы»</a>.
      </p>
    </div>
  </section>
</template>
