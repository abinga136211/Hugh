<script setup>
import { computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import PageHero from '@/components/page/PageHero.vue'
import { useI18n } from '@/i18n/useI18n'
import servicesVisual from '@/assets/images/trading-hall.jpg'
import '@/assets/styles/page.css'

const { messages } = useI18n()
const servicesPage = computed(() => messages.value.servicesPage)
const imageAlt = computed(() => messages.value.ui.servicesImageAlt)
</script>

<template>
  <AppHeader />
  <main class="page">
    <PageHero
      variant="profile"
      :title="servicesPage.hero.title"
      :subtitle="servicesPage.hero.eyebrow"
      :panel-tag="servicesPage.intro.tag"
      :panel-title="servicesPage.intro.title"
      :panel-desc="servicesPage.intro.subtitle"
      :cta-label="servicesPage.hero.ctaLabel"
      :cta-to="servicesPage.hero.ctaTo"
      :image="servicesVisual"
      :image-alt="imageAlt"
    />

    <section class="page-body">
      <div class="page-container">
        <div class="page-split-groups">
          <article
            v-for="(card, index) in servicesPage.cards"
            :id="card.id"
            :key="card.title"
            class="page-split-group js-reveal"
            :style="{ '--reveal-delay': `${index * 80}ms` }"
          >
            <span class="page-split-badge">{{ card.badge }}</span>
            <h3 class="page-split-heading">{{ card.title }}</h3>
            <div class="page-split-body">
              <p class="page-split-copy">{{ card.desc }}</p>
              <ul class="page-split-list">
                <li v-for="feature in card.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
  <AppFooter />
</template>
