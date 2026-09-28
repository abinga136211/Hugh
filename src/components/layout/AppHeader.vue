<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '@/i18n/useI18n'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher.vue'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const router = useRouter()
const mobileOpen = ref(false)
const isScrolled = ref(false)
const { onAnchorClick, scrollToHash } = useSmoothScroll()
const { messages } = useI18n()

const navLinks = computed(() => messages.value.navLinks)

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

function closeMobile() {
  mobileOpen.value = false
}

function onHashNavClick(event, href) {
  closeMobile()
  if (!href?.startsWith('/#')) {
    onAnchorClick(event)
    return
  }

  event.preventDefault()
  const hash = href.slice(1)
  if (router.currentRoute.value.path === '/') {
    scrollToHash(hash)
    return
  }
  router.push({ path: '/', hash })
}

function onScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <div class="header-inner">
        <RouterLink to="/" class="logo" @click="closeMobile">
          <div class="logo-emblem"></div>
          <span class="logo-text-big4">SK Group</span>
        </RouterLink>
        <nav class="nav">
          <template v-for="link in navLinks" :key="link.label + (link.to || link.href)">
            <RouterLink v-if="link.to" :to="link.to">{{ link.label }}</RouterLink>
            <a
              v-else
              :href="link.href"
              @click="onHashNavClick($event, link.href)"
            >
              {{ link.label }}
            </a>
          </template>
          <LanguageSwitcher />
        </nav>
        <div
          class="mobile-toggle"
          :class="{ active: mobileOpen }"
          @click="toggleMobile"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="mobile-menu" :class="{ active: mobileOpen }">
      <template v-for="link in navLinks" :key="`m-${link.label}-${link.to || link.href}`">
        <RouterLink v-if="link.to" :to="link.to" @click="closeMobile">
          {{ link.label }}
        </RouterLink>
        <a
          v-else
          :href="link.href"
          @click="onHashNavClick($event, link.href)"
        >
          {{ link.label }}
        </a>
      </template>
      <div class="mobile-menu-lang">
        <LanguageSwitcher @change="closeMobile" />
      </div>
    </div>
  </header>
</template>
