import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../components/Layout";
import Notice from "../../components/Notice";
import PlatformIcon from "../../components/PlatformIcon";
import ZoomableImage from "../../components/ZoomableImage";
import Link from "next/link";

export default () => (
  <Layout>
    <Head>
      <title>مستندات پردازش تصاویر با Imgproxy - لیارا</title>
    </Head>

    <div className="page-head">
      <PlatformIcon platform="imgproxy" />
      <div className="page-title">
        <h1>پردازش تصاویر با Imgproxy</h1>
        <span className="page-description">(Imgproxy one-click app)</span>
      </div>
    </div>

    <p>
      <a href="https://imgproxy.net/" target="_blank" rel="noopener">
        Imgproxy
      </a>{" "}
      یک ابزار پردازش تصویر توسعه داده شده با زبان Go است که می‌توانیم آن را
      جایگزینی مدرن‌ و حتی بسیار کاربردی‌تر برای ImageMagick و یا GraphicsMagick
      بدانیم زیرا قابلیت‌های مختلفی مانند تغییر اندازه‌ی تصاویر را به‌صورت
      remote برای ما فراهم کرده است.
    </p>

    <p>
      یکی دیگر از جذابیت‌های Imgproxy، امکان شخصی‌سازی این برنامه با استفاده از
      متغیرهای محیطی است که برای کسب اطلاعات بیشتر می‌توانید{" "}
      <a
        href="https://docs.imgproxy.net/configuration"
        target="_blank"
        rel="noopener"
      >
        مستندات پیکربندی Imgproxy
      </a>{" "}
      را مطالعه کنید.
    </p>

    <h3>فهرست عناوین:</h3>
    <ul className="mt-0">
      <li>
        <a href="#install">راه‌اندازی Imgproxy</a>
      </li>
      <li>
        <a href="#django">استفاده از Imgproxy در برنامه‌های Django</a>
      </li>
      <li>
        <a href="#laravel">استفاده از Imgproxy در برنامه‌های Laravel</a>
      </li>
      <li>
        <a href="#nodejs">استفاده از Imgproxy در برنامه‌های NodeJS</a>
      </li>
      <li>
        <a href="#tips">توضیحات و نکات تکمیلی</a>
      </li>
    </ul>

    <h3 id="insta">🚀 راه‌اندازی Imgproxy</h3>
    <p>
      در صورتی که تمایلی به خواندن آموزش متنی ندارید می‌توانید ویدیوی آموزشی زیر
      ‌را مشاهده کنید.
    </p>

    <ZoomableImage src="https://files.liara.ir/docs/imgproxy/create-imgproxy-one-click-app.gif"></ZoomableImage>

    <p>
      برای راه‌اندازی برنامه‌ی آماده Imgproxy باید در بخش{" "}
      <a href="https://console.liara.ir/apps" target="_blank">
        برنامه‌های
      </a>{" "}
      کنسول لیارا بر روی دکمه‌ی <strong>ایجاد برنامه</strong> کلیک کرده و در
      صفحه‌ی باز شده وارد بخش برنامه‌های آماده شوید. سپس برنامه‌ی Imgproxy را
      انتخاب و یک شناسه‌ی یکتا برای برنامه‌ی خود درنظر بگیرید، همچنین پلن مورد
      نظر خود را انتخاب کنید و در آخر بر روی دکمه‌ی{" "}
      <strong>ایجاد برنامه</strong> کلیک کنید.
    </p>

    <h3 id="django">استفاده از Imgproxy در برنامه‌های Django</h3>
    <p>
      برای استفاده از Imgproxy در برنامه‌های Django، نیاز به نصب ماژول و یا
      کتابخانه خاصی نیست! در ادامه، یک مثال از نحوه استفاده Imgproxy آمده است:
    </p>

    <p>
      در ابتدا، کافیست تا متغیرهای <span className="code">ENDPOINT</span> و{" "}
      <span className="code">IMGPROXY_URL</span> را به شکل زیر به فایل{" "}
      <span className="code">settings.py</span> اضافه کنید:
    </p>

    <Highlight className="python">
      {`import os
ENDPOINT     = os.getenv("ENDPOINT", 'http://127.0.0.1:8000')
IMGPROXY_URL = os.getenv("IMGPROXY_URL", "")`}
    </Highlight>

    <Notice variant="warning">
      دقت داشته باشید که مقدار <span className="code">ENDPOINT</span> را حتماً
      با <span className="code">http</span> یا{" "}
      <span className="code">https</span> وارد کنید و همچنین مقدار{" "}
      <span className="code">IMGPROXY_URL</span> باید برابر با آدرس کامل برنامه
      Imgproxy باشد.
    </Notice>

    <p>
      برای مثال، اگر که از فایل <span className="code">.env</span> استفاده
      می‌کنید، مقادیر دو متغیر فوق را باید همانند مقادیر زیر وارد کنید:
    </p>
    <Highlight className="plaintext">
      {`ENDPOINT=https://django-app-test.liara.run
IMGPROXY_URL=https://imgproxy-app.liara.run`}
    </Highlight>

    <p>
      اکنون می‌توانید از Imgproxy در برنامه خود استفاده کنید؛ برای مثال، قطعه کد
      زیر در فایل models.py به کار رفته است:
    </p>
    <Highlight className="python">
      {`from django.db import models
from django.conf import settings

img_proxy_conf = {
    "signature": "_",
    "options": "resize:fill:300:400:0",
    "gravity": "gravity:sm",}

class Image(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='')
    full_path = models.CharField(max_length=255)
    final_result = models.CharField(max_length=255)

    def save(self, *args, **kwargs):
        if self.image:
            self.full_path = f"{settings.ENDPOINT}{self.image.url}"
            if settings.IMGPROXY_URL != "":
                self.final_result = (
                    f"{settings.IMGPROXY_URL}/{img_proxy_conf['signature']}/"
                    f"{img_proxy_conf['options']}/{img_proxy_conf['gravity']}/plain/"
                    f"{self.full_path}")
            else:
                self.final_result = self.image.url
        super().save(*args, **kwargs)
`}
    </Highlight>
    <Notice variant="info">
      سورس کامل قطعه کد فوق در{" "}
      <Link href="https://github.com/liara-cloud/imgproxy-getting-started.git">
        گیت‌هاب لیارا
      </Link>{" "}
      موجود است که می‌توانید از آن استفاده کنید.
    </Notice>

    <p>
      در نظر داشته باشید که کد فوق، یک مثال از کاربرد Imgproxy است و شما
      می‌توانید فیلد <span className="code">option</span> درون دیکشنری{" "}
      <span className="code">img_proxy_conf</span> موجود در کد فوق را با توجه به
      نیاز خود تغییر دهید.
    </p>

    <h3 id="laravel">استفاده از Imgproxy در برنامه‌های Laravel</h3>
    <p>
      برای استفاده از Imgproxy در ابتدا بایستی متغیرهای محیطی زیر را به فایل{" "}
      <span className="code">.env</span> یا بخش متغیرهای محیطی برنامه خود اضافه
      کنید:{" "}
    </p>
    <Highlight className="plaintext">
      {`ENDPOINT_URL=your-host-address 
IMGPROXY_URL=your-imgproxy-address`}
    </Highlight>
    <Notice variant="warning">
      دقت داشته باشید که مقدار <span className="code">ENDPOINT</span> را حتماً
      با <span className="code">http</span> یا{" "}
      <span className="code">https</span> وارد کنید و همچنین مقدار{" "}
      <span className="code">IMGPROXY_URL</span> باید برابر با آدرس کامل برنامه
      Imgproxy باشد.
    </Notice>
    <p>قطعه کد زیر یک مثال برای مقدار این متغیرهای محیطی است:</p>
    <Highlight className="plaintext">
      {`ENDPOINT_URL=https://laravel-app.liara.run
IMGPROXY_URL=https://imgproxy-app.liara.run`}
    </Highlight>

    <p>
      اکنون کافیست تا در دایرکتوری <span className="code">config</span> یک فایل
      به نام <span className="code">custom.php</span> ایجاد کنید و قطعه کد زیر
      را درون آن قرار دهید:
    </p>
    <Highlight className="php">
      {`<?php

return [
    'img_proxy_conf' => [
        'signature' => '_',
        'options' => 'resize:fill:300:400:0',
        'gravity' => 'gravity:sm',
    ],
];
`}
    </Highlight>
    <p>
      دقت داشته باشید که مقادیر درون{" "}
      <span className="code">img_proxy_conf</span> برای مثال آورده شده‌اند و شما
      می‌توانید مقادیر آن را متناسب با نیازهای خود تغییر دهید.
    </p>
    <p>
      اکنون، می‌توانید از imgproxy در برنامه خود استفاده کنید؛ قطعه کد زیر،
      مثالی از استفاده imgproxy در کنترلر برنامه laravel است:
    </p>
    <Highlight className="php">
      {`<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photo;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imgProxyConf = config('custom.img_proxy_conf');
        $options = $imgProxyConf['options'];
        $gravity = $imgProxyConf['gravity'];
        $signature = $imgProxyConf['signature'];


        $phototemp = $request->file('photo')->store('public/photos');
        $photoPath_ = env('ENDPOINT_URL') . Storage::url($phototemp);
        $photoPath = env('IMGPROXY_URL') . '/' . $signature . '/' . $options . '/' . $gravity . '/plain/' . $photoPath_;


        Photo::create([
            'path' => $photoPath,
        ]);

        return redirect()->route('photo.index');
    }
    
    public function index()
    {
        $photos = Photo::all();
        return view('photos.index', compact('photos'));
    }
}
`}
    </Highlight>

    <Notice variant="info">
      سورس کامل قطعه کد فوق در{" "}
      <Link href="https://github.com/liara-cloud/imgproxy-getting-started/tree/laravel-app">
        گیت‌هاب لیارا
      </Link>{" "}
      موجود است که می‌توانید از آن استفاده کنید.
    </Notice>

    <h3 id="nodejs">استفاده از Imgproxy در برنامه‌های NodeJS</h3>
    <p>
      برای استفاده از Imgproxy باید همانند دو پلتفرم دیگر، متغیرهای محیطی زیر را
      به فایل <span className="code">.env</span> یا بخش متغیرهای محیطی برنامه
      خود اضافه کنید:
    </p>

    <Highlight className="plaintext">
      {`ENDPOINT_URL=https://laravel-app.liara.run
IMGPROXY_URL=https://imgproxy-app.liara.run`}
    </Highlight>

    <Notice variant="warning">
      در نظر داشته باشید که مقدار متغیرهای محیطی فوق، فرضی هستند و باید آن‌ها را
      با مقادیر خود، جایگزین کنید.
    </Notice>

    <p>اکنون می‌توانید تنظیمات مربوط به Imgproxy را در برنامه خود وارد کنید:</p>
    <Highlight className="js">
      {`const ENDPOINT_URL = process.env.ENDPOINT_URL;
const IMGPROXY_URL = process.env.IMGPROXY_URL;

const img_proxy_conf = {
    "signature": "_",
    "options": "resize:fill:300:400:0",
    "gravity": "gravity:sm"
};

const imgproxy_conf = \`\${IMGPROXY_URL}/\${img_proxy_conf.signature}/\${img_proxy_conf.options}/\${img_proxy_conf.gravity}/plain/\`;
`}
    </Highlight>

    <p>
      دقت داشته باشید که مقادیر درون{" "}
      <span className="code">img_proxy_conf</span> برای مثال آورده شده‌اند و شما
      می‌توانید مقادیر آن را متناسب با نیازهای خود تغییر دهید.
    </p>
    <p>
      در نهایت، می‌توانید با استفاده از قطعه کد زیر، از imgproxy در برنامه خود
      استفاده کنید:
    </p>

    <Highlight className="js">
      {`app.get('/images', (req, res) => {
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
            const temp = \`\${ENDPOINT_URL}/public/uploads/\${image}\`;
            return \`\${imgproxy_conf}\${temp}\`;
        });

        processedImages.forEach(image => {
            console.log(image);
        });

        res.render('images', { images: processedImages });
    });
});`}
    </Highlight>

    <Notice variant="info">
      سورس کامل قطعه کد فوق در{" "}
      <Link href="https://github.com/liara-cloud/imgproxy-getting-started/tree/nodejs-app">
        گیت‌هاب لیارا
      </Link>{" "}
      موجود است که می‌توانید از آن استفاده کنید.
    </Notice>

    <h3 id="tips">🎯 توضیحات و نکات تکمیلی</h3>
    <h4 id="url-signature">اضافه کردن URL signature</h4>

    <p>
      بسیار توصیه می‌شود که در حالت Production با اجرای دستور زیر، یک
      hex-encoded key و یک hex-encoded salt ایجاد کرده و هر دوی این مقدارها را
      کپی کنید:
    </p>
    <Highlight className="bash">{`echo $(xxd -g 2 -l 64 -p /dev/random | tr -d '\\n')`}</Highlight>
    <p>
      سپس وارد تب برنامه‌ها شده و برنامه‌ی Imgproxy خود را انتخاب کنید. اکنون
      باید مقادیر کپی شده را در بخش <strong>تنظیمات متغیرها</strong> در فیلد{" "}
      <strong>Value</strong> متغیرهای <span className="code">IMGPROXY_KEY</span>{" "}
      و <span className="code">IMGPROXY_SALT</span> قرار دهید و درنهایت بر روی
      دکمه‌ی <strong>ثبت تغییرات</strong> کلیک کنید.
    </p>

    <h4 id="imgproxy-secret">
      محدود کردن دسترسی به Imgproxy با تنظیم{" "}
      <span className="code">IMGPROXY_SECRET</span>
    </h4>
    <p>
      برای محدود کردن دسترسی به برنامه‌ی Imgproxy می‌توانید secret مورد نظر خود
      را در فیلد <strong>Value</strong> متغیر{" "}
      <span className="code">IMGPROXY_SECRET</span> وارد کرده و درنهایت بر روی
      دکمه‌ی <strong>ثبت تغییرات</strong> کلیک کنید.
    </p>
    <Notice variant="warning">
      توجه داشته باشید که پس از تنظیم <strong>IMGPROXY_SECRET</strong> بایستی
      هدر
      <span className="code">Authorization: Bearer %secret%</span> را به
      درخواست‌های HTTP خود اضافه کنید.
    </Notice>

    <h4 id="upgrade">تغییر نسخه‌ی برنامه مستقر شده</h4>
    <p>
      برخی مواقع لازم شده که نسخه برنامه‌ی آماده‌ای که مستقر کردیم رو تغییر
      بدیم. برای مثال، نسخه جدیدی از آن برنامه منتشر شده و ما می‌خواهیم از آن
      استفاده بکنیم. نکته‌ای که باید قبل تغییر نسخه برنامه‌مان در نظر داشته
      باشیم، این است که آن نسخه با لیارا سازگاری داشته باشد و در صورتی که لازم
      باشد از دیسک‌ها برای مواردی همچون تغییرات در برنامه یا نگهداری اطلاعات‌مان
      استفاده بکنیم. یا حتی لازم باشد یک سری متغیر‌هایی در برنامه‌مان تنظیم
      کنیم. در اینجا شما می‌تونید یک نمونه ساده از تغییر نسخه را مشاهده کنید.
      برای شروع لازم هست ابتدا در سیستم لوکال فایلی تحت عنوان{" "}
      <span className="code">liara.json</span>
      ایجاد کنید و مقادیر زیر رو در اون قرار بدید:
    </p>
    <Highlight className="json">
      {`{
    "image": "darthsim/imgproxy:<your-version>",
    "port": 80,
    "app": "<your-app-name>"
}`}
    </Highlight>
    <p>
      در اینجا مقدار app، برابر هست با نام برنامه‌ای که در لیارا ایجاد کردید و
      مقدار image، برابر هست نام image برنامه‌تان. در قسمت port، پورتی که
      برنامه‌تان بر روی آن اجرا می‌شود. در نهایت با{" "}
      <span className="code">liara-cli</span> و سپس دستور زیر برنامه‌تان مستقر
      کنید:
    </p>
    <Highlight className="json">{`liara deploy`}</Highlight>
  </Layout>
);
