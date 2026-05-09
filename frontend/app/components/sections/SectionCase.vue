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

      <article class="case-article reveal">
        <p>
          На первой сессии мы разобрали запрос на несколько составляющих: страх перед людьми более высокого ранга, стратегия наказывать себя за провалы, чувство недостоинства и стыда.
        </p>
        <p>
          Такой паттерн чувств и действий не даёт нужного результата - позволения себе уверенно проявляться.
        </p>
        <p class="bold">А что даёт?</p>

        <p class="pull-quote">Принятие тех частей, которых мы стыдимся и осуждаем</p>

        <p>
          Пока мы внутри себя носим порицание каких-либо своих проявлений - мы будем избегать ситуаций, где можем проявиться именно такими.
        </p>
        <p class="strong-line">
          Мы проявляемся не одной частью - успешной, доброй, профессиональной, - а всеми сразу: и ошибающейся, и эгоистичной, и неуверенной.
        </p>
        <p>
          Если мне страшно показать себя зазнайкой, вычурной или непрофессиональной - я просто не буду проявляться вовсе.
        </p>
        <p>
          Принятие себя слабой, неудачницей, некрасивой - это про то, что я в любом проявлении достойна любви и поддержки. В первую очередь своей. И тогда то же самое можно видеть и получать в мире.
        </p>

        <p class="pull-quote clay">Испытывать такие чувства - естественно</p>

        <p class="case-article-credit">
          - Ралия Хабирова,
          <a
            href="https://telegra.ph/Kejs---rezultat-5-kouch-sessij-12-23"
            target="_blank"
            rel="noopener noreferrer"
          >полный кейс →</a>
        </p>
      </article>

      <div class="reveal">
        <p class="section-eyebrow" style="margin: 64px 0 24px;">Мини-кейсы клиенток</p>
        <div class="testimonials">
          <article v-for="(t, i) in testimonials" :key="i" class="testimonial">
            <blockquote>{{ t.quote }}</blockquote>
            <footer>
              <div class="avatar"></div>
              <p style="font-family: var(--font-sans); font-size: 13px; color: var(--fog); margin: 0; line-height: 1.4;">
                <strong style="color: var(--ink); font-weight: 500; display: block;">
                  {{ t.name }}, {{ t.age }}
                </strong>
                {{ t.role }} · {{ t.city }}
              </p>
            </footer>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
