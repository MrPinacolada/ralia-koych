<script setup lang="ts">
useSeoMeta({
  title: 'Раля Говорит — коуч по устойчивому росту, ACC ICF',
  description:
    'Помогаю специалистам и предпринимателям в период карьерных и жизненных перемен устойчиво двигаться к своим целям без самосаботажа и парализующего внутреннего критика.',
  ogTitle: 'Раля Говорит — коуч по устойчивому росту, ACC ICF',
  ogDescription:
    'Помогаю специалистам и предпринимателям устойчиво двигаться к своим целям. Бесплатная диагностическая сессия.',
  ogImage: '/og-image.jpg',
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
            alternateName: 'Раля Говорит',
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
            name: 'Раля Говорит — коучинг по устойчивому росту',
            serviceType: 'Coaching',
            areaServed: 'Россия и русскоязычные страны',
            provider: { '@type': 'Person', name: 'Ралия Хабирова' },
            offers: [
              {
                '@type': 'Offer',
                name: 'Бесплатная диагностическая сессия',
                price: '0',
                priceCurrency: 'RUB',
              },
              {
                '@type': 'Offer',
                name: 'Стратегическая сессия',
                price: '7000',
                priceCurrency: 'RUB',
              },
              {
                '@type': 'Offer',
                name: 'Краткосрочная работа (3 сессии)',
                price: '15000',
                priceCurrency: 'RUB',
              },
              {
                '@type': 'Offer',
                name: 'Среднесрочная работа (5 сессий)',
                price: '23000',
                priceCurrency: 'RUB',
              },
              {
                '@type': 'Offer',
                name: 'Долгосрочная работа (10 сессий)',
                price: '40000',
                priceCurrency: 'RUB',
              },
            ],
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-bone text-ink">
    <a
      href="#hero"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-moss focus:text-paper focus:px-4 focus:py-2 focus:rounded-sm"
    >
      Перейти к контенту
    </a>

    <AppNav />

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
