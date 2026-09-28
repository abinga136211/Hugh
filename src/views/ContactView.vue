<script setup>
import { computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ContactHero from '@/components/about/ContactHero.vue'
import AboutInquiryForm from '@/components/about/AboutInquiryForm.vue'
import { useI18n } from '@/i18n/useI18n'
import '@/assets/styles/about.css'

const { messages } = useI18n()
const aboutInfoNote = computed(() => messages.value.aboutInfoNote)
const formTitle = computed(() => messages.value.ui.contactFormTitle)
</script>

<template>
  <AppHeader />
  <main class="about-page">
    <ContactHero />

    <section class="about-contact" id="inquiry">
      <div class="about-container">
        <div class="about-contact-header js-reveal">
          <h2 class="about-contact-title">{{ formTitle }}</h2>
          <p class="about-contact-desc">{{ aboutInfoNote }}</p>
        </div>
        <AboutInquiryForm />
      </div>
    </section>
  </main>
  <AppFooter />
</template>
