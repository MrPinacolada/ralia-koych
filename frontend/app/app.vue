<script setup lang="ts">
const SITE_URL = 'https://koych.ru'

useSeoMeta({
  title: 'Ралия Хабирова — коуч ACC ICF · реализация и самоценность для экспертов',
  description:
    'Работаю с экспертами и предпринимательницами, которые устали от внутреннего давления, обесценивания себя и самосаботажа. Коучинг по стандартам ICF.',
  ogTitle: 'Перестать бороться с собой — и наконец двигаться туда, куда давно хочется',
  ogDescription:
    'Коуч ACC ICF Ралия Хабирова. Стратегическая сессия — 7 000 ₽: разберём вашу текущую ситуацию, определим точку А и точку Б, сформулируем конкретную стратегию движения и первые шаги.',
  ogSiteName: 'Ралия Говорит',
  ogUrl: `${SITE_URL}/`,
  ogImage: `${SITE_URL}/og-image.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Ралия Хабирова — коуч ACC ICF',
  ogType: 'website',
  ogLocale: 'ru_RU',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: `${SITE_URL}/` }],
  script: [
    {
      // Progressive enhancement: mark JS-capable before paint so scroll-reveal
      // can hide sections; without JS, `.reveal` stays visible (see landing.css).
      innerHTML: "document.documentElement.classList.add('js')",
      tagPosition: 'head',
    },
    {
      type: 'application/ld+json',
      // Object (not pre-stringified) — unhead v2 serializes it safely and keeps it in SSR
      innerHTML: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            name: 'Ралия Хабирова',
            alternateName: 'Ралия Говорит',
            jobTitle: 'Коуч ACC ICF',
            description:
              'Сертифицированный коуч ACC ICF: 60+ часов обучения и 100+ часов практики. Магистратура «Психология образования», опыт преподавателя эмоционального интеллекта. Помогаю экспертам и предпринимательницам перестать бороться с собой: работаю с самосаботажем, внутренним критиком и обесцениванием себя.',
            url: `${SITE_URL}/`,
            sameAs: ['https://t.me/raliyagovorit', 'https://t.me/raliyaya'],
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'ACC ICF (Associate Certified Coach)',
                credentialCategory: 'certification',
                recognizedBy: {
                  '@type': 'Organization',
                  name: 'International Coaching Federation',
                },
              },
            ],
          },
          {
            '@type': 'ProfessionalService',
            name: 'Ралия Говорит — коучинг для экспертов и предпринимательниц',
            url: `${SITE_URL}/`,
            serviceType: 'Коучинг по стандартам ICF',
            description:
              'Реализация и самоценность для экспертов: разбор ситуации, работа с самосаботажем и внутренним критиком, конкретный и реалистичный план действий.',
            areaServed: 'Россия и русскоязычные страны',
            provider: { '@type': 'Person', name: 'Ралия Хабирова' },
            offers: [
              {
                '@type': 'Offer',
                name: 'Стратегическая сессия',
                description: '2 встречи · 4 часа работы над вашим запросом',
                price: '7000',
                priceCurrency: 'RUB',
              },
              {
                '@type': 'Offer',
                name: 'Пакет «Ясность»',
                description: '3 сессии · 3–4 недели. Первый сдвиг и ясность с одной целью.',
                price: '15000',
                priceCurrency: 'RUB',
              },
              {
                '@type': 'Offer',
                name: 'Пакет «Опора»',
                description: '5 сессий · 6–8 недель. Видимые изменения в убеждениях и поведении.',
                price: '23000',
                priceCurrency: 'RUB',
              },
              {
                '@type': 'Offer',
                name: 'Пакет «Устойчивость»',
                description: '10 сессий · 10–12 недель. Глубокая проработка отношений с собой, целями и опорой.',
                price: '40000',
                priceCurrency: 'RUB',
              },
              {
                '@type': 'Offer',
                name: 'Мастермайнд',
                description: 'Группа 5–8 человек. 10 встреч по 90 минут раз в неделю. Цена за встречу.',
                price: '1500',
                priceCurrency: 'RUB',
              },
            ],
          },
        ],
      },
    },
  ],
})

// Reveal-on-scroll: add `.in` class to all `.reveal` elements when they enter viewport
onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in')
          io.unobserve(en.target)
        }
      })
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
})
</script>

<template>
  <div>
    <a href="#hero" class="skip-link">Перейти к контенту</a>

    <AppNav />

    <main>
      <SectionsSectionHero />
      <SectionsSectionPainPoints />
      <SectionsSectionMethod />
      <SectionsSectionPromise />
      <SectionsSectionCredentials />
      <SectionsSectionServices />
      <SectionsSectionCase />
      <SectionsSectionFAQ />
      <SectionsSectionFinalCTA />
    </main>

    <SectionsSectionFooter />
    <StickyMobileCTA />
  </div>
</template>
