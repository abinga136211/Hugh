<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'

const { messages } = useI18n()
const aboutStory = computed(() => messages.value.aboutStory)
</script>

<template>
  <div class="about-strengths about-strengths--solo">
    <div class="about-strengths-intro js-reveal">
      <span class="about-strengths-tag">{{ aboutStory.featuresTag }}</span>
      <h2 class="about-strengths-title">{{ aboutStory.featuresTitle }}</h2>
      <p class="about-strengths-desc">{{ aboutStory.featuresIntro }}</p>
    </div>

    <ul class="about-strengths-list">
      <li
        v-for="(feature, index) in aboutStory.features"
        :key="feature.title"
        class="about-strengths-item js-reveal"
        :style="{ '--reveal-delay': `${80 + index * 80}ms` }"
      >
        <h3 class="about-strengths-item-title">{{ feature.title }}</h3>
        <p class="about-strengths-item-desc">{{ feature.desc }}</p>
      </li>
    </ul>
  </div>
</template>
