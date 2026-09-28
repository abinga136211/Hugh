<script setup>
import { computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import PageHero from '@/components/page/PageHero.vue'
import FeesSection from '@/components/home/FeesSection.vue'
import WithdrawalFeesTable from '@/components/page/WithdrawalFeesTable.vue'
import { useI18n } from '@/i18n/useI18n'
import feesVisual from '@/assets/images/trading-fees.jpg'
import '@/assets/styles/page.css'

const { messages } = useI18n()
const feesPage = computed(() => messages.value.feesPage)
const imageAlt = computed(() => messages.value.ui.feesImageAlt)
</script>

<template>
  <AppHeader />
  <main class="page">
    <PageHero
      variant="profile"
      :title="feesPage.hero.title"
      :subtitle="feesPage.hero.eyebrow"
      :panel-tag="feesPage.intro.tag"
      :panel-title="feesPage.intro.title"
      :panel-desc="feesPage.intro.subtitle"
      :cta-label="feesPage.hero.ctaLabel"
      :cta-href="feesPage.hero.ctaHref"
      :image="feesVisual"
      :image-alt="imageAlt"
    />

    <FeesSection :show-detail-link="false" :note="feesPage.note" />
    <WithdrawalFeesTable />
  </main>
  <AppFooter />
</template>
