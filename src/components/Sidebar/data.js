import React, { Fragment } from "react";
import {
  GoHome,
  GoDatabase,
  GoContainer,
  GoRocket,
  GoMail,
  GoServer,
  GoTerminal,
  GoGlobe,
  GoCode,
  GoBrowser,
  GoArrowRight,
  GoInfo,
  GoNote,
  GoCodespaces,
  GoWorkflow,
  GoPackageDependents,
  GoSync,
  GoPerson,
  GoTelescope,
  GoFlame,
  GoPackageDependencies,
  GoProjectTemplate,
  GoZap,
  GoFileSymlinkFile,
  GoPackage ,
  GoBug,
  GoPaperclip,
  GoMegaphone,
  GoCpu,
  GoShieldLock,
  GoNumber,
  GoFileBinary,
  GoEye,
  GoGraph,
  GoKey,
  GoLog,
  GoEyeClosed,
  GoPulse,
  GoGitPullRequest,
  GoPlug,
  GoLocation,
  GoGitCompare,
  GoXCircle,
  GoPaperAirplane,
  GoTools,
  GoIterations,
  GoSignOut,
  
} from "react-icons/go";
// ICONS  https://react-icons.github.io/react-icons/icons/go/

import PlatformIcon from "../Common/icons";
import Link from "next/link";

const IconContainer = ({ alt }) => {
  return (
    <div className="w-[20px] p-[1px] bg-[#333] rounded-md">
      <PlatformIcon platform={alt} />
    </div>
  );
};

export default {
  home: [
    {
      title: "خانه",
      icon: <GoHome />,
      link: "/"
    },
    {
      title: "لیارا در یک نگاه",
      icon: <GoTelescope />,
      link: "/overview"
    },
    {
      hr: true
    },
    {
      badge: "محصولات"
    },
    {
      title: "پلتفرم",
      icon: <GoContainer />,
      link: "/paas/about"
    },
    {
      title: "دیتابیس‌",
      icon: <GoDatabase />,
      link: "/dbaas/about"
    },
    {
      title: "برنامه‌های آماده",
      icon: <GoRocket />,
      link: "/one-click-apps/about"
    },
    {
      title: "ایمیل",
      icon: <GoMail />,
      link: "/mails"
    },
    {
      title: "ذخیره‌سازی ابری",
      icon: <GoServer />,
      link: "/object-storage"
    },
    {
      title: "سامانه مدیریت دامنه",
      icon: <GoGlobe />,
      link: "/object-storage"
    },
    {
      hr: true
    },
    {
      badge: "ارجاعات"
    },
    {
      title: "Liara CLI",
      icon: <GoTerminal />,
      link: "/"
    },
    {
      title: "Liara API",
      icon: <GoCode />,
      link: ""
    },
    {
      title: "Liara Console",
      icon: <GoBrowser />,
      link: ""
    },
    {
      title: "مدیریت حساب",
      icon: <GoPerson />,
      link: ""
    }
  ],

  paas: {
    about: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoContainer />
            پلتفرم
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس پلتفرم",
        icon: <GoInfo />,
        link: "/paas/about"
      },
      {
        hr: true
      },
      {
        badge: "پلتفرم‌های قابل ارائه"
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/paas/nextjs/getting-started"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/paas/laravel/getting-started"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/paas/php/getting-started"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/paas/django/getting-started"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/paas/flask/getting-started"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/paas/dotnet/getting-started"
      },
      {
        title: "React",
        icon: <IconContainer alt="react" />,
        link: "/paas/react/getting-started"
      },
      {
        title: "Angular",
        icon: <IconContainer alt="angularjs" />,
        link: "/paas/angular/getting-started"
      },
      {
        title: "Vue",
        icon: <IconContainer alt="vue" />,
        link: "/paas//getting-started"
      },
      {
        title: "Static",
        icon: <IconContainer alt="HTML5" />,
        link: "/paas/static/getting-started"
      },
      // {
      //   title: "Golang",
      //   icon: <IconContainer alt="go" />,
      //   link: "/paas//getting-started"
      // },
      {
        title: "Docker",
        icon: <IconContainer alt="docker" />,
        link: "/paas/docker/getting-started"
      },
      {
        hr: true
      },
      {
        title: "جزئیات پلتفرم",
        icon: <GoNote />,
        link: "/paas/details/about"
      },
      {
        title: "مدیریت دیسک‌",
        icon: <GoCodespaces />,
        link: "/paas/disks/about"
      },
      {
        title: "مدیریت دامنه‌",
        icon: <GoGlobe />,
        link: "/paas/domains/about"
      },
      {
        title: "قابلیت CI/CD",
        icon: <GoWorkflow />,
        link: "/paas/cicd/about"
      },
      {
        hr: true
      },
      {
        title: "به‌روزرسانی پلتفرم",
        icon: <GoSync />,
        link: "/paas/update"
      },
      {
        title: "انتقال پلتفرم",
        icon: <GoPackageDependents />,
        link: "/paas/move"
      }
    ],
    update: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoContainer />
            پلتفرم
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس پلتفرم",
        icon: <GoInfo />,
        link: "/paas/about"
      },
      {
        hr: true
      },
      {
        badge: "پلتفرم‌های قابل ارائه"
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/paas/nextjs/getting-started"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/paas/laravel/getting-started"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/paas/php/getting-started"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/paas/django/getting-started"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/paas/flask/getting-started"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/paas/dotnet/getting-started"
      },
      {
        title: "React",
        icon: <IconContainer alt="react" />,
        link: "/paas/react/getting-started"
      },
      {
        title: "Angular",
        icon: <IconContainer alt="angularjs" />,
        link: "/paas/angular/getting-started"
      },
      {
        title: "Vue",
        icon: <IconContainer alt="vue" />,
        link: "/paas//getting-started"
      },
      {
        title: "Static",
        icon: <IconContainer alt="HTML5" />,
        link: "/paas/static/getting-started"
      },
      // {
      //   title: "Golang",
      //   icon: <IconContainer alt="go" />,
      //   link: "/paas//getting-started"
      // },
      {
        title: "Docker",
        icon: <IconContainer alt="docker" />,
        link: "/paas/docker/getting-started"
      },
      {
        hr: true
      },
      {
        title: "جزئیات پلتفرم",
        icon: <GoNote />,
        link: "/paas/details/about"
      },
      {
        title: "مدیریت دیسک‌",
        icon: <GoCodespaces />,
        link: "/paas/disks/about"
      },
      {
        title: "مدیریت دامنه‌",
        icon: <GoGlobe />,
        link: "/paas/domains/about"
      },
      {
        title: "قابلیت CI/CD",
        icon: <GoWorkflow />,
        link: "/paas/cicd/about"
      },
      {
        hr: true
      },
      {
        title: "به‌روزرسانی پلتفرم",
        icon: <GoSync />,
        link: "/paas/update"
      },
      {
        title: "انتقال پلتفرم",
        icon: <GoPackageDependents />,
        link: "/paas/move"
      }
    ],
    move: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoContainer />
            پلتفرم
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس پلتفرم",
        icon: <GoInfo />,
        link: "/paas/about"
      },
      {
        hr: true
      },
      {
        badge: "پلتفرم‌های قابل ارائه"
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/paas/nextjs/getting-started"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/paas/laravel/getting-started"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/paas/php/getting-started"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/paas/django/getting-started"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/paas/flask/getting-started"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/paas/dotnet/getting-started"
      },
      {
        title: "React",
        icon: <IconContainer alt="react" />,
        link: "/paas/react/getting-started"
      },
      {
        title: "Angular",
        icon: <IconContainer alt="angularjs" />,
        link: "/paas/angular/getting-started"
      },
      {
        title: "Vue",
        icon: <IconContainer alt="vue" />,
        link: "/paas//getting-started"
      },
      {
        title: "Static",
        icon: <IconContainer alt="HTML5" />,
        link: "/paas/static/getting-started"
      },
      // {
      //   title: "Golang",
      //   icon: <IconContainer alt="go" />,
      //   link: "/paas//getting-started"
      // },
      {
        title: "Docker",
        icon: <IconContainer alt="docker" />,
        link: "/paas/docker/getting-started"
      },
      {
        hr: true
      },
      {
        title: "جزئیات پلتفرم",
        icon: <GoNote />,
        link: "/paas/details/about"
      },
      {
        title: "مدیریت دیسک‌",
        icon: <GoCodespaces />,
        link: "/paas/disks/about"
      },
      {
        title: "مدیریت دامنه‌",
        icon: <GoGlobe />,
        link: "/paas/domains/about"
      },
      {
        title: "قابلیت CI/CD",
        icon: <GoWorkflow />,
        link: "/paas/cicd/about"
      },
      {
        hr: true
      },
      {
        title: "به‌روزرسانی پلتفرم",
        icon: <GoSync />,
        link: "/paas/update"
      },
      {
        title: "انتقال پلتفرم",
        icon: <GoPackageDependents />,
        link: "/paas/move"
      }
    ],
    details: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoContainer />
            جزئیات پلتفرم
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "ویژگی‌های یک پلتفرم در لیارا",
        icon: <GoInfo />,
        link: "/paas/details/about"
      },
      {
        hr: true
      },
      {
        title: "پلن‌های برنامه",
        icon: <GoCpu />,
        link: "/paas/details/plans/about"
      },
      {
        title: "شبکه خصوصی",
        icon: <GoShieldLock  />,
        link: "/paas/details/private-network"
      },
      {
        title: "آی‌پی ثابت",
        icon: <GoNumber  />,
        link: "/paas/details/static-ip"
      },
      {
        title: "فایل‌سیستم",
        icon: <GoFileBinary />,
        link: "/paas/details/file-system"
      },
      {
        title: "رویدادها",
        icon: <GoEye />,
        link: "/paas/details/events"
      },
      {
        title: "گزارشات",
        icon: <GoGraph />,
        link: "/paas/details/observations/about"
      },
      {
        title: "متغیرهای محیطی",
        icon: <GoKey  />,
        link: "/paas/details/envs"
      },
      {
        title: "رجیستری خصوصی و تاریخچه",
        icon: <GoLog />,
        link: "/paas/details/private-registery"
      },
      {
        title: "خط فرمان کنسول",
        icon: <GoBrowser />,
        link: "/paas/details/console-shell"
      },
      {
        title: "نادیده گرفتن فایل‌ها",
        icon: <GoEyeClosed />,
        link: "/paas/details/ignoring-files"
      },
      {
        title: "استقرار بدون اختلال",
        icon: <GoGitPullRequest  />,
        link: "/paas/details/zero-downtime-deployment"
      },
      {
        title: "بررسی سلامت",
        icon: <GoPulse />,
        link: "/paas/details/health-check"
      },
      {
        title: "تنظیم DNS Server",
        icon: <GoPlug  />,
        link: "/paas/details/dns-server-settings"
      },
      {
        title: "تنظیم موقعیت build",
        icon: <GoLocation />,
        link: "/paas/details/build-location"
      },
      {
        title: "تغییر پلن در برنامه",
        icon: <GoGitCompare />,
        link: "/paas/details/change-plan"
      },
      {
        title: "حذف یک برنامه",
        icon: <GoXCircle  />,
        link: "/paas/details/delete-app"
      },
      {
        title: "پروکسی معکوس (reverse)",
        icon: <GoPaperAirplane  />,
        link: "/paas/details/reverse-proxy"
      },
    ],
    disks: [
      {
        badge: (
          <div className="flex items-center gap-2">
            دیسک‌ها
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "دیسک چیست؟",
        icon: <GoInfo />,
        link: "/paas/disks/about"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoTools />
            مدیریت دیسک‌ها
          </div>
        )
      },
      {
        title: "ساخت دیسک",
        link: "/paas/disks/create"
      },
      {
        title: "تعریف مسیر برای دیسک",
        link: "/paas/disks/route"
      },
      {
        title: "افزایش حجم دیسک",
        link: "/paas/disks/increase-value"
      },
      {
        title: "کاهش حجم دیسک",
        link: "/paas/disks/decrease-value"
      },
      {
        title: "حذف یک دیسک",
        link: "/paas/disks/delete"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoIterations />
            پشتیبان‌گیری از دیسک‌ها
          </div>
        )
      },
      {
        title: "تهیه فایل پشتیبان از دیسک‌",
        link: "/paas/disks/create-backup"
      },
      {
        title: "بازیابی فایل پشتیبان در دیسک‌",
        link: "/paas/disks/restore-backup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            انتقال فایل از دیسک
          </div>
        )
      },
      {
        title: "انتقال فایل دیسک به دیسک",
        link: "/paas/disks/move-files-to-other-disk"
      },
      {
        title: "انتقال فایل دیسک به object storage",
        link: "/paas/disks/move-files-to-bucket"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoKey />
            دسترسی‌ها
          </div>
        )
      },
      {
        title: "دسترسی FTP به دیسک‌ها",
        link: "/paas/disks/ftp-access"
      },
    ],
    domains: [
      {
        badge: (
          <div className="flex items-center gap-2">
            دامنه‌ها
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "دامنه چیست؟",
        icon: <GoInfo />,
        link: "/paas/domains/about"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoTools />
          مدیریت دامنه‌ها در برنامه
          </div>
        )
      },
      {
        title: "اضافه کردن دامنه به برنامه",
        link: "/paas/domains/add-domain"
      },
      {
        title: "ساخت زیر دامنه www",
        link: "/paas/domains/add-www-subdomain"
      },
      {
        title: "اضافه کردن زیر دامنه دلخواه",
        link: "/paas/domains/add-subdomains"
      },
      {
        title: "تهیه گواهی SSL برای دامنه",
        link: "/paas/domains/enable-ssl"
      },
      {
        title: "غیرفعال کردن زیر دامنه پیش‌فرض",
        link: "/paas/domains/default-subdomain"
      },
      {
        title: "حذف دامنه یا زیردامنه از برنامه",
        link: "/paas/domains/delete-domain"
      },
      {
        title: "TLDهای قابل پشتیبانی",
        link: "/paas/domains/supported-tlds"
      },
    ],
    cicd: [
      {
        badge: (
          <div className="flex items-center gap-2">
            قابلیت CI/CD
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "آشنایی با CI/CD",
        icon: <GoInfo />,
        link: "/paas/cicd/about"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoTools />
          استفاده از CI/CD
          </div>
        )
      },
      {
        title: "راه‌اندازی CI/CD در برنامه با Github",
        link: "/paas/cicd/github"
      },
      {
        title: "راه‌اندازی CI/CD در برنامه با Gitlab",
        link: "/paas/cicd/gitlab"
      },
    ],

    nodejs: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم NodeJS
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/nodejs/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/nodejs/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/nodejs/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/nodejs/how-tos/deploy-app"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/nodejs/how-tos/set-envs"
      },
      {
        title: "استفاده از دیسک",
        link: "/paas/nodejs/how-tos/use-disk"
      },
      {
        title: "راه‌اندازی برنامه Websocket",
        link: "/paas/nodejs/how-tos/use-websocket"
      },
      {
        title: "build برنامه با ES6",
        link: "/paas/nodejs/how-tos/build-and-use-es6"
      },
      {
        title: "استفاده از TypeScript",
        link: "/paas/nodejs/how-tos/use-type-script"
      },
      {
        title: "استفاده از Hookها",
        link: "/paas/nodejs/how-tos/use-hooks"
      },
      {
        title: "پیکربندی TrustedProxies",
        link: "/paas/nodejs/how-tos/configure-trusted-proxy/about"
      },
      {
        title: "انتخاب نسخه NodeJS",
        link: "/paas/nodejs/how-tos/choose-version"
      },
      {
        title: "استفاده از ماژول FFMPEG",
        link: "/paas/nodejs/how-tos/use-ffmpeg-module"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoDatabase  />
            <Link href="/paas/nodejs/how-tos/connect-to-db/about">اتصال به دیتابیس </Link>
          </div>
        )
      },
      {
        title: "دیتابیس MongoDB",
        link: "/paas/nodejs/how-tos/connect-to-db/mongodb"
      },
      {
        title: "دیتابیس MySQL/MariaDB",
        link: "/paas/nodejs/how-tos/connect-to-db/mysql"
      },
      {
        title: "دیتابیس PostgreSQL",
        link: "/paas/nodejs/how-tos/connect-to-db/postgresql"
      },
      {
        title: "دیتابیس MSSQL",
        link: "/paas/nodejs/how-tos/connect-to-db/mssql"
      },
      {
        title: "دیتابیس SQLite",
        link: "/paas/nodejs/how-tos/connect-to-db/sqlite"
      },
      {
        title: "دیتابیس Redis",
        link: "/paas/nodejs/how-tos/connect-to-db/redis"
      },
      {
        title: "Prisma ORM",
        link: "/paas/nodejs/how-tos/connect-to-db/prisma"
      },
      {
        title: "Sequelize ORM",
        link: "/paas/nodejs/how-tos/connect-to-db/sequelize/about"
      },
      {
        title: "Drizzle ORM",
        link: "/paas/nodejs/how-tos/connect-to-db/drizzle/about"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            <Link href="/paas/nodejs/fix-common-errors/about">رفع خطاهای رایج</Link>
          </div>
        )
      },
      {
        title: "رفع خطای CORS",
        link: "/paas/nodejs/fix-common-errors/cors-error/about"
      },
      {
        title: "رفع خطای Get query missing در GraphQL",
        link: "/paas/nodejs/fix-common-errors/graphql-error"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoPaperclip   />
          برنامه‌های مرتبط
          </div>
        )
      },
      {
        title: "Addonis",
        icon: <IconContainer alt="adonisjs" />,
        link: "/paas/nodejs/related-apps/adonisjs"
      },
      {
        title: "BlitzJS",
        icon: <IconContainer alt="blitz" />,
        link: "/paas/nodejs/related-apps/blitzjs"
      },
      {
        title: "Fastify",
        icon: <IconContainer alt="fastify" />,
        link: "/paas/nodejs/related-apps/fastify"
      },
      {
        title: "Hapi",
        icon: <IconContainer alt="fastify" />,
        link: "/paas/nodejs/related-apps/hapi"
      },
      {
        title: "NestJS",
        icon: <IconContainer alt="nest" />,
        link: "/paas/nodejs/related-apps/nestjs"
      },
      {
        title: "NuxtJS",
        icon: <IconContainer alt="nuxt" />,
        link: "/paas/nodejs/related-apps/nuxtjs"
      },
      {
        title: "Remix",
        icon: <IconContainer alt="remix" />,
        link: "/paas/nodejs/related-apps/remix"
      },
      {
        title: "Strapi",
        icon: <IconContainer alt="strapi" />,
        link: "/paas/nodejs/related-apps/strapi/starter"
      },
      {
        title: "Svelte",
        icon: <IconContainer alt="svelte" />,
        link: "/paas/nodejs/related-apps/svelte"
      },
      {
        title: "Svelte Kit",
        icon: <IconContainer alt="svelte" />,
        link: "/paas/nodejs/related-apps/svelte-kit"
      },
    ],
    nextjs: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم NextJS
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/nextjs/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/nextjs/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/nextjs/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/nextjs/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/nextjs/how-tos/deploy-app"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/nextjs/how-tos/set-envs"
      },
      {
        title: "استفاده از دیسک",
        link: "/paas/nextjs/how-tos/use-disk"
      },
      {
        title: "راه‌اندازی برنامه Websocket",
        link: "/paas/nextjs/how-tos/use-websocket"
      },
      {
        title: "استفاده از TypeScript",
        link: "/paas/nextjs/how-tos/use-type-script"
      },
      {
        title: "استفاده از Static HTML Export",
        link: "/paas/nextjs/how-tos/use-static-html-export"
      },
      {
        title: "افزایش فضای مسیر cache",
        link: "/paas/nextjs/how-tos/increase-next-cache"
      },
      {
        title: "استفاده از ISR",
        link: "/paas/nextjs/how-tos/use-isr"
      },
      {
        title: "دسترسی به فایل‌های Static",
        link: "/paas/nextjs/how-tos/reach-static-files"
      },
      {
        title: "استفاده از Hookها",
        link: "/paas/nextjs/how-tos/use-hooks"
      },
      {
        title: "مشاهده نسخه NodeJS",
        link: "/paas/nextjs/how-tos/choose-version"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoDatabase  />
            <Link href="/paas/nextjs/how-tos/connect-to-db/about">اتصال به دیتابیس </Link>
          </div>
        )
      },
      {
        title: "دیتابیس MongoDB",
        link: "/paas/nextjs/how-tos/connect-to-db/mongodb"
      },
      {
        title: "دیتابیس MariaDB",
        link: "/paas/nextjs/how-tos/connect-to-db/mariadb"
      },
      {
        title: "دیتابیس MySQL",
        link: "/paas/nextjs/how-tos/connect-to-db/mysql"
      },
      {
        title: "دیتابیس PostgreSQL",
        link: "/paas/nextjs/how-tos/connect-to-db/postgresql"
      },
      {
        title: "دیتابیس MSSQL",
        link: "/paas/nextjs/how-tos/connect-to-db/mssql"
      },
      {
        title: "دیتابیس SQLite",
        link: "/paas/nextjs/how-tos/connect-to-db/sqlite"
      },
      {
        title: "دیتابیس Redis",
        link: "/paas/nextjs/how-tos/connect-to-db/redis"
      },
      {
        title: "دیتابیس ElasticSearch",
        link: "/paas/nextjs/how-tos/connect-to-db/elasticsearch"
      },
      
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            <Link href="/paas/nextjs/fix-common-errors/about">رفع خطاهای رایج</Link>
          </div>
        )
      },
      {
        title: "رفع خطای ECONNRESET",
        link: "/paas/nextjs/fix-common-errors/econnreset"
      },
    ],
    laravel: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم Laravel
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/laravel/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/laravel/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/laravel/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/laravel/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/laravel/how-tos/deploy-app"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/laravel/how-tos/set-envs"
      },
      {
        title: "استفاده از دیسک",
        link: "/paas/laravel/how-tos/use-disk"
      },
      // {
      //   title: "راه‌اندازی برنامه Websocket",
      //   link: "/paas/laravel/how-tos/use-websocket"
      // },
      {
        title: "تنظیم اختصاصی فایل php.ini",
        link: "/paas/laravel/how-tos/customize-php-ini"
      },
      {
        title: "کار با Queueها",
        link: "/paas/laravel/how-tos/use-queues"
      },
      {
        title: "فعال‌سازی SSR با Inertia",
        link: "/paas/laravel/how-tos/enable-ssr-using-inertia"
      },
      {
        title: "تنظیم هدرهای امنیتی HTTP",
        link: "/paas/laravel/how-tos/set-http-security-headers"
      },
      {
        title: "استفاده از Hookها",
        link: "/paas/laravel/how-tos/use-hooks"
      },
      {
        title: "تغییر نسخه PHP و Laravel",
        link: "/paas/laravel/how-tos/choose-version"
      },
      {
        title: "مدیریت logهای Laravel",
        link: "/paas/laravel/how-tos/manage-laravel-logs"
      },
      {
        title: "پیکربندی TrustedProxies",
        link: "/paas/laravel/how-tos/configure-trustedproxies"
      },
      {
        title: "فعال‌سازی Gzip و Caching",
        link: "/paas/laravel/how-tos/enable-gzip-and-caching"
      },
      {
        title: "استفاده از ماژول FFMPEG",
        link: "/paas/laravel/how-tos/use-ffmpeg-module"
      },
      {
        title: "استفاده از Ziggy",
        link: "/paas/laravel/how-tos/use-ziggy"
      },
      {
        title: "نصب یا به‌روزرسانی اکستنشن ",
        link: "/paas/laravel/how-tos/install-new-extension"
      },
      {
        title: "مشاهده اکستنشن‌های نصب شده",
        link: "/paas/laravel/how-tos/see-extension"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoDatabase  />
            <Link href="/paas/laravel/how-tos/connect-to-db/about">اتصال به دیتابیس </Link>
          </div>
        )
      },
      {
        title: "دیتابیس MySQL",
        link: "/paas/laravel/how-tos/connect-to-db/mysql"
      },
      {
        title: "دیتابیس MariaDB",
        link: "/paas/laravel/how-tos/connect-to-db/mariadb"
      },
      {
        title: "دیتابیس MSSQL",
        link: "/paas/laravel/how-tos/connect-to-db/mssql"
      },
      {
        title: "دیتابیس PostgreSQL",
        link: "/paas/laravel/how-tos/connect-to-db/postgresql"
      },
      {
        title: "دیتابیس SQLite",
        link: "/paas/laravel/how-tos/connect-to-db/sqlite"
      },
      {
        title: "دیتابیس Redis",
        link: "/paas/laravel/how-tos/connect-to-db/redis"
      },
      {
        title: "دیتابیس ElasticSearch",
        link: "/paas/laravel/how-tos/connect-to-db/elastic-search"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            <Link href="/paas/laravel/fix-common-errors/about">رفع خطاهای رایج</Link>
          </div>
        )
      },
      {
        title: "رفع خطای محدودیت آپلود فایل با حجم بیش از 100MB",
        link: "/paas/laravel/fix-common-errors/upload-limit-size"
      },
      {
        title: "رفع خطای CORS",
        link: "/paas/laravel/fix-common-errors/cors"
      },
      {
        title: "رفع خطای 419",
        link: "/paas/laravel/fix-common-errors/419-page-expired"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoPaperclip   />
          برنامه‌های مرتبط
          </div>
        )
      },
      {
        title: "Lumen",
        icon: <IconContainer alt="laravel" />,
        link: "/paas/laravel/related-apps/lumen"
      },
      {
        title: "Laravel Octane",
        icon: <IconContainer alt="laravel" />,
        link: "/paas/laravel/related-apps/laravel-octane"
      },
      {
        title: "Voyager",
        icon: <IconContainer alt="laravel" />,
        link: "/paas/laravel/related-apps/voyager"
      },
    ],
    php: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم PHP
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/php/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/php/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/php/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/php/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/php/how-tos/deploy-app"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/php/how-tos/set-envs"
      },
      {
        title: "استفاده از دیسک",
        link: "/paas/php/how-tos/use-disk"
      },
      // {
      //   title: "راه‌اندازی برنامه Websocket",
      //   link: "/paas/php/how-tos/use-websocket"
      // },
      {
        title: "تنظیم اختصاصی فایل php.ini",
        link: "/paas/php/how-tos/customize-php-ini"
      },
      {
        title: "تنظیم اختصاصی فایل htaccess.",
        link: "/paas/php/how-tos/customize-htaccess"
      },
      {
        title: "کار با Queueها",
        link: "/paas/php/how-tos/use-queues"
      },
      {
        title: "تنظیم هدرهای امنیتی HTTP",
        link: "/paas/php/how-tos/set-http-security-headers"
      },
      {
        title: "استفاده از Hookها",
        link: "/paas/php/how-tos/use-hooks"
      },
      {
        title: "تغییر نسخه PHP",
        link: "/paas/php/how-tos/choose-version"
      },
      {
        title: "نصب یا به‌روزرسانی اکستنشن ",
        link: "/paas/php/how-tos/install-new-extension"
      },
      {
        title: "مشاهده اکستنشن‌های نصب شده",
        link: "/paas/php/how-tos/see-extension"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoDatabase  />
            <Link href="/paas/php/how-tos/connect-to-db/about">اتصال به دیتابیس </Link>
          </div>
        )
      },
      {
        title: "دیتابیس MySQL/MariaDB",
        link: "/paas/php/how-tos/connect-to-db/mysql"
      },
      {
        title: "دیتابیس MSSQL",
        link: "/paas/php/how-tos/connect-to-db/mssql"
      },
      {
        title: "دیتابیس PostgreSQL",
        link: "/paas/php/how-tos/connect-to-db/postgresql"
      },
      {
        title: "دیتابیس SQLite",
        link: "/paas/php/how-tos/connect-to-db/sqlite"
      },
      {
        title: "دیتابیس Redis",
        link: "/paas/php/how-tos/connect-to-db/redis"
      },
      {
        title: "دیتابیس MongoDB",
        link: "/paas/php/how-tos/connect-to-db/mongodb"
      },
      {
        title: "دیتابیس ElasticSearch",
        link: "/paas/php/how-tos/connect-to-db/elastic-search"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            <Link href="/paas/php/fix-common-errors/about">رفع خطاهای رایج</Link>
          </div>
        )
      },
      {
        title: "رفع خطای محدودیت آپلود فایل با حجم بیش از 100MB",
        link: "/paas/php/fix-common-errors/upload-limit-size"
      },
      {
        title: "رفع خطای CORS",
        link: "/paas/php/fix-common-errors/cors"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoPaperclip   />
          برنامه‌های مرتبط
          </div>
        )
      },
      {
        title: "Yii",
        icon: <IconContainer alt="yii" />,
        link: "/paas/php/related-apps/yii"
      },
    ],
    django: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم Django
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/django/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/django/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/django/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/django/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/django/how-tos/deploy-app"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/django/how-tos/set-envs"
      },
      {
        title: "استفاده از دیسک",
        link: "/paas/django/how-tos/use-disk"
      },
      {
        title: "تنظیم Nginx",
        link: "/paas/django/how-tos/customize-nginx"
      },
      {
        title: "فعال‌سازی قابلیت gzip",
        link: "/paas/django/how-tos/enable-gzip"
      },
      {
        title: "استفاده از Supervisord",
        link: "/paas/django/how-tos/use-supervisord"
      },
      {
        title: "تنظیم هدرهای امنیتی HTTP",
        link: "/paas/django/how-tos/set-http-security-headers"
      },
      {
        title: "استفاده از Hookها",
        link: "/paas/django/how-tos/use-hooks"
      },
      {
        title: "تغییر نسخه Python",
        link: "/paas/django/how-tos/choose-version"
      },
      {
        title: "تنظیم تعداد workerهای  Gunicorn",
        link: "/paas/django/how-tos/set-gunicorn-workers"
      },
      {
        title: "تنظیم max_request در Gunicorn",
        link: "/paas/django/how-tos/set-gunicorn-maxrequest"
      },
      {
        title: "راه‌اندازی برنامه WebSocket",
        link: "/paas/django/how-tos/use-websocket"
      },
      {
        title: "راه‌اندازی برنامه ASGI",
        link: "/paas/django/how-tos/use-asgi"
      },
      {
        title: "استفاده از ماژول FFMPEG",
        link: "/paas/django/how-tos/use-ffmpeg-module"
      },
      {
        title: "مدیریت logهای Django",
        link: "/paas/django/how-tos/use-ffmpeg-module"
      },
      
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoDatabase  />
            <Link href="/paas/django/how-tos/connect-to-db/about">اتصال به دیتابیس </Link>
          </div>
        )
      },
      {
        title: "دیتابیس MySQL/MariaDB",
        link: "/paas/django/how-tos/connect-to-db/mysql"
      },
      {
        title: "دیتابیس MSSQL",
        link: "/paas/django/how-tos/connect-to-db/mssql"
      },
      {
        title: "دیتابیس PostgreSQL",
        link: "/paas/django/how-tos/connect-to-db/postgresql"
      },
      {
        title: "دیتابیس SQLite",
        link: "/paas/django/how-tos/connect-to-db/sqlite"
      },
      {
        title: "دیتابیس Redis",
        link: "/paas/django/how-tos/connect-to-db/redis"
      },
      {
        title: "دیتابیس ElasticSearch",
        link: "/paas/django/how-tos/connect-to-db/elastic-search"
      },
      {
        title: "دیتابیس MongoDB",
        link: "/paas/django/how-tos/connect-to-db/mongodb"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            <Link href="/paas/django/fix-common-errors/about">رفع خطاهای رایج</Link>
          </div>
        )
      },
      {
        title: "رفع خطای محدودیت آپلود فایل با حجم بیش از 1MB",
        link: "/paas/django/fix-common-errors/upload-limit-size"
      },
      {
        title: "رفع خطای CORS",
        link: "/paas/django/fix-common-errors/cors"
      },
      {
        title: "رفع خطای CORS فایل‌های Media",
        link: "/paas/django/fix-common-errors/cors-media"
      },
      {
        title: "رفع خطای WORKER TIMEOUT",
        link: "/paas/django/fix-common-errors/worker-timeout"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoPaperclip   />
          برنامه‌های مرتبط
          </div>
        )
      },
      {
        title: "Celery",
        icon: <IconContainer alt="celery" />,
        link: "/paas/django/related-apps/celery"
      },
    ],
    flask: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم Flask
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/flask/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/flask/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/flask/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/flask/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/flask/how-tos/deploy-app"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/flask/how-tos/set-envs"
      },
      {
        title: "استفاده از دیسک",
        link: "/paas/flask/how-tos/use-disk"
      },
      {
        title: "تنظیم Nginx",
        link: "/paas/flask/how-tos/customize-nginx"
      },
      {
        title: "فعال‌سازی قابلیت gzip",
        link: "/paas/flask/how-tos/enable-gzip"
      },
      {
        title: "پیکربندی TrustedProxies",
        link: "/paas/flask/how-tos/set-trusted-proxies"
      },
      {
        title: "استفاده از Hookها",
        link: "/paas/flask/how-tos/use-hooks"
      },
      {
        title: "تغییر نسخه Python",
        link: "/paas/flask/how-tos/choose-version"
      },
      // {
      //   title: "راه‌اندازی برنامه WebSocket",
      //   link: "/paas/flask/how-tos/use-websocket"
      // },
      // {
      //   title: "راه‌اندازی برنامه ASGI",
      //   link: "/paas/flask/how-tos/use-asgi"
      // },
      {
        title: "استفاده از ماژول FFMPEG",
        link: "/paas/flask/how-tos/use-ffmpeg-module"
      },
      {
        title: "مدیریت logهای Flask",
        link: "/paas/flask/how-tos/use-ffmpeg-module"
      },
      
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoDatabase  />
            <Link href="/paas/flask/how-tos/connect-to-db/about">اتصال به دیتابیس </Link>
          </div>
        )
      },
      {
        title: "دیتابیس MySQL/MariaDB",
        link: "/paas/flask/how-tos/connect-to-db/mysql"
      },
      // {
      //   title: "دیتابیس MSSQL",
      //   link: "/paas/flask/how-tos/connect-to-db/mssql"
      // },
      {
        title: "دیتابیس PostgreSQL",
        link: "/paas/flask/how-tos/connect-to-db/postgresql"
      },
      {
        title: "دیتابیس SQLite",
        link: "/paas/flask/how-tos/connect-to-db/sqlite"
      },
      {
        title: "دیتابیس Redis",
        link: "/paas/flask/how-tos/connect-to-db/redis"
      },
      {
        title: "دیتابیس ElasticSearch",
        link: "/paas/flask/how-tos/connect-to-db/elastic-search"
      },
      {
        title: "دیتابیس MongoDB",
        link: "/paas/flask/how-tos/connect-to-db/mongodb"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            <Link href="/paas/flask/fix-common-errors/about">رفع خطاهای رایج</Link>
          </div>
        )
      },
      {
        title: "رفع خطای محدودیت آپلود فایل با حجم بیش از 1MB",
        link: "/paas/flask/fix-common-errors/upload-limit-size"
      },
      {
        title: "رفع خطای CORS",
        link: "/paas/flask/fix-common-errors/cors"
      },
      {
        title: "رفع خطای WORKER TIMEOUT",
        link: "/paas/flask/fix-common-errors/worker-timeout"
      },
      {
        title: "رفع خطای ModuleNotFoundError",
        link: "/paas/flask/fix-common-errors/module-not-found"
      },
    ],
    dotnet: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم NET.
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/dotnet/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/dotnet/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/dotnet/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/dotnet/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/dotnet/how-tos/deploy-app"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/dotnet/how-tos/set-envs"
      },
      {
        title: "استفاده از دیسک",
        link: "/paas/dotnet/how-tos/use-disk"
      },
      {
        title: "استفاده از Hookها",
        link: "/paas/dotnet/how-tos/use-hooks"
      },
      {
        title: "تغییر نسخه NET.",
        link: "/paas/dotnet/how-tos/choose-version"
      },
      {
        title: "راه‌اندازی برنامه WebSocket",
        link: "/paas/dotnet/how-tos/use-websocket"
      },
      {
        title: "استفاده از ماژول FFMPEG",
        link: "/paas/dotnet/how-tos/use-ffmpeg-module"
      },
      {
        title: "مدیریت logهای NET.",
        link: "/paas/dotnet/how-tos/manage-logs"
      },
      {
        title: "استقرار پوشه Solution",
        link: "/paas/dotnet/how-tos/deploy-solution-directory"
      },
      {
        title: "استقرار فایل‌های DLL",
        link: "/paas/dotnet/how-tos/deploy-dll-files"
      },
      
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoDatabase  />
            <Link href="/paas/dotnet/how-tos/connect-to-db/about">اتصال به دیتابیس با Entity Framework</Link>
          </div>
        )
      },
      {
        title: "دیتابیس MSSQL",
        link: "/paas/dotnet/how-tos/connect-to-db/mssql"
      },
      {
        title: "دیتابیس MySQL/MariaDB",
        link: "/paas/dotnet/how-tos/connect-to-db/mysql"
      },
      {
        title: "دیتابیس PostgreSQL",
        link: "/paas/dotnet/how-tos/connect-to-db/postgresql"
      },
      {
        title: "دیتابیس SQLite",
        link: "/paas/dotnet/how-tos/connect-to-db/sqlite"
      },
      // {
      //   title: "دیتابیس Redis",
      //   link: "/paas/dotnet/how-tos/connect-to-db/redis"
      // },
      // {
      //   title: "دیتابیس ElasticSearch",
      //   link: "/paas/dotnet/how-tos/connect-to-db/elastic-search"
      // },
      // {
      //   title: "دیتابیس MongoDB",
      //   link: "/paas/dotnet/how-tos/connect-to-db/mongodb"
      // },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            <Link href="/paas/dotnet/fix-common-errors/about">رفع خطاهای رایج</Link>
          </div>
        )
      },
      {
        title: " رفع خطای 502 Bad Gateway",
        link: "/paas/dotnet/fix-common-errors/502-bad-gateway"
      },
      {
        title: "رفع خطای CORS",
        link: "/paas/dotnet/fix-common-errors/cors"
      },
    ],
    react: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم React
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/react/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/react/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/react/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/react/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/react/how-tos/deploy-app"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/react/how-tos/set-envs"
      },
      // {
      //   title: "استفاده از دیسک",
      //   link: "/paas/react/how-tos/use-disk"
      // },

      {
        title: "مشاهده نسخه NodeJS",
        link: "/paas/react/how-tos/choose-version"
      },
      {
        title: "تنظیم Nginx",
        link: "/paas/react/how-tos/set-envs"
      },
      {
        title: "فعال‌سازی gzip و Browser Caching",
        link: "/paas/react/how-tos/enable-gzip"
      },
      {
        title: "تنظیم هدرهای امنیتی HTTP",
        link: "/paas/react/how-tos/set-http-security-headers"
      },
      
    ],
    vue: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم Vue
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/vue/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/vue/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/vue/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/vue/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/vue/how-tos/deploy-app"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/vue/how-tos/set-envs"
      },
      // {
      //   title: "استفاده از دیسک",
      //   link: "/paas/vue/how-tos/use-disk"
      // },

      {
        title: "مشاهده نسخه NodeJS",
        link: "/paas/vue/how-tos/choose-version"
      },
      {
        title: "تنظیم Nginx",
        link: "/paas/vue/how-tos/set-envs"
      },
      {
        title: "فعال‌سازی gzip و Browser Caching",
        link: "/paas/vue/how-tos/enable-gzip"
      },
      {
        title: "تنظیم هدرهای امنیتی HTTP",
        link: "/paas/vue/how-tos/set-http-security-headers"
      },
      
    ],
    angular: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم Angular
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/angular/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/angular/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/angular/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/angular/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/angular/how-tos/deploy-app"
      },
      // {
      //   title: "استفاده از متغیرهای محیطی",
      //   link: "/paas/angular/how-tos/set-envs"
      // },
      // {
      //   title: "استفاده از دیسک",
      //   link: "/paas/angular/how-tos/use-disk"
      // },

      {
        title: "مشاهده نسخه NodeJS",
        link: "/paas/angular/how-tos/choose-version"
      },
      {
        title: "تنظیم Nginx",
        link: "/paas/angular/how-tos/set-envs"
      },
      {
        title: "فعال‌سازی gzip و Browser Caching",
        link: "/paas/angular/how-tos/enable-gzip"
      },
      {
        title: "تنظیم هدرهای امنیتی HTTP",
        link: "/paas/angular/how-tos/set-http-security-headers"
      },
      
    ],
    static: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم Static
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/static/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/static/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/static/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/static/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/static/how-tos/deploy-app"
      },
      // {
      //   title: "استفاده از متغیرهای محیطی",
      //   link: "/paas/static/how-tos/set-envs"
      // },
      // {
      //   title: "استفاده از دیسک",
      //   link: "/paas/static/how-tos/use-disk"
      // },
      {
        title: "تنظیم Nginx",
        link: "/paas/static/how-tos/set-envs"
      },
      {
        title: "فعال‌سازی gzip و Browser Caching",
        link: "/paas/static/how-tos/enable-gzip"
      },
      {
        title: "تنظیم هدرهای امنیتی HTTP",
        link: "/paas/static/how-tos/set-http-security-headers"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoPaperclip   />
          برنامه‌های مرتبط
          </div>
        )
      },
      {
        title: "GatsbyJS",
        icon: <IconContainer alt="gatsby" />,
        link: "/paas/static/related-apps/gatsby"
      },
      {
        title: "Gridsome",
        icon: <IconContainer alt="gridsome" />,
        link: "/paas/static/related-apps/gridsome"
      },
      {
        title: "Eleventy",
        icon: <IconContainer alt="eleventy" />,
        link: "/paas/static/related-apps/eleventy"
      },
      {
        title: "Hugo",
        icon: <IconContainer alt="hugo" />,
        link: "/paas/static/related-apps/hugo"
      },
      {
        title: "jekyll",
        icon: <IconContainer alt="jekyll" />,
        link: "/paas/static/related-apps/jekyll"
      },
      {
        title: "Astro",
        icon: <IconContainer alt="HTML5" />,
        link: "/paas/static/related-apps/astro"
      },
    ],
    docker: [
      {
        badge: (
          <div className="flex items-center gap-2">
            پلتفرم Docker
          </div>
        )
      },
      {
        title: "برگشت به پلتفرم",
        icon: <GoArrowRight />,
        link: "/paas/about"
      },
      {
        title: "شروع به کار",
        icon: <GoFlame />,
        link: "/paas/docker/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <GoZap  />,
        link: "/paas/docker/quick-start"
      },
      {
        title: "لینک‌های مرتبط",
        icon: <GoMegaphone   />,
        link: "/paas/docker/related-links"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "ساخت برنامه",
        link: "/paas/docker/how-tos/create-app"
      },
      {
        title: "استقرار برنامه",
        link: "/paas/docker/how-tos/deploy-app"
      },
      {
        title: "استقرار Image از DockerHub",
        link: "/paas/docker/how-tos/deploy-image-from-dockerhub"
      },
      {
        title: "استقرار Docker Compose",
        link: "/paas/docker/how-tos/deploy-docker-compose"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        link: "/paas/docker/how-tos/set-envs"
      },
      {
        title: "استفاده از Volume (دیسک)",
        link: "/paas/docker/how-tos/use-disk"
      },
      {
        title: "پیکربندی Supercronic",
        link: "/paas/docker/how-tos/configure-supercronic"
      },
      // {
      //   title: "فعال‌سازی gzip و Browser Caching",
      //   link: "/paas/docker/how-tos/enable-gzip"
      // },
      // {
      //   title: "تنظیم هدرهای امنیتی HTTP",
      //   link: "/paas/docker/how-tos/set-http-security-headers"
      // },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoPaperclip   />
          برنامه‌های مرتبط
          </div>
        )
      },
      {
        title: "Flutter",
        icon: <IconContainer alt="flutter" />,
        link: "/paas/docker/related-apps/flutter"
      },
      {
        title: "Reverse Proxy با Nginx",
        icon: <IconContainer alt="nginx" />,
        link: "/paas/docker/related-apps/nginx"
      },
      {
        title: "FastAPI",
        icon: <IconContainer alt="fastapi" />,
        link: "/paas/docker/related-apps/fastapi"
      },
      {
        title: "Python Scripts",
        icon: <IconContainer alt="python" />,
        link: "/paas/docker/related-apps/python"
      },
      {
        title: "Streamlit",
        icon: <IconContainer alt="streamlit" />,
        link: "/paas/docker/related-apps/streamlit"
      },
      {
        title: "ArangoDB",
        icon: <IconContainer alt="arangodb" />,
        link: "/paas/docker/related-apps/arangodb"
      },
      {
        title: "Seq",
        icon: <IconContainer alt="seq" />,
        link: "/paas/docker/related-apps/seq"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/paas/docker/related-apps/go"
      },
    ],

  },

  one_click_apps: {
    about: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoRocket />
            برنامه‌های آماده
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره برنامه‌های آماده",
        icon: <GoInfo />,
        link: "/paas/about"
      },
      {
        hr: true
      },
      {
        badge: "پلتفرم‌های قابل ارائه"
      },
      {
        title: "WordPress Plus",
        icon: <IconContainer alt="wordpress" />,
        link: "/one-click-apps/wordpressplus/quick-start"
      },
      {
        title: "Headless Chrome",
        icon: <IconContainer alt="chrome" />,
        link: "/one-click-apps/headless-chrome/quick-start"
      },
      {
        title: "Soketi",
        icon: <IconContainer alt="soketi" />,
        link: "/one-click-apps/soketi/quick-start"
      },
      {
        title: "ImgProxy",
        icon: <IconContainer alt="imgproxy" />,
        link: "/one-click-apps/imgproxy/quick-start"
      },
      {
        title: "RocketChat",
        icon: <IconContainer alt="rocketchat" />,
        link: "/one-click-apps/rocketchat/quick-start"
      },
      {
        title: "Metabase",
        icon: <IconContainer alt="metabase" />,
        link: "/one-click-apps/metabase/quick-start"
      },
      {
        title: "NextCloud",
        icon: <IconContainer alt="nextcloud" />,
        link: "/one-click-apps/nextcloud/quick-start"
      },
      {
        title: "Gitea",
        icon: <IconContainer alt="gitea" />,
        link: "/one-click-apps/gitea/quick-start"
      },
      {
        title: "Mattermost",
        icon: <IconContainer alt="mattermost" />,
        link: "/one-click-apps/mattermost/quick-start"
      },
      {
        title: "Kibana",
        icon: <IconContainer alt="kibana" />,
        link: "/one-click-apps/kibana/quick-start"
      },
      {
        title: "Grafana",
        icon: <IconContainer alt="grafana" />,
        link: "/one-click-apps/grafana/quick-start"
      },
      {
        title: "Prestashop",
        icon: <IconContainer alt="prestashop" />,
        link: "/one-click-apps/prestashop/quick-start"
      },
      {
        title: "Visual Studio Code Server",
        icon: <IconContainer alt="vscode" />,
        link: "/one-click-apps/vscode/quick-start"
      },
      {
        title: "Odoo",
        icon: <IconContainer alt="odoo" />,
        link: "/one-click-apps/odoo/quick-start"
      },
      {
        title: "Ghost",
        icon: <IconContainer alt="ghost" />,
        link: "/one-click-apps/ghost/quick-start"
      },
      {
        title: "N8N",
        icon: <IconContainer alt="n8n" />,
        link: "/one-click-apps/n8n/quick-start"
      },
      {
        title: "PocketBase",
        icon: <IconContainer alt="pocketbase" />,
        link: "/one-click-apps/pocketbase/quick-start"
      },
      {
        title: "Matomo",
        icon: <IconContainer alt="matomo" />,
        link: "/one-click-apps/matomo/quick-start"
      },
      {
        title: "Unleash",
        icon: <IconContainer alt="unleash" />,
        link: "/one-click-apps/unleash/quick-start"
      },
      {
        title: "Uptime Kuma",
        icon: <IconContainer alt="uptimekuma" />,
        link: "/one-click-apps/uptime-kuma/quick-start"
      },
      {
        title: "Ackee",
        icon: <IconContainer alt="docker" />,
        link: "/one-click-apps/ackee/quick-start"
      },
      {
        title: "Appsmith",
        icon: <IconContainer alt="appsmith" />,
        link: "/one-click-apps/appsmith/quick-start"
      },
      {
        title: "Varnish Cache",
        icon: <IconContainer alt="varnish" />,
        link: "/one-click-apps/varnish/quick-start"
      },
      {
        title: "Rabbit MQ",
        icon: <IconContainer alt="rabbitmq" />,
        link: "/one-click-apps/rabbitmq/quick-start"
      },
      {
        title: "Apache Answer",
        icon: <IconContainer alt="apacheanswer" />,
        link: "/one-click-apps/apache-answer/quick-start"
      },
      {
        title: "NOCODB",
        icon: <IconContainer alt="nocodb" />,
        link: "/one-click-apps/nocodb/quick-start"
      },
      {
        title: "Chroma",
        icon: <IconContainer alt="chroma" />,
        link: "/one-click-apps/chroma/quick-start"
      },
      {
        title: "MeiliSearch",
        icon: <IconContainer alt="meilisearch" />,
        link: "/one-click-apps/meilisearch/quick-start"
      },
    ],
    wordpressplus: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه WordPress Plus
          </div>
        )
      },
      {
        title: "برگشت به برنامه‌های آماده",
        icon: <GoArrowRight />,
        link: "/one-click-apps/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap  />,
        link: "/one-click-apps/wordpressplus/quick-start"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "انتقال WordPress از cPanel به لیارا",
        link: "/one-click-apps/wordpressplus/how-tos/migrate-from-cpanel"
      },
      {
        title: "فعال‌سازی افزونه WP Rocket",
        link: "/one-click-apps/wordpressplus/how-tos/enable-wprocket-extension"
      },
      {
        title: "راه‌اندازی WordPress با Duplicator",
        link: "/one-click-apps/wordpressplus/how-tos/duplicator"
      },
      {
        title: "مشاهده نسخه‌های PHP قابل ارائه",
        link: "/one-click-apps/wordpressplus/how-tos/choose-version"
      },
      {
        title: "شخصی‌سازی تنظیمات php.ini",
        link: "/one-click-apps/wordpressplus/how-tos/customize-php-ini"
      },
  
      {
        title: "مشاهده اکستنشن‌های نصب‌شده",
        link: "/one-click-apps/wordpressplus/how-tos/see-extensions"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            <Link href="/one-click-apps/wordpressplus/fix-common-errors/about">رفع خطاهای رایج</Link>
          </div>
        )
      },
      {
        title: "رفع خطای err_too_many_redirects",
        link: "/one-click-apps/wordpressplus/fix-common-errors/too-many-redirects-error"
      },
      {
        title: "رفع خطای لود نشدن فایل‌های CSS",
        link: "/one-click-apps/wordpressplus/fix-common-errors/css-not-loading-error"
      },
      {
        title: "رفع خطاهای مربوط به دسترسی فایل",
        link: "/one-click-apps/wordpressplus/fix-common-errors/file-access-errors"
      },
  
    ],

    'headless-chrome': [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Headless Chrome 
          </div>
        )
      },
      {
        title: "برگشت به برنامه‌های آماده",
        icon: <GoArrowRight />,
        link: "/one-click-apps/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap  />,
        link: "/one-click-apps/wordpressplus/quick-start"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
            نحوه
          </div>
        )
      },
      {
        title: "اتصال با Puppeteer + NodeJS",
        link: "/one-click-apps/headless-chrome/how-tos/connect-by-nodejs-and-puppeteer"
      },
      {
        title: "اتصال با Selenium + NodeJS",
        link: "/one-click-apps/headless-chrome/how-tos/connect-by-nodejs-and-selenium"
      },
      {
        title: "اتصال با Playwright + NodeJS",
        link: "/one-click-apps/headless-chrome/how-tos/connect-by-nodejs-and-playwright"
      },
      {
        title: "اتصال با Pyppeteer + Python",
        link: "/one-click-apps/headless-chrome/how-tos/enable-wprocket-extension"
      },
      {
        title: "اتصال با Selenium + Python",
        link: "/one-click-apps/headless-chrome/how-tos/enable-wprocket-extension"
      },
      // {
      //   title: "اتصال امن به Headless Chrome",
      //   link: "/one-click-apps/headless-chrome/how-tos/duplicator"
      // },
      {
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/headless-chrome/how-tos/choose-version"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            <Link href="/one-click-apps/headless-chrome/fix-common-errors/about">رفع خطاهای رایج</Link>
          </div>
        )
      },
      {
        title: "رفع خطای err_too_many_redirects",
        link: "/one-click-apps/headless-chrome/fix-common-errors/too-many-redirects-error"
      },
      {
        title: "رفع خطای لود نشدن فایل‌های CSS",
        link: "/one-click-apps/headless-chrome/fix-common-errors/css-not-loading-error"
      },
      {
        title: "رفع خطاهای مربوط به دسترسی فایل",
        link: "/one-click-apps/headless-chrome/fix-common-errors/file-access-errors"
      },
  
    ],
   

  },
  
};
