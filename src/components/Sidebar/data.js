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
        link: "/paas/overview"
      },
      {
        title: "Laravel",
        icon: <IconContainer alt="laravel" />,
        link: "/paas/overview"
      },
      {
        title: "PHP",
        icon: <IconContainer alt="php" />,
        link: "/paas/overview"
      },
      {
        title: "Django",
        icon: <IconContainer alt="django" />,
        link: "/paas/overview"
      },
      {
        title: "Flask",
        icon: <IconContainer alt="flask" />,
        link: "/paas/overview"
      },
      {
        title: "NET.",
        icon: <IconContainer alt="netcore" />,
        link: "/paas/overview"
      },
      {
        title: "React",
        icon: <IconContainer alt="react" />,
        link: "/paas/overview"
      },
      {
        title: "Angular",
        icon: <IconContainer alt="angularjs" />,
        link: "/paas/overview"
      },
      {
        title: "Vue",
        icon: <IconContainer alt="vue" />,
        link: "/paas/overview"
      },
      {
        title: "Static",
        icon: <IconContainer alt="HTML5" />,
        link: "/paas/overview"
      },
      {
        title: "Golang",
        icon: <IconContainer alt="go" />,
        link: "/paas/overview"
      },
      {
        title: "Docker",
        icon: <IconContainer alt="docker" />,
        link: "/paas/overview"
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
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "اتصال به دیتابیس",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "استفاده از دیسک",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "راه‌اندازی برنامه Websocket",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "build برنامه با ES6",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "استفاده از TypeScript",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "پیکربندی TrustedProxies",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "انتخاب نسخه NodeJS",
        link: "/paas/nodejs/getting-started"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
          <GoDatabase  />
            اتصال به دیتابیس 
          </div>
        )
      },
      {
        title: "دیتابیس MongoDB",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "دیتابیس MySQL/MariaDB",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "دیتابیس PostgreSQL",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "دیتابیس MSSQL",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "دیتابیس SQLite",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "ماژول Prisma",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "ماژول Sequelize",
        link: "/paas/nodejs/getting-started"
      },
      {
        hr: true
      },
      {
        badge: (
          <div className="flex items-center gap-2">
            <GoBug  />
            رفع خطاهای رایج
          </div>
        )
      },
      {
        title: "رفع خطای CORS",
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "رفع خطای Get query missing در GraphQL",
        link: "/paas/nodejs/getting-started"
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
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "BlitzJS",
        icon: <IconContainer alt="blitz" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "Fastify",
        icon: <IconContainer alt="fastify" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "Hapi",
        icon: <IconContainer alt="fastify" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "NestJS",
        icon: <IconContainer alt="nest" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "NuxtJS",
        icon: <IconContainer alt="nuxt" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "Remix",
        icon: <IconContainer alt="remix" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "Strapi",
        icon: <IconContainer alt="strapi" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "Svelte",
        icon: <IconContainer alt="svelte" />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "Svelte Kit",
        icon: <IconContainer alt="svelte" />,
        link: "/paas/nodejs/getting-started"
      },
    ]
  }
};
