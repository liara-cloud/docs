import React, { Fragment } from "react";
import {
  GoFileDirectory,
  GoHome,
  GoGear,
  GoRead,
  GoDatabase,
  GoProjectRoadmap,
  GoContainer,
  GoRocket,
  GoLaw,
  GoStopwatch,
  GoMail,
  GoServer,
  GoTerminal,
  GoGlobe,
  GoCode,
  GoBrowser,
  GoArrowRight,
  GoGoal,
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
  GoVersions,
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
  GoStrikethrough,
  GoOrganization,
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
  GoReply,
  GoLink,
  GoCopy,
  GoDownload,
  
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
      link: "/overview/about"
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
      link: "/email-server/about"
    },
    {
      title: "ذخیره‌سازی ابری",
      icon: <GoServer />,
      link: "/object-storage/about"
    },
    {
      title: "سامانه مدیریت دامنه",
      icon: <GoGlobe />,
      link: "/dns-management-system/about"
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
      link: "/references/liara-cli/about"
    },
    {
      title: "Liara API",
      icon: <GoCode />,
      link: "/references/liara-api/about"
    },
    {
      title: "مدیریت حساب",
      icon: <GoPerson />,
      link: "/references/manage-accounts/about"
    },
    {
      hr: true
    },
    {
      title: "SLAs",
      icon: <GoLaw  />,
      link: "https://liara.ir/sla/"
    },
    {
      hr: true
    },
    {
      title: "صفحه وضعیت (Status Page)",
      icon: <GoStopwatch   />,
      link: "https://liara.online/"
    },

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
        link: "/paas/vue/getting-started"
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
        link: "/paas/vue/getting-started"
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
        link: "/paas/vue/getting-started"
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
        title: "اضافه کردن رکورد به برنامه",
        link: "/paas/domains/add-domain"
      },
      {
        title: "ساخت زرکوردها www",
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

  dbaas: {
    about: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoDatabase />
            دیتابیس
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس دیتابیس",
        icon: <GoInfo />,
        link: "/dbaas/about"
      },
      {
        hr: true
      },
      {
        badge: "دیتابیس‌های قابل ارائه"
      },
      {
        title: "MariaDB",
        icon: <IconContainer alt="mariadb" />,
        link: "/dbaas/mariadb/quick-setup"
      },
      {
        title: "MySQL",
        icon: <IconContainer alt="mysql" />,
        link: "/dbaas/mysql/quick-setup"
      },
      {
        title: "PostgreSQL",
        icon: <IconContainer alt="postgres" />,
        link: "/dbaas/postgresql/quick-setup"
      },
      {
        title: "MSSQL (SQL Server)",
        icon: <IconContainer alt="mssql" />,
        link: "/dbaas/mssql/quick-setup"
      },
      {
        title: "MongoDB",
        icon: <IconContainer alt="mongodb" />,
        link: "/dbaas/mongodb/quick-setup"
      },
      {
        title: "Redis",
        icon: <IconContainer alt="redis" />,
        link: "/dbaas/redis/quick-setup"
      },
      {
        title: "ElasticSearch",
        icon: <IconContainer alt="elastic" />,
        link: "/dbaas/elastic-search/quick-setup"
      },
      {
        hr: true
      },
      {
        title: "جزئیات دیتابیس",
        icon: <GoNote />,
        link: "/dbaas/details/about"
      },
      {
        title: "انتقال دیتابیس",
        icon: <GoPackageDependents />,
        link: "/dbaas/move"
      }
    ],

    move: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoDatabase />
            دیتابیس
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس دیتابیس",
        icon: <GoInfo />,
        link: "/dbaas/about"
      },
      {
        hr: true
      },
      {
        badge: "دیتابیس‌های قابل ارائه"
      },
      {
        title: "MariaDB",
        icon: <IconContainer alt="mariadb" />,
        link: "/dbaas/mariadb/quick-setup"
      },
      {
        title: "MySQL",
        icon: <IconContainer alt="mysql" />,
        link: "/dbaas/mysql/quick-setup"
      },
      {
        title: "PostgreSQL",
        icon: <IconContainer alt="postgres" />,
        link: "/dbaas/postgresql/quick-setup"
      },
      {
        title: "MSSQL (SQL Server)",
        icon: <IconContainer alt="mssql" />,
        link: "/dbaas/mssql/quick-setup"
      },
      {
        title: "MongoDB",
        icon: <IconContainer alt="mongodb" />,
        link: "/dbaas/mongodb/quick-setup"
      },
      {
        title: "Redis",
        icon: <IconContainer alt="redis" />,
        link: "/dbaas/redis/quick-setup"
      },
      {
        title: "ElasticSearch",
        icon: <IconContainer alt="elastic" />,
        link: "/dbaas/elastic-search/quick-setup"
      },
      {
        hr: true
      },
      {
        title: "جزئیات دیتابیس",
        icon: <GoNote />,
        link: "/dbaas/details/about"
      },
      {
        title: "انتقال دیتابیس",
        icon: <GoPackageDependents />,
        link: "/dbaas/move"
      }
    ],

    details: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoDatabase />
            جزئیات دیتابیس
          </div>
        )
      },
      {
        title: "برگشت به دیتابیس",
        icon: <GoArrowRight />,
        link: "/dbaas/about"
      },
      {
        title: "ویژگی‌های دیتابیس در لیارا",
        icon: <GoInfo />,
        link: "/dbaas/details/about"
      },
      {
        hr: true
      },
      {
        title: "پلن‌های دیتابیس",
        icon: <GoCpu />,
        link: "/dbaas/details/plans/about"
      },
      {
        title: "شبکه خصوصی",
        icon: <GoShieldLock  />,
        link: "/dbaas/details/private-network"
      },
      {
        title: "رویدادها",
        icon: <GoEye />,
        link: "/dbaas/details/events"
      },
      {
        title: "گزارشات",
        icon: <GoGraph />,
        link: "/dbaas/details/observations"
      },
      {
        title: "تغییر پلن در دیتابیس",
        icon: <GoGitCompare />,
        link: "/dbaas/details/change-plan"
      },
      {
        title: "حذف یک دیتابیس",
        icon: <GoXCircle  />,
        link: "/dbaas/details/delete-database"
      },
      {
        title: "لینک‌های اتصال",
        icon: <GoLink   />,
        link: "/dbaas/details/connection-links"
      },
      {
        title: "شخصی‌سازی پارامترهای دیتابیس",
        icon: <GoProjectTemplate    />,
        link: "/dbaas/details/customizing-db-parameters"
      },
    ],
    mariadb: [
      {
        badge: (
          <div className="flex items-center gap-2">
            دیتابیس MariaDB 
          </div>
        )
      },
      {
        title: "برگشت به دیتابیس",
        icon: <GoArrowRight />,
        link: "/dbaas/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap  />,
        link: "/dbaas/mariadb/quick-setup"
      },
      {
        title: "نسخه‌های قابل ارائه",
        icon: <GoVersions   />,
        link: "/dbaas/mariadb/choose-version"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
          <Link href="/dbaas/mariadb/how-tos/connect-via-platform/about">
            اتصال از طریق پلتفرم
          </Link>
          </div>
        )
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/dbaas/mariadb/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/dbaas/mariadb/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/dbaas/mariadb/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/dbaas/mariadb/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/dbaas/mariadb/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/dbaas/mariadb/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/dbaas/mariadb/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/dbaas/mariadb/how-tos/connect-via-platform/go"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoBrowser   />
          <Link href="/dbaas/mariadb/how-tos/connect-via-gui/about">اتصال از طریق GUI</Link>
          </div>
        )
      },
      {
        title: "PHPMyAdmin",
        link: "/dbaas/mariadb/how-tos/connect-via-gui/phpmyadmin"
      },
      {
        title: "DBeaver",
        link: "/dbaas/mariadb/how-tos/connect-via-gui/dbeaver"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoTerminal   />
            <Link href="/dbaas/mariadb/how-tos/connect-via-cli/about">اتصال از طریق CLI</Link>
          </div>
        )
      },
      {
        title: "MySQL CLI",
        link: "/dbaas/mariadb/how-tos/connect-via-cli/mysql"
      },
      {
        title: "MariaDB CLI",
        link: "/dbaas/mariadb/how-tos/connect-via-cli/mariadb"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoReply    />
          مدیریت فایل‌های پشتیبان
          </div>
        )
      },
      {
        title: "ایجاد فایل پشتیبان",
        link: "/dbaas/mariadb/how-tos/create-backup"
      },
      {
        title: "بازیابی فایل پشتیبان",
        link: "/dbaas/mariadb/how-tos/restore-backup"
      },
      
    ],
    mysql: [
      {
        badge: (
          <div className="flex items-center gap-2">
            دیتابیس MySQL 
          </div>
        )
      },
      {
        title: "برگشت به دیتابیس",
        icon: <GoArrowRight />,
        link: "/dbaas/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap  />,
        link: "/dbaas/mysql/quick-setup"
      },
      {
        title: "نسخه‌های قابل ارائه",
        icon: <GoVersions   />,
        link: "/dbaas/mysql/choose-version"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
          <Link href="/dbaas/mysql/how-tos/connect-via-platform/about">
            اتصال از طریق پلتفرم
          </Link>
          </div>
        )
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/dbaas/mysql/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/dbaas/mysql/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/dbaas/mysql/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/dbaas/mysql/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/dbaas/mysql/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/dbaas/mysql/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/dbaas/mysql/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/dbaas/mysql/how-tos/connect-via-platform/go"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoBrowser   />
          <Link href="/dbaas/mysql/how-tos/connect-via-gui/about">اتصال از طریق GUI</Link>
          </div>
        )
      },
      {
        title: "PHPMyAdmin",
        link: "/dbaas/mysql/how-tos/connect-via-gui/phpmyadmin"
      },
      {
        title: "DBeaver",
        link: "/dbaas/mysql/how-tos/connect-via-gui/dbeaver"
      },
      {
        title: "MySQL Workbench",
        link: "/dbaas/mysql/how-tos/connect-via-gui/workbench"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoTerminal   />
            <Link href="/dbaas/mysql/how-tos/connect-via-cli/about">اتصال از طریق CLI</Link>
          </div>
        )
      },
      {
        title: "MySQL CLI",
        link: "/dbaas/mysql/how-tos/connect-via-cli/mysql"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoReply    />
          مدیریت فایل‌های پشتیبان
          </div>
        )
      },
      {
        title: "ایجاد فایل پشتیبان",
        link: "/dbaas/mysql/how-tos/create-backup"
      },
      {
        title: "بازیابی فایل پشتیبان",
        link: "/dbaas/mysql/how-tos/restore-backup"
      },
      
    ],
    postgresql: [
      {
        badge: (
          <div className="flex items-center gap-2">
            دیتابیس PostgreSQL 
          </div>
        )
      },
      {
        title: "برگشت به دیتابیس",
        icon: <GoArrowRight />,
        link: "/dbaas/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap  />,
        link: "/dbaas/postgresql/quick-setup"
      },
      {
        title: "نسخه‌های قابل ارائه",
        icon: <GoVersions   />,
        link: "/dbaas/postgresql/choose-version"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
          <Link href="/dbaas/postgresql/how-tos/connect-via-platform/about">
            اتصال از طریق پلتفرم
          </Link>
          </div>
        )
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/dbaas/postgresql/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/dbaas/postgresql/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/dbaas/postgresql/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/dbaas/postgresql/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/dbaas/postgresql/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/dbaas/postgresql/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/dbaas/postgresql/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/dbaas/postgresql/how-tos/connect-via-platform/go"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoBrowser   />
          <Link href="/dbaas/postgresql/how-tos/connect-via-gui/about">اتصال از طریق GUI</Link>
          </div>
        )
      },
      {
        title: "PGAdmin",
        link: "/dbaas/postgresql/how-tos/connect-via-gui/pgadmin"
      },
      {
        title: "DBeaver",
        link: "/dbaas/postgresql/how-tos/connect-via-gui/dbeaver"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoTerminal   />
            <Link href="/dbaas/postgresql/how-tos/connect-via-cli/about">اتصال از طریق CLI</Link>
          </div>
        )
      },
      {
        title: "PSQL",
        link: "/dbaas/postgresql/how-tos/connect-via-cli/psql"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoReply    />
          مدیریت فایل‌های پشتیبان
          </div>
        )
      },
      {
        title: "ایجاد فایل پشتیبان",
        link: "/dbaas/postgresql/how-tos/create-backup"
      },
      {
        title: "بازیابی فایل پشتیبان",
        link: "/dbaas/postgresql/how-tos/restore-backup"
      },
      
    ],
    mssql: [
      {
        badge: (
          <div className="flex items-center gap-2">
            دیتابیس MSSQL (SQL Server) 
          </div>
        )
      },
      {
        title: "برگشت به دیتابیس",
        icon: <GoArrowRight />,
        link: "/dbaas/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap  />,
        link: "/dbaas/mssql/quick-setup"
      },
      {
        title: "نسخه‌های قابل ارائه",
        icon: <GoVersions   />,
        link: "/dbaas/mssql/choose-version"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
          <Link href="/dbaas/mssql/how-tos/connect-via-platform/about">
            اتصال از طریق پلتفرم
          </Link>
          </div>
        )
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/dbaas/mssql/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/dbaas/mssql/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/dbaas/mssql/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/dbaas/mssql/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/dbaas/mssql/how-tos/connect-via-platform/django"
      },
      // {
      //   title: "Flask",
      //   icon: <IconContainer alt="flask" />,
      //   link: "/dbaas/mssql/how-tos/connect-via-platform/flask"
      // },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/dbaas/mssql/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/dbaas/mssql/how-tos/connect-via-platform/go"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoBrowser   />
          <Link href="/dbaas/mssql/how-tos/connect-via-gui/about">اتصال از طریق GUI</Link>
          </div>
        )
      },
      {
        title: "SQL Server Management Studio",
        link: "/dbaas/mssql/how-tos/connect-via-gui/mssql-server-studio"
      },
      {
        title: "DBeaver",
        link: "/dbaas/mssql/how-tos/connect-via-gui/dbeaver"
      },
      {
        title: "Azure Data Studio",
        link: "/dbaas/mssql/how-tos/connect-via-gui/azure-data-studio"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoTerminal   />
            <Link href="/dbaas/mssql/how-tos/connect-via-cli/about">اتصال از طریق CLI</Link>
          </div>
        )
      },
      {
        title: "SQLCMD",
        link: "/dbaas/mssql/how-tos/connect-via-cli/sqlcmd"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoReply    />
          مدیریت فایل‌های پشتیبان
          </div>
        )
      },
      {
        title: "ایجاد فایل پشتیبان",
        link: "/dbaas/mssql/how-tos/create-backup"
      },
      {
        title: "بازیابی فایل پشتیبان",
        link: "/dbaas/mssql/how-tos/restore-backup"
      },
      
    ],
    mongodb: [
      {
        badge: (
          <div className="flex items-center gap-2">
            دیتابیس MongoDB
          </div>
        )
      },
      {
        title: "برگشت به دیتابیس",
        icon: <GoArrowRight />,
        link: "/dbaas/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap  />,
        link: "/dbaas/mongodb/quick-setup"
      },
      {
        title: "نسخه‌های قابل ارائه",
        icon: <GoVersions   />,
        link: "/dbaas/mongodb/choose-version"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
          <Link href="/dbaas/mongodb/how-tos/connect-via-platform/about">
            اتصال از طریق پلتفرم
          </Link>
          </div>
        )
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/dbaas/mongodb/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/dbaas/mongodb/how-tos/connect-via-platform/nextjs"
      },
      // {
      //   title: "Laravel",
      //   icon: <IconContainer alt="laravel" />,
      //   link: "/dbaas/mongodb/how-tos/connect-via-platform/laravel"
      // },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/dbaas/mongodb/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/dbaas/mongodb/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/dbaas/mongodb/how-tos/connect-via-platform/flask"
      },
      // {
      //   title: "NET.",
      //   icon: <IconContainer alt="netcore" />,
      //   link: "/dbaas/mongodb/how-tos/connect-via-platform/dotnet"
      // },
      // {
      //   title: "Golang",
      //   icon: <IconContainer alt="go" />,
      //   link: "/dbaas/mongodb/how-tos/connect-via-platform/go"
      // },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoBrowser   />
          <Link href="/dbaas/mongodb/how-tos/connect-via-gui/about">اتصال از طریق GUI</Link>
          </div>
        )
      },
      {
        title: "MongoDB Compass",
        link: "/dbaas/mongodb/how-tos/connect-via-gui/mongodb-compass"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoTerminal   />
            <Link href="/dbaas/mongodb/how-tos/connect-via-cli/about">اتصال از طریق CLI</Link>
          </div>
        )
      },
      {
        title: "mongosh",
        link: "/dbaas/mongodb/how-tos/connect-via-cli/mongosh"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoReply    />
          مدیریت فایل‌های پشتیبان
          </div>
        )
      },
      {
        title: "ایجاد فایل پشتیبان",
        link: "/dbaas/mongodb/how-tos/create-backup"
      },
      {
        title: "بازیابی فایل پشتیبان",
        link: "/dbaas/mongodb/how-tos/restore-backup"
      },
      
    ],
    redis: [
      {
        badge: (
          <div className="flex items-center gap-2">
            دیتابیس Redis
          </div>
        )
      },
      {
        title: "برگشت به دیتابیس",
        icon: <GoArrowRight />,
        link: "/dbaas/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap  />,
        link: "/dbaas/redis/quick-setup"
      },
      {
        title: "نسخه‌های قابل ارائه",
        icon: <GoVersions   />,
        link: "/dbaas/redis/choose-version"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
          <Link href="/dbaas/redis/how-tos/connect-via-platform/about">
            اتصال از طریق پلتفرم
          </Link>
          </div>
        )
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/dbaas/redis/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/dbaas/redis/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/dbaas/redis/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/dbaas/redis/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/dbaas/redis/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/dbaas/redis/how-tos/connect-via-platform/flask"
      },
      // {
      //   title: "NET.",
      //   icon: <IconContainer alt="netcore" />,
      //   link: "/dbaas/redis/how-tos/connect-via-platform/dotnet"
      // },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/dbaas/redis/how-tos/connect-via-platform/go"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoBrowser   />
          <Link href="/dbaas/redis/how-tos/connect-via-gui/about">اتصال از طریق GUI</Link>
          </div>
        )
      },
      {
        title: "PHPRedisAdmin",
        link: "/dbaas/redis/how-tos/connect-via-gui/phpredisadmin"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoTerminal   />
            <Link href="/dbaas/redis/how-tos/connect-via-cli/about">اتصال از طریق CLI</Link>
          </div>
        )
      },
      {
        title: "redis-cli",
        link: "/dbaas/redis/how-tos/connect-via-cli/redis-cli"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoReply    />
          مدیریت فایل‌های پشتیبان
          </div>
        )
      },
      {
        title: "ایجاد فایل پشتیبان",
        link: "/dbaas/redis/how-tos/create-backup"
      },
      {
        title: "بازیابی فایل پشتیبان",
        link: "/dbaas/redis/how-tos/restore-backup"
      },
      
    ],

    'elastic-search': [
      {
        badge: (
          <div className="flex items-center gap-2">
            دیتابیس ElasticSearch
          </div>
        )
      },
      {
        title: "برگشت به دیتابیس",
        icon: <GoArrowRight />,
        link: "/dbaas/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap  />,
        link: "/dbaas/elastic-search/quick-setup"
      },
      {
        title: "نسخه‌های قابل ارائه",
        icon: <GoVersions   />,
        link: "/dbaas/elastic-search/choose-version"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage   />
          <Link href="/dbaas/elastic-search/how-tos/connect-via-platform/about">
            اتصال از طریق پلتفرم
          </Link>
          </div>
        )
      },
      // {
      //   title: "NodeJS",
      //   icon: <IconContainer alt="nodejs" />,
      //   link: "/dbaas/elastic-search/how-tos/connect-via-platform/nodejs"
      // },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/dbaas/elastic-search/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/dbaas/elastic-search/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/dbaas/elastic-search/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/dbaas/elastic-search/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/dbaas/elastic-search/how-tos/connect-via-platform/flask"
      },
      // {
      //   title: "NET.",
      //   icon: <IconContainer alt="netcore" />,
      //   link: "/dbaas/elastic-search/how-tos/connect-via-platform/dotnet"
      // },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/dbaas/elastic-search/how-tos/connect-via-platform/go"
      },
      {
        title: "Python Scripts",
        icon: <IconContainer alt="python" />,
        link: "/dbaas/elastic-search/how-tos/connect-via-platform/python"
      },
      // {
      //   hr: true
      // },
      // {
      //   badge: (
      //     <div className="flex items-center gap-2">
      //     <GoBrowser   />
      //     <Link href="/dbaas/elastic-search/how-tos/connect-via-gui/about">اتصال از طریق GUI</Link>
      //     </div>
      //   )
      // },
      // {
      //   title: "PHPRedisAdmin",
      //   link: "/dbaas/elastic-search/how-tos/connect-via-gui/phpelastic-searchadmin"
      // },
      // {
      //   hr: true
      // },
      // {
      //   badge: (
      //     <div className="flex items-center gap-2">
      //       <GoTerminal   />
      //       <Link href="/dbaas/elastic-search/how-tos/connect-via-cli/about">اتصال از طریق CLI</Link>
      //     </div>
      //   )
      // },
      // {
      //   title: "elastic-search-cli",
      //   link: "/dbaas/elastic-search/how-tos/connect-via-cli/elastic-search-cli"
      // },
      // {
      //   hr: true
      // },
      // {
      //   badge: (
      //     <div className="flex items-center gap-2">
      //       <GoReply    />
      //     مدیریت فایل‌های پشتیبان
      //     </div>
      //   )
      // },
      // {
      //   title: "ایجاد فایل پشتیبان",
      //   link: "/dbaas/elastic-search/how-tos/create-backup"
      // },
      // {
      //   title: "بازیابی فایل پشتیبان",
      //   link: "/dbaas/elastic-search/how-tos/restore-backup"
      // },
      
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
        link: "/one-click-apps/about"
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
        title: "Rocket.Chat",
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
        link: "/one-click-apps/headless-chrome/quick-start"
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
        link: "/one-click-apps/headless-chrome/how-tos/connect-by-python-and-pyppeteer"
      },
      {
        title: "اتصال با Selenium + Python",
        link: "/one-click-apps/headless-chrome/how-tos/connect-by-python-and-selenium"
      },
      {
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/headless-chrome/how-tos/choose-version"
      },

    ],
    soketi: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Soketi 
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
        link: "/one-click-apps/soketi/quick-start"
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
        title: "اتصال از طریق Laravel",
        link: "/one-click-apps/soketi/how-tos/connect-by-laravel"
      },
      {
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/soketi/how-tos/choose-version"
      },

    ],
    imgproxy: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه ImgProxy 
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
        link: "/one-click-apps/imgproxy/quick-start"
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
        title: "استفاده در برنامه Django",
        link: "/one-click-apps/imgproxy/how-tos/use-in-django"
      },
      {
        title: "استفاده در برنامه Laravel",
        link: "/one-click-apps/imgproxy/how-tos/use-in-laravel"
      },
      {
        title: "استفاده در برنامه NodeJS",
        link: "/one-click-apps/imgproxy/how-tos/use-in-nodejs"
      },
      {
        title: "اضافه کردن URL Signature",
        link: "/one-click-apps/imgproxy/how-tos/add-url-signature"
      },
      {
        title: "محدود کردن دسترسی",
        link: "/one-click-apps/imgproxy/how-tos/limit-access"
      },
      {
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/imgproxy/how-tos/choose-version"
      },
    ],
    rocketchat: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Rocket.Chat 
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
        link: "/one-click-apps/rocketchat/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/rocketchat/how-tos/choose-version"
      },
    ],
    metabase: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Metabase 
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
        link: "/one-click-apps/metabase/quick-start"
      },
      // {
      //   hr: true
      // },
      // {
      //   badge: (
      //     <div className="flex items-center gap-2">
      //     < GoPackage   />
      //       نحوه
      //     </div>
      //   )
      // },
      // {
      //   title: "تغییر نسخه‌ی برنامه مستقر شده",
      //   link: "/one-click-apps/metabase/how-tos/choose-version"
      // },
    ],
    nextcloud: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه NextCloud
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
        link: "/one-click-apps/nextcloud/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/nextcloud/how-tos/choose-version"
      },
    ],
    gitea: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Gitea
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
        link: "/one-click-apps/gitea/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/gitea/how-tos/choose-version"
      },
    ],
    mattermost: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Mattermost
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
        link: "/one-click-apps/mattermost/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/mattermost/how-tos/choose-version"
      },
    ],
    kibana: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Kibana
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
        link: "/one-click-apps/kibana/quick-start"
      },
      // {
      //   hr: true
      // },
      // {
      //   badge: (
      //     <div className="flex items-center gap-2">
      //     < GoPackage   />
      //       نحوه
      //     </div>
      //   )
      // },
      // {
      //   title: "تغییر نسخه‌ی برنامه مستقر شده",
      //   link: "/one-click-apps/kibana/how-tos/choose-version"
      // },
    ],
    grafana: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Grafana
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
        link: "/one-click-apps/grafana/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/grafana/how-tos/choose-version"
      },
    ],
    prestashop: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Prestashop
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
        link: "/one-click-apps/prestashop/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/prestashop/how-tos/choose-version"
      },
    ],
    vscode: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه VSCode
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
        link: "/one-click-apps/vscode/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/vscode/how-tos/choose-version"
      },
    ],
    odoo: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Odoo
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
        link: "/one-click-apps/odoo/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/odoo/how-tos/choose-version"
      },
    ],
    ghost: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Ghost
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
        link: "/one-click-apps/ghost/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/ghost/how-tos/choose-version"
      },
    ],
    n8n: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه N8N
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
        link: "/one-click-apps/n8n/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/n8n/how-tos/choose-version"
      },
    ],
    pocketbase: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه PocketBase
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
        link: "/one-click-apps/pocketbase/quick-start"
      },
      // {
      //   hr: true
      // },
      // {
      //   badge: (
      //     <div className="flex items-center gap-2">
      //     < GoPackage   />
      //       نحوه
      //     </div>
      //   )
      // },
      // {
      //   title: "تغییر نسخه‌ی برنامه مستقر شده",
      //   link: "/one-click-apps/pocketbase/how-tos/choose-version"
      // },
    ],
    matomo: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Matomo
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
        link: "/one-click-apps/matomo/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/matomo/how-tos/choose-version"
      },
    ],
    unleash: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Unleash
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
        link: "/one-click-apps/unleash/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/unleash/how-tos/choose-version"
      },
    ],
    'uptime-kuma': [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Uptime Kuma
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
        link: "/one-click-apps/uptime-kuma/quick-start"
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
        title: "تنظیم TrustedProxies",
        link: "/one-click-apps/uptime-kuma/how-tos/set-trusted-proxies"
      },
      {
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/uptime-kuma/how-tos/choose-version"
      },
    ],
    ackee: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Ackee
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
        link: "/one-click-apps/ackee/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/ackee/how-tos/choose-version"
      },
    ],
    appsmith: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Appsmith
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
        link: "/one-click-apps/appsmith/quick-start"
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
        title: "پیکربندی متغیرها",
        link: "/one-click-apps/appsmith/how-tos/configure-vars"
      },
      {
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/appsmith/how-tos/choose-version"
      },
    ],
    varnish: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Varnish Cache
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
        link: "/one-click-apps/varnish/quick-start"
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
        title: "پیکربندی متغیرها",
        link: "/one-click-apps/varnish/how-tos/configure-vars"
      },
      {
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/varnish/how-tos/choose-version"
      },
    ],
    rabbitmq: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه RabbitMQ
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
        link: "/one-click-apps/rabbitmq/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/rabbitmq/how-tos/choose-version"
      },
    ],
    'apache-answer': [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Apache Answer
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
        link: "/one-click-apps/apache-answer/quick-start"
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
        title: "اتصال به دیتابیس",
        link: "/one-click-apps/apache-answer/how-tos/connect-to-db"
      },
      {
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/apache-answer/how-tos/choose-version"
      },
    ],
    nocodb: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه NOCODB
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
        link: "/one-click-apps/nocodb/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/nocodb/how-tos/choose-version"
      },
    ],
    chroma: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه Chroma
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
        link: "/one-click-apps/chroma/quick-start"
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
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/chroma/how-tos/choose-version"
      },
    ],

    meilisearch: [
      {
        badge: (
          <div className="flex items-center gap-2">
            برنامه MeiliSearch
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
        link: "/one-click-apps/meilisearch/quick-start"
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
        title: "اتصال به MeiliSearch",
        link: "/one-click-apps/meilisearch/how-tos/connect"
      },
      {
        title: "تغییر نسخه‌ی برنامه مستقر شده",
        link: "/one-click-apps/meilisearch/how-tos/choose-version"
      },
    ],


   

  },

  email_server: {
    about: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoMail  />
            ایمیل‌سرور
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس ایمیل‌سرور",
        icon: <GoInfo />,
        link: "/email-server/about"
      },
      {
        title: "راه‌اندازی سریع ایمیل‌سرور!",
        icon: <GoZap />,
        link: "/email-server/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoRead />
            نحوه
          </div>
        )
      },
      {
        title: "اضافه کردن نشانی",
        link: "/email-server/how-tos/add-account"
      },
      {
        title: "ارسال سریع ایمیل از کنسول",
        link: "/email-server/how-tos/send-email-via-console"
      },
      {
        title: "افزودن کاربر SMTP",
        link: "/email-server/how-tos/add-smtp-user"
      },
      {
        title: "مدیریت ایمیل‌های ارسالی",
        link: "/email-server/how-tos/manage-sent-emails"
      },
      {
        title: "مدیریت ایمیل‌های دریافتی",
        link: "/email-server/how-tos/manage-incoming-emails"
      },
      {
        title: "تنظیم هرزنامه ایمیل‌های دریافتی",
        link: "/email-server/how-tos/set-spam"
      },
      {
        title: "مسدودسازی ایمیل‌های ورودی",
        link: "/email-server/how-tos/block-emails"
      },
      {
        title: "کنترل هرزنامه ایمیل‌های ارسالی",
        link: "/email-server/how-tos/control-spam"
      },
      {
        title: "مدیریت محدودیت‌ها",
        link: "/email-server/how-tos/manage-limitations"
      },
      {
        title: "تنظیم فوروارد",
        link: "/email-server/how-tos/set-forward"
      },
      {
        title: "تغییر حالت ارسال ایمیل",
        link: "/email-server/how-tos/change-sending-mode"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage />
          <a href="/email-server/how-tos/connect-via-platform/about">
          اتصال به ایمیل‌سرور از طریق پلتفرم
          </a>
          </div>
        )
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/email-server/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/email-server/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/email-server/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/email-server/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/email-server/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/email-server/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/email-server/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/email-server/how-tos/connect-via-platform/go"
      },
      {
        title: "Ghost",
        icon: <IconContainer alt="ghost" />,
        link: "/email-server/how-tos/connect-via-platform/ghost"
      },
      {
        hr: true
      },
      {
        title: "جزئیات ایمیل‌سرور",
        icon: <GoNote />,
        link: "/email-server/details/about"
      },

      
    ],

    'quick-setup': [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoMail  />
            ایمیل‌سرور
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس ایمیل‌سرور",
        icon: <GoInfo />,
        link: "/email-server/about"
      },
      {
        title: "راه‌اندازی سریع ایمیل‌سرور!",
        icon: <GoZap />,
        link: "/email-server/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoRead />
            نحوه
          </div>
        )
      },
      {
        title: "اضافه کردن نشانی",
        link: "/email-server/how-tos/add-account"
      },
      {
        title: "ارسال سریع ایمیل از کنسول",
        link: "/email-server/how-tos/send-email-via-console"
      },
      {
        title: "افزودن کاربر SMTP",
        link: "/email-server/how-tos/add-smtp-user"
      },
      {
        title: "مدیریت ایمیل‌های ارسالی",
        link: "/email-server/how-tos/manage-sent-emails"
      },
      {
        title: "مدیریت ایمیل‌های دریافتی",
        link: "/email-server/how-tos/manage-incoming-emails"
      },
      {
        title: "تنظیم هرزنامه ایمیل‌های دریافتی",
        link: "/email-server/how-tos/set-spam"
      },
      {
        title: "مسدودسازی ایمیل‌های ورودی",
        link: "/email-server/how-tos/block-emails"
      },
      {
        title: "کنترل هرزنامه ایمیل‌های ارسالی",
        link: "/email-server/how-tos/control-spam"
      },
      {
        title: "مدیریت محدودیت‌ها",
        link: "/email-server/how-tos/manage-limitations"
      },
      {
        title: "تنظیم فوروارد",
        link: "/email-server/how-tos/set-forward"
      },
      {
        title: "تغییر حالت ارسال ایمیل",
        link: "/email-server/how-tos/change-sending-mode"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage />
          <a href="/email-server/how-tos/connect-via-platform/about">
          اتصال به ایمیل‌سرور از طریق پلتفرم
          </a>
          </div>
        )
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/email-server/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/email-server/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/email-server/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/email-server/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/email-server/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/email-server/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/email-server/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/email-server/how-tos/connect-via-platform/go"
      },
      {
        title: "Ghost",
        icon: <IconContainer alt="ghost" />,
        link: "/email-server/how-tos/connect-via-platform/ghost"
      },
      {
        hr: true
      },
      {
        title: "جزئیات ایمیل‌سرور",
        icon: <GoNote />,
        link: "/email-server/details/about"
      },

      
    ],

    'how-tos':  [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoMail  />
            ایمیل‌سرور
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس ایمیل‌سرور",
        icon: <GoInfo />,
        link: "/email-server/about"
      },
      {
        title: "راه‌اندازی سریع ایمیل‌سرور!",
        icon: <GoZap />,
        link: "/email-server/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoRead />
            نحوه
          </div>
        )
      },
      {
        title: "اضافه کردن نشانی",
        link: "/email-server/how-tos/add-account"
      },
      {
        title: "ارسال سریع ایمیل از کنسول",
        link: "/email-server/how-tos/send-email-via-console"
      },
      {
        title: "افزودن کاربر SMTP",
        link: "/email-server/how-tos/add-smtp-user"
      },
      {
        title: "مدیریت ایمیل‌های ارسالی",
        link: "/email-server/how-tos/manage-sent-emails"
      },
      {
        title: "مدیریت ایمیل‌های دریافتی",
        link: "/email-server/how-tos/manage-incoming-emails"
      },
      {
        title: "تنظیم هرزنامه ایمیل‌های دریافتی",
        link: "/email-server/how-tos/set-spam"
      },
      {
        title: "مسدودسازی ایمیل‌های ورودی",
        link: "/email-server/how-tos/block-emails"
      },
      {
        title: "کنترل هرزنامه ایمیل‌های ارسالی",
        link: "/email-server/how-tos/control-spam"
      },
      {
        title: "مدیریت محدودیت‌ها",
        link: "/email-server/how-tos/manage-limitations"
      },
      {
        title: "تنظیم فوروارد",
        link: "/email-server/how-tos/set-forward"
      },
      {
        title: "تغییر حالت ارسال ایمیل",
        link: "/email-server/how-tos/change-sending-mode"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage />
          <a href="/email-server/how-tos/connect-via-platform/about">
          اتصال به ایمیل‌سرور از طریق پلتفرم
          </a>
          </div>
        )
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/email-server/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/email-server/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/email-server/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/email-server/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/email-server/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/email-server/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/email-server/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/email-server/how-tos/connect-via-platform/go"
      },
      {
        title: "Ghost",
        icon: <IconContainer alt="ghost" />,
        link: "/email-server/how-tos/connect-via-platform/ghost"
      },
      {
        hr: true
      },
      {
        title: "جزئیات ایمیل‌سرور",
        icon: <GoNote />,
        link: "/email-server/details/about"
      },

      
    ],

    details: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoMail />
            جزئیات ایمیل‌سرور
          </div>
        )
      },
      {
        title: "برگشت به ایمیل‌سرور",
        icon: <GoArrowRight />,
        link: "/email-server/about"
      },
      {
        title: "ویژگی‌های ایمیل‌سرور در لیارا",
        icon: <GoInfo />,
        link: "/email-server/details/about"
      },
      {
        hr: true
      },
      {
        title: "پلن‌های ایمیل‌سرور",
        icon: <GoCpu />,
        link: "/email-server/details/plans"
      },
      {
        title: "رکوردهای DNS",
        icon: <GoFileBinary  />,
        link: "/email-server/details/dns-records"
      },
      {
        title: "گزارشات",
        icon: <GoGraph />,
        link: "/email-server/details/observations"
      },
      {
        title: "تغییر پلن در ایمیل‌سرور",
        icon: <GoGitCompare />,
        link: "/email-server/details/change-plan"
      },
      {
        title: "حذف یک ایمیل‌سرور",
        icon: <GoXCircle  />,
        link: "/email-server/details/delete-email-server"
      },
    ],
    
  },

  object_storage: {
    about: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoServer  />
            فضای ذخیره‌سازی ابری
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره ذخیره‌سازی ابری",
        icon: <GoInfo />,
        link: "/object-storage/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap />,
        link: "/object-storage/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoFileDirectory  />
            نحوه کار با باکت
          </div>
        )
      },
      {
        title: "آپلود فایل",
        link: "/object-storage/how-tos/upload-file"
      },
      {
        title: "دانلود فایل",
        link: "/object-storage/how-tos/download-file"
      },
      {
        title: "مشاهده فایل",
        link: "/object-storage/how-tos/see-file"
      },
      {
        title: "اشتراک‌گذاری فایل",
        link: "/object-storage/how-tos/share-file"
      },
      {
        title: "حذف فایل",
        link: "/object-storage/how-tos/delete-file"
      },
      {
        title: "تغییر سطح دسترسی",
        link: "/object-storage/how-tos/change-access-level"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoKey   />
            نحوه مدیریت کلیدها
          </div>
        )
      },
      {
        title: "ایجاد کلید",
        link: "/object-storage/how-tos/create-key"
      },
      {
        title: "ساخت کلید جدید",
        link: "/object-storage/how-tos/generate-new-key"
      },
      {
        title: "ویرایش کلید",
        link: "/object-storage/how-tos/edit-key"
      },
      {
        title: "حذف کلید",
        link: "/object-storage/how-tos/delete-key"
      },
      
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoCopy   />
            انتقالات  
          </div>
        )
      },
      {
        title: "انتقال فایل از باکت به باکت دیگر",
        link: "/object-storage/how-tos/move-bucket"
      },
      {
        title: "تهیه فایل‌پشتیبان با rclone",
        link: "/object-storage/how-tos/create-backup-using-rclone"
      },
      {
        title: "تهیه فایل‌پشتیبان با S3 Browser",
        link: "/object-storage/how-tos/create-backup-using-s3-browser"
      },
      {
        title: "مهاجرت از سرویس فایل (قدیمی)",
        link: "/object-storage/how-tos/migrate-from-file-service"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage />
          <a href="/object-storage/how-tos/connect-via-platform/about">
          اتصال با AWS SDK از طریق پلتفرم
          </a>
          </div>
        )
      },
      {
        title: "دانلود مستقیم فایل",
        icon: < GoDownload />,
        link: "/object-storage/how-tos/direct-download"
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/object-storage/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/object-storage/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/object-storage/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/object-storage/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/object-storage/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/object-storage/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/object-storage/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/object-storage/how-tos/connect-via-platform/go"
      },
      {
        title: "Imgproxy",
        icon: <IconContainer alt="imgproxy" />,
        link: "/object-storage/how-tos/connect-via-platform/imgproxy"
      },
      {
        title: "Strapi",
        icon: <IconContainer alt="strapi" />,
        link: "/object-storage/how-tos/connect-via-platform/strapi"
      },
      {
        hr: true
      },
      {
        title: "جزئیات فضای ذخیره‌سازی ابری",
        icon: <GoNote />,
        link: "/object-storage/details/about"
      },
      {
        title: "اتصال دامنه به Object Storage",
        icon: <GoGlobe />,
        link: "/object-storage/add-domain"
      },

      
    ],

    'add-domain': [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoServer  />
            فضای ذخیره‌سازی ابری
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره ذخیره‌سازی ابری",
        icon: <GoInfo />,
        link: "/object-storage/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap />,
        link: "/object-storage/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoFileDirectory  />
            نحوه کار با باکت
          </div>
        )
      },
      {
        title: "آپلود فایل",
        link: "/object-storage/how-tos/upload-file"
      },
      {
        title: "دانلود فایل",
        link: "/object-storage/how-tos/download-file"
      },
      {
        title: "مشاهده فایل",
        link: "/object-storage/how-tos/see-file"
      },
      {
        title: "اشتراک‌گذاری فایل",
        link: "/object-storage/how-tos/share-file"
      },
      {
        title: "حذف فایل",
        link: "/object-storage/how-tos/delete-file"
      },
      {
        title: "تغییر سطح دسترسی",
        link: "/object-storage/how-tos/change-access-level"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoKey   />
            نحوه مدیریت کلیدها
          </div>
        )
      },
      {
        title: "ایجاد کلید",
        link: "/object-storage/how-tos/create-key"
      },
      {
        title: "ساخت کلید جدید",
        link: "/object-storage/how-tos/generate-new-key"
      },
      {
        title: "ویرایش کلید",
        link: "/object-storage/how-tos/edit-key"
      },
      {
        title: "حذف کلید",
        link: "/object-storage/how-tos/delete-key"
      },
      
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoCopy   />
            انتقالات  
          </div>
        )
      },
      {
        title: "انتقال فایل از باکت به باکت دیگر",
        link: "/object-storage/how-tos/move-bucket"
      },
      {
        title: "تهیه فایل‌پشتیبان با rclone",
        link: "/object-storage/how-tos/create-backup-using-rclone"
      },
      {
        title: "تهیه فایل‌پشتیبان با S3 Browser",
        link: "/object-storage/how-tos/create-backup-using-s3-browser"
      },
      {
        title: "مهاجرت از سرویس فایل (قدیمی)",
        link: "/object-storage/how-tos/migrate-from-file-service"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage />
          <a href="/object-storage/how-tos/connect-via-platform/about">
          اتصال با AWS SDK از طریق پلتفرم
          </a>
          </div>
        )
      },
      {
        title: "دانلود مستقیم فایل",
        icon: < GoDownload />,
        link: "/object-storage/how-tos/direct-download"
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/object-storage/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/object-storage/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/object-storage/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/object-storage/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/object-storage/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/object-storage/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/object-storage/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/object-storage/how-tos/connect-via-platform/go"
      },
      {
        title: "Imgproxy",
        icon: <IconContainer alt="imgproxy" />,
        link: "/object-storage/how-tos/connect-via-platform/imgproxy"
      },
      {
        title: "Strapi",
        icon: <IconContainer alt="strapi" />,
        link: "/object-storage/how-tos/connect-via-platform/strapi"
      },
      {
        hr: true
      },
      {
        title: "جزئیات فضای ذخیره‌سازی ابری",
        icon: <GoNote />,
        link: "/object-storage/details/about"
      },
      {
        title: "اتصال دامنه به Object Storage",
        icon: <GoGlobe />,
        link: "/object-storage/add-domain"
      },

    ],

    'quick-setup': [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoServer  />
            فضای ذخیره‌سازی ابری
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره ذخیره‌سازی ابری",
        icon: <GoInfo />,
        link: "/object-storage/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap />,
        link: "/object-storage/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoFileDirectory  />
            نحوه کار با باکت
          </div>
        )
      },
      {
        title: "آپلود فایل",
        link: "/object-storage/how-tos/upload-file"
      },
      {
        title: "دانلود فایل",
        link: "/object-storage/how-tos/download-file"
      },
      {
        title: "مشاهده فایل",
        link: "/object-storage/how-tos/see-file"
      },
      {
        title: "اشتراک‌گذاری فایل",
        link: "/object-storage/how-tos/share-file"
      },
      {
        title: "حذف فایل",
        link: "/object-storage/how-tos/delete-file"
      },
      {
        title: "تغییر سطح دسترسی",
        link: "/object-storage/how-tos/change-access-level"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoKey   />
            نحوه مدیریت کلیدها
          </div>
        )
      },
      {
        title: "ایجاد کلید",
        link: "/object-storage/how-tos/create-key"
      },
      {
        title: "ساخت کلید جدید",
        link: "/object-storage/how-tos/generate-new-key"
      },
      {
        title: "ویرایش کلید",
        link: "/object-storage/how-tos/edit-key"
      },
      {
        title: "حذف کلید",
        link: "/object-storage/how-tos/delete-key"
      },
      
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoCopy   />
            انتقالات  
          </div>
        )
      },
      {
        title: "انتقال فایل از باکت به باکت دیگر",
        link: "/object-storage/how-tos/move-bucket"
      },
      {
        title: "تهیه فایل‌پشتیبان با rclone",
        link: "/object-storage/how-tos/create-backup-using-rclone"
      },
      {
        title: "تهیه فایل‌پشتیبان با S3 Browser",
        link: "/object-storage/how-tos/create-backup-using-s3-browser"
      },
      {
        title: "مهاجرت از سرویس فایل (قدیمی)",
        link: "/object-storage/how-tos/migrate-from-file-service"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage />
          <a href="/object-storage/how-tos/connect-via-platform/about">
          اتصال با AWS SDK از طریق پلتفرم
          </a>
          </div>
        )
      },
      {
        title: "دانلود مستقیم فایل",
        icon: < GoDownload />,
        link: "/object-storage/how-tos/direct-download"
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/object-storage/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/object-storage/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/object-storage/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/object-storage/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/object-storage/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/object-storage/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/object-storage/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/object-storage/how-tos/connect-via-platform/go"
      },
      {
        title: "Imgproxy",
        icon: <IconContainer alt="imgproxy" />,
        link: "/object-storage/how-tos/connect-via-platform/imgproxy"
      },
      {
        title: "Strapi",
        icon: <IconContainer alt="strapi" />,
        link: "/object-storage/how-tos/connect-via-platform/strapi"
      },
      {
        hr: true
      },
      {
        title: "جزئیات فضای ذخیره‌سازی ابری",
        icon: <GoNote />,
        link: "/object-storage/details/about"
      },
      {
        title: "اتصال دامنه به Object Storage",
        icon: <GoGlobe />,
        link: "/object-storage/add-domain"
      },

      
    ],

    'how-tos':  [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoServer  />
            فضای ذخیره‌سازی ابری
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره ذخیره‌سازی ابری",
        icon: <GoInfo />,
        link: "/object-storage/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap />,
        link: "/object-storage/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoFileDirectory  />
            نحوه کار با باکت
          </div>
        )
      },
      {
        title: "آپلود فایل",
        link: "/object-storage/how-tos/upload-file"
      },
      {
        title: "دانلود فایل",
        link: "/object-storage/how-tos/download-file"
      },
      {
        title: "مشاهده فایل",
        link: "/object-storage/how-tos/see-file"
      },
      {
        title: "اشتراک‌گذاری فایل",
        link: "/object-storage/how-tos/share-file"
      },
      {
        title: "حذف فایل",
        link: "/object-storage/how-tos/delete-file"
      },
      {
        title: "تغییر سطح دسترسی",
        link: "/object-storage/how-tos/change-access-level"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoKey   />
            نحوه مدیریت کلیدها
          </div>
        )
      },
      {
        title: "ایجاد کلید",
        link: "/object-storage/how-tos/create-key"
      },
      {
        title: "ساخت کلید جدید",
        link: "/object-storage/how-tos/generate-new-key"
      },
      {
        title: "ویرایش کلید",
        link: "/object-storage/how-tos/edit-key"
      },
      {
        title: "حذف کلید",
        link: "/object-storage/how-tos/delete-key"
      },
      
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoCopy   />
            انتقالات  
          </div>
        )
      },
      {
        title: "انتقال فایل از باکت به باکت دیگر",
        link: "/object-storage/how-tos/move-bucket"
      },
      {
        title: "تهیه فایل‌پشتیبان با rclone",
        link: "/object-storage/how-tos/create-backup-using-rclone"
      },
      {
        title: "تهیه فایل‌پشتیبان با S3 Browser",
        link: "/object-storage/how-tos/create-backup-using-s3-browser"
      },
      {
        title: "مهاجرت از سرویس فایل (قدیمی)",
        link: "/object-storage/how-tos/migrate-from-file-service"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          < GoPackage />
          <a href="/object-storage/how-tos/connect-via-platform/about">
          اتصال با AWS SDK از طریق پلتفرم
          </a>
          </div>
        )
      },
      {
        title: "دانلود مستقیم فایل",
        icon: < GoDownload />,
        link: "/object-storage/how-tos/direct-download"
      },
      {
        title: "NodeJS",
        icon: <IconContainer alt="nodejs" />,
        link: "/object-storage/how-tos/connect-via-platform/nodejs"
      },
      {
        title: "NextJS",
        icon: <IconContainer alt="next" />,
        link: "/object-storage/how-tos/connect-via-platform/nextjs"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/object-storage/how-tos/connect-via-platform/laravel"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/object-storage/how-tos/connect-via-platform/php"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/object-storage/how-tos/connect-via-platform/django"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/object-storage/how-tos/connect-via-platform/flask"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/object-storage/how-tos/connect-via-platform/dotnet"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/object-storage/how-tos/connect-via-platform/go"
      },
      {
        title: "Imgproxy",
        icon: <IconContainer alt="imgproxy" />,
        link: "/object-storage/how-tos/connect-via-platform/imgproxy"
      },
      {
        title: "Strapi",
        icon: <IconContainer alt="strapi" />,
        link: "/object-storage/how-tos/connect-via-platform/strapi"
      },
      {
        hr: true
      },
      {
        title: "جزئیات فضای ذخیره‌سازی ابری",
        icon: <GoNote />,
        link: "/object-storage/details/about"
      },
      {
        title: "اتصال دامنه به Object Storage",
        icon: <GoGlobe />,
        link: "/object-storage/add-domain"
      },

      
    ],

    details: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoContainer />
            جزئیات Object Storage
          </div>
        )
      },
      {
        title: "برگشت به ذخیره‌سازی ابری",
        icon: <GoArrowRight />,
        link: "/object-storage/about"
      },
      {
        title: "ویژگی‌های ذخیره‌سازی ابری در لیارا",
        icon: <GoInfo />,
        link: "/object-storage/details/about"
      },
      {
        hr: true
      },
      {
        title: "پلن‌های Object Storage",
        icon: <GoCpu />,
        link: "/object-storage/details/plans"
      },
      {
        title: "گزارشات",
        icon: <GoGraph />,
        link: "/object-storage/details/observations"
      },
      {
        title: "تغییر پلن در Object Storage",
        icon: <GoGitCompare />,
        link: "/object-storage/details/change-plan"
      },
      {
        title: "حذف یک Object Storage",
        icon: <GoXCircle  />,
        link: "/object-storage/details/delete-object-storage"
      },
    ],
  },

  dns: {
    about: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoGlobe  />
          سیستم مدیریت DNS
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس مدیریت DNS",
        icon: <GoInfo />,
        link: "/dns-management-system/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap />,
        link: "/dns-management-system/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <  GoGear  />
            نحوه
          </div>
        )
      },
      {
        title: "اضافه کردن رکورد",
        link: "/dns-management-system/how-tos/add-records"
      },
      {
        title: "مدیریت رکوردها",
        link: "/dns-management-system/how-tos/manage-records"
      },
      
      {
        hr: true
      },
      {
        title: "جزئیات سرویس مدیریت دامنه",
        icon: <GoNote />,
        link: "/dns-management-system/details/about"
      },  
      {
        title: "انتقال سرویس مدیریت دامنه",
        icon: <GoPackageDependents />,
        link: "/dns-management-system/move"
      },  
    ],

    'quick-setup': [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoGlobe  />
          سیستم مدیریت DNS
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس مدیریت DNS",
        icon: <GoInfo />,
        link: "/dns-management-system/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap />,
        link: "/dns-management-system/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <  GoGear  />
            نحوه
          </div>
        )
      },
      {
        title: "اضافه کردن رکورد",
        link: "/dns-management-system/how-tos/add-records"
      },
      {
        title: "مدیریت رکوردها",
        link: "/dns-management-system/how-tos/manage-records"
      },
      
      {
        hr: true
      },
      {
        title: "جزئیات سرویس مدیریت دامنه",
        icon: <GoNote />,
        link: "/dns-management-system/details/about"
      },  
      {
        title: "انتقال سرویس مدیریت دامنه",
        icon: <GoPackageDependents />,
        link: "/dns-management-system/move"
      },  
    ],

    'how-tos':  [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoGlobe  />
          سیستم مدیریت DNS
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        title: "درباره سرویس مدیریت DNS",
        icon: <GoInfo />,
        link: "/dns-management-system/about"
      },
      {
        title: "راه‌اندازی سریع!",
        icon: <GoZap />,
        link: "/dns-management-system/quick-setup"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <  GoGear  />
            نحوه
          </div>
        )
      },
      {
        title: "اضافه کردن رکورد",
        link: "/dns-management-system/how-tos/add-records"
      },
      {
        title: "مدیریت رکوردها",
        link: "/dns-management-system/how-tos/manage-records"
      },
      
      {
        hr: true
      },
      {
        title: "جزئیات سرویس مدیریت دامنه",
        icon: <GoNote />,
        link: "/dns-management-system/details/about"
      },  
      {
        title: "انتقال سرویس مدیریت دامنه",
        icon: <GoPackageDependents />,
        link: "/dns-management-system/move"
      },  
    ],

    details: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoContainer />
            جزئیات سرویس مدیریت دامنه
          </div>
        )
      },
      {
        title: "برگشت به سرویس مدیریت دامنه",
        icon: <GoArrowRight />,
        link: "/dns-management-system/about"
      },
      {
        title: "ویژگی‌های سرویس مدیریت دامنه در لیارا",
        icon: <GoInfo />,
        link: "/dns-management-system/details/about"
      },
      {
        hr: true
      },
      {
        title: "رکوردهای قابل پشتیبانی",
        icon: <GoGoal  />,
        link: "/dns-management-system/details/supported-records"
      },
      {
        title: "حذف یک سیستم مدیریت DNS",
        icon: <GoXCircle  />,
        link: "/dns-management-system/details/delete-dns-management-system"
      },
    ],
  },

  overview: {
    about: [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoTelescope  />
          لیارا در یک نگاه
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        hr: true
      },
      {
        title: "لیارا چیست؟",
        icon: <GoInfo />,
        link: "/overview/about"
      },
      {
        title: "دیتاسنترهای لیارا",
        icon: <GoOrganization  />,
        link: "/overview/data-centers"
      },
      {
        title: "قیمت‌ها و تعرفه‌ها در لیارا",
        icon: <GoStrikethrough   />,
        link: "https://liara.ir/pricing/"
      },
      {
        title: "وبلاگ لیارا",
        icon: <GoProjectRoadmap    />,
        link: "https://liara.ir/blog"
      },
      {
        title: "changelog لیارا (به زودی ...)",
        icon: <GoLog     />,
        link: ""
      },
      
    ],

    'data-centers': [
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoTelescope  />
          لیارا در یک نگاه
          </div>
        )
      },
      {
        title: "برگشت به خانه",
        icon: <GoArrowRight />,
        link: "/"
      },
      {
        hr: true
      },
      {
        title: "لیارا چیست؟",
        icon: <GoInfo />,
        link: "/overview/about"
      },
      {
        title: "دیتاسنترهای لیارا",
        icon: <GoOrganization  />,
        link: "/overview/data-centers"
      },
      {
        title: "قیمت‌ها و تعرفه‌ها در لیارا",
        icon: <GoStrikethrough   />,
        link: "https://liara.ir/pricing/"
      },
      {
        title: "وبلاگ لیارا",
        icon: <GoProjectRoadmap    />,
        link: "https://liara.ir/blog"
      },
      {
        title: "changelog لیارا (به زودی ...)",
        icon: <GoLog     />,
        link: ""
      },
      
    ],
  },

};
