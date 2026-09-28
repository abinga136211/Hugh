<script setup>
import { computed, ref, watch } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useI18n } from '@/i18n/useI18n'
import newsVisual from '@/assets/images/news-insights.jpg'
import '@/assets/styles/page.css'

const PAGE_SIZE = 10
const { messages } = useI18n()

const newsItems = computed(() => messages.value.newsItems)
const newsTabs = computed(() => messages.value.newsTabs)
const newsPage = computed(() => messages.value.newsPage)
const ui = computed(() => messages.value.ui)

const activeTab = ref('')
const currentPage = ref(1)
const jumpPage = ref('')
const expandedKey = ref(null)

watch(
  newsTabs,
  (tabs) => {
    if (!tabs?.length) return
    if (!tabs.some((tab) => tab.id === activeTab.value)) {
      activeTab.value = tabs[0].id
    }
  },
  { immediate: true },
)

const activeTabLabel = computed(
  () => newsTabs.value.find((tab) => tab.id === activeTab.value)?.label ?? '',
)

const filteredNews = computed(() =>
  newsItems.value.filter((item) => item.category === activeTab.value),
)

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredNews.value.length / PAGE_SIZE)),
)

const pagedNews = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredNews.value.slice(start, start + PAGE_SIZE)
})

const pageNumbers = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages = new Set([1, total, current, current - 1, current + 1].filter(
    (n) => n >= 1 && n <= total,
  ))
  return [...pages].sort((a, b) => a - b)
})

function newsKey(item) {
  return `${item.category}-${item.date}-${item.title}`
}

function newsSummary(item) {
  if (item.summary) return item.summary
  return ui.value.newsSummaryTemplate
    .replace('{tag}', item.tag)
    .replace('{date}', item.date)
    .replace('{title}', item.title)
}

watch(activeTab, () => {
  currentPage.value = 1
  jumpPage.value = ''
  expandedKey.value = null
})

watch(currentPage, () => {
  expandedKey.value = null
})

function selectTab(id) {
  activeTab.value = id
}

function toggleNews(item) {
  const key = newsKey(item)
  expandedKey.value = expandedKey.value === key ? null : key
}

function goToPage(page) {
  const next = Math.min(Math.max(1, page), totalPages.value)
  currentPage.value = next
}

function goNext() {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1
  }
}

function jumpToPage() {
  const page = Number.parseInt(String(jumpPage.value), 10)
  if (Number.isNaN(page)) return
  goToPage(page)
  jumpPage.value = ''
}
</script>

<template>
  <AppHeader />
  <main class="page">
    <section class="edu-banner" :aria-label="ui.newsAria">
      <div class="edu-banner-visual">
        <img
          :src="newsVisual"
          alt=""
          width="1920"
          height="800"
          loading="eager"
        />
        <div class="edu-banner-copy js-reveal js-reveal--fade">
          <h1 class="edu-banner-title">{{ newsPage.hero.title }}</h1>
          <p class="edu-banner-subtitle">{{ newsPage.intro.subtitle }}</p>
        </div>
      </div>
    </section>

    <section class="page-body news-body">
      <div class="page-container">
        <nav class="news-tabs js-reveal" :aria-label="ui.newsCategoryAria">
          <button
            v-for="tab in newsTabs"
            :key="tab.id"
            type="button"
            class="news-tab"
            :class="{ 'is-active': tab.id === activeTab }"
            @click="selectTab(tab.id)"
          >
            {{ tab.label }}
          </button>
        </nav>

        <h2 class="news-section-title js-reveal" style="--reveal-delay: 60ms">{{ activeTabLabel }}</h2>

        <ul class="news-list">
          <li
            v-for="(item, index) in pagedNews"
            :key="newsKey(item)"
            class="news-list-item js-reveal"
            :class="{ 'is-open': expandedKey === newsKey(item) }"
            :style="{ '--reveal-delay': `${100 + index * 50}ms` }"
          >
            <button
              type="button"
              class="news-item"
              :aria-expanded="expandedKey === newsKey(item)"
              @click="toggleNews(item)"
            >
              <span class="news-item-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                  <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="currentColor" stroke-width="1.5" />
                  <path d="M5 6.5h6M5 9.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </span>
              <span class="news-item-title">{{ item.title }}</span>
              <time class="news-item-date" :datetime="item.date">{{ item.date }}</time>
              <span class="news-item-chevron" aria-hidden="true">⌄</span>
            </button>

            <div class="news-item-panel">
              <div class="news-item-panel-inner">
                <p class="news-item-summary">{{ newsSummary(item) }}</p>
              </div>
            </div>
          </li>
        </ul>

        <div
          v-if="totalPages > 1"
          class="news-pagination js-reveal"
          style="--reveal-delay: 200ms"
          :aria-label="ui.paginationAria"
        >
          <div class="news-pages">
            <template v-for="(page, index) in pageNumbers" :key="page">
              <span
                v-if="index > 0 && page - pageNumbers[index - 1] > 1"
                class="news-page-ellipsis"
                aria-hidden="true"
              >...</span>
              <button
                type="button"
                class="news-page-btn"
                :class="{ 'is-active': page === currentPage }"
                :aria-current="page === currentPage ? 'page' : undefined"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
            </template>
            <button
              type="button"
              class="news-page-btn news-page-next"
              :disabled="currentPage >= totalPages"
              :aria-label="ui.nextPageAria"
              @click="goNext"
            >
              &gt;
            </button>
          </div>

          <form class="news-jump" @submit.prevent="jumpToPage">
            <label class="news-jump-label" for="news-jump-input">{{ ui.jumpTo }}</label>
            <input
              id="news-jump-input"
              v-model="jumpPage"
              class="news-jump-input"
              type="text"
              inputmode="numeric"
              autocomplete="off"
            />
            <span class="news-jump-unit">{{ ui.pageUnit }}</span>
            <button type="submit" class="news-jump-go">GO</button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
</template>
