import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ServicesView from '../views/ServicesView.vue'
import FeesView from '../views/FeesView.vue'
import EducationView from '../views/EducationView.vue'
import NewsView from '../views/NewsView.vue'
import SupportView from '../views/SupportView.vue'
import { useLocaleStore } from '../i18n/store'

function createAppRouter() {
  return createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'home', component: HomeView },
      { path: '/about', name: 'about', component: AboutView },
      { path: '/contact', name: 'contact', component: ContactView },
      { path: '/services', name: 'services', component: ServicesView },
      { path: '/fees', name: 'fees', component: FeesView },
      { path: '/education', name: 'education', component: EducationView },
      { path: '/news', name: 'news', component: NewsView },
      { path: '/support', name: 'support', component: SupportView },
    ],
  })
}

async function mountApp(path) {
  const pinia = createPinia()
  setActivePinia(pinia)
  useLocaleStore().hydrate()

  const router = createAppRouter()
  router.push(path)
  await router.isReady()

  return mount(App, {
    global: {
      plugins: [router, pinia],
    },
  })
}

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the SK Group homepage', async () => {
    const wrapper = await mountApp('/')
    expect(wrapper.text()).toContain('SK Group')
    expect(wrapper.text()).toContain('环球证券交易与财富管理平台')
  })

  it('renders the about page', async () => {
    const wrapper = await mountApp('/about')
    expect(wrapper.text()).toContain('关于我们')
    expect(wrapper.text()).toContain('核心优势')
    expect(wrapper.text()).toContain('合规运营')
    expect(wrapper.text()).not.toContain('留下你的需求')
  })

  it('renders the contact page', async () => {
    const wrapper = await mountApp('/contact')
    expect(wrapper.text()).toContain('联系我们')
    expect(wrapper.text()).toContain('留下你的需求')
  })

  it('renders the services page', async () => {
    const wrapper = await mountApp('/services')
    expect(wrapper.text()).toContain('业务与服务')
    expect(wrapper.text()).toContain('证券交易')
    expect(wrapper.text()).toContain('投资咨询')
    expect(wrapper.text()).toContain('资产管理')
  })

  it('renders the fees page', async () => {
    const wrapper = await mountApp('/fees')
    expect(wrapper.text()).toContain('交易费率')
    expect(wrapper.text()).toContain('港股')
  })

  it('renders the education page', async () => {
    const wrapper = await mountApp('/education')
    expect(wrapper.text()).toContain('投资者教育')
    expect(wrapper.text()).toContain('港股投资入门')
  })

  it('renders the news page', async () => {
    const wrapper = await mountApp('/news')
    expect(wrapper.text()).toContain('新闻洞察')
    expect(wrapper.text()).toContain('SK Group荣获')
    expect(wrapper.text()).toContain('公司动态')
  })

  it('renders the support page', async () => {
    const wrapper = await mountApp('/support')
    expect(wrapper.text()).toContain('客户支持')
    expect(wrapper.text()).toContain('常见问题')
    expect(wrapper.text()).toContain('如何开设SK Group账户')
  })

  it('switches navigation language', async () => {
    const wrapper = await mountApp('/')
    const store = useLocaleStore()
    store.setLocale('en')
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Services')
    expect(wrapper.text()).toContain('Contact')
    store.setLocale('zh-Hant')
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('業務與服務')
    expect(wrapper.text()).toContain('聯絡我們')
  })
})
