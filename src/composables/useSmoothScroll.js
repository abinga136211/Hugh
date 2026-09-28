const HEADER_OFFSET = 72

export function scrollToHash(hash, { behavior = 'smooth' } = {}) {
  if (!hash || hash === '#') return

  const target = document.querySelector(hash)
  if (!target) return

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top, behavior })
}

export function useSmoothScroll() {
  function onAnchorClick(event) {
    const link = event.currentTarget
    const href = link.getAttribute('href')
    if (!href || !href.startsWith('#') || href === '#') return

    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    scrollToHash(href)
  }

  return { onAnchorClick, scrollToHash }
}
