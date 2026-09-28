<script setup>
import { LOCALES, useLocaleStore } from '@/i18n/store'
import { storeToRefs } from 'pinia'

defineProps({
  compact: { type: Boolean, default: false },
})

const emit = defineEmits(['change'])
const store = useLocaleStore()
const { locale } = storeToRefs(store)

function onSelect(code) {
  store.setLocale(code)
  emit('change', code)
}
</script>

<template>
  <div class="lang-switcher" :class="{ 'lang-switcher--compact': compact }" role="group" aria-label="Language">
    <button
      v-for="item in LOCALES"
      :key="item.code"
      type="button"
      class="lang-switcher__btn"
      :class="{ 'is-active': locale === item.code }"
      :aria-pressed="locale === item.code"
      @click="onSelect(item.code)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
