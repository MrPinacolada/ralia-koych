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
          <h2 class="section-title">Я не даю советов. Я помогаю вам увидеть собственное движение.</h2>
          <p class="section-lede">
            Коучинг по стандартам ICF - про ориентацию на решения, а не на поиск причин. Я объединяю его с эмоциональным интеллектом: мы работаем и с целью, и с тем, что вы чувствуете рядом с ней.
          </p>
        </div>
      </header>

      <p class="section-eyebrow reveal" style="color: var(--clay); margin: 8px 0 0;">
        Как проходит одна сессия
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

      <div class="method-twocol reveal">
        <div class="neutral">
          <p class="section-eyebrow" style="margin: 0 0 16px;">Что я не делаю</p>
          <ul>
            <li><span>-</span><span>Не выдаю готовых советов</span></li>
            <li><span>-</span><span>Не обещаю «исцелить за 5 сессий»</span></li>
            <li><span>-</span><span>Не выстраиваю позицию «учитель - ученица»</span></li>
            <li><span>-</span><span>Не работаю с тяжёлой клиникой; направлю к психотерапевту</span></li>
          </ul>
        </div>
        <div>
          <p class="section-eyebrow" style="color: var(--clay); margin: 0 0 16px;">Что я делаю</p>
          <ul>
            <li><span>-</span><span>Вникаю в конкретику вашей ситуации</span></li>
            <li><span>-</span><span>Работаю в партнёрстве - ответственность ваша, поддержка моя</span></li>
            <li><span>-</span><span>Даю инструменты и практики между сессиями</span></li>
            <li><span>-</span><span>Говорю честно - даже когда это неудобно</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
