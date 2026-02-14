Original link: https://docs.liara.ir/one-click-apps/imgproxy/how-tos/use-in-nodejs/

# استفاده از Imgproxy در برنامه NodeJS

برای استفاده از Imgproxy در برنامه‌های NodeJS، نیاز به نصب ماژول و یا کتابخانه خاصی نیست!  
در ابتدا، بایستی متغیرهای محیطی زیر را به فایل `env.` یا بخش متغیرهای محیطی برنامه خود اضافه کنید؛ به عنوان مثال:

```bash
ENDPOINT_URL=https://laravel-app.liara.run
IMGPROXY_URL=https://imgproxy-app.liara.run
```

اکنون می‌توانید تنظیمات مربوط به Imgproxy را در برنامه خود وارد کنید:

```js
const ENDPOINT_URL = process.env.ENDPOINT_URL;
const IMGPROXY_URL = process.env.IMGPROXY_URL;

const img_proxy_conf = {
    "signature": "_",
    "options": "resize:fill:300:400:0",
    "gravity": "gravity:sm"
};

const imgproxy_conf = `${IMGPROXY_URL}/${img_proxy_conf.signature}/${img_proxy_conf.options}/${img_proxy_conf.gravity}/plain/`;
```

دقت داشته باشید که مقادیر درون `img_proxy_conf` برای مثال آورده شده‌اند و شما می‌توانید مقادیر آن را متناسب با نیازهای خود تغییر دهید.  
در نهایت، می‌توانید با استفاده از قطعه کد زیر، از Imgproxy در برنامه خود استفاده کنید:

```js
app.get('/images', (req, res) => {
    fs.readdir('./public/uploads', (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const imageFiles = files.filter(file => {
            const extname = path.extname(file);
            return ['.jpg', '.jpeg', '.png', '.gif'].includes(extname.toLowerCase());
        });

        const processedImages = imageFiles.map(image => {
            const temp = `${ENDPOINT_URL}/public/uploads/${image}`;
            return `${imgproxy_conf}${temp}`;
        });

        processedImages.forEach(image => {
            console.log(image);
        });

        res.render('images', { images: processedImages });
    });
});
```

> سورس کامل قطعه کد فوق در [اینجا](https://github.com/liara-cloud/imgproxy-getting-started/tree/nodejs-app) موجود است که می‌توانید از آن استفاده کنید.

## all links

[All links of docs](https://docs.liara.ir/all-links-llms.txt)
