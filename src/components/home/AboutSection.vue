<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import aboutVisual from '@/assets/images/hong-kong-ifc.jpg'

const { messages } = useI18n()
const about = computed(() => messages.value.home.about)
</script>

<template>
  <section class="section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-text js-reveal js-reveal--left">
          <span class="section-tag">{{ about.tag }}</span>
          <h2>{{ about.title }}</h2>
          <p>{{ about.body }}</p>
          <RouterLink to="/about" class="btn btn-primary about-text-cta">
            {{ about.cta }}
          </RouterLink>
        </div>
        <div class="about-visual js-reveal js-reveal--right" style="--reveal-delay: 120ms">
          <figure class="about-visual-media">
            <img
              :src="aboutVisual"
              :alt="about.imageAlt"
              width="1200"
              height="1500"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
