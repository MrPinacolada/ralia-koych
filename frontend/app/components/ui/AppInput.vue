<script setup lang="ts">
interface Props {
  modelValue: string
  label: string
  placeholder?: string
  type?: 'text' | 'email' | 'tel'
  required?: boolean
  multiline?: boolean
  rows?: number
  error?: string
  helper?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  multiline: false,
  rows: 3,
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = useId()
const helperId = computed(() => (props.helper || props.error ? `${inputId}-helper` : undefined))

const baseInputClasses =
  'w-full bg-transparent border-0 border-b px-0 py-3 font-sans text-base text-ink placeholder:text-fog/60 focus:outline-none transition-colors duration-200'

const stateClasses = computed(() =>
  props.error
    ? 'border-clay focus:border-clay focus:shadow-[0_0_0_3px_rgba(184,95,64,0.18)]'
    : 'border-ink/30 focus:border-ink focus:shadow-focus'
)
</script>

<template>
  <label :for="inputId" class="block">
    <span class="block font-sans text-xs uppercase tracking-eyebrow text-fog mb-2">
      {{ label }}
      <span v-if="required" class="text-clay" aria-hidden="true">*</span>
    </span>
    <textarea
      v-if="multiline"
      :id="inputId"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      :aria-describedby="helperId"
      :aria-invalid="!!error"
      :class="[baseInputClasses, stateClasses, 'resize-none']"
      @input="
        $emit(
          'update:modelValue',
          ($event.target as HTMLTextAreaElement).value,
        )
      "
    />
    <input
      v-else
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :aria-describedby="helperId"
      :aria-invalid="!!error"
      :class="[baseInputClasses, stateClasses]"
      @input="
        $emit(
          'update:modelValue',
          ($event.target as HTMLInputElement).value,
        )
      "
    />
    <p
      v-if="error || helper"
      :id="helperId"
      :class="[
        'mt-2 font-sans text-sm',
        error ? 'text-clay' : 'text-fog',
      ]"
    >
      {{ error || helper }}
    </p>
  </label>
</template>
