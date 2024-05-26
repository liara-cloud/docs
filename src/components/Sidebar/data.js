import React, { Fragment } from "react";
import {
  GoHome,
  GoPlay,
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
  GoInfo
} from "react-icons/go";

// ICONS  https://react-icons.github.io/react-icons/icons/go/

export default {
  home: [
    {
      title: "خانه",
      icon: <GoHome />,
      link: "/"
    },
    {
      title: "آموزش ویدیویی",
      icon: <GoPlay />,
      link: "/tv"
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
      link: "/paas/overview"
    },
    {
      title: "دیتابیس‌",
      icon: <GoDatabase />,
      link: "/dbaas"
    },
    {
      title: "برنامه‌های آماده",
      icon: <GoRocket />,
      link: "/one-click-apps"
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
      badge: "استقرار"
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
      title: "استقرار با مرورگر",
      icon: <GoBrowser />,
      link: ""
    }
  ],
  paas: [
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
      title: "اطلاعات کلی",
      icon: <GoInfo />,
      link: "/"
    },
    {
      hr: true
    },
    {
      title: "پلتفرم",
      icon: <GoContainer />,
      link: "/paas/overview"
    },
    {
      title: "دیتابیس‌",
      icon: <GoDatabase />,
      link: "/dbaas"
    }
  ]
};
