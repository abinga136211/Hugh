<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useI18n } from '@/i18n/useI18n'
import { scrollToHash } from '@/composables/useSmoothScroll'
import educationBanner from '@/assets/images/education-banner.jpg'
import '@/assets/styles/page.css'

const route = useRoute()
const { messages } = useI18n()

const educationCards = computed(() => messages.value.educationCards)
const educationCategories = computed(() => messages.value.educationCategories)
const educationPage = computed(() => messages.value.educationPage)
const ui = computed(() => messages.value.ui)

const searchQuery = ref('')
const activeCategoryId = ref('')
const activeArticleTitle = ref('')
const openCategoryIds = ref(new Set())

watch(
  educationCategories,
  (cats) => {
    if (!cats?.length) return
    if (!cats.some((c) => c.id === activeCategoryId.value)) {
      activeCategoryId.value = cats[0].id
      activeArticleTitle.value = cats[0].items[0]?.title ?? ''
      openCategoryIds.value = new Set([cats[0].id])
    }
  },
  { immediate: true },
)

const activeCategory = computed(
  () =>
    educationCategories.value.find((c) => c.id === activeCategoryId.value) ??
    educationCategories.value[0],
)

const activeCourse = computed(
  () =>
    educationCards.value.find((card) => card.category === activeCategory.value?.label) ??
    educationCards.value[0],
)

const activeArticle = computed(() => {
  const items = activeCategory.value?.items ?? []
  return items.find((item) => item.title === activeArticleTitle.value) ?? items[0]
})

const filteredCategories = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return educationCategories.value

  return educationCategories.value
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => item.title.toLowerCase().includes(q)),
    }))
    .filter((category) => category.items.length > 0 || category.label.toLowerCase().includes(q))
})

const articleIntro = computed(() => {
  if (activeCourse.value?.title === activeArticle.value?.title) {
    return activeCourse.value.desc
  }
  return ui.value.articleIntroTemplate.replace('{category}', activeCategory.value?.label ?? '')
})

function isCategoryOpen(id) {
  return openCategoryIds.value.has(id)
}

function toggleCategory(id) {
  const next = new Set(openCategoryIds.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  openCategoryIds.value = next
}

function openCategory(id) {
  if (openCategoryIds.value.has(id)) return
  const next = new Set(openCategoryIds.value)
  next.add(id)
  openCategoryIds.value = next
}

function selectCategory(category) {
  if (!category) return
  activeCategoryId.value = category.id
  openCategory(category.id)
  if (category.items[0]) {
    activeArticleTitle.value = category.items[0].title
  }
}

function onCategoryClick(category) {
  const isActive = category.id === activeCategoryId.value
  const isOpen = openCategoryIds.value.has(category.id)

  if (isActive && isOpen) {
    toggleCategory(category.id)
    return
  }

  selectCategory(category)
}

function selectArticle(category, item) {
  activeCategoryId.value = category.id
  activeArticleTitle.value = item.title
  openCategory(category.id)
}

async function applyEducationHash(hash) {
  const id = (hash || '').replace(/^#/, '')
  if (!id) return

  if (id !== 'courses') {
    const category = educationCategories.value.find((c) => c.id === id)
    if (!category) return
    searchQuery.value = ''
    selectCategory(category)
  }

  await nextTick()
  scrollToHash('#courses')
}

watch(
  () => route.hash,
  (hash) => {
    applyEducationHash(hash)
  },
  { immediate: true },
)
</script>

<template>
  <AppHeader />
  <main class="page">
    <section class="edu-banner" :aria-label="ui.educationAria">
      <div class="edu-banner-visual">
        <img
          :src="educationBanner"
          alt=""
          width="1920"
          height="800"
          loading="eager"
        />
        <div class="edu-banner-copy js-reveal js-reveal--fade">
          <h1 class="edu-banner-title">{{ educationPage.hero.title }}</h1>
          <p class="edu-banner-subtitle">{{ educationPage.intro.title }}</p>
        </div>
      </div>
    </section>

    <section id="courses" class="edu-center">
      <div class="page-container">
        <div class="edu-course-stack">
          <header class="edu-hub-header js-reveal">
            <h2 class="edu-hub-title">{{ educationPage.intro.tag }}</h2>
            <p class="edu-hub-intro">{{ educationPage.intro.subtitle }}</p>

            <label class="edu-search">
              <span class="visually-hidden">{{ ui.searchCoursesAria }}</span>
              <input
                v-model="searchQuery"
                type="search"
                class="edu-search-input"
                :placeholder="ui.searchPlaceholder"
                autocomplete="off"
              />
              <span class="edu-search-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
                  <path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </span>
            </label>
          </header>

          <div class="edu-hub-layout">
            <aside
              class="edu-sidebar js-reveal js-reveal--left"
              style="--reveal-delay: 80ms"
              :aria-label="ui.courseCatalogueAria"
            >
              <ul class="edu-nav">
                <li
                  v-for="category in filteredCategories"
                  :key="category.id"
                  class="edu-nav-group"
                  :class="{ 'is-active': category.id === activeCategoryId }"
                >
                  <button
                    type="button"
                    class="edu-nav-category"
                    :aria-expanded="isCategoryOpen(category.id)"
                    @click="onCategoryClick(category)"
                  >
                    <span>{{ category.label }}</span>
                    <span class="edu-nav-chevron" aria-hidden="true"></span>
                  </button>

                  <ul v-show="isCategoryOpen(category.id)" class="edu-nav-items">
                    <li v-for="item in category.items" :key="item.title">
                      <button
                        type="button"
                        class="edu-nav-item"
                        :class="{ 'is-active': item.title === activeArticleTitle }"
                        @click="selectArticle(category, item)"
                      >
                        {{ item.title }}
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </aside>

            <div
              v-if="activeCategory && activeArticle"
              class="edu-main js-reveal js-reveal--right"
              style="--reveal-delay: 140ms"
            >
              <h2 class="edu-main-category">{{ activeCategory.label }}</h2>
              <article class="edu-article">
                <h3 class="edu-article-title">{{ activeArticle.title }}</h3>
                <p class="edu-article-desc">{{ articleIntro }}</p>
                <ul class="edu-article-points">
                  <li v-for="tip in ui.articleTips" :key="tip">{{ tip }}</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
</template>
