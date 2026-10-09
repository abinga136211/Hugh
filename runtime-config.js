// GitHub Pages 静态站调用本机 Cloudflare 隧道上的 API。
// 隧道地址变化时只改这一处即可（无需改业务代码）。
// 必须带 /api 后缀（与 Express 路由挂载点一致）。
window.__HUGH_API_BASE__ = 'https://catch-someone-lens-games.trycloudflare.com/api'
