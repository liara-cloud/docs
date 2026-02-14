Original link: https://docs.liara.ir/paas/nodejs/how-tos/configure-trusted-proxy/expressjs/

# تنظیم TrustedProxies برای فریم‌ورک Express JS

برای تنظیم این قابلیت در برنامه خود، می‌توانید از نمونه قطعه کد زیر، استفاده کنید:

```bash
const express = require('express');
const app = express();

app.set('trust proxy', 1);

// usage example:
app.get('/', (req, res) => {
  const ip = req.ip;
  res.send(`Client IP: ${ip}`);
});
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
