import './style.css'
import ActiveLink from './ActiveLink'

export default () => (
  <div className="sidebar">
    <a href="https://liara.ir" className="brand">
      <img src="/static/logo.png" alt="liara" className="logo" />
      <div className="brand__text">
        <h2>لیارا</h2>
        <p>بستر ابری برای اپلیکیشن‌ها</p>
      </div>
    </a>

    <nav className="nav">
      <span className="nav__title">کلاینت‌ها</span>
      <ul className="nav__list">
        <li><ActiveLink href="/clients/cli">CLI</ActiveLink></li>
      </ul>
    </nav>

    <nav className="nav">
      <span className="nav__title">استقرار پروژه‌های Back End</span>
      <ul className="nav__list">
        <li><ActiveLink href="/deployments/nodejs">NodeJS</ActiveLink></li>
        <li><ActiveLink href="/deployments/laravel">Laravel</ActiveLink></li>
      </ul>
    </nav>

    <nav className="nav">
      <span className="nav__title">استقرار پروژه‌های Front End</span>
      <ul className="nav__list">
        <li><ActiveLink href="/deployments/static">Static</ActiveLink></li>
        <li><ActiveLink href="/deployments/react">React</ActiveLink></li>
        <li><ActiveLink href="/deployments/angular">Angular</ActiveLink></li>
        <li><ActiveLink href="/deployments/vue">Vue</ActiveLink></li>
      </ul>
    </nav>

    <nav className="nav">
      <span className="nav__title">دیتابیس‌ها</span>
      <ul className="nav__list">
        <li><ActiveLink href="/databases/mysql">MySQL</ActiveLink></li>
        <li><ActiveLink href="/databases/mongodb">MongoDB</ActiveLink></li>
      </ul>
    </nav>

    <nav className="nav">
      <span className="nav__title">سرویس ذخیره‌ی فایل</span>
      <ul className="nav__list">
        <li><ActiveLink href="/storage/nodejs">NodeJS</ActiveLink></li>
        <li><ActiveLink href="/storage/laravel">Laravel</ActiveLink></li>
      </ul>
    </nav>
  </div>
)