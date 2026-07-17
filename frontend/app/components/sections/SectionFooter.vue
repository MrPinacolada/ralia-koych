<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <p class="footer-wordmark">Ралия Хабирова</p>
          <p style="max-width: 48ch;">
            Помогаю женщинам в жизненных и карьерных переходах честно признать, чего они хотят, и устойчиво внедрять перемены — через контакт с собой и пошаговую структуру.
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
        <p>© {{ year }} Ралия Хабирова · ACC ICF · Казань — Бали</p>
        <p class="signoff">От вашего отношения к себе зависит качество вашей жизни.<br>От вашей любви к себе зависит ваше благополучие.</p>
      </div>
    </div>
  </footer>
</template>
