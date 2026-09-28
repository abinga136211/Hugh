<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import servicesVisual from '@/assets/images/trading-panel-laptop.jpg'

const { messages } = useI18n()
const servicesSummary = computed(() => messages.value.servicesSummary)
const heroStats = computed(() => messages.value.heroStats)
const copy = computed(() => messages.value.home.services)
</script>

<template>
  <section class="services-section" id="services">
    <div class="container">
      <article class="services-block services-block--single">
        <div class="services-visual js-reveal js-reveal--left">
          <div class="services-visual-stage">
            <img
              :src="servicesVisual"
              :alt="copy.imageAlt"
              class="services-visual-image"
              width="1300"
              height="868"
              loading="lazy"
            />
          </div>
        </div>

        <div class="services-copy js-reveal js-reveal--right" style="--reveal-delay: 100ms">
          <h2 class="services-title">{{ servicesSummary.title }}</h2>
          <p class="services-desc">{{ servicesSummary.desc }}</p>
          <ul class="services-list">
            <li
              v-for="(item, index) in servicesSummary.highlights"
              :key="item"
              class="js-reveal"
              :style="{ '--reveal-delay': `${180 + index * 80}ms` }"
            >
              <span class="services-plus" aria-hidden="true">+</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <RouterLink to="/services" class="services-cta js-reveal" style="--reveal-delay: 420ms">
            {{ copy.cta }}
          </RouterLink>
        </div>
      </article>

      <div class="services-stats">
        <div
          v-for="(stat, index) in heroStats"
          :key="stat.label"
          class="services-stat js-reveal"
          :style="{ '--reveal-delay': `${index * 90}ms` }"
        >
          <div class="services-stat-num">
            {{ stat.num }}<span class="services-stat-unit">{{ stat.unit }}</span>
          </div>
          <div class="services-stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
