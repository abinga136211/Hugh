<script setup>
import { computed, ref } from 'vue'
import { useI18n } from '@/i18n/useI18n'

const { messages } = useI18n()
const faqs = computed(() => messages.value.faqs)
const copy = computed(() => messages.value.home.faq)
const activeIndex = ref(null)

function toggleFaq(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section class="section section-alt" id="support">
    <div class="container">
      <div class="section-header js-reveal">
        <span class="section-tag">{{ copy.tag }}</span>
        <h2 class="section-title">{{ copy.title }}</h2>
        <p class="section-subtitle">{{ copy.subtitle }}</p>
      </div>

      <div class="faq-section">
        <div
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="faq-item js-reveal"
          :class="{ active: activeIndex === index }"
          :style="{ '--reveal-delay': `${80 + index * 70}ms` }"
        >
          <button
            type="button"
            class="faq-question"
            :aria-expanded="activeIndex === index"
            @click="toggleFaq(index)"
          >
            <span class="faq-question-text">{{ faq.question }}</span>
            <span class="faq-toggle" aria-hidden="true">⌄</span>
          </button>
          <div class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>

        <div class="faq-more js-reveal" style="--reveal-delay: 200ms">
          <RouterLink to="/support" class="btn btn-outline">{{ copy.cta }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
