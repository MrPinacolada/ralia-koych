<script setup lang="ts">
import type { ContactFormData } from '~/types/landing'

const { submit, loading, result } = useContactForm()

const form = reactive<ContactFormData>({
  name: '',
  contact: '',
  note: '',
})

const submitted = ref(false)

async function onSubmit() {
  if (!form.name.trim() || !form.contact.trim()) return
  const res = await submit(form)
  if (res.ok) {
    submitted.value = true
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
  <UiSectionWrapper anchor="final-cta" bg="cream" spacing="lg">
    <UiAppContainer width="narrow" as="div">
      <div class="text-center">
        <p class="eyebrow text-clay mb-5">Первая встреча</p>
        <h2 class="pull-italic text-[36px] md:text-[56px] text-ink mb-5 leading-[1.1]">
          Готовы выстроить опору на себя?
        </h2>
        <p class="font-sans text-[17px] text-ink/85 mb-8 max-w-[50ch] mx-auto leading-[1.6]">
          Первая встреча — бесплатна. Посмотрим, есть ли между нами контакт, и наметим направление.
        </p>

        <UiAppButton
          variant="primary"
          size="md"
          href="https://t.me/raliyaya"
          external
          class="mb-3"
        >
          Записаться в Telegram →
        </UiAppButton>
        <p class="font-sans text-sm text-fog mb-12">
          Отвечаю лично, обычно в течение часа. Пишу с 9:00 до 21:00 МСК.
        </p>

        <hr class="border-sand max-w-[160px] mx-auto mb-12" />

        <p class="eyebrow mb-5">Или напишите через форму</p>
      </div>

      <div v-if="submitted" class="bg-paper rounded-md p-8 md:p-10 shadow-soft text-center">
        <p class="num text-[44px] text-clay mb-2">🌿</p>
        <h3 class="pull text-[26px] md:text-[32px] text-ink mb-3">
          Получила!
        </h3>
        <p class="font-sans text-[16px] text-ink/85 mb-5 leading-[1.6] max-w-[44ch] mx-auto">
          Спасибо, что решились на этот шаг. Я уже вижу вашу заявку и напишу вам в Telegram сегодня — обычно в течение часа в рабочее время. Жду нашу встречу.
        </p>
        <p class="font-sans font-medium text-[15px] text-clay mb-6">
          С теплом, Ралия
        </p>
        <p class="font-sans text-sm text-fog mb-5 max-w-[44ch] mx-auto leading-[1.6]">
          Загляните в Telegram (<a href="https://t.me/raliyaya" target="_blank" rel="noopener noreferrer" class="text-ink hover:text-clay">@raliyaya</a>). Если за час я не написала — посмотрите «Архив» и «Спам». И подпишитесь на <a href="https://t.me/raliyagovorit" target="_blank" rel="noopener noreferrer" class="text-ink hover:text-clay">@raliyagovorit</a> — там я делюсь практиками про отдых, опору и движение.
        </p>
        <UiAppButton variant="ghost" size="sm" @click="reset">
          Отправить ещё одну заявку
        </UiAppButton>
      </div>

      <form
        v-else
        class="text-left space-y-6"
        @submit.prevent="onSubmit"
      >
        <p class="font-sans font-medium text-[17px] md:text-[18px] text-ink leading-snug max-w-[58ch]">
          Напишите, как вас зовут и как с вами связаться. Я отвечу лично в течение нескольких часов.
        </p>

        <UiAppInput
          v-model="form.name"
          label="Как вас зовут?"
          placeholder="Ваше имя"
          required
        />
        <UiAppInput
          v-model="form.contact"
          label="Telegram или телефон"
          placeholder="@ваш_ник или номер телефона"
          required
        />
        <UiAppInput
          v-model="form.note"
          label="Что у вас сильнее всего болит?"
          placeholder="2-3 строки — по желанию"
          multiline
          :rows="3"
          helper="По желанию — поможет мне подготовиться к встрече."
        />

        <p v-if="result && !result.ok" class="font-sans text-sm text-clay">
          {{ result.message }}
        </p>

        <UiAppButton
          type="submit"
          variant="primary"
          size="md"
          :disabled="loading || !form.name.trim() || !form.contact.trim()"
        >
          {{ loading ? 'Отправляем…' : 'Отправить заявку' }}
        </UiAppButton>
      </form>
    </UiAppContainer>
  </UiSectionWrapper>
</template>
