Original link: https://docs.liara.ir/paas/flask/how-tos/set-trusted-proxies/

# پیکربندی TrustedProxies در برنامه‌های Flask

با توجه به این نکته که تمامی درخواست‌ها توسط [reverse proxy](https://docs.liara.ir/paas/details/reverse-proxy) لیارا به برنامه‌ی شما هدایت می‌شود؛ باید در زمان استفاده از فریم‌ورک‌های مختلف برای مشاهده‌ی IP واقعی کاربران و بسیاری از قابلیت‌های دیگر تعیین کنید که برنامه‌ی شما در پشت یک reverse proxy راه‌اندازی شده است.

عبارت Trusted Proxies یا پروکسی‌های مورد اعتماد، به پروکسی‌هایی گفته می‌شود که سرور به آنها اعتماد دارد تا آدرس‌های IP واقعی کاربران را ارسال کنند. در بسیاری از مواقع، سرورهایی که پشت یک پروکسی معکوس (reverse proxy) قرار دارند، فقط آدرس IP پروکسی را می‌بینند و نه آدرس IP واقعی کاربران. برای رفع این مشکل و برای دلایلی مانند رهگیری، ردیابی یا اعمال سیاست‌های امنیتی، TrustedProxyها، IP واقعی کاربران را از طریق هدرهای HTTP خاصی مثل X-Forwarded-For یا X-Real-IP به سرورهای پشتی ارسال می‌کنند.

- ![how trusted proxy works](https://media.liara.ir/docs/how-trusted-proxy-works.png)

برای تنظیم این قابلیت در برنامه خود، می‌توانید از نمونه قطعه کد زیر، استفاده کنید:

```python
from flask import Flask, request
from werkzeug.middleware.proxy_fix import ProxyFix

app = Flask(__name__)

# Use ProxyFix middleware to handle proxy headers
app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_prefix=1)

@app.route('/')
def index():
    # Access client's IP from X-Forwarded-For or X-Real-IP headers
    client_ip = request.headers.get('X-Forwarded-For').split(',')[0] or 
        request.headers.get('X-Real-IP') or 
        request.remote_addr

    return f'Client IP: {client_ip}'

if __name__ == '__main__':
    app.run(debug=True)
```

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
