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
        link: "/paas//getting-started"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/paas//getting-started"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/paas//getting-started"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/paas//getting-started"
      },
      {
        title: "React",
        icon: <IconContainer alt="react" />,
        link: "/paas//getting-started"
      },
      {
        title: "Angular",
        icon: <IconContainer alt="angularjs" />,
        link: "/paas//getting-started"
      },
      {
        title: "Vue",
        icon: <IconContainer alt="vue" />,
        link: "/paas//getting-started"
      },
      {
        title: "Static",
        icon: <IconContainer alt="HTML5" />,
        link: "/paas//getting-started"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/paas//getting-started"
      },
      {
        title: "Docker",
        icon: <IconContainer alt="docker" />,
        link: "/paas//getting-started"
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
        link: "/"
      },
      {
        title: "انتقال پلتفرم",
        icon: <GoPackageDependents />,
        link: "/"
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
        link: "/paas/domains/about"
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
        title: "ماژول Prisma",
        link: "/paas/nodejs/how-tos/connect-to-db/prisma"
      },
      {
        title: "ماژول Sequelize",
        link: "/paas/nodejs/how-tos/connect-to-db/sequelize/about"
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
        title: "تغییر نسخه PHP",
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
        title: "Lumen",
        icon: <IconContainer alt="laravel" />,
        link: "/paas/laravel/related-apps/lumen"
      },
      {
        title: "Laravel Octane",
        icon: <IconContainer alt="laravel" />,
        link: "/paas/laravel/related-apps/laravel-octane"
      },
    ],
  }
};
