import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ServicesView from '@/views/ServicesView.vue'
import FeesView from '@/views/FeesView.vue'
import EducationView from '@/views/EducationView.vue'
import NewsView from '@/views/NewsView.vue'
import SupportView from '@/views/SupportView.vue'
import { scrollToHash } from '@/composables/useSmoothScroll'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/fees',
      name: 'fees',
      component: FeesView,
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          scrollToHash(to.hash, { behavior: 'smooth' })
          resolve(false)
        }, 0)
      })
    }
    return { top: 0 }
  },
})

export default router
