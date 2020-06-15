import './style.css'

function Header() {
  return (
    <header className="header">
      <div>
        <div className="header__logo">
          <img src="/static/layout/liara-logo.svg" alt="سرویس ابری لیارا" />
          <h2>سرویس ابری لیارا</h2>
        </div>
        <h2 className="header__slogan">ارائه دهنده خدمات ابری PaaS و DBaaS</h2>
      </div>
      <nav className="header__nav">
        <div className="header__auth">
          <a className="header__login" href="https://console.liara.ir/login">ورود</a>
          <a className="header__register" href="https://console.liara.ir/register">ایجاد حساب کاربری</a>
        </div>
        <div className="header__links">
          <a href="https://liara.ir/#plans" title="پلن&zwnj;های سرویس ابری لیارا">پلن&zwnj;ها</a>
          <a href="https://docs.liara.ir" title="مستندات سرویس ابری لیارا">مستندات</a>
          <a href="https://liara.ir/blog" title="وبلاگ سرویس ابری لیارا">وبلاگ</a>
          <a href="https://liara.ir/terms" title="قوانین و مقررات سرویس ابری لیارا">قوانین و مقررات</a>
          <a href="https://liara.ir/contact" title="ارتباط با سرویس ابری لیارا">ارتباط با ما</a>
        </div>
        {/* <div>
          <div class="cursor-pointer p-4">
            <img class="block" src="/static/layout/menu.svg" alt="open-menu" />
            <img class="block" src="/static/layout/closemenu.svg" alt="close-menu" />
          </div>
          <div class="w-full h-full bg-black fixed pin-t pin-r opacity-25 z-50"></div>

          <div class="header__floating-nav">
            <div className="header__logo">
              <img src="/static/layout/liara-logo.svg" alt="سرویس ابری لیارا" />
              <h2>سرویس ابری لیارا</h2>
            </div>
            <div class="header__auth">
              <a href="https://console.liara.ir/login" class="header__login">ورود</a>
              <a href="https://console.liara.ir/register" class="header__register">ایجاد حساب کاربری</a>
            </div>
            <nav class="my-8 mx-12">
              <ul class="list-reset m-0">
                <li class="text-center mb-3 pb-3 border-b border-grey-light"><a class="block text-sm font-normal text-black hover:text-blue cursor-pointer p-1">پلن‌ها</a></li>
                <li class="text-center mb-3 pb-3 border-b border-grey-light"><a href="https://docs.liara.ir" class="block text-sm font-normal text-black hover:text-blue cursor-pointer p-1">مستندات</a></li>
                <li class="text-center mb-3 pb-3 border-b border-grey-light"><a href="/blog" class="block text-sm font-normal text-black hover:text-blue cursor-pointer p-1">وبلاگ</a></li>
                <li class="text-center mb-3 pb-3 border-b border-grey-light"><a href="/terms" class="block text-sm font-normal text-black hover:text-blue cursor-pointer p-1">قوانین و مقررات</a></li>
                <li class="text-center mb-3 pb-3 border-grey-light"><a href="/contact" class="block text-sm font-normal text-black hover:text-blue cursor-pointer p-1">ارتباط با ما</a></li>
              </ul>
            </nav>
          </div>
        </div> */}
      </nav>
    </header>
  )
}

export default Header
