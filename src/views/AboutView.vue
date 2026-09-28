<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AboutHero from '@/components/about/AboutHero.vue'
import AboutInfo from '@/components/about/AboutInfo.vue'
import '@/assets/styles/about.css'
</script>

<template>
  <AppHeader />
  <main class="about-page">
    <AboutHero />

    <section class="about-body" id="about-info">
      <div class="about-container">
        <AboutInfo />
      </div>
    </section>
  </main>
  <AppFooter />
</template>
