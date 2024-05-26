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
  GoInfo,
} from "react-icons/go";

import { FaFloppyDisk } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { TbBrandGolang } from "react-icons/tb";
import { GrOverview, GrIntegration, GrUpdate } from "react-icons/gr";
import { MdManageAccounts, MdDomain, MdOutlineMoveDown } from "react-icons/md";
import {
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaReact,
  FaAngular,
  FaVuejs,
  FaHtml5,
  FaDocker,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango, SiFlask, SiDotnet } from "react-icons/si";
import { IconsManifest } from "react-icons";
import PlatformIcon from "../Common/icons";

// ICONS  https://react-icons.github.io/react-icons/icons/go/

const IconContainer = ({ alt }) => {
  return (
    <div className="w-[25px] p-[1px]  bg-[#333] rounded-md">
      <PlatformIcon platform={alt} />
    </div>
  );
};

export default {
  home: [
    {
      title: "خانه",
      icon: <GoHome />,
      link: "/",
    },
    {
      title: "لیارا در یک نگاه",
      icon: <GrOverview />,
      link: "/overview",
    },
    {
      hr: true,
    },
    {
      badge: "محصولات",
    },
    {
      title: "پلتفرم",
      icon: <GoContainer />,
      link: "/paas/about",
    },
    {
      title: "دیتابیس‌",
      icon: <GoDatabase />,
      link: "/dbaas/about",
    },
    {
      title: "برنامه‌های آماده",
      icon: <GoRocket />,
      link: "/one-click-apps/about",
    },
    {
      title: "ایمیل",
      icon: <GoMail />,
      link: "/mails",
    },
    {
      title: "ذخیره‌سازی ابری",
      icon: <GoServer />,
      link: "/object-storage",
    },
    {
      title: "سامانه مدیریت دامنه",
      icon: <GoGlobe />,
      link: "/object-storage",
    },
    {
      hr: true,
    },
    {
      badge: "ارجاعات",
    },
    {
      title: "Liara CLI",
      icon: <GoTerminal />,
      link: "/",
    },
    {
      title: "Liara API",
      icon: <GoCode />,
      link: "",
    },
    {
      title: "Liara Console",
      icon: <GoBrowser />,
      link: "",
    },
    {
      title: "مدیریت حساب",
      icon: <MdManageAccounts />,
      link: "",
    },
  ],
  paas: [
    {
      badge: (
        <div className="flex items-center gap-2">
          <GoContainer />
          پلتفرم
        </div>
      ),
    },
    {
      title: "برگشت به خانه",
      icon: <GoArrowRight />,
      link: "/",
    },
    {
      title: "درباره سرویس پلتفرم",
      icon: <GoInfo />,
      link: "/paas/about",
    },
    {
      hr: true,
    },
    {
      badge: "پلتفرم‌های قابل ارائه",
    },
    {
      title: "NodeJS",
      icon: <IconContainer alt="nodejs" />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "NextJS",
      icon: <RiNextjsFill />,
      link: "/paas/overview",
    },
    {
      title: "Laravel",
      icon: <FaLaravel />,
      link: "/paas/overview",
    },
    {
      title: "PHP",
      icon: <FaPhp />,
      link: "/paas/overview",
    },
    {
      title: "Django",
      icon: <SiDjango />,
      link: "/paas/overview",
    },
    {
      title: "Flask",
      icon: <SiFlask />,
      link: "/paas/overview",
    },
    {
      title: "NET.",
      icon: <SiDotnet />,
      link: "/paas/overview",
    },
    {
      title: "React",
      icon: <FaReact />,
      link: "/paas/overview",
    },
    {
      title: "Angular",
      icon: <FaAngular />,
      link: "/paas/overview",
    },
    {
      title: "Vue",
      icon: <FaVuejs />,
      link: "/paas/overview",
    },
    {
      title: "Static",
      icon: <FaHtml5 />,
      link: "/paas/overview",
    },
    {
      title: "Golang",
      icon: <TbBrandGolang />,
      link: "/paas/overview",
    },
    {
      title: "Docker",
      icon: <FaDocker />,
      link: "/paas/overview",
    },
    {
      hr: true,
    },
    {
      title: "جزئیات پلتفرم",
      icon: <CgDetailsMore />,
      link: "/",
    },
    {
      title: "مدیریت دیسک‌",
      icon: <FaFloppyDisk />,
      link: "/",
    },
    {
      title: "مدیریت دامنه‌",
      icon: <MdDomain />,
      link: "/",
    },
    {
      title: "قابلیت CI/CD",
      icon: <GrIntegration />,
      link: "/",
    },
    {
      hr: true,
    },
    {
      title: "به‌روزرسانی پلتفرم",
      icon: <GrUpdate />,
      link: "/",
    },
    {
      title: "انتقال پلتفرم",
      icon: <MdOutlineMoveDown />,
      link: "/",
    },
  ],
  nodejs: [
    {
      badge: (
        <div className="flex items-center gap-2">
          <FaNodeJs />
          پلتفرم NodeJS
        </div>
      ),
    },
    {
      title: "برگشت به پلتفرم",
      icon: <GoArrowRight />,
      link: "/paas/about",
    },
    {
      title: "شروع به کار",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "استقرار سریع!",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      hr: true,
    },
    {
      badge: "نحوه",
    },
    {
      title: "ساخت برنامه",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "استقرار برنامه",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "استفاده از متغیرهای محیطی",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "اتصال به دیتابیس",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "استفاده از دیسک",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "راه‌اندازی برنامه Websocket",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "build برنامه با ES6",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "استفاده از TypeScript",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "پیکربندی TrustedProxies",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "انتخاب نسخه NodeJS",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      title: "رفع خطاهای رایج",
      icon: <MdOutlineMoveDown />,
      link: "/paas/nodejs/getting-started",
    },
    {
      hr: true,
    },
  ],
};
