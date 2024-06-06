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
  GoMegaphone
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
        link: "/paas//getting-started"
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
        link: "/"
      },
      {
        title: "مدیریت دیسک‌",
        icon: <GoCodespaces />,
        link: "/"
      },
      {
        title: "مدیریت دامنه‌",
        icon: <GoGlobe />,
        link: "/"
      },
      {
        title: "قابلیت CI/CD",
        icon: <GoWorkflow />,
        link: "/"
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
        title: "دیتابیس MySQL/MariaDB",
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
        title: "ماژول Prisma",
        link: "/paas/nextjs/how-tos/connect-to-db/prisma"
      },
      {
        title: "ماژول Sequelize",
        link: "/paas/nextjs/how-tos/connect-to-db/sequelize/about"
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
    ]
  }
};
