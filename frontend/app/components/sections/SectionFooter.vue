<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink text-bone px-6 md:px-12 lg:px-16 py-14 md:py-16">
    <div class="max-w-wide mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <p class="pull-italic text-[26px] text-bone mb-4">Раля Говорит</p>
          <p class="font-sans text-sm text-bone/70 leading-relaxed max-w-[40ch]">
            Коуч по устойчивому росту, ACC ICF. Помогаю специалистам и предпринимателям в период перемен двигаться к целям без самосаботажа.
          </p>
        </div>
        <div>
          <p class="eyebrow text-bone/60 mb-4">Каналы</p>
          <ul class="space-y-2 font-sans text-sm">
            <li>
              <a
                href="https://t.me/raliyagovorit"
                target="_blank"
                rel="noopener noreferrer"
                class="text-bone/90 hover:text-clay transition-colors"
              >
                Telegram-канал @raliyagovorit →
              </a>
            </li>
            <li>
              <a
                href="https://t.me/raliyaya"
                target="_blank"
                rel="noopener noreferrer"
                class="text-bone/90 hover:text-clay transition-colors"
              >
                Запись @raliyaya →
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-bone/90 hover:text-clay transition-colors"
              >
                YouTube →
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/raliyagovorit"
                target="_blank"
                rel="noopener noreferrer"
                class="text-bone/90 hover:text-clay transition-colors"
              >
                Instagram →
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p class="eyebrow text-bone/60 mb-4">Конфиденциальность</p>
          <p class="font-sans text-sm text-bone/70 leading-relaxed">
            Гарантирую полную конфиденциальность всех сессий. Ваши данные не передаются третьим лицам.
          </p>
        </div>
      </div>

      <hr class="border-bone/15 mb-6" />

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p class="font-sans text-xs text-bone/50">
          © {{ year }} Ралия Хабирова. Коуч ACC ICF. Казань / Бали.
        </p>
        <p class="font-sans text-sm text-bone/80">
          Ваша ценность — безусловна. С теплом, Раля.
        </p>
      </div>
    </div>
  </footer>
</template>
