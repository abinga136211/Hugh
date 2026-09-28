export const navLinks = [
  { to: '/services', label: '业务与服务' },
  // { href: '/#platform', label: '交易平台' }, // 对应区块暂时隐藏
  { to: '/fees', label: '交易费率' },
  { to: '/education', label: '投资者教育' },
  { to: '/news', label: '新闻洞察' },
  { to: '/support', label: '客户支持' },
  { to: '/about', label: '关于我们' },
  { to: '/contact', label: '联系我们' },
]

export const feePlans = [
  {
    market: '港股',
    commission: '成交金额的 0.03%',
    min: '最低 HK$15 / 笔',
    note: '另收证监会征费、交易征费等法定费用',
    rows: [
      {
        label: '佣金',
        value: '0.03%',
        unit: '/ 成交金额',
        note: '另收证监会征费、交易征费等法定费用',
      },
      {
        label: '最低收费',
        value: 'HK$15',
        unit: '/ 笔',
        note: '实际费用以开户协议及交易确认书为准',
      },
    ],
  },
  {
    market: '美股',
    commission: 'US$0.005 / 股',
    min: '最低 US$1.99 / 笔',
    note: '盘前盘后交易适用同等费率',
    rows: [
      {
        label: '佣金',
        value: 'US$0.005',
        unit: '/ 股',
        note: '盘前盘后交易适用同等费率',
      },
      {
        label: '最低收费',
        value: 'US$1.99',
        unit: '/ 笔',
        note: '实际费用以开户协议及交易确认书为准',
      },
    ],
  },
  {
    market: 'A股通',
    commission: '成交金额的 0.03%',
    min: '最低 RMB¥15 / 笔',
    note: '含沪港通、深港通交易通道',
    rows: [
      {
        label: '佣金',
        value: '0.03%',
        unit: '/ 成交金额',
        note: '含沪港通、深港通交易通道',
      },
      {
        label: '最低收费',
        value: 'RMB¥15',
        unit: '/ 笔',
        note: '实际费用以开户协议及交易确认书为准',
      },
    ],
  },
  {
    market: 'ETF / 债券',
    commission: '成交金额的 0.02%',
    min: '最低 HK$10 / 笔',
    note: '具体以产品及市场规则为准',
    rows: [
      {
        label: '佣金',
        value: '0.02%',
        unit: '/ 成交金额',
        note: '具体以产品及市场规则为准',
      },
      {
        label: '最低收费',
        value: 'HK$10',
        unit: '/ 笔',
        note: '实际费用以开户协议及交易确认书为准',
      },
    ],
  },
]

export const heroStats = [
  { num: '15', unit: '+', label: '年行业经验' },
  { num: '50', unit: '+', label: '全球市场覆盖' },
  { num: '100', unit: '万+', label: '服务客户' },
  { num: '99.9', unit: '%', label: '系统可用率' },
]

export const heroFeatures = [
  {
    label: '证券交易',
    icon: 'chart',
  },
  {
    label: '投资咨询',
    icon: 'advice',
  },
  {
    label: '资产管理',
    icon: 'asset',
  },
]

export const servicesSummary = {
  title: '全链路金融服务',
  desc: '依托香港证监会第1、4、9号牌照，一站覆盖证券交易、投资咨询与资产管理。',
  highlights: [
    '第1类牌照 · 证券交易：港股、美股、A股通及多品类资产交易',
    '第4类牌照 · 投资咨询：市场洞察、研究报告与组合建议',
    '第9类牌照 · 资产管理：基金产品、专户理财与家族办公室',
    '合规托管、透明收费，连接全球主要资本市场',
  ],
}

export const mockupBars = [45, 60, 35, 75, 55, 85, 65, 90, 70, 80]

export const mockupStats = [
  { label: '恒生指数', value: '17,842.50', up: true },
  { label: '日成交量', value: 'HK$ 98.5B', up: false },
  { label: '账户盈亏', value: '+12.35%', up: true },
]

export const platformFeatures = [
  {
    icon: '💻',
    title: '全平台交易系统',
    desc: '支持PC客户端、网页端及移动APP，数据实时同步，随时随地掌控投资动态。采用银行级加密技术，保障交易安全。',
  },
  {
    icon: '⚡',
    title: '极速订单执行',
    desc: '直连交易所撮合系统，订单延迟低于5毫秒，支持条件单、止损止盈等多种智能订单类型。',
  },
  {
    icon: '🔍',
    title: '智能选股工具',
    desc: '内置多维度筛选器与AI辅助选股模型，结合基本面与技术面分析，快速发现投资机会。',
  },
  {
    icon: '📊',
    title: '风险分析引擎',
    desc: '实时监控投资组合风险敞口，提供VaR计算、压力测试及资产配置优化建议。',
  },
]

export const platformTags = [
  { icon: '🖥️', label: 'Windows' },
  { icon: '📱', label: 'iOS' },
  { icon: '🤖', label: 'Android' },
  { icon: '🌐', label: 'Web' },
]

export const educationCards = [
  {
    category: '港股投资入门',
    title: '港股投资入门：从开户到第一笔交易',
    desc: '了解香港证券市场的基本运作规则、交易时间及结算机制。',
    articles: '10篇文章',
    duration: '15分钟阅读',
  },
  {
    category: '认识投资风险',
    title: '认识投资风险：如何做好风险管理',
    desc: '学习分散投资、止损策略及仓位管理的核心原则。',
    articles: '8篇文章',
    duration: '12分钟阅读',
  },
  {
    category: '技术分析实战',
    title: '技术分析实战：K线、均线与形态',
    desc: '掌握常用技术指标的应用场景与实战交易策略。',
    articles: '15篇文章',
    duration: '20分钟阅读',
  },
  {
    category: 'ETF投资指南',
    title: 'ETF投资指南：指数化投资策略',
    desc: '了解ETF的运作原理、分类及如何构建ETF投资组合。',
    articles: '6篇文章',
    duration: '10分钟阅读',
  },
]

export const educationCategories = [
  {
    id: 'intro',
    label: '港股投资入门',
    items: [
      { title: '港股投资入门：从开户到第一笔交易', date: '2026-07-18', meta: '15分钟阅读' },
      { title: '认识香港证券市场结构与交易时间', date: '2026-07-12', meta: '10分钟阅读' },
      { title: '如何完成证券账户开户与身份核验', date: '2026-07-05', meta: '12分钟阅读' },
      { title: '买卖盘类型与订单执行机制说明', date: '2026-06-28', meta: '14分钟阅读' },
      { title: '结算交收流程与资金到账时间', date: '2026-06-20', meta: '11分钟阅读' },
      { title: '新手常见问题与交易前检查清单', date: '2026-06-14', meta: '9分钟阅读' },
      { title: '认识股票代码、报价与盘口信息', date: '2026-06-08', meta: '10分钟阅读' },
      { title: '首次下单实操：从选股到确认成交', date: '2026-06-01', meta: '13分钟阅读' },
    ],
  },
  {
    id: 'risk',
    label: '认识投资风险',
    items: [
      { title: '认识投资风险：如何做好风险管理', date: '2026-07-16', meta: '12分钟阅读' },
      { title: '分散投资与资产配置的基本方法', date: '2026-07-09', meta: '11分钟阅读' },
      { title: '止损策略与仓位管理核心原则', date: '2026-07-02', meta: '13分钟阅读' },
      { title: '市场波动、流动性与杠杆风险提示', date: '2026-06-25', meta: '10分钟阅读' },
      { title: '情绪交易误区与常见行为偏差', date: '2026-06-18', meta: '9分钟阅读' },
      { title: '黑天鹅事件与极端行情应对思路', date: '2026-06-11', meta: '12分钟阅读' },
      { title: '了解保证金交易的潜在损失风险', date: '2026-06-04', meta: '14分钟阅读' },
      { title: '投资者适当性评估与风险承受能力', date: '2026-05-28', meta: '10分钟阅读' },
    ],
  },
  {
    id: 'strategy',
    label: '技术分析实战',
    items: [
      { title: '技术分析实战：K线、均线与形态', date: '2026-07-20', meta: '20分钟阅读' },
      { title: '趋势跟踪与区间交易策略比较', date: '2026-07-13', meta: '16分钟阅读' },
      { title: '量价关系与突破有效性判断', date: '2026-07-06', meta: '15分钟阅读' },
      { title: 'MACD、RSI 等常用指标应用场景', date: '2026-06-29', meta: '18分钟阅读' },
      { title: '多时间周期分析与交易计划制定', date: '2026-06-22', meta: '17分钟阅读' },
      { title: '财报季交易策略与事件驱动思路', date: '2026-06-15', meta: '14分钟阅读' },
      { title: '组合再平衡与择时策略注意事项', date: '2026-06-08', meta: '13分钟阅读' },
      { title: '回测方法与策略评估指标体系', date: '2026-06-01', meta: '19分钟阅读' },
    ],
  },
  {
    id: 'product',
    label: 'ETF投资指南',
    items: [
      { title: 'ETF投资指南：指数化投资策略', date: '2026-07-15', meta: '10分钟阅读' },
      { title: '认识股票、债券与货币市场基金', date: '2026-07-08', meta: '11分钟阅读' },
      { title: '权证与结构性产品基本概念', date: '2026-07-01', meta: '13分钟阅读' },
      { title: '沪港通、深港通标的与交易规则', date: '2026-06-24', meta: '12分钟阅读' },
      { title: '美股 ADR 与跨境投资工具简介', date: '2026-06-17', meta: '10分钟阅读' },
      { title: '如何阅读基金说明书与风险披露', date: '2026-06-10', meta: '14分钟阅读' },
      { title: '构建 ETF 组合的常见配置思路', date: '2026-06-03', meta: '12分钟阅读' },
      { title: '费用率、跟踪误差与流动性比较', date: '2026-05-27', meta: '11分钟阅读' },
    ],
  },
]

export const newsTabs = [
  { id: 'company', label: '公司动态' },
  { id: 'headlines', label: '要闻速递' },
  { id: 'finance', label: '金融报国' },
]

export const newsItems = [
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-09-03',
    title: 'SK Group荣获"年度最佳券商服务奖"',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-08-28',
    title: 'SK Group举办港股投资策略分享会，聚焦结构性机会',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-08-15',
    title: '公司完成新一代交易系统升级，提升撮合与风控能力',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-07-30',
    title: 'SK Group宣布加强财富管理团队建设，服务高净值客户',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-07-15',
    title: 'SK Group荣获行业权威奖项，客户服务再获认可',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-07-02',
    title: '公司发布半年度业务回顾，交易与研究业务稳健增长',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-06-20',
    title: 'SK Group与多家托管银行深化合作，优化客户资金安全机制',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-06-08',
    title: '公司启动投资者教育系列活动，普及风险管理知识',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-05-26',
    title: 'SK Group开放日成功举办，展示数字化交易与研究能力',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-05-12',
    title: '公司持续完善合规与适当性管理体系，守护投资者权益',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-04-28',
    title: 'SK Group推出新客户开户礼遇，优化线上开户体验',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-04-15',
    title: '公司研究团队发布一季度策略报告，聚焦港股结构性行情',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-04-02',
    title: 'SK Group完成信息安全等级测评，强化客户数据保护',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-03-20',
    title: '公司与多家上市公司开展路演交流，拓宽投研覆盖',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-03-08',
    title: 'SK Group支持女性投资者教育活动，推广理性投资理念',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-02-25',
    title: '公司春节期间交易安排公布，客服与结算服务照常运行',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-02-12',
    title: 'SK Group移动端交易功能升级，新增智能盯盘提醒',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-01-28',
    title: '公司发布年度社会责任报告，持续推进可持续发展',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-01-15',
    title: 'SK Group荣获“卓越数字化券商”奖项',
  },
  {
    category: 'company',
    tag: '公司动态',
    date: '2026-01-06',
    title: '公司召开年度工作会议，明确高质量发展目标',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-07-25',
    title: '下半年港股投资展望：政策利好与估值修复',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-07-20',
    title: 'AI产业链深度研究：从芯片到应用的投资机遇',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-07-08',
    title: '美联储政策路径与全球资产配置建议',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-06-30',
    title: '港股通南向资金流向观察：结构性机会仍存',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-06-18',
    title: '全球通胀回落背景下的利率与汇率展望',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-06-05',
    title: '新质生产力主题投资：关注科技与先进制造',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-05-22',
    title: '债券市场震荡后的配置节奏与久期管理建议',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-05-10',
    title: '港元流动性与市场成交量变化的投资提示',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-04-28',
    title: '一季报密集披露期：盈利修复与估值再定价',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-04-15',
    title: '内地与香港市场互联互通机制最新进展解读',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-04-02',
    title: '大宗商品价格波动对相关产业链投资的影响',
  },
  {
    category: 'headlines',
    tag: '要闻速递',
    date: '2026-03-20',
    title: '科技龙头财报季前瞻：关注资本开支与现金流',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-08-20',
    title: '践行金融报国理念，助力实体经济高质量发展',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-08-01',
    title: '服务国家战略：支持科技创新企业跨境融资',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-07-18',
    title: '绿色金融实践：推动可持续投资产品落地',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-07-05',
    title: '普惠金融服务升级，帮助中小投资者提升金融素养',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-06-22',
    title: '参与资本市场改革，促进长期资金入市',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-06-10',
    title: '履行社会责任：开展社区投资者教育公益活动',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-05-28',
    title: '以专业研究服务实体，助力产业转型升级',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-05-15',
    title: '强化风险管理与合规经营，守护金融市场稳定',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-04-30',
    title: '服务“一带一路”企业，提供跨境投融资支持',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-04-16',
    title: '助力专精特新企业上市辅导与资本市场对接',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-04-02',
    title: '推动养老金与保险资金长期投资生态建设',
  },
  {
    category: 'finance',
    tag: '金融报国',
    date: '2026-03-18',
    title: '深化产融结合，支持先进制造业并购重组',
  },
]

export const faqs = [
  {
    question: '如何开设SK Group账户？',
    answer:
      '您可以点击"立即开户"按钮，按照在线指引完成身份验证和资料填写。开户流程通常需要5-10分钟，账户审核通过后即可入金交易。我们需要验证您的身份证明文件和住址证明，以确保符合KYC要求。',
  },
  {
    question: '开户需要哪些文件？',
    answer:
      '您需要提供有效的身份证明文件（如香港身份证、护照或通行证）、住址证明（如最近三个月内的水电费账单或银行月结单）以及税务居民身份声明。如为机构客户，还需提供公司注册证书、商业登记证及相关授权文件。',
  },
  {
    question: '我的资金安全如何保障？',
    answer:
      '客户资金独立存放于证监会认可的托管银行，与我司自有资金完全隔离。我们已参与香港投资者赔偿基金，在符合条件的情况下，投资者可获得最高50万港元的赔偿保障。同时，我们采用银行级加密技术保护您的账户安全。',
  },
  {
    question: '交易佣金如何计算？',
    answer:
      '我们的佣金费率根据交易量和账户类型而定，具体费率请参阅费率表或联系客服咨询。所有费用均在交易前透明展示，不存在隐藏收费。我们还为高频交易客户和大额资金客户提供优惠费率方案。',
  },
  {
    question: '支持哪些入金方式？',
    answer:
      '我们支持银行转账（FPS转数快、电汇）、支票存款等多种入金方式。所有入金均需来自客户本人名下的银行账户，以确保资金来源合规。入金通常在1-2个工作日内到账。',
  },
]

export const footerColumns = [
  {
    title: '业务与服务',
    defaultTo: '/services',
    links: [
      { to: '/services#securities-trading', label: '证券交易' },
      { to: '/services#investment-advisory', label: '投资咨询' },
      { to: '/services#asset-management', label: '资产管理' },
      // { href: '/#platform', label: '交易平台' }, // 对应区块暂时隐藏
      { to: '/fees#fees', label: '费率说明' },
    ],
  },
  {
    title: '关于我们',
    defaultTo: '/about',
    links: [
      { to: '/about', label: '公司简介' },
      { to: '/about', label: '合规与监管' },
      { to: '/contact', label: '联系我们' },
      { to: '/news', label: '新闻动态' },
      { label: '招贤纳士' },
    ],
  },
  {
    title: '投资者教育',
    defaultTo: '/education',
    links: [
      { to: '/education#courses', label: '投资学堂' },
      { to: '/education#intro', label: '入门指南' },
      { to: '/education#risk', label: '风险提示' },
      { to: '/education#product', label: '产品科普' },
      { to: '/education#strategy', label: '进阶策略' },
    ],
  },
  {
    title: '客户支持',
    defaultTo: '/support',
    links: [
      { to: '/support', label: '客户服务' },
      { to: '/support', label: '常见问题' },
      { to: '/contact', label: '商务咨询' },
      { label: '客户登录' },
      { label: '开户指引' },
    ],
  },
]

export const footerBottomLinks = [
  { href: '#', label: '隐私政策' },
  { href: '#', label: '条款与条件' },
  { href: '#', label: 'Cookie政策' },
  { href: '#', label: '网站地图' },
]
