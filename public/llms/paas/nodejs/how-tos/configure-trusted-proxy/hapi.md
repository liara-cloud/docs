Original link: https://docs.liara.ir/paas/nodejs/how-tos/configure-trusted-proxy/hapi/

# تنظیم TrustedProxies برای فریم‌ورک Hapi

برای تنظیم این قابلیت در برنامه خود، می‌توانید از نمونه قطعه کد زیر، استفاده کنید:

```bash
const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0',
    routes: {
      state: {
        parse: true, 
        failAction: 'ignore'
      }
    }
  });

  await server.register(require('@hapi/inert'));

  server.ext('onRequest', (request, h) => {
    const xForwardedFor = request.headers['x-forwarded-for'];
    if (xForwardedFor) {
      const ips = xForwardedFor.split(',').map(ip => ip.trim());
      request.info.remoteAddress = ips[0];
    }
    return h.continue;
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const ip = request.info.remoteAddress;
      return `Client IP: ${ip}`;
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
