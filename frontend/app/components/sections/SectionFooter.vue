<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <p class="footer-wordmark">Ралия Говорит</p>
          <p style="max-width: 48ch;">
            Коуч по устойчивому росту, ACC ICF. Помогаю специалистам и предпринимателям в период перемен двигаться к целям без самосаботажа.
          </p>
        </div>
        <div>
          <span class="footer-eyebrow">Каналы</span>
          <ul>
            <li><a href="https://t.me/raliyagovorit" target="_blank" rel="noopener noreferrer">Telegram-канал →</a></li>
            <li><a href="https://t.me/raliyaya" target="_blank" rel="noopener noreferrer">Запись @raliyaya →</a></li>
            <li><a href="https://instagram.com/raliyagovorit" target="_blank" rel="noopener noreferrer">Instagram →</a></li>
          </ul>
        </div>
        <div>
          <span class="footer-eyebrow">Конфиденциальность</span>
          <p>
            Гарантирую полную конфиденциальность всех сессий. Ваши данные не передаются третьим лицам.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {{ year }} Ралия Хабирова · ACC ICF · Казань - Бали</p>
        <p class="signoff">Ваша ценность - безусловна. С теплом, Ралия.</p>
      </div>
    </div>
  </footer>
</template>
