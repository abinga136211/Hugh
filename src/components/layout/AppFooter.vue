<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '@/i18n/useI18n'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const router = useRouter()
const { onAnchorClick, scrollToHash } = useSmoothScroll()
const { messages } = useI18n()

const footerColumns = computed(() => messages.value.footerColumns)
const footerBottomLinks = computed(() => messages.value.footerBottomLinks)
const footer = computed(() => messages.value.footer)

function resolveFooterLink(link, col) {
  if (link.to) return link.to
  if (link.href && link.href !== '#') return null
  return col.defaultTo || null
}

function onFooterLinkClick(event, link) {
  if (link.to) return

  const href = link.href
  if (!href || href === '#') return

  if (href.startsWith('/#')) {
    event.preventDefault()
    const hash = href.slice(1)
    if (router.currentRoute.value.path === '/') {
      scrollToHash(hash)
      return
    }
    router.push({ path: '/', hash })
    return
  }

  if (href.startsWith('#')) {
    onAnchorClick(event)
  }
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            <div class="logo-emblem"></div>
            <span class="logo-text-big4">SK Group</span>
          </div>
          <p>{{ footer.brandBlurb }}</p>
          <div class="footer-license-badge">🛡️ {{ footer.licenseBadge }}</div>
        </div>
        <div v-for="col in footerColumns" :key="col.title" class="footer-col">
          <h5>
            <RouterLink v-if="col.defaultTo" :to="col.defaultTo">{{ col.title }}</RouterLink>
            <template v-else>{{ col.title }}</template>
          </h5>
          <ul>
            <li v-for="link in col.links" :key="`${col.title}-${link.label}`">
              <RouterLink
                v-if="resolveFooterLink(link, col)"
                :to="resolveFooterLink(link, col)"
              >
                {{ link.label }}
              </RouterLink>
              <a
                v-else
                :href="link.href"
                @click="onFooterLinkClick($event, link)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-compliance">
        <h6>{{ footer.riskTitle }}</h6>
        <div class="risk-warning">
          <h6>{{ footer.riskSubtitle }}</h6>
          <p>{{ footer.riskBody }}</p>
        </div>
        <p>
          <strong>{{ footer.regulatory }}</strong>
        </p>
        <p>{{ footer.disclaimer }}</p>
        <p>{{ footer.reviewNote }}</p>
      </div>

      <div class="footer-bottom">
        <p>{{ footer.copyright }}</p>
        <div class="links">
          <a v-for="link in footerBottomLinks" :key="link.label" :href="link.href">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
