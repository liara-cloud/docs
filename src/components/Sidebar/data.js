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
  GoSync
} from "react-icons/go";
// ICONS  https://react-icons.github.io/react-icons/icons/go/

import { GrOverview, GrIntegration, GrUpdate } from "react-icons/gr";
import { MdManageAccounts, MdDomain, MdOutlineMoveDown } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";

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
      icon: <GrOverview />,
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
      icon: <MdManageAccounts />,
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
            <FaNodeJs />
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
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "استقرار سریع!",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        hr: true
      },
      {
        badge: "نحوه"
      },
      {
        title: "ساخت برنامه",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "استقرار برنامه",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "استفاده از متغیرهای محیطی",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "اتصال به دیتابیس",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "استفاده از دیسک",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "راه‌اندازی برنامه Websocket",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "build برنامه با ES6",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "استفاده از TypeScript",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "پیکربندی TrustedProxies",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "انتخاب نسخه NodeJS",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        title: "رفع خطاهای رایج",
        icon: <MdOutlineMoveDown />,
        link: "/paas/nodejs/getting-started"
      },
      {
        hr: true
      }
    ]
  }
};
