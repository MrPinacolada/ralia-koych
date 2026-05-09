<script setup lang="ts">
const { promiseLists } = useLandingContent()
</script>

<template>
  <UiSectionWrapper anchor="promise" bg="bone" spacing="md">
    <div class="max-w-wide mx-auto">
      <h2 class="pull text-[34px] md:text-[48px] text-ink mb-10 max-w-[20ch]">
        На сессиях мы сможем — и что вы получите
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="(list, i) in promiseLists"
          :key="i"
          class="bg-paper rounded-md p-7 md:p-10 shadow-soft"
        >
          <p
            class="eyebrow mb-5"
            :class="list.accent === 'clay' ? 'text-clay' : ''"
          >
            {{ list.eyebrow }}
          </p>
          <ul class="space-y-3 font-sans text-[15px] md:text-[16px] text-ink/90 leading-[1.55]">
            <li
              v-for="(item, idx) in list.items"
              :key="idx"
              class="flex gap-3"
            >
              <span
                :class="['flex-shrink-0', list.accent === 'clay' ? 'text-clay' : 'text-moss']"
                aria-hidden="true"
              >
                ✔
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>
