<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

defineProps({
  variant: { type: String, default: 'default' },
  eyebrow: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  panelTag: { type: String, default: '' },
  panelTitle: { type: String, default: '' },
  panelDesc: { type: String, default: '' },
  ctaLabel: { type: String, default: '' },
  ctaHref: { type: String, default: '' },
  ctaTo: { type: String, default: '' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
})

const { messages } = useI18n()
const placeholder = computed(() => messages.value.ui.imagePlaceholder)
const { onAnchorClick } = useSmoothScroll()
</script>

<template>
  <section
    class="page-hero"
    :class="{ 'page-hero--profile': variant === 'profile' }"
  >
    <div class="page-container">
      <template v-if="variant === 'profile'">
        <header class="page-profile-header js-reveal">
          <h1 class="page-profile-title">
            {{ title }}
            <span class="page-profile-mark" aria-hidden="true"></span>
          </h1>
          <p class="page-profile-subtitle">{{ subtitle || eyebrow }}</p>
        </header>

        <div class="page-hero-grid">
          <div class="page-hero-panel js-reveal js-reveal--left" style="--reveal-delay: 80ms">
            <span v-if="panelTag" class="page-panel-tag">{{ panelTag }}</span>
            <p v-if="panelTitle" class="page-hero-company">{{ panelTitle }}</p>
            <p v-if="description" class="page-hero-desc">{{ description }}</p>
            <p v-if="panelDesc" class="page-hero-panel-desc">{{ panelDesc }}</p>

            <RouterLink
              v-if="ctaLabel && ctaTo"
              :to="ctaTo"
              class="page-btn page-btn-primary"
            >
              {{ ctaLabel }}
            </RouterLink>
            <a
              v-else-if="ctaLabel && ctaHref"
              :href="ctaHref"
              class="page-btn page-btn-primary"
              @click="onAnchorClick"
            >
              {{ ctaLabel }}
            </a>
          </div>

          <div class="page-hero-media js-reveal js-reveal--right" style="--reveal-delay: 140ms">
            <img
              v-if="image"
              :src="image"
              :alt="imageAlt || title"
              width="1600"
              height="900"
              loading="eager"
            />
            <span v-else aria-hidden="true">{{ placeholder }}</span>
          </div>
        </div>
      </template>

      <div v-else class="page-hero-grid">
        <div class="page-hero-content js-reveal js-reveal--left">
          <p v-if="eyebrow" class="page-hero-eyebrow">{{ eyebrow }}</p>
          <h1 class="page-hero-title">{{ title }}</h1>
          <p v-if="description" class="page-hero-desc">{{ description }}</p>
          <RouterLink
            v-if="ctaLabel && ctaTo"
            :to="ctaTo"
            class="page-btn page-btn-primary"
          >
            {{ ctaLabel }}
          </RouterLink>
          <a
            v-else-if="ctaLabel && ctaHref"
            :href="ctaHref"
            class="page-btn page-btn-primary"
            @click="onAnchorClick"
          >
            {{ ctaLabel }}
          </a>
        </div>
        <div class="page-hero-media js-reveal js-reveal--right" style="--reveal-delay: 120ms" aria-hidden="true">
          {{ placeholder }}
        </div>
      </div>
    </div>
  </section>
</template>
