<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useI18n } from '@/i18n/useI18n'

const { messages } = useI18n()
const platform = computed(() => messages.value.home.platform)
const mockupBars = computed(() => messages.value.mockupBars)
const mockupStats = computed(() => messages.value.mockupStats)
const platformFeatures = computed(() => messages.value.platformFeatures)
const platformTags = computed(() => messages.value.platformTags)

const barHeights = ref([])

async function animateBars() {
  barHeights.value = mockupBars.value.map(() => '0')
  await nextTick()
  mockupBars.value.forEach((height, index) => {
    setTimeout(() => {
      barHeights.value[index] = `${height}%`
    }, index * 80)
  })
}

onMounted(animateBars)
watch(mockupBars, animateBars)
</script>

<template>
  <section class="section platform-section" id="platform">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">{{ platform.tag }}</span>
        <h2 class="section-title">{{ platform.title }}</h2>
        <p class="section-subtitle">{{ platform.subtitle }}</p>
      </div>
      <div class="platform-grid">
        <div class="platform-visual">
          <div class="platform-mockup">
            <div class="mockup-header">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="mockup-title">{{ platform.productName }}</span>
            </div>
            <div class="mockup-chart">
              <div
                v-for="(height, index) in barHeights"
                :key="index"
                class="mockup-bar"
                :style="{ height, transition: 'height 0.6s ease' }"
              ></div>
            </div>
            <div class="mockup-stats">
              <div v-for="stat in mockupStats" :key="stat.label" class="mockup-stat">
                <div class="label">{{ stat.label }}</div>
                <div class="value" :class="{ up: stat.up }">{{ stat.value }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="platform-features">
          <div
            v-for="feature in platformFeatures"
            :key="feature.title"
            class="platform-feature"
          >
            <div class="pf-icon">{{ feature.icon }}</div>
            <div>
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
          <div class="platform-platforms">
            <a
              v-for="tag in platformTags"
              :key="tag.label"
              href="#"
              class="platform-tag"
            >
              {{ tag.icon }} {{ tag.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
