<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import heroBg from '@/assets/images/hong-kong-harbour.jpg'

const { onAnchorClick } = useSmoothScroll()
const { messages } = useI18n()

const hero = computed(() => messages.value.home.hero)
const heroFeatures = computed(() => messages.value.heroFeatures)
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-banner">
      <div
        class="hero-banner-media"
        :style="{ backgroundImage: `url(${heroBg})` }"
      >
        <div class="hero-banner-title-wrap">
          <div class="hero-banner-heading">
            <p class="hero-banner-eyebrow">{{ hero.eyebrow }}</p>
            <h1>
              <span class="hero-banner-line">{{ hero.title }}</span>
            </h1>
            <span class="hero-banner-rule" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-panel">
      <div class="container">
        <div class="hero-panel-inner">
          <div class="hero-copy js-reveal js-reveal--left">
            <h2 class="hero-title">{{ hero.subtitle }}</h2>
            <span class="hero-accent-line" aria-hidden="true"></span>
            <p class="hero-desc">{{ hero.description }}</p>
            <div class="hero-actions">
              <RouterLink to="/about" class="hero-more">{{ hero.cta }}</RouterLink>
            </div>
          </div>

          <div class="hero-features">
            <a
              v-for="(feature, index) in heroFeatures"
              :key="feature.label"
              href="#services"
              class="hero-feature-card js-reveal js-reveal--right"
              :style="{ '--reveal-delay': `${120 + index * 90}ms` }"
              @click="onAnchorClick"
            >
              <span class="hero-feature-icon" :data-icon="feature.icon" aria-hidden="true"></span>
              <span class="hero-feature-label">{{ feature.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
