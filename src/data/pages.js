export const servicesPage = {
  hero: {
    eyebrow: 'Business & Services',
    title: '业务与服务',
    ctaLabel: '联系我们',
    ctaTo: '/contact',
  },
  intro: {
    tag: '三大核心业务板块',
    title: '全链路金融服务',
    subtitle:
      '合法合规地覆盖证券交易、投资咨询与资产管理，连接全球主要资本市场。',
  },
  cards: [
    {
      id: 'securities-trading',
      badge: 'SFC Type 1 · 第1类牌照',
      title: '证券交易',
      desc: '为个人及机构投资者提供全球主要市场的证券交易服务，覆盖港股、美股、A股通、ETF、债券及衍生品等多品类资产。',
      features: [
        '港股、美股、ETF、债券等多市场交易',
        '沪港通、深港通互联互通通道',
        '极速订单执行，低延迟交易系统',
        '具竞争力佣金费率，透明收费',
      ],
    },
    {
      id: 'investment-advisory',
      badge: 'SFC Type 4 · 第4类牌照',
      title: '投资咨询',
      desc: '由资深研究团队提供专业投资建议，涵盖市场洞察、行业研究、个股分析及投资策略，助力客户做出明智的投资决策。',
      features: [
        '每日市场评论与策略观点',
        '深度行业研究报告与公司分析',
        '定制化投资组合建议',
        '宏观经济趋势与政策解读',
      ],
    },
    {
      id: 'asset-management',
      badge: 'SFC Type 9 · 第9类牌照',
      title: '资产管理',
      desc: '为高净值客户及机构提供专业的资产管理服务，包括基金产品、专户理财及家族办公室方案，实现财富的长期稳健增值。',
      features: [
        '多元化基金产品组合',
        '量身定制专户理财方案',
        '家族办公室全方位服务',
        '严格风控体系与透明报告',
      ],
    },
  ],
}

export const feesPage = {
  hero: {
    eyebrow: 'Trading Fees',
    title: '交易费率',
    ctaLabel: '立即开户',
    ctaHref: '#',
  },
  intro: {
    tag: 'Fee Schedule',
    title: '常用市场参考费率',
    subtitle: '不同市场与产品的佣金结构清晰展示，便于您提前预估交易成本。',
  },
  note: '另可能收取交易所征费、证监会征费等法定费用。高频交易客户与大额资金客户可联系客户经理获取优惠费率方案。',
  withdrawal: {
    title: '虚拟资产提币收费表',
    promo:
      '焦点新股0息0手续费优惠受条款及细则约束，详情请查询',
    promoLinkLabel: '最新推广',
    promoLinkHref: '#',
    columns: [
      '适用客户',
      '货币名称及代码',
      '首笔提币费用',
      '次笔提币费用',
      '每笔最低提款限额',
      '退币手续费',
    ],
    platforms: [
      {
        id: 'hashkey',
        label: 'Hashkey',
        tableTitle: '虚拟资产提币收费表 - Hashkey',
        groups: [
          {
            customer: '所有客户',
            rows: [
              {
                currency: 'Bitcoin (BTC)',
                first: 'BTC 0.00006',
                next: 'BTC 0.00009',
                min: 'BTC 0.005',
                refund: 'BTC 0.00006 + USD 5',
              },
              {
                currency: 'Ethereum (ETH)',
                first: 'ETH 0.0004',
                next: 'ETH 0.0009',
                min: 'ETH 0.05',
                refund: 'ETH 0.0004 + USD 5',
              },
              {
                currency: 'Solana (SOL)',
                first: 'SOL 0.0002',
                next: 'SOL 0.0003',
                min: 'SOL 0.05',
                refund: 'SOL 0.0002 + USD 5',
              },
            ],
          },
          {
            customer: '专业投资者',
            rows: [
              {
                currency: 'Tether (USDT) - ETH',
                first: 'USDT 2',
                next: 'USDT 30',
                min: 'USDT 25',
                refund: 'USDT 2 + USD 5',
              },
              {
                currency: 'Tether (USDT) - TRON',
                first: 'USDT 2',
                next: 'USDT 30',
                min: 'USDT 25',
                refund: 'USDT 2 + USD 5',
              },
              {
                currency: 'USD Coin (USDC)',
                first: 'USDC 2',
                next: 'USDC 30',
                min: 'USDC 25',
                refund: 'USDC 2 + USD 5',
              },
            ],
          },
        ],
        notes: [
          '注1：充提币服务时间为香港时间星期一至星期五，上午9时至下午6时，公众假期除外。',
          '注2：自2025年9月10日12:00AM起，对当日每个币种的第2笔提币费用进行调整，另外对退币增收平台手续费，详见上表。',
          '注3：充币资讯错误处理手续费，视乎具体情况而定。详情请参阅帮助中心 > 虚拟资产 > 充币流程 > 充币失败的常见情况说明。',
        ],
      },
      {
        id: 'osl',
        label: 'OSL',
        tableTitle: '虚拟资产提币收费表 - OSL',
        groups: [
          {
            customer: '所有客户',
            rows: [
              {
                currency: 'Bitcoin (BTC)',
                first: '以平台公布为准',
                next: '以平台公布为准',
                min: '以平台公布为准',
                refund: '以平台公布为准',
              },
              {
                currency: 'Ethereum (ETH)',
                first: '以平台公布为准',
                next: '以平台公布为准',
                min: '以平台公布为准',
                refund: '以平台公布为准',
              },
              {
                currency: 'Solana (SOL)',
                first: '以平台公布为准',
                next: '以平台公布为准',
                min: '以平台公布为准',
                refund: '以平台公布为准',
              },
            ],
          },
          {
            customer: '专业投资者',
            rows: [
              {
                currency: 'Tether (USDT)',
                first: '以平台公布为准',
                next: '以平台公布为准',
                min: '以平台公布为准',
                refund: '以平台公布为准',
              },
              {
                currency: 'USD Coin (USDC)',
                first: '以平台公布为准',
                next: '以平台公布为准',
                min: '以平台公布为准',
                refund: '以平台公布为准',
              },
            ],
          },
        ],
        notes: [
          '注1：OSL 提币费率以合作平台最新公布及您的客户协议为准，详情请联系客户经理。',
          '注2：充提币服务时间、限额与网络拥堵情况可能影响实际到账时间与费用。',
          '注3：错误充币或退币产生的额外费用，视链上情况与平台规则另行核算。',
        ],
      },
    ],
  },
}

export const educationPage = {
  hero: {
    eyebrow: 'Investor Education',
    title: '投资者教育',
    ctaLabel: '浏览投资学堂',
    ctaHref: '#courses',
  },
  intro: {
    tag: '投资学堂',
    title: '从入门到进阶的系统课程',
    subtitle: '致力于提升投资者金融素养，提供从入门到进阶的系统性投资知识，帮助您做出更理性的投资决策。',
  },
}

export const newsPage = {
  hero: {
    eyebrow: 'News & Insights',
    title: '新闻洞察',
    ctaLabel: '联系研究团队',
    ctaTo: '/contact',
  },
  intro: {
    tag: 'Insights',
    title: '新闻与洞察',
    subtitle: '获取最新市场动态、深度研究报告与公司新闻，洞察全球资本市场脉搏。',
  },
}

export const supportPage = {
  hero: {
    eyebrow: 'Customer Support',
    title: '客户支持',
    description:
      '我们的专业客服团队随时为您提供帮助，多种联系方式满足您的不同需求。',
    ctaLabel: '查看常见问题',
    ctaHref: '#faq',
  },
}
