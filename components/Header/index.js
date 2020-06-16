import React, { Component } from 'react'

import './style.css'

class Header extends Component {
  state = {
    isNavOpen: false,
  };

  toggleNav = () => {
    this.setState(prevState => ({ isNavOpen: !prevState.isNavOpen }));
  };

  render() {
    const { isNavOpen } = this.state;
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
          <div className={`header__floating-nav-wrapper ${isNavOpen ? 'header__floating-nav-wrapper--open' : ''}`}>
            <div className="header__menu-toggle">
              <img onClick={this.toggleNav} src="/static/layout/menu.svg" alt="open-menu" id="open-menu" />
              <img src="/static/layout/closemenu.svg" alt="close-menu" id="close-menu" />
            </div>
  
            <div onClick={this.toggleNav} className="header__overlay"></div>
  
            <div className="header__floating-nav">
              <div className="header__logo">
                <img src="/static/layout/liara-logo.svg" alt="سرویس ابری لیارا" />
                <h2>سرویس ابری لیارا</h2>
              </div>
              <div className="header__auth">
                <a href="https://console.liara.ir/login" className="header__login">ورود</a>
                <a href="https://console.liara.ir/register" className="header__register">ایجاد حساب کاربری</a>
              </div>
              <nav>
                <ul>
                  <li className="header__floating-nav-link"><a href="https://liara.ir/#plans">پلن‌ها</a></li>
                  <li className="header__floating-nav-link"><a href="https://docs.liara.ir">مستندات</a></li>
                  <li className="header__floating-nav-link"><a href="https://liara.ir/blog">وبلاگ</a></li>
                  <li className="header__floating-nav-link"><a href="https://liara.ir/terms">قوانین و مقررات</a></li>
                  <li className="header__floating-nav-link"><a href="https://liara.ir/contact">ارتباط با ما</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
