<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from '@/i18n/useI18n'

const { messages } = useI18n()
const ui = computed(() => messages.value.ui)
const inquiryIndustries = computed(() => messages.value.inquiryIndustries)

const submitted = ref(false)
const form = reactive({
  name: '',
  company: '',
  phone: '',
  email: '',
  industry: '',
  message: '',
})

function onSubmit(event) {
  event.preventDefault()
  submitted.value = true
}
</script>

<template>
  <div class="about-form-card js-reveal">
    <p class="about-form-hint">{{ ui.formHint }}</p>

    <form @submit="onSubmit">
      <div class="about-form-group">
        <label class="about-form-label" for="about-name">
          {{ ui.formName }}<span class="req">*</span>
        </label>
        <input
          id="about-name"
          v-model="form.name"
          class="about-form-control"
          type="text"
          :placeholder="ui.formNamePh"
          required
        />
      </div>

      <div class="about-form-row">
        <div class="about-form-group">
          <label class="about-form-label" for="about-company">
            {{ ui.formCompany }}<span class="req">*</span>
          </label>
          <input
            id="about-company"
            v-model="form.company"
            class="about-form-control"
            type="text"
            :placeholder="ui.formCompanyPh"
            required
          />
        </div>
        <div class="about-form-group">
          <label class="about-form-label" for="about-phone">
            {{ ui.formPhone }}<span class="req">*</span>
          </label>
          <input
            id="about-phone"
            v-model="form.phone"
            class="about-form-control"
            type="tel"
            :placeholder="ui.formPhonePh"
            required
          />
        </div>
      </div>

      <div class="about-form-group">
        <label class="about-form-label" for="about-email">
          {{ ui.formEmail }}<span class="req">*</span>
        </label>
        <input
          id="about-email"
          v-model="form.email"
          class="about-form-control"
          type="email"
          :placeholder="ui.formEmailPh"
          required
        />
      </div>

      <div class="about-form-group">
        <label class="about-form-label" for="about-industry">{{ ui.formIndustry }}</label>
        <select
          id="about-industry"
          v-model="form.industry"
          class="about-form-control"
          :class="{ 'has-value': form.industry }"
        >
          <option
            v-for="option in inquiryIndustries"
            :key="option.label"
            :value="option.value"
            :disabled="option.value === ''"
          >
            {{ option.label }}
          </option>
        </select>
      </div>

      <div class="about-form-group">
        <label class="about-form-label" for="about-message">
          {{ ui.formMessage }}<span class="req">*</span>
        </label>
        <textarea
          id="about-message"
          v-model="form.message"
          class="about-form-control"
          :placeholder="ui.formMessagePh"
          required
        ></textarea>
      </div>

      <button type="submit" class="about-btn about-btn-primary about-form-submit">
        {{ ui.formSubmit }}
      </button>
      <p class="about-form-privacy">{{ ui.formPrivacy }}</p>
      <p v-if="submitted" class="about-form-success">{{ ui.formSuccess }}</p>
    </form>
  </div>
</template>
