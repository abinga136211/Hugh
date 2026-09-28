<script setup>
import { computed, ref } from 'vue'
import { useI18n } from '@/i18n/useI18n'

defineProps({
  showDetailLink: { type: Boolean, default: true },
  note: { type: String, default: '' },
})

const { messages } = useI18n()
const feePlans = computed(() => messages.value.feePlans)
const feesCopy = computed(() => messages.value.home.fees)

const activeIndex = ref(0)
const activePlan = computed(() => feePlans.value[activeIndex.value])

function selectTab(index) {
  activeIndex.value = index
}

function nextTab() {
  activeIndex.value = (activeIndex.value + 1) % feePlans.value.length
}
</script>

<template>
  <section class="fees-section" id="fees">
    <div class="container">
      <p class="fees-intro js-reveal">{{ feesCopy.intro }}</p>

      <div class="fees-stack js-reveal" style="--reveal-delay: 120ms">
        <div class="fees-stack-layer" aria-hidden="true"></div>
        <div class="fees-stack-layer" aria-hidden="true"></div>
        <div class="fees-stack-layer" aria-hidden="true"></div>

        <div class="fees-card" role="tabpanel">
          <div class="fees-tabs" role="tablist" :aria-label="feesCopy.ariaMarkets">
            <button
              v-for="(plan, index) in feePlans"
              :key="plan.market"
              type="button"
              class="fees-tab"
              role="tab"
              :class="{ 'is-active': index === activeIndex }"
              :aria-selected="index === activeIndex"
              @click="selectTab(index)"
            >
              {{ plan.market }}
            </button>
          </div>

          <div class="fees-rows">
            <div
              v-for="row in activePlan.rows"
              :key="row.label"
              class="fees-row"
            >
              <div class="fees-row-label">{{ row.label }}</div>
              <div class="fees-row-divider" aria-hidden="true"></div>
              <div class="fees-row-value">
                <p class="fees-row-main">
                  <span class="fees-row-amount">{{ row.value }}</span>
                  <span class="fees-row-unit">{{ row.unit }}</span>
                </p>
                <p class="fees-row-note">{{ row.note }}</p>
              </div>
            </div>
          </div>

          <RouterLink
            v-if="showDetailLink"
            to="/fees"
            class="fees-card-link"
          >
            {{ feesCopy.cta }}
          </RouterLink>

          <button
            type="button"
            class="fees-card-next"
            :aria-label="feesCopy.ariaNext"
            @click="nextTab"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <p v-if="note" class="fees-page-note">{{ note }}</p>
    </div>
  </section>
</template>
