import type { ContactFormData, ContactFormResult } from '~/types/landing'

/**
 * Stub for contact form submission.
 * Currently opens Telegram with a pre-filled message.
 * Future: replace with POST to /api/contact (Nuxt server route + Telegram bot).
 */
export function useContactForm() {
  const loading = ref(false)
  const result = ref<ContactFormResult | null>(null)

  async function submit(data: ContactFormData): Promise<ContactFormResult> {
    loading.value = true
    result.value = null

    try {
      const message = [
        `Здравствуйте! Меня зовут ${data.name}.`,
        `Контакт для связи: ${data.contact}.`,
        data.note ? `Главное, что сейчас болит: ${data.note}` : null,
        '',
        'Прошу вас о бесплатной диагностической сессии.',
      ]
        .filter(Boolean)
        .join('\n')

      const url = `https://t.me/raliyaya?text=${encodeURIComponent(message)}`

      if (import.meta.client) {
        window.open(url, '_blank', 'noopener,noreferrer')
      }

      const ok: ContactFormResult = {
        ok: true,
        message:
          'Открыла Telegram с готовым сообщением. Если он не открылся - напишите мне напрямую: @raliyaya',
      }
      result.value = ok
      return ok
    } catch (e) {
      const fail: ContactFormResult = {
        ok: false,
        message: 'Что-то пошло не так. Напишите мне напрямую: @raliyaya',
      }
      result.value = fail
      return fail
    } finally {
      loading.value = false
    }
  }

  return { submit, loading, result }
}
