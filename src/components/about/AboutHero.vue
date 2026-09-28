<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import aboutVisual from '@/assets/images/hong-kong-harbour.jpg'

const { messages } = useI18n()
const aboutHero = computed(() => messages.value.aboutHero)
const imageAlt = computed(() => messages.value.ui.aboutHeroImageAlt)
</script>

<template>
  <section class="about-hero about-hero--profile">
    <div class="about-container">
      <header class="about-profile-header js-reveal">
        <h1 class="about-profile-title">
          {{ aboutHero.title }}
          <span class="about-profile-mark" aria-hidden="true"></span>
        </h1>
        <p class="about-profile-subtitle">{{ aboutHero.subtitle }}</p>
      </header>

      <div class="about-hero-grid">
        <div class="about-hero-panel js-reveal js-reveal--left" style="--reveal-delay: 80ms">
          <p class="about-hero-company">{{ aboutHero.company }}</p>
          <p class="about-hero-desc">{{ aboutHero.description }}</p>

          <div class="about-hero-stats">
            <div
              v-for="(stat, index) in aboutHero.stats"
              :key="stat.label"
              class="about-hero-stat js-reveal"
              :style="{ '--reveal-delay': `${160 + index * 70}ms` }"
            >
              <div class="about-hero-stat-num">
                {{ stat.num }}<span class="about-hero-stat-unit">{{ stat.unit }}</span>
              </div>
              <div class="about-hero-stat-label">{{ stat.label }}</div>
            </div>
          </div>

          <RouterLink :to="aboutHero.ctaTo" class="about-btn about-btn-primary js-reveal" style="--reveal-delay: 360ms">
            {{ aboutHero.ctaLabel }}
          </RouterLink>
        </div>

        <div class="about-hero-media js-reveal js-reveal--right" style="--reveal-delay: 140ms">
          <img
            :src="aboutVisual"
            :alt="imageAlt"
            width="1600"
            height="900"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
</template>
