import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from './store'

function getByPath(obj, path) {
  if (!path) return obj
  return path.split('.').reduce((acc, key) => {
    if (acc == null) return undefined
    return acc[key]
  }, obj)
}

export function useI18n() {
  const store = useLocaleStore()
  const { locale, messages, htmlLang } = storeToRefs(store)

  const t = (path, fallback = '') => {
    const value = getByPath(messages.value, path)
    return value == null ? fallback : value
  }

  return {
    locale,
    messages,
    htmlLang,
    t,
    setLocale: store.setLocale,
    m: computed(() => messages.value),
  }
}
