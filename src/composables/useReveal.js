import { nextTick, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const REVEALED_ATTR = 'data-revealed'

function isRevealed(el) {
  return el.hasAttribute(REVEALED_ATTR)
}

function markRevealed(el) {
  el.setAttribute(REVEALED_ATTR, '')
}

/**
 * Observe `.js-reveal` elements and mark them with [data-revealed] when in view.
 * Uses a data attribute (not a class) so Vue :class updates won't wipe the state.
 */
export function useReveal(rootSelector = '#app') {
  let observer = null
  let mutationObserver = null
  let removeAfterEach = null
  let bindTimer = null

  function disconnect() {
    observer?.disconnect()
    observer = null
  }

  function observeEl(el) {
    if (!(el instanceof Element)) return
    if (!el.classList.contains('js-reveal') || isRevealed(el)) return
    if (!observer) return
    observer.observe(el)
  }

  function ensureObserver() {
    if (observer) return observer

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return null
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          markRevealed(entry.target)
          observer?.unobserve(entry.target)
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -4% 0px',
      },
    )

    return observer
  }

  async function bind() {
    await nextTick()
    await nextTick()

    const root = document.querySelector(rootSelector)
    if (!root) return

    const targets = [...root.querySelectorAll(`.js-reveal:not([${REVEALED_ATTR}])`)]
    if (!targets.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => markRevealed(el))
      return
    }

    ensureObserver()
    targets.forEach((el) => observer.observe(el))
  }

  function scheduleBind() {
    clearTimeout(bindTimer)
    bindTimer = setTimeout(() => {
      bind()
    }, 0)
  }

  onMounted(() => {
    const root = document.querySelector(rootSelector)
    bind()

    if (root) {
      mutationObserver = new MutationObserver((mutations) => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const obs = ensureObserver()
        if (!obs && !reduced) return

        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof Element)) return
            if (node.classList.contains('js-reveal')) {
              if (reduced) markRevealed(node)
              else observeEl(node)
            }
            node.querySelectorAll?.(`.js-reveal:not([${REVEALED_ATTR}])`).forEach((el) => {
              if (reduced) markRevealed(el)
              else observeEl(el)
            })
          })
        })
      })

      mutationObserver.observe(root, { childList: true, subtree: true })
    }
  })

  try {
    const router = useRouter()
    removeAfterEach = router.afterEach(() => {
      scheduleBind()
    })
  } catch {
    // Router may be unavailable in isolated setups
  }

  onUnmounted(() => {
    clearTimeout(bindTimer)
    removeAfterEach?.()
    mutationObserver?.disconnect()
    mutationObserver = null
    disconnect()
  })
}
