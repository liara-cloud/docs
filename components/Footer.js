import React from "react";

export default function Footer() {
  return (
    <div className="">
      <footer
        dir="rtl"
        id="footer"
        className="mt-5 border-t border-grey-light bg-grey-lighter "
      >
        <div className="container flex flex-col md:flex-row mx-auto py-10 lg:px-0 xl:px-16 px-5 md:px-0">
          <div className="md:w-1/3">
            <a
              href="/"
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
            </div>
          </div>
          <div className="md:w-1/3 my-5 md:my-0 lg:pr-12 md:pr-6">
            <div className="text-black text-sm my-1 p-1">دسترسی سریع</div>
            <div className="flex">
              <div className="md:w-2/5 w-1/2">
                <div>
                  <a
                    href="/#plans"
                    title="پلن&zwnj;های سرویس ابری لیارا"
                    className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
                  >
                    پلن&zwnj;ها
                  </a>
                </div>
                <div>
                  <a
                    href="/blog"
                    title="وبلاگ سرویس ابری لیارا"
                    className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
                  >
                    وبلاگ
                  </a>
                </div>
                <div>
                  <a
                    href="/contact"
                    title="ارتباط با سرویس ابری لیارا"
                    className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
                  >
                    ارتباط با ما
                  </a>
                </div>
                <div>
                  <a
                    href="https://status.liara.ir"
                    title="وضعیت یا uptime سرویس ابری لیارا"
                    className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
                  >
                    وضعیت
                  </a>
                </div>
              </div>
              <div className="md:w-3/5 w-1/2">
                <div>
                  <a
                    href="https://docs.liara.ir"
                    title="مستندات سرویس ابری لیارا"
                    className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
                  >
                    مستندات
                  </a>
                </div>
                <div>
                  <a
                    href="/terms"
                    title="قوانین و مقررات سرویس ابری لیارا"
                    className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
                  >
                    قوانین و مقررات
                  </a>
                </div>
                <div>
                  <a
                    href="/about"
                    title="درباره سرویس ابری لیارا"
                    className="inline-block text-grey text-sm font-normal my-1 p-1 hover:text-black"
                  >
                    درباره ما
                  </a>
                </div>
              </div>
            </div>
            <ul className="list-reset footer-icons flex mt-5 mx-0 mb-0">
              <li className="m-0">
                <a
                  href="https://twitter.com/liara_cloud"
                  title="سرویس ابری لیارا را در توئیتر دنبال کنید."
                  target="_blank"
                  rel="noopener"
                  className="block opacity-50 m-2 lg:m-3 p-2"
                >
                  <img
                    src="https://liara.ir/wp-content/themes/liara-theme-v2/assets/img/footer/Twitter.svg"
                    alt="Twitter"
                    className="block"
                  />
                </a>
              </li>
              <li className="m-0">
                <a
                  href="https://t.me/liara_cloud"
                  title="سرویس ابری لیارا را در تلگرام دنبال کنید."
                  target="_blank"
                  rel="noopener"
                  className="block opacity-50 m-2 lg:m-3 p-2"
                >
                  <img
                    src="/static/layout/Telegram.svg"
                    alt="Telegram"
                    className="block"
                  />
                </a>
              </li>
              <li className="m-0">
                <a
                  href="https://www.instagram.com/liara_cloud"
                  title="سرویس ابری لیارا را در اینستاگرام دنبال کنید."
                  target="_blank"
                  rel="noopener"
                  className="block opacity-50 m-2 lg:m-3 p-2"
                >
                  <img
                    src="/static/layout/Instagram.svg"
                    alt="Instagram"
                    className="block"
                  />
                </a>
              </li>
              <li className="m-0">
                <a
                  href="https://github.com/liara-cloud"
                  title="سرویس ابری لیارا را در گیت&zwnj;هاب دنبال کنید."
                  target="_blank"
                  rel="noopener"
                  className="block opacity-50 m-2 lg:m-3 p-2"
                >
                  <img
                    src="/static/layout/GitHub.svg"
                    alt="GitHub"
                    className="block"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <div
              title="ارتباط با سرویس ابری لیارا"
              className="text-black text-sm my-1 p-1"
            >
              ارتباط با ما
            </div>
            <div className="my-1 p-1">
              <span className="text-grey text-sm">آدرس:</span>{" "}
              <span
                title="آدرس سرویس ابری لیارا"
                className="text-black text-sm"
              >
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
      </footer>
    </div>
  );
}
