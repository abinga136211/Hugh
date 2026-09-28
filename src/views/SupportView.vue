<script setup>
import { computed, ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useI18n } from '@/i18n/useI18n'
import supportVisual from '@/assets/images/customer-support.jpg'
import '@/assets/styles/page.css'

const { messages } = useI18n()
const faqs = computed(() => messages.value.faqs)
const supportPage = computed(() => messages.value.supportPage)
const ui = computed(() => messages.value.ui)

const activeIndex = ref(null)

function toggleFaq(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <AppHeader />
  <main class="page">
    <section class="edu-banner" :aria-label="ui.supportAria">
      <div class="edu-banner-visual">
        <img
          :src="supportVisual"
          alt=""
          width="1920"
          height="800"
          loading="eager"
        />
        <div class="edu-banner-copy js-reveal">
          <h1 class="edu-banner-title">{{ supportPage.hero.title }}</h1>
          <p class="edu-banner-subtitle">{{ supportPage.hero.description }}</p>
        </div>
      </div>
    </section>

    <section class="page-body page-body-alt">
      <div class="page-container">
        <div id="faq" class="page-faq">
          <h3 class="page-faq-title js-reveal">{{ ui.faqSectionTitle }}</h3>
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="page-faq-item js-reveal"
            :class="{ active: activeIndex === index }"
            :style="{ '--reveal-delay': `${80 + index * 60}ms` }"
          >
            <button
              type="button"
              class="page-faq-question"
              :aria-expanded="activeIndex === index"
              @click="toggleFaq(index)"
            >
              <span>{{ faq.question }}</span>
              <span class="page-faq-toggle" aria-hidden="true">⌄</span>
            </button>
            <div class="page-faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
</template>
