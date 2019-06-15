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
      <ul className="nav__list">
        <li><ActiveLink href="/">آشنایی با لیارا</ActiveLink></li>
      </ul>
    </nav>

    <nav className="nav">
      <span className="nav__title">پروژه‌ها</span>
      <ul className="nav__list">
        <li><ActiveLink href="/projects/logs">لاگ‌ها</ActiveLink></li>
        <li><ActiveLink href="/projects/console">کنسول</ActiveLink></li>
        <li><ActiveLink href="/projects/environment-variables">متغیرها (تنظیمات)</ActiveLink></li>
        <li><ActiveLink href="/projects/volumes">Volumes</ActiveLink></li>
      </ul>
    </nav>

    <nav className="nav">
      <span className="nav__title">کلاینت‌ها</span>
      <ul className="nav__list">
        <li><ActiveLink href="/clients/cli">CLI</ActiveLink></li>
        {/* <li><ActiveLink href="/clients/api">API</ActiveLink></li> */}
      </ul>
    </nav>

    <nav className="nav">
      <span className="nav__title">استقرار پروژه‌ها</span>
      <ul className="nav__list">
        <li><ActiveLink icon="react.svg" href="/deployments/react">React</ActiveLink></li>
        <li><ActiveLink icon="vue.svg" href="/deployments/vue">Vue</ActiveLink></li>
        <li><ActiveLink icon="angularjs.svg" href="/deployments/angular">Angular</ActiveLink></li>
        <li><ActiveLink icon="nodejs.svg" href="/deployments/nodejs">NodeJS</ActiveLink></li>
        <li><ActiveLink icon="laravel.svg" href="/deployments/laravel">Laravel</ActiveLink></li>
        <li><ActiveLink icon="HTML5.svg" href="/deployments/static">Static</ActiveLink></li>
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

    {/* TODO: <nav className="nav">
      <span className="nav__title">دیتابیس‌ها</span>
      <ul className="nav__list">
        <li><ActiveLink href="/databases/mysql">MySQL</ActiveLink></li>
        <li><ActiveLink href="/databases/mongodb">MongoDB</ActiveLink></li>
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
)