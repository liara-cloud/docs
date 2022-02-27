import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="">
      <footer
        dir="rtl"
        id="footer"
        className="mt-5 border-t border-grey-light bg-grey-lighter "
      >
        <div className="container flex flex-col md:flex-row mx-auto pt-10 lg:px-0 xl:px-16 px-5 md:px-0">
          <div className="md:w-2/6">
            <a
              href="https://liara.ir/"
              title="صفحه&zwnj;ی اصلی سرویس ابری لیارا"
              className="flex items-center my-1 p-2"
            >
              <img
                src="/static/layout/footer-logo.svg"
                alt="سرویس ابری لیارا"
                className="h-9 sm:h-11 ml-3"
              />
              <div>
                <h5 className="m-0 pb-2 text-base font-normal text-black">
                  سرویس ابری لیارا
                </h5>
                <p className="m-0 text-sm font-normal text-grey">
                  ارائه دهنده خدمات ابری PaaS و DBaaS
                </p>
              </div>
            </a>
            <div className="flex items-center justify-center">
              <div className="w-1/3 pt-3 px-2"></div>
              <div className="w-1/3 pt-3 px-2"></div>
            </div>
          </div>
          <div className="md:w-1/6 my-5 md:my-0">
            <div className="text-black text-sm my-1 p-1">دسترسی سریع</div>
            <div>
              <a
                href="https://liara.ir/#plans"
                title="پلن&zwnj;های هاست ابری لیارا"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                پلن&zwnj;ها
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/blog"
                title="وبلاگ هاست ابری لیارا"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                وبلاگ
              </a>
            </div>
            <div>
              <a
                href="/"
                title="مستندات هاست ابری لیارا"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                مستندات
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/about"
                title="درباره هاست ابری لیارا"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                درباره ما
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/contact"
                title="ارتباط با سرویس ابری لیارا"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                ارتباط با ما
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/terms"
                title="قوانین و مقررات هاست ابری لیارا"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                قوانین و مقررات
              </a>
            </div>
            <div>
              <a
                href="https://status.liara.ir"
                title="وضعیت یا uptime هاست ابری لیارا"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                وضعیت سرورها
              </a>
            </div>
          </div>
          <div className="md:w-1/6 my-5 md:my-0">
            <div className="text-black text-sm my-1 p-1">خرید هاست</div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-نود-جی-اس-node"
                title="هاست ابری نود جی اس"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست NodeJS
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-پی-اچ-پی-php"
                title="هاست ابری پی اچ پی"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست PHP
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-لاراول-laravel"
                title="هاست ابری لاراول"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست Laravel
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-پایتون-python"
                title="هاست ابری پایتون"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست Python
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-جنگو-django"
                title="هاست ابری جنگو"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست Django
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-فلسک-flask"
                title="هاست ابری فلسک"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست Flask
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-دات-نت-dotnet"
                title="هاست ابری دات نت"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست{" "}
                <span className="inline-block" style={{ direction: "ltr" }}>
                  .Net
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-ری-اکت-react"
                title="هاست ابری ری اکت"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست React
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-ویو-جی-اس-vue"
                title="هاست ابری ویو جی اس"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست VueJS
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-انگولار-angular"
                title="هاست ابری انگولار"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست Angular
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-وردپرس-wordpress"
                title="هاست ابری وردپرس"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست WordPress
              </a>
            </div>
            <div>
              <a
                href="https://liara.ir/landing/هاست-داکر-docker"
                title="هاست ابری داکر"
                className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
              >
                هاست Docker
              </a>
            </div>
          </div>
          <div className="md:w-2/6">
            <div
              title="ارتباط با هاست ابری لیارا"
              className="text-black text-sm my-1 p-1"
            >
              ارتباط با ما
            </div>
            <div className="my-1 p-1">
              <span className="text-grey text-sm">آدرس:</span>{" "}
              <span title="آدرس هاست ابری لیارا" className="text-black text-sm">
                قم، میدان جانبازان، خیابان شهیدان فاطمی، نبش کوچه ۱۲، پلاک ۴،
                طبقه سوم، واحد ۳
              </span>
            </div>
            <div className="my-1 p-1">
              <span className="text-grey text-sm">شماره تماس واحد فروش:</span>{" "}
              <span
                title="شماره تماس واحد فروش سرویس ابری لیارا"
                className="ltr inline-block text-black text-sm"
              >
                ۰۲۵-۳۷۸۳۸۹۴۶
              </span>{" "}
              <span className="text-black text-sm px-1">(۹ الی ۱۷)</span>
            </div>
            <div className="my-1 p-1">
              <span className="text-grey text-sm">ایمیل واحد پشتیبانی:</span>{" "}
              <span
                title="ایمیل واحد پشتیبانی سرویس ابری لیارا"
                className="text-black text-sm"
              >
                support[@]liara.ir
              </span>
            </div>
            <div className="my-1 p-1">
              <span className="text-grey text-sm">ایمیل واحد فروش:</span>{" "}
              <span
                title="ایمیل واحد فروش سرویس ابری لیارا"
                className="text-black text-sm"
              >
                sales[@]liara.ir
              </span>
            </div>
          </div>
        </div>
        <div className="container flex justify-center mx-auto pb-10 lg:px-0 xl:px-16 px-5 md:px-0">
          <ul className="list-reset footer-icons flex mt-5 mx-0 mb-0">
            <li className="m-0">
              <a
                href="https://twitter.com/liara_cloud"
                className="block opacity-50 m-2 lg:m-3 p-2"
                title="هاست ابری لیارا را در توئیتر دنبال کنید."
                target="_blank"
                rel="noopener noreferrer"
                rel="noopener noreferrer"
              >
                <img
                  src="/static/layout/Twitter.svg"
                  className="block"
                  alt="Twitter"
                />
              </a>
            </li>
            <li className="m-0">
              <a
                href="https://t.me/liara_cloud"
                className="block opacity-50 m-2 lg:m-3 p-2"
                title="هاست ابری لیارا را در تلگرام دنبال کنید."
                target="_blank"
                rel="noopener noreferrer"
                rel="noopener noreferrer"
              >
                <img
                  src="/static/layout/Telegram.svg"
                  className="block"
                  alt="Telegram"
                />
              </a>
            </li>
            <li className="m-0">
              <a
                href="https://www.instagram.com/liara_cloud"
                className="block opacity-50 m-2 lg:m-3 p-2"
                title="هاست ابری لیارا را در اینستاگرام دنبال کنید."
                target="_blank"
                rel="noopener noreferrer"
                rel="noopener noreferrer"
              >
                <img
                  src="/static/layout/Instagram.svg"
                  className="block"
                  alt="Instagram"
                />
              </a>
            </li>
            <li className="m-0">
              <a
                href="https://github.com/liara-cloud"
                className="block opacity-50 m-2 lg:m-3 p-2"
                title="هاست ابری لیارا را در گیت‌هاب دنبال کنید."
                target="_blank"
                rel="noopener noreferrer"
                rel="noopener noreferrer"
              >
                <img
                  src="/static/layout/GitHub.svg"
                  className="block"
                  alt="GitHub"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
