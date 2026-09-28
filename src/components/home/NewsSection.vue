<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import featuredImage from '@/assets/images/trading-panel-laptop.jpg'

const { messages } = useI18n()
const newsItems = computed(() => messages.value.newsItems)
const copy = computed(() => messages.value.home.news)
const featured = computed(() => newsItems.value[0])
const cards = computed(() => newsItems.value.slice(1, 4))
</script>

<template>
  <section class="news-section" id="news">
    <div class="container">
      <div class="news-header js-reveal">
        <div class="news-header-titles">
          <h2 class="news-title">
            {{ copy.title }}
            <span class="news-title-mark" aria-hidden="true"></span>
          </h2>
          <p class="news-subtitle">{{ copy.subtitle }}</p>
        </div>
        <RouterLink to="/news" class="news-more-btn">{{ copy.viewMore }}</RouterLink>
      </div>

      <article class="news-featured js-reveal" style="--reveal-delay: 100ms">
        <div class="news-featured-media">
          <img
            :src="featuredImage"
            :alt="featured.title"
            width="640"
            height="400"
            loading="lazy"
          />
        </div>
        <div class="news-featured-body">
          <h3 class="news-featured-title">{{ featured.title }}</h3>
          <p class="news-featured-date">{{ featured.date }}</p>
          <RouterLink to="/news" class="news-featured-link">
            {{ copy.learnMore }}
          </RouterLink>
        </div>
      </article>

      <div class="news-cards">
        <RouterLink
          v-for="(item, index) in cards"
          :key="item.title"
          to="/news"
          class="news-mini-card js-reveal"
          :style="{ '--reveal-delay': `${160 + index * 90}ms` }"
        >
          <span class="news-mini-date">{{ item.date }}</span>
          <span class="news-mini-rule" aria-hidden="true"></span>
          <h4 class="news-mini-title">{{ item.title }}</h4>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
