import React, { Component } from 'react';

import './style.css'
import ActiveLink from './ActiveLink'

export default class Sidebar extends Component {
  state = {
    isNavOpen: false,
  };

  toggleNav = () => {
    this.setState(prevState => ({ isNavOpen: ! prevState.isNavOpen }));
  };

  render() {
    const { isNavOpen } = this.state;
    return (
      <div className="sidebar">
        <a href="https://liara.ir" className="brand">
          <img src="/static/logo.png" alt="liara" className="logo" />
          <div className="brand__text">
            <h2>سرویس ابری لیارا</h2>
            <p>ارائه دهنده خدمات ابری PaaS و DBaaS</p>
          </div>
        </a>

        <button type="button" className="menu-button" onClick={this.toggleNav}>
          <img src="/static/icons/menu.svg" alt="" className="menu-button__icon" />
          فهرست
        </button>

        <div className={isNavOpen ? '' : 'hide-nav'}>
          <nav className="nav">
            <ul className="nav__list">
              <li><ActiveLink href="/">آشنایی با لیارا</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">کلاینت‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink href="/clients/cli">CLI</ActiveLink></li>
              <li><ActiveLink href="/clients/api">API</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">برنامه‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink href="/apps/logs">لاگ‌ها</ActiveLink></li>
              <li><ActiveLink href="/apps/console">کنسول</ActiveLink></li>
              <li><ActiveLink href="/apps/environment-variables">متغیرها (تنظیمات)</ActiveLink></li>
              <li><ActiveLink href="/apps/volumes">ذخیره‌ی داده‌ها</ActiveLink></li>
              <li><ActiveLink href="/apps/ignore">نادیده‌گرفتن فایل‌ها</ActiveLink></li>
              <li><ActiveLink href="/apps/fixed-ip">آی‌پی ثابت</ActiveLink></li>
              <li><ActiveLink href="/apps/zero-downtime-deployment">استقرار بدون داون‌تایم</ActiveLink></li>
              <li><ActiveLink href="/apps/health-check">بررسی سلامت</ActiveLink></li>
              <li><ActiveLink href="/apps/applets">برنامک‌ها</ActiveLink></li>
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">دیتابیس‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink href="/databases/tunnel">ایجاد تونل امن</ActiveLink></li>
              <li><ActiveLink href="/databases/robo3t">اتصال با Robo3T</ActiveLink></li>
              {/* <li><ActiveLink href="/databases/mysql">MySQL</ActiveLink></li>
              <li><ActiveLink href="/databases/mongodb">MongoDB</ActiveLink></li> */}
            </ul>
          </nav>

          <nav className="nav">
            <span className="nav__title">استقرار برنامه‌ها</span>
            <ul className="nav__list">
              <li><ActiveLink icon="react.svg" href="/deployments/react">React</ActiveLink></li>
              <li><ActiveLink icon="vue.svg" href="/deployments/vue">Vue</ActiveLink></li>
              <li><ActiveLink icon="angularjs.svg" href="/deployments/angular">Angular</ActiveLink></li>
              <li><ActiveLink icon="HTML5.svg" href="/deployments/static">Static</ActiveLink></li>
              <li><ActiveLink icon="nodejs.svg" href="/deployments/nodejs">NodeJS</ActiveLink></li>
              <li><ActiveLink icon="php.svg" href="/deployments/php">PHP</ActiveLink></li>
              <li><ActiveLink icon="laravel.svg" href="/deployments/laravel">Laravel</ActiveLink></li>
              <li><ActiveLink icon="django.svg" href="/deployments/django">Django</ActiveLink></li>
              <li><ActiveLink icon="flask.svg" href="/deployments/flask">Flask</ActiveLink></li>
              <li><ActiveLink icon="netcore.svg" href="/deployments/netcore" textStyle={{ direction: 'ltr' }}>.Net Core</ActiveLink></li>
              <li><ActiveLink icon="wordpress.svg" href="/deployments/wordpress">WordPress</ActiveLink></li>
              <li><ActiveLink icon="docker.png" href="/deployments/docker">Docker</ActiveLink></li>
            </ul>
          </nav>

          {/* TODO: <nav className="nav">
          <span className="nav__title">دامنه‌ها</span>
          <ul className="nav__list">
            <li><ActiveLink href="/domains/mysql">افزودن دامنه</ActiveLink></li>
          </ul>
        </nav> */}

          <nav className="nav">
            <span className="nav__title">سرویس ذخیره‌ی فایل</span>
            <ul className="nav__list">
              <li><ActiveLink href="/storage/overview">آشنایی</ActiveLink></li>
              <li><ActiveLink href="/storage/nodejs">NodeJS SDK</ActiveLink></li>
              <li><ActiveLink href="/storage/laravel">Laravel S3 Driver</ActiveLink></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
