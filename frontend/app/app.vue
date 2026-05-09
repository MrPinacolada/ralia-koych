<script setup lang="ts">
useSeoMeta({
  title: 'Ралия Говорит - коуч по устойчивому росту, ACC ICF',
  description:
    'Помогаю специалистам и предпринимателям в период карьерных и жизненных перемен устойчиво двигаться к своим целям без самосаботажа и парализующего внутреннего критика.',
  ogTitle: 'Ралия Говорит - коуч по устойчивому росту, ACC ICF',
  ogDescription:
    'Помогаю специалистам и предпринимателям устойчиво двигаться к своим целям. Бесплатная диагностическая сессия.',
  ogImage: '/og-image.svg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            name: 'Ралия Хабирова',
            alternateName: 'Ралия Говорит',
            jobTitle: 'Коуч по устойчивому росту, ACC ICF',
            description:
              'Сертифицированный коуч ICF (ACC) с магистратурой по психологии образования. Работаю с самосаботажем, внутренним критиком и карьерными переходами.',
            url: 'https://t.me/raliyagovorit',
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
            name: 'Ралия Говорит - коучинг по устойчивому росту',
            serviceType: 'Coaching',
            areaServed: 'Россия и русскоязычные страны',
            provider: { '@type': 'Person', name: 'Ралия Хабирова' },
            offers: [
              { '@type': 'Offer', name: 'Бесплатная диагностическая сессия', price: '0', priceCurrency: 'RUB' },
              { '@type': 'Offer', name: 'Краткосрочная работа (3 сессии)', price: '15000', priceCurrency: 'RUB' },
              { '@type': 'Offer', name: 'Среднесрочная работа (5 сессий)', price: '23000', priceCurrency: 'RUB' },
              { '@type': 'Offer', name: 'Долгосрочная работа (10 сессий)', price: '40000', priceCurrency: 'RUB' },
              { '@type': 'Offer', name: 'Групповой мастермайнд', price: '1500', priceCurrency: 'RUB' },
            ],
          },
        ],
      }),
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
    <SectionsSectionMasthead />

    <main>
      <SectionsSectionHero />
      <SectionsSectionPainPoints />
      <SectionsSectionMethod />
      <SectionsSectionPromise />
      <SectionsSectionCredentials />
      <SectionsSectionServices />
      <SectionsSectionCase />
      <SectionsSectionQuestions />
      <SectionsSectionFAQ />
      <SectionsSectionFinalCTA />
    </main>

    <SectionsSectionFooter />
    <StickyMobileCTA />
  </div>
</template>
