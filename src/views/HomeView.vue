<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import PlatformSection from '@/components/home/PlatformSection.vue'
import FeesSection from '@/components/home/FeesSection.vue'
import EducationSection from '@/components/home/EducationSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import SupportSection from '@/components/home/SupportSection.vue'

// 交易平台区块暂时隐藏，组件保留便于后续恢复
const showPlatform = false
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <ServicesSection />
    <PlatformSection v-if="showPlatform" />
    <FeesSection />
    <EducationSection />
    <NewsSection />
    <AboutSection />
    <SupportSection />
  </main>
  <AppFooter />
</template>
