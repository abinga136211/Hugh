import * as content from '../content/en.js'
import { meta, home, footer, ui } from './overlays/en.js'

/** Concise labels for the top nav — full titles remain in page content */
const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/fees', label: 'Fees' },
  { to: '/education', label: 'Education' },
  { to: '/news', label: 'News' },
  { to: '/support', label: 'Support' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

/** Shorter market names so fee tabs fit on one row */
const marketShort = {
  'Hong Kong Stocks': 'HK Stocks',
  'US Stocks': 'US Stocks',
  'A-share Connect': 'A-shares',
  'ETF / Bonds': 'ETFs',
}

const feePlans = content.feePlans.map((plan) => ({
  ...plan,
  market: marketShort[plan.market] || plan.market,
}))

/** Compact column headers so the withdrawal table fits without horizontal scroll */
const feesPage = {
  ...content.feesPage,
  withdrawal: {
    ...content.feesPage.withdrawal,
    columns: [
      'Clients',
      'Currency',
      '1st Fee',
      '2nd Fee',
      'Min. Amount',
      'Return Fee',
    ],
  },
}

export default {
  meta,
  ...content,
  navLinks,
  feePlans,
  feesPage,
  home,
  footer,
  ui,
}
