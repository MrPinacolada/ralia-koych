<script setup lang="ts">
import type { ContactFormData } from '~/types/landing'

const { submit, loading, result } = useContactForm()

const form = reactive<ContactFormData>({
  name: '',
  contact: '',
  note: '',
})

const submitted = ref(false)
const successRef = ref<HTMLElement | null>(null)

async function onSubmit() {
  if (!form.name.trim() || !form.contact.trim()) return
  const res = await submit(form)
  if (res.ok) {
    submitted.value = true
    // Move focus to the confirmation so screen-reader / keyboard users land on it
    await nextTick()
    successRef.value?.focus()
  }
}

function reset() {
  form.name = ''
  form.contact = ''
  form.note = ''
  submitted.value = false
}
</script>

<template>
  <section id="final-cta" class="bg-cream" style="padding-block: 96px;">
    <div class="container">
      <div class="final reveal" style="margin-bottom: 56px;">
        <h2>Готовы к новым результатам?</h2>
      </div>

      <div
        v-if="submitted"
        ref="successRef"
        class="form-block reveal"
        style="text-align: center; outline: none;"
        role="status"
        tabindex="-1"
      >
        <p class="pull-italic" style="font-size: 32px; color: var(--clay); margin: 0 0 12px;">
          Получила! 🌿
        </p>
        <p class="intro" style="font-weight: 400;">
          Спасибо, что решились на этот шаг. Я уже вижу вашу заявку и отвечу вам лично в Telegram — обычно в течение нескольких часов.
        </p>
        <p class="helper" style="margin-top: 16px;">
          С теплом, Ралия — и подпишитесь на
          <a
            href="https://t.me/raliyagovorit"
            target="_blank"
            rel="noopener noreferrer"
            style="color: var(--ink); text-decoration: underline; text-decoration-color: var(--clay);"
          >@raliyagovorit</a>.
        </p>
        <button
          type="button"
          class="btn btn-secondary btn-sm"
          style="margin-top: 20px; align-self: center;"
          @click="reset"
        >
          Отправить ещё одну
        </button>
      </div>

      <form
        v-else
        class="form-block reveal"
        @submit.prevent="onSubmit"
      >
        <p class="intro">Оставьте контакт —<br>за 20 минут разберём вашу ситуацию и наметим первый шаг.<br>Отвечу лично в течение нескольких часов.</p>

        <label>
          <span class="label-text">Как вас зовут <span class="req">*</span></span>
          <input
            v-model="form.name"
            placeholder="Ваше имя"
            required
          >
        </label>

        <label>
          <span class="label-text">Telegram или телефон <span class="req">*</span></span>
          <input
            v-model="form.contact"
            placeholder="@ваш_ник или номер телефона"
            required
          >
        </label>

        <label>
          <span class="label-text">С чем хотите разобраться?</span>
          <textarea
            v-model="form.note"
            rows="3"
            placeholder="2–3 строки — по желанию"
          ></textarea>
        </label>

        <p v-if="result && !result.ok" role="alert" style="font-family: var(--font-sans); font-size: 14px; color: var(--clay); margin: 0;">
          {{ result.message }}
        </p>

        <button
          type="submit"
          class="btn btn-primary"
          :disabled="loading || !form.name.trim() || !form.contact.trim()"
          style="align-self: center;"
        >
          {{ loading ? 'Отправляем…' : 'Отправить заявку' }}
        </button>
      </form>
    </div>
  </section>
</template>
