Original link: https://docs.liara.ir/paas/nodejs/how-tos/configure-trusted-proxy/koa/

# تنظیم TrustedProxies برای فریم‌ورک Koa

برای تنظیم این قابلیت در برنامه خود، می‌توانید از نمونه قطعه کدهای زیر، استفاده کنید.

نمونه اول:

```bash
const Koa = require('koa');
const app = new Koa();
app.proxy = true; 

// usage example:
app.use(async ctx => {
  const ip = ctx.request.ip;
  ctx.body = `Client IP: ${ip}`;
});
```

نمونه دوم:

```bash
const Koa = require('koa');
const app = new Koa({ proxy: true });

// usage example:
app.use(async ctx => {
  const ip = ctx.request.ip;
  ctx.body = `Client IP: ${ip}`;
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
