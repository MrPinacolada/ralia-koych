export interface PainPoint {
  quote: string
  description: string
}

export interface PainPointGroup {
  eyebrow: string
  items: PainPoint[]
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
  level: string
  name: string
  price: number
  priceLabel: string
  duration: string
  outcome: string
  features?: string[]
  highlighted?: boolean
}

export interface Testimonial {
  quote: string
  name: string
  age: number
  role: string
  city: string
}

export interface CoachingQuestion {
  number: string
  question: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
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
