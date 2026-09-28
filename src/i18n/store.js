import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import en from './locales/en'
import zhCN from './locales/zh-CN'
import zhHant from './locales/zh-Hant'

export const LOCALES = [
  { code: 'zh-CN', label: '简', htmlLang: 'zh-CN' },
  { code: 'zh-Hant', label: '繁', htmlLang: 'zh-Hant' },
  { code: 'en', label: 'EN', htmlLang: 'en' },
]

const STORAGE_KEY = 'sk-group-locale'

const catalogs = {
  'zh-CN': zhCN,
  'zh-Hant': zhHant,
  en,
}

function resolveLocale(code) {
  return catalogs[code] ? code : 'zh-CN'
}

function applyDocumentMeta(messages, htmlLang) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = htmlLang
  if (messages?.meta?.title) {
    document.title = messages.meta.title
  }
  const description = messages?.meta?.description
  if (description) {
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }
}

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref('zh-CN')

  const messages = computed(() => catalogs[locale.value] || catalogs['zh-CN'])

  const htmlLang = computed(() => {
    return LOCALES.find((item) => item.code === locale.value)?.htmlLang || 'zh-CN'
  })

  function setLocale(code) {
    const next = resolveLocale(code)
    locale.value = next
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next)
    }
    applyDocumentMeta(catalogs[next], htmlLang.value)
  }

  function hydrate() {
    let saved = 'zh-CN'
    if (typeof localStorage !== 'undefined') {
      saved = resolveLocale(localStorage.getItem(STORAGE_KEY))
    }
    locale.value = saved
    applyDocumentMeta(catalogs[saved], LOCALES.find((item) => item.code === saved)?.htmlLang || 'zh-CN')
  }

  return {
    locale,
    messages,
    htmlLang,
    setLocale,
    hydrate,
  }
})
