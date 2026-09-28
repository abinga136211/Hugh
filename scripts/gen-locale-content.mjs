/**
 * Generates src/i18n/content/en.js and zh-Hant.js from src/data + translation maps.
 * Run: node scripts/gen-locale-content.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import * as OpenCC from 'opencc-js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const converter = OpenCC.Converter({ from: 'cn', to: 'hk' })

function deepClone(v) {
  return JSON.parse(JSON.stringify(v))
}

function mapStrings(node, dict, fallbackFn) {
  if (typeof node === 'string') {
    if (Object.prototype.hasOwnProperty.call(dict, node)) return dict[node]
    return fallbackFn ? fallbackFn(node) : node
  }
  if (Array.isArray(node)) return node.map((item) => mapStrings(item, dict, fallbackFn))
  if (node && typeof node === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(node)) out[k] = mapStrings(v, dict, fallbackFn)
    return out
  }
  return node
}

function toModule(exportsObj) {
  const lines = ['/* Auto-generated — do not edit by hand */', '']
  for (const [name, value] of Object.entries(exportsObj)) {
    lines.push(`export const ${name} = ${JSON.stringify(value, null, 2)}`)
    lines.push('')
  }
  return lines.join('\n')
}

const home = await import(pathToFileURL(path.join(root, 'src/data/home.js')).href)
const pages = await import(pathToFileURL(path.join(root, 'src/data/pages.js')).href)
const about = await import(pathToFileURL(path.join(root, 'src/data/about.js')).href)

const homeKeys = [
  'navLinks', 'feePlans', 'heroStats', 'heroFeatures', 'servicesSummary',
  'mockupBars', 'mockupStats', 'platformFeatures', 'platformTags',
  'educationCards', 'educationCategories', 'newsTabs', 'newsItems', 'faqs',
  'footerColumns', 'footerBottomLinks',
]
const pagesKeys = ['servicesPage', 'feesPage', 'educationPage', 'newsPage', 'supportPage']
const aboutKeys = [
  'aboutHero', 'contactHero', 'contactInfo', 'aboutStory', 'aboutInfoNote', 'inquiryIndustries',
]

function pick(mod, keys) {
  const o = {}
  for (const k of keys) o[k] = deepClone(mod[k])
  return o
}

// HK-specific term overrides after OpenCC
const hantOverrides = {
  客户支持: '客戶支援',
  客戶支持: '客戶支援',
  联系我们: '聯絡我們',
  聯繫我們: '聯絡我們',
  隐私政策: '私隱政策',
  隱私政策: '私隱政策',
  软件: '軟件',
  信息: '資訊',
  信息安全: '資訊安全',
  視頻: '影片',
}

function toHant(s) {
  if (Object.prototype.hasOwnProperty.call(hantOverrides, s)) return hantOverrides[s]
  let t = converter(s)
  // post-replace common HK terms inside longer strings
  t = t
    .replaceAll('客戶支持', '客戶支援')
    .replaceAll('聯繫我們', '聯絡我們')
    .replaceAll('联系我们', '聯絡我們')
    .replaceAll('隱私政策', '私隱政策')
    .replaceAll('信息', '資訊')
  return t
}

const enDict = {
  ...JSON.parse(fs.readFileSync(path.join(__dirname, 'en-map.json'), 'utf8')),
  ...JSON.parse(fs.readFileSync(path.join(__dirname, 'en-extra.json'), 'utf8')),
}

const zhHome = pick(home, homeKeys)
const zhPages = pick(pages, pagesKeys)
const zhAbout = pick(about, aboutKeys)

const enHome = mapStrings(zhHome, enDict)
if (enHome.heroStats?.[2]) {
  enHome.heroStats[2] = { num: '1,000,000', unit: '+', label: 'Clients Served' }
}

const enPages = mapStrings(zhPages, enDict)
const enAboutMapped = mapStrings(zhAbout, enDict)
if (enAboutMapped.contactInfo?.items) {
  for (const item of enAboutMapped.contactInfo.items) {
    if (item.label === 'Address' || item.label === '地址') {
      item.label = 'Address'
      item.value =
        'Room 3581, 35/F, Infinitus Plaza, 199 Des Voeux Road Central, Sheung Wan, Central, Hong Kong'
    }
    if (item.label === '电话' || item.label === '電話') item.label = 'Phone'
    if (item.label === '邮箱' || item.label === '郵箱') item.label = 'Email'
  }
}

const hantHome = mapStrings(zhHome, {}, toHant)
const hantPages = mapStrings(zhPages, {}, toHant)
const hantAbout = mapStrings(zhAbout, {}, toHant)

const outDir = path.join(root, 'src/i18n/content')
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'zh-Hant.js'), toModule({ ...hantHome, ...hantPages, ...hantAbout }))
fs.writeFileSync(path.join(outDir, 'en.js'), toModule({ ...enHome, ...enPages, ...enAboutMapped }))

function collectCjk(node, set = new Set()) {
  if (typeof node === 'string') {
    if (/[\u4e00-\u9fff]/.test(node)) set.add(node)
  } else if (Array.isArray(node)) node.forEach((i) => collectCjk(i, set))
  else if (node && typeof node === 'object') Object.values(node).forEach((v) => collectCjk(v, set))
  return set
}

const leftover = collectCjk({ ...enHome, ...enPages, ...enAboutMapped })
console.log('Wrote content/zh-Hant.js and content/en.js')
console.log('EN nav:', enHome.navLinks.map((l) => l.label).join(' | '))
console.log('Hant nav:', hantHome.navLinks.map((l) => l.label).join(' | '))
console.log('EN leftover Chinese:', leftover.size)
if (leftover.size) {
  fs.writeFileSync(path.join(__dirname, 'en-leftover.json'), JSON.stringify([...leftover], null, 2))
  console.log('Wrote scripts/en-leftover.json')
}
