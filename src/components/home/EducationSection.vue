<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import thumbIntro from '@/assets/images/hong-kong-harbour.jpg'
import thumbRisk from '@/assets/images/edu-risk.jpg'
import thumbStrategy from '@/assets/images/trading-panel-laptop.jpg'
import thumbEtf from '@/assets/images/hong-kong-ifc.jpg'

const { messages } = useI18n()
const educationCards = computed(() => messages.value.educationCards)
const copy = computed(() => messages.value.home.education)
const thumbs = [thumbIntro, thumbRisk, thumbStrategy, thumbEtf]
</script>

<template>
  <section class="edu-section" id="education">
    <div class="container">
      <h2 class="edu-heading js-reveal">
        <span class="edu-heading-bar" aria-hidden="true"></span>
        {{ copy.title }}
      </h2>

      <div class="edu-list">
        <RouterLink
          v-for="(card, index) in educationCards"
          :key="card.title"
          to="/education"
          class="edu-item js-reveal"
          :style="{ '--reveal-delay': `${80 + index * 90}ms` }"
        >
          <div class="edu-thumb">
            <img
              :src="thumbs[index]"
              :alt="card.title"
              width="160"
              height="160"
              loading="lazy"
            />
          </div>
          <div class="edu-body">
            <span class="edu-cat">{{ card.category }}</span>
            <h3 class="edu-title">{{ card.title }}</h3>
            <span class="edu-meta">{{ card.articles }} · {{ card.duration }}</span>
          </div>
        </RouterLink>
      </div>

      <div class="edu-actions js-reveal" style="--reveal-delay: 200ms">
        <RouterLink to="/education" class="edu-more">{{ copy.cta }}</RouterLink>
      </div>
    </div>
  </section>
</template>
