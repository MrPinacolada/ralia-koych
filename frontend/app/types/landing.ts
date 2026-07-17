export interface PainPoint {
  quote: string
}

export interface MethodStep {
  number: string
  title: string
  description: string
}

export interface PromiseList {
  eyebrow: string
  items: string[]
  accent: 'moss' | 'clay'
}

export interface Credential {
  primary: string
  secondary?: string
}

export interface PricingTier {
  /** Tier name shown as the eyebrow above the price (e.g. «Ясность») */
  name: string
  price: number
  priceLabel: string
  duration: string
  /** «Подходит» body line for this tier */
  fits: string
  highlighted?: boolean
}

export interface Testimonial {
  quote: string
  /** Display name / handle (e.g. «Клиент», «@LoraUfa») */
  name: string
  /** Short context label under the name (e.g. «3 сессии») */
  context: string
}

export interface FAQItem {
  question: string
  /** Optional anchor id placed on the question span (deep-linked from other sections) */
  id?: string
  /** Answer paragraphs; may contain trusted inline markup (<strong>) */
  answer: string[]
}

export interface ContactFormData {
  name: string
  contact: string
  note?: string
}

export interface ContactFormResult {
  ok: boolean
  message: string
}
