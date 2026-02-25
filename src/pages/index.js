import Button from "@/components/Common/button";
import Layout from "@/components/Layout";
import Link from "next/link";
import PlatformIcon from "@/components/Common/icons";
import Section from "@/components/Common/section";
import Head from "next/head";
import {
  GoContainer,
  GoServer,
  GoDatabase,
  GoRocket,
  GoMail,
  GoPaperclip,
  GoTerminal,
  GoCode,
  GoPerson,
  GoRepo,
  GoGlobe,
  GoArrowLeft,
  GoCloud
} from "react-icons/go";
import Card from "@/components/Common/card";

import { BsStars } from "react-icons/bs";


const GETTING_START_DATA = [
  {
    title: "docs",
    link: "https://github.com/liara-cloud/docs",
    badge: {
      color: "#0969da",
      text: "MDX"
    }
  },
  {
    title: "laravel-getting-started",
    link: "https://github.com/liara-cloud/laravel-getting-started",
    badge: {
      color: "#4F5D95",
      text: "PHP"
    }
  },
  {
    title: "nodejs-getting-started",
    link: "https://github.com/liara-cloud/nodejs-getting-started",
    badge: {
      color: "#ffd75e",
      text: "JavaScript"
    }
  },
  {
    title: "vue-getting-started",
    link: "https://github.com/liara-cloud/vue-getting-started",
    badge: {
      color: "#41b883",
      text: "Vue"
    }
  },
  {
    title: "react-getting-started",
    link: "https://github.com/liara-cloud/react-getting-started",
    badge: {
      color: "#ffd75e",
      text: "JavaScript"
    }
  },
  {
    title: "flask-getting-started",
    link: "https://github.com/liara-cloud/flask-getting-started",
    badge: {
      color: "#3572A5",
      text: "Python"
    }
  },
  {
    title: "dotnet-getting-started",
    link: "https://github.com/liara-cloud/dotnet-getting-started",
    badge: {
      color: "#178600",
      text: "C#"
    }
  },
  {
    title: "django-getting-started",
    link: "https://github.com/liara-cloud/django-getting-started",
    badge: {
      color: "#3572A5",
      text: "Python"
    }
  },
  {
    title: "php-getting-started",
    link: "https://github.com/liara-cloud/php-getting-started",
    badge: {
      color: "#4F5D95",
      text: "PHP"
    }
  },
  {
    title: "angular-getting-started",
    link: "https://github.com/liara-cloud/angular-getting-started",
    badge: {
      color: "#e34c26",
      text: "HTML"
    }
  },
  // {
  //   title: "static-getting-started",
  //   link: "https://github.com/liara-cloud/static-getting-started",
  //   badge: {
  //     color: "#e34c26",
  //     text: "HTML"
  //   }
  // },
  {
    title: "gitignore-templates",
    link: "https://github.com/liara-cloud/gitignore-templates",
    badge: {
      color: "#0087ff",
      text: "gitignore"
    }
  }
  // {
  //   title: "fastapi-getting-started",
  //   link: "https://github.com/liara-cloud/fastapi-getting-started",
  //   badge: {
  //     color: "#e34c26",
  //     text: "HTML"
  //   }
  // },
  // {
  //   title: "qwik-getting-started",
  //   link: "https://github.com/liara-cloud/qwik-getting-started",
  //   badge: {
  //     color: "#03346E",
  //     text: "TypeScript"
  //   }
  // },
  // {
  //   title: "drizzle-getting-started",
  //   link: "https://github.com/liara-cloud/drizzle-getting-started",
  //   badge: {
  //     color: "#03346E",
  //     text: "TypeScript"
  //   }
  // },
  // {
  //   title: "yii-getting-started",
  //   link: "https://github.com/liara-cloud/yii-getting-started",
  //   badge: {
  //     color: "#4F5D95",
  //     text: "PHP"
  //   }
  // },
  // {
  //   title: "astro-getting-started",
  //   link: "https://github.com/liara-cloud/astro-getting-started",
  //   badge: {
  //     color: "#EF5A6F",
  //     text: "Astro"
  //   }
  // },
  // {
  //   title: "lumen-getting-started",
  //   link: "https://github.com/liara-cloud/lumen-getting-started",
  //   badge: {
  //     color: "#4F5D95",
  //     text: "PHP"
  //   }
  // },
  // {
  //   title: "hapi-getting-started",
  //   link: "https://github.com/liara-cloud/hapi-getting-started",
  //   badge: {
  //     color: "#ffd75e",
  //     text: "JavaScript"
  //   }
  // },
  // {
  //   title: "remix-getting-started",
  //   link: "https://github.com/liara-cloud/remix-getting-started",
  //   badge: {
  //     color: "#ffd75e",
  //     text: "JavaScript"
  //   }
  // },
  // {
  //   title: "nestjs-getting-started",
  //   link: "https://github.com/liara-cloud/nestjs-getting-started",
  //   badge: {
  //     color: "#ffd75e",
  //     text: "JavaScript"
  //   }
  // },
  // {
  //   title: "fastify-getting-started",
  //   link: "https://github.com/liara-cloud/fastify-getting-started",
  //   badge: {
  //     color: "#ffd75e",
  //     text: "JavaScript"
  //   }
  // },
  // {
  //   title: "addonis-getting-started",
  //   link: "https://github.com/liara-cloud/addonis-getting-started",
  //   badge: {
  //     color: "#ffd75e",
  //     text: "JavaScript"
  //   }
  // },
  // {
  //   title: "strapi-getting-started",
  //   link: "https://github.com/liara-cloud/strapi-getting-started",
  //   badge: {
  //     color: "#ffd75e",
  //     text: "JavaScript"
  //   }
  // },
  // {
  //   title: "imgproxy-getting-started",
  //   link: "https://github.com/liara-cloud/imgproxy-getting-started",
  //   badge: {
  //     color: "#201E43",
  //     text: "shell"
  //   }
  // },
  // {
  //   title: "nuxtjs-getting-started",
  //   link: "https://github.com/liara-cloud/nuxtjs-getting-started",
  //   badge: {
  //     color: "#41b883",
  //     text: "Vue"
  //   }
  // },
  // {
  //   title: "go-getting-started",
  //   link: "https://github.com/liara-cloud/go-getting-started",
  //   badge: {
  //     color: "#6EACDA",
  //     text: "Go"
  //   }
  // },
  // {
  //   title: "python-getting-started",
  //   link: "https://github.com/liara-cloud/python-getting-started",
  //   badge: {
  //     color: "#3572A5",
  //     text: "Python"
  //   }
  // },
  // {
  //   title: "rabbitmq-getting-started",
  //   link: "https://github.com/liara-cloud/rabbitmq-getting-started",
  //   badge: {
  //     color: "#201E43",
  //     text: "shell"
  //   }
  // }
];

const GETTING_STARTED_ITEMS = [
  {
    alt: "nodejs",
    platform: "NodeJS",
    link: "/paas/nodejs/getting-started"
  },
  {
    alt: "django",
    platform: "Django",
    link: "/paas/django/getting-started"
  },
  {
    alt: "laravel",
    platform: "Laravel",
    link: "/paas/laravel/getting-started"
  },
  {
    alt: "next",
    platform: "NextJS",
    link: "/paas/nextjs/getting-started"
  },
  {
    alt: "netcore",
    platform: "NET.",
    link: "/paas/dotnet/getting-started"
  },
  {
    alt: "docker",
    platform: "Docker",
    link: "/paas/docker/getting-started"
  },
  {
    alt: "vue",
    platform: "Vue",
    link: "/paas/vue/getting-started"
  },
  {
    alt: "react",
    platform: "React",
    link: "/paas/react/getting-started"
  }
];

const BEST_PRODUCTS = [
    {
      title: "پلتفرم (PaaS)",
      icon: <GoContainer />,
      desc: " بررسی انواع پلتفرم‌های پشتیبانی‌شده در لیارا و آموزش گام‌به‌گام راه‌اندازی و استقرار اپلیکیشن‌ها در هر کدام از این پلتفرم‌ها ",
      link: "/paas/about"
    },
    {
      title: "هوش مصنوعی (AI API)",
      icon: <BsStars />,
      desc: "شامل معرفی APIهای مرتبط با هوش مصنوعی، نحوه اتصال آن‌ها به پروژه‌ها، و نحوه استفاده از آن‌ها در بستر لیارا",
      link: "/ai/about"
    },
  
  ]


const PRODUCTS = [
  {
    title: "سرور مجازی ابری (IaaS)",
    icon: <GoCloud />,
    desc: "اطلاعات سرورهای مجازی ابری و نحوه راه‌اندازی آن‌ها در لیارا",
    link: "/iaas/about"
  },
  {
    title: "دیتابیس (DBaaS)",
    icon: <GoDatabase />,
    desc: "اطلاعات مربوط به دیتابیس‌ها و استفاده اصولی از آن‌ها",
    link: "/dbaas/about"
  },
  {
    title: "برنامه‌های آماده",
    icon: <GoRocket />,
    desc:
      "اطلاعات در مورد شخصی‌سازی و نحوه کار با برنامه‌هایی که فقط با یک کلیک، در لیارا به شما تحویل داده می‌شوند.",
    link: "/one-click-apps/about"
  },
  {
    title: "ایمیل",
    icon: <GoMail />,
    desc:
      "اطلاعات مربوط به سرویس ایمیل لیارا، نحوه راه‌اندازی، اتصال برنامه به ایمیل سرور و مدیریت ایمیل‌ها",
    link: "/email-server/about"
  },
  {
    title: "ذخیره‌سازی ابری (Object Storage)",
    icon: <GoPaperclip  />,
    desc:
      "جزئیات دقیق مربوط به سرویس ذخیره‌سازی ابری لیارا، نحوه استفاده از آن و مدیریت باکت‌ها",
    link: "/object-storage/about"
  },
  {
    title: "سامانه مدیریت دامنه (DNS)",
    icon: <GoGlobe />,
    desc:
      "اطلاعات مربوط به سرویس ایمیل لیارا، نحوه راه‌اندازی، اتصال برنامه به ایمیل‌سرور و مدیریت ایمیل‌ها",
    link: "/dns-management-system/about"
  }
];

const REFERENCES = [
  {
    title: "Liara CLI",
    icon: <GoTerminal />,
    desc: "اطلاعات در مورد رابط خط فرمان لیارا و نحوه استفاده و راه‌اندازی آن‌",
    link: "/references/cli/about"
  },
  {
    title: "Liara API",
    icon: <GoCode />,
    desc: "اطلاعات در مورد رابط وب‌سرویس لیارا، نحوه استفاده و کاربردهای آن",
    link: "/references/api/about"
  },
  {
    title: "پنل کاربری لیارا",
    icon: <GoPerson />,
    desc:
      "اطلاعات در مورد پنل کاربری لیارا، از ثبت تیکت تا تخمین‌هزینه‌های سرویس‌های مورد استفاده",
    link: "/references/console/about"
  },
  {
    title: "مخازن نرم‌افزاری (میرورها)",
    icon: <GoRepo />,
    desc:
      "آشنایی با میرورهای لیارا و نحوه استفاده از آن‌ها برای دانلود ایمیج‌ها و پکیج‌ها",
    link: "/mirrors/about"
  }

];

const MOST_VISITED_LINKS = [
  {
    title: "رفع خطای CORS در برنامه‌های NodeJS",
    alt: "nodejs-cors",
    href: "/paas/nodejs/fix-common-errors/cors-error/about"
  },
  {
    title: "تنظیمات اختصاصی php.ini در برنامه‌های لاراول",
    alt: "php-ini",
    href: "/paas/laravel/how-tos/customize-php-ini"
  },
  {
    title: "اتصال دامنه به برنامه‌‌های مختلف در لیارا",
    alt: "domains",
    href: "/paas/domains/about"
  },
  {
    title: "راه‌اندازی CI/CD به وسیله GitHub",
    alt: "ci-cd-gitHub",
    href: "/paas/cicd/github"
  },
  {
    title: "کاهش فضای دیسک در برنامه‌ها",
    alt: "disk value",
    href: "/paas/disks/decrease-value"
  },
  {
    title: "راه‌اندازی وردپرس با استفاده از بسته نصب آسان (Duplicator)",
    alt: "wordpress duplicator",
    href: "/one-click-apps/wordpress/how-tos/duplicator"
  },
  // {
  //   title: "دانلود مستقیم فایل از فضای ذخیره‌سازی ابری لیارا",
  //   alt: "object-storage direct-download",
  //   href: "/object-storage/how-tos/direct-download"
  // },
  // {
  //   title: "اتصال به دیتابیس MySQL در برنامه‌های go",
  //   alt: "go mysql",
  //   href: "/dbaas/mysql/how-tos/connect-via-platform/go"
  // },
  {
    title: "مدیریت رکوردها در سامانه مدیریت دامنه لیارا",
    alt: "dns management",
    href: "/dns-management-system/how-tos/manage-records"
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>مستندات سرویس‌های ابری - لیارا</title>
      </Head>
      <div>
        <div
          id="welcome-continer"
          className="bg-[url('/static/images/bg-main.webp')] border bg-right	md:bg-left border-[#c4c4c4] relative p-8 md:h-[250px] md:w-[1050px] flex flex-col justify-center rounded-lg"
        >
          <h1 className="text-[20px] font-bold md:font-normal md:text-[35px]">
            {" "}به مستندات لیارا خوش‌آمدید 👋🏼
          </h1>
          <p className="mt-2 md:w-[50%] eading-7">
            اینجا خانه‌ی توسعه‌دهندگان است، خانه‌ی خودتان. راحت باشید.
          </p>
        </div>
        <Section
          id="home-getting-started"
          title={"همین حالا استقرار را شروع کنید"}
        >
          <div className="grid md:grid-cols-4 gap-4">
            {GETTING_STARTED_ITEMS.map(item =>
              <Link href={item.link}>
                <Card className="flex w-full cursor-pointer items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-[40px] p-1  bg-[#333] rounded-lg">
                      <PlatformIcon platform={item.alt} />
                    </div>
                    <h4>
                      شروع به کار با {item.platform}
                    </h4>
                  </div>
                  <GoArrowLeft className="ml-1" />
                </Card>
              </Link>
            )}
          </div>
        </Section>
        <Section id="home-products" title={"محصولات لیارا"}>
          <div className="grid md:grid-cols-2 gap-4">
            {BEST_PRODUCTS.map(item =>
              <Link href={item.link}>
                <Card className="min-h-[180px] flex flex-col cursor-pointer justify-between items-start w-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-3">
                      <h4>
                        {item.title}
                      </h4>
                      <div className="bg-[#222] text-white p-1 rounded-md">
                        {item.icon}
                      </div>
                    </div>
                    <p className="text-[gray] leading-6 text-[14px] mt-3">
                      {item.desc}
                    </p>
                  </div>
                  <Button variant="link">بیشتر بدانید</Button>
                </Card>
              </Link>
            )}
          </div>
          <div className="h-4" />
          <div className="grid md:grid-cols-3 gap-4">
            {PRODUCTS.map(item =>
              <Link href={item.link}>
                <Card className="min-h-[180px] flex flex-col cursor-pointer justify-between items-start w-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-3">
                      <h4>
                        {item.title}
                      </h4>
                      <div className="bg-[#222] text-white p-1 rounded-md">
                        {item.icon}
                      </div>
                    </div>
                    <p className="text-[gray] leading-6 text-[14px] mt-3">
                      {item.desc}
                    </p>
                  </div>
                  <Button variant="link">بیشتر بدانید</Button>
                </Card>
              </Link>
            )}
          </div>
        </Section>

        <Section id="home-references" title={"ارجاعات"}>
          <div className="grid md:grid-cols-3 gap-4">
            {REFERENCES.map(item =>
              <Card className="min-h-[180px] flex flex-col justify-between items-start w-full">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h4>
                      {item.title}
                    </h4>
                    <div className="bg-[#222] text-white p-1 rounded-md">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-[gray] leading-6 text-[14px] mt-3">
                    {item.desc}
                  </p>
                </div>
                <Link href={item.link}>
                  <Button variant="link">بیشتر بدانید</Button>
                </Link>
              </Card>
            )}
          </div>
        </Section>

        <Section id="home-most-visited" title={"پربازدیدترین مستندات لیارا"}>
          <ul className="pr-4">
            {MOST_VISITED_LINKS.map(item =>
              <li
                style={{
                  listStyle: "persian",
                  textDecorationColor: "#9ca3af"
                }}
              >
                <Link
                  className="flex md:w-[max-content] w-[100%] whitespace-normal items-center gap-2 md:text-[18px]  mt-4"
                  key={item.alt}
                  href={item.href}
                >
                  {item.title}

                  <GoArrowLeft className="ml-2 text-[15px] text-[gray]" />
                </Link>
              </li>
            )}
          </ul>
        </Section>

        <Section id="github-repos" title={"با گیت‌هاب لیارا شروع کنید"}>
          <ul className="grid md:grid-cols-4 gap-4">
            {GETTING_START_DATA.map(item =>
              <a target="_blank" href={item.link}>
                <Card
                  dir="ltr"
                  style={{
                    background: `linear-gradient(195deg, ${item.badge
                      .color}22, transparent)`,
                    border: "none",
                    borderBottom: "1px solid",
                    borderBottomColor: item.badge.color,
                    borderTopRightRadius: 6,
                    borderTopLeftRadius: 6
                  }}
                  className={`w-full cursor-pointer  rounded-none `}
                >
                  <div className="flex gap-2 w-full items-center">
                    <img
                      src="/static/images/github.svg"
                      className=" w-[18px] invert invert-icon"
                    />
                    <p>
                      {item.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-sm"
                      style={{ background: item.badge.color }}
                    />
                    <span className="text-[12px] text-[gray] font-mono">
                      {item.badge.text}
                    </span>
                  </div>
                </Card>{" "}
              </a>
            )}
            <a target="_blank" href="https://github.com/liara-cloud/">
              <Card
                dir="ltr"
                style={{
                  background: `linear-gradient(195deg, #0001, transparent)`,
                  border: "none",
                  borderBottom: "1px dashed",
                  borderTopRightRadius: 6,
                  borderTopLeftRadius: 6
                }}
                className={`w-full h-full cursor-pointer relative  rounded-none `}
              >
                <div className="flex  flex-col justify-center gap-2 w-full items-center">
                  <img
                    src="/static/images/github.svg"
                    className=" w-[25px] mt-[-7px] invert invert-icon"
                  />
                  <p className="font-mono mt-[-12px]">@liara_cloud</p>
                  <p className="absolute bottom-0 text-[gray] text-[11px]">
                    برای دیدن بیشتر کلیک کنید
                  </p>
                </div>
              </Card>
            </a>
          </ul>
        </Section>
      </div>
    </Layout>
  );
}
