<script setup lang="ts">
const { testimonials } = useLandingContent()
</script>

<template>
  <section id="case" class="bg-paper">
    <div class="container">
      <header class="section-head reveal">
        <div class="section-num">VI</div>
        <div>
          <p class="section-eyebrow">Реальный кейс · 5 коуч-сессий</p>
          <h2 class="section-title">Что меняется после нашей работы</h2>
        </div>
      </header>

      <div class="case-spread">
      <div class="case-brief reveal">
        <div>
          <p class="brief-eyebrow">Запрос на работу</p>
          <p class="brief-text">Справиться со страхом публичных выступлений, прийти к бóльшей проявленности и уверенности, начать действовать из искренней потребности заботы о себе.</p>
        </div>
        <div>
          <p class="brief-eyebrow">Паттерны, с которыми работали</p>
          <ul>
            <li><span class="dash">—</span><span>Внутренний критик</span></li>
            <li><span class="dash">—</span><span>Неэффективная коммуникация с аудиторией</span></li>
            <li><span class="dash">—</span><span>Страх отвержения</span></li>
            <li><span class="dash">—</span><span>Стратегия наказывать себя за провалы</span></li>
            <li><span class="dash">—</span><span>Чувство недостоинства и стыда</span></li>
            <li><span class="dash">—</span><span>Страх перед людьми более высокого ранга</span></li>
          </ul>
        </div>
      </div>

      <article class="case-article reveal">
        <p>Уже к пятой сессии она легче соглашается на публичные активности в узком кругу:</p>

        <p class="pull-quote case-voice"><span>«Я чувствую, как ко мне возвращается</span><span>мой твёрдый экспертный уверенный голос»</span></p>

        <p class="results-label">Конкретные шаги, на которые она решилась</p>
        <ul class="results-actions">
          <li><span class="check">✓</span><span>Регулярные прямые эфиры и модерация вебинаров с важными людьми</span></li>
          <li><span class="check">✓</span><span>Запись 10-минутной видеопрезентации для канала</span></li>
          <li><span class="check">✓</span><span>Организация и проведение офлайн-мероприятия</span></li>
        </ul>

        <p class="strong-line">Ценность своего ресурса и времени, принятие решений из заботы о себе.</p>

        <p class="client-quote">«Приходит много возможностей, но я соглашаюсь только на те, которые соответствуют моему ресурсу»</p>
        <p class="client-quote">«Выбор себя: я тщательнее выбираю, с кем работать, отказываюсь от того, что мне не подходит — конфликтного клиента, некомфортных коллабораций»</p>

        <p>Через исследование уровня контакта и готовности контактировать с аудиторией установлен более открытый диалог с подписчиками и фокус на подготовку продукта.</p>

        <p class="client-quote">«Я выбираю новый формат взаимодействия с аудиторией»</p>

        <p class="case-article-credit">
          — Ралия Хабирова,
          <a
            href="https://telegra.ph/Kejs---rezultat-5-kouch-sessij-12-23"
            target="_blank"
            rel="noopener noreferrer"
          >полный кейс →</a>
        </p>
      </article>
      </div>

      <div class="reveal">
        <p class="section-eyebrow" style="margin: 64px 0 24px;">Отзывы клиентов</p>
        <div class="testimonials">
          <article v-for="(t, i) in testimonials" :key="i" class="testimonial">
            <blockquote>{{ t.quote }}</blockquote>
            <footer>
              <div class="avatar"></div>
              <p style="font-family: var(--font-sans); font-size: 13px; color: var(--fog); margin: 0; line-height: 1.4;">
                <strong style="color: var(--ink); font-weight: 500; display: block;">{{ t.name }}</strong>{{ t.context }}
              </p>
            </footer>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
