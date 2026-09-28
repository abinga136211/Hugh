<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from '@/i18n/useI18n'

const { messages } = useI18n()
const withdrawal = computed(() => messages.value.feesPage.withdrawal)
const ariaLabel = computed(() => messages.value.ui.withdrawalPlatformAria)

const activeId = ref('')

watch(
  withdrawal,
  (value) => {
    if (!value?.platforms?.length) return
    if (!value.platforms.some((p) => p.id === activeId.value)) {
      activeId.value = value.platforms[0].id
    }
  },
  { immediate: true },
)

const activePlatform = computed(
  () =>
    withdrawal.value.platforms.find((item) => item.id === activeId.value) ||
    withdrawal.value.platforms[0],
)

function selectPlatform(id) {
  activeId.value = id
}
</script>

<template>
  <section class="withdraw-fees" id="withdrawal-fees">
    <div class="page-container">
      <h2 class="withdraw-fees-title js-reveal">{{ withdrawal.title }}</h2>

      <div
        class="withdraw-fees-tabs js-reveal"
        style="--reveal-delay: 80ms"
        role="tablist"
        :aria-label="ariaLabel"
      >
        <button
          v-for="platform in withdrawal.platforms"
          :key="platform.id"
          type="button"
          class="withdraw-fees-tab"
          role="tab"
          :class="{ 'is-active': platform.id === activeId }"
          :aria-selected="platform.id === activeId"
          @click="selectPlatform(platform.id)"
        >
          {{ platform.label }}
        </button>
      </div>

      <div class="withdraw-fees-panel js-reveal" style="--reveal-delay: 140ms">
        <div class="withdraw-fees-panel-head">
          <h3 class="withdraw-fees-panel-title">{{ activePlatform.tableTitle }}</h3>
          <p class="withdraw-fees-promo">
            {{ withdrawal.promo }}
            <a :href="withdrawal.promoLinkHref">{{ withdrawal.promoLinkLabel }}</a>
          </p>
        </div>

        <div class="withdraw-fees-table-wrap">
          <table class="withdraw-fees-table">
            <thead>
              <tr>
                <th v-for="col in withdrawal.columns" :key="col">{{ col }}</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="group in activePlatform.groups" :key="group.customer">
                <tr
                  v-for="(row, rowIndex) in group.rows"
                  :key="`${group.customer}-${row.currency}`"
                >
                  <td v-if="rowIndex === 0" :rowspan="group.rows.length">{{ group.customer }}</td>
                  <td>{{ row.currency }}</td>
                  <td>{{ row.first }}</td>
                  <td>{{ row.next }}</td>
                  <td>{{ row.min }}</td>
                  <td>{{ row.refund }}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <ul class="withdraw-fees-notes">
          <li v-for="note in activePlatform.notes" :key="note">{{ note }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
