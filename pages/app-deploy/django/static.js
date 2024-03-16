import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Layout from "../../../components/Layout";
import PlatformIcon from "../../../components/PlatformIcon";
import ZoomableImage from "../../../components/ZoomableImage";

export default () => (
  <Layout>
    <Head>
      <title>مستندات فایل‌های استاتیک در برنامه‌های Django - لیارا</title>
    </Head>
    <div className="page-head">
      <PlatformIcon platform="django" />
      <div className="page-title">
        <h1>پلتفرم Django</h1>
        <span className="page-description">(Django Platform)</span>
      </div>
    </div>
    <h3>تنظیم جنگو برای فایل‌های استاتیک</h3>
    <p>
      جنگو برای سرو کردن فایل‌های استاتیک در پروداکشن طراحی نشده
      برای سرو کردن این فایل‌ها برای پروژه‌های جدی از برنامه whitenoise استفاده کنید
    </p>{" "}
    <Highlight className="php">{`pip install whitenoise`}</Highlight>{" "}
    <p>
      سپس تنظیمات این ابزار را در settings.py خود قرار دهید:
    </p>
      <Highlight className="python">
      {`STATIC_URL = "/static/"
      STATIC_ROOT = BASE_DIR / "staticfiles"
      STATICFILES_DIRS = [str(BASE_DIR / "static")]
      STORAGES = {
          "default": {
              "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
          },
          "staticfiles": {
              "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
          },
      }
     `}
    </Highlight>
      <p>
        و این خط کد را در تنظیمات میدل‌ور های خود دقیقا بعد از مید‌ور security قرار بدهید
      </p>
      <Highlight className="python">
      {`"whitenoise.middleware.WhiteNoiseMiddleware",`}
    </Highlight>
    <Notice variant="Warning">
      اگر از پکیج <span className="code">django-cors-headers</span> استفاده میکنید 
      میدل‌ور این بسته باید بالاتر از میدل‌ور whitenoise قرار بگیرد
        </Notice>
    <p>
      برای استفاده از این ابزار در لوکال این ابزار را در لیست اپ‌های نصب شده جنگو قرار دهید
    </p>
    <Highlight className="python">
        {`INSTALLED_APPS = [
              ...
              "whitenoise.runserver_nostatic",
              "django.contrib.staticfiles",
              ...
         ]`}
    </Highlight>
      <p>توجه کنید که این کار فقط برای شرایط لوکال هست و حتما باید بالاتر از ابزار staticfiles خود جنگو قرار بگیرد
      </p>
    
    <p>
     برای مطالعه بیشتر و جزییات می‌توانید به مستندات این ابزار مراجعه کنید:
    <a href="https://whitenoise.readthedocs.io/en/latest/django.html" target="_blank">whitenoise</a>
    </p>
    <Link href="/app-deploy/django/liarajson" className="next-page">
      متوجه شدم، برو گام بعدی!
    </Link>
  </Layout>
);
