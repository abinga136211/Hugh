<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import contactVisual from '@/assets/images/hong-kong-ifc.jpg'

const { onAnchorClick } = useSmoothScroll()
const { messages } = useI18n()

const contactHero = computed(() => messages.value.contactHero)
const contactInfo = computed(() => messages.value.contactInfo)
const imageAlt = computed(() => messages.value.ui.contactHeroImageAlt)

const addressLabels = new Set(['地址', 'Address'])
const stacked = computed(() =>
  contactInfo.value.items.filter((item) => !addressLabels.has(item.label)),
)
const address = computed(() =>
  contactInfo.value.items.find((item) => addressLabels.has(item.label)),
)
</script>

<template>
  <section class="about-hero about-hero--profile">
    <div class="about-container">
      <header class="about-profile-header js-reveal">
        <h1 class="about-profile-title">
          {{ contactHero.title }}
          <span class="about-profile-mark" aria-hidden="true"></span>
        </h1>
        <p class="about-profile-subtitle">{{ contactHero.subtitle }}</p>
      </header>

      <div class="about-hero-grid">
        <div class="about-hero-panel js-reveal js-reveal--left" style="--reveal-delay: 80ms">
          <p class="about-hero-company">{{ contactHero.company }}</p>
          <p class="about-hero-desc">{{ contactHero.description }}</p>

          <div class="contact-find contact-find--panel">
            <div class="contact-find-details">
              <div class="contact-find-stack">
                <div
                  v-for="(item, index) in stacked"
                  :key="item.label"
                  class="contact-find-item js-reveal"
                  :style="{ '--reveal-delay': `${140 + index * 60}ms` }"
                >
                  <h3 class="contact-find-label">{{ item.label }}</h3>
                  <a
                    v-if="item.href"
                    :href="item.href"
                    class="contact-find-value contact-find-link"
                  >
                    {{ item.value }}
                  </a>
                  <p v-else class="contact-find-value">{{ item.value }}</p>
                </div>
              </div>

              <div v-if="address" class="contact-find-item js-reveal" style="--reveal-delay: 280ms">
                <h3 class="contact-find-label">{{ address.label }}</h3>
                <p class="contact-find-value">{{ address.value }}</p>
              </div>
            </div>
          </div>

          <a
            :href="contactHero.ctaHref"
            class="about-btn about-btn-primary js-reveal"
            style="--reveal-delay: 340ms"
            @click="onAnchorClick"
          >
            {{ contactHero.ctaLabel }}
          </a>
        </div>

        <div class="about-hero-media js-reveal js-reveal--right" style="--reveal-delay: 140ms">
          <img
            :src="contactVisual"
            :alt="imageAlt"
            width="1200"
            height="1500"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
</template>
