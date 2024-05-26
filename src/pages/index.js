import Button from "@/components/Common/button";
import Layout from "@/components/Layout";
import Link from "next/link";
import PlatformIcon from "@/components/Common/icons";
import Section from "@/components/Common/section";
import {
  GoContainer,
  GoDatabase,
  GoRocket,
  GoServer,
  GoMail,
  GoGlobe,
  GoArrowLeft
} from "react-icons/go";
import Card from "@/components/Common/card";

const GETTING_STARTED_ITEMS = [
  {
    alt: "nodejs",
    platform: "NodeJS",
    link: "/"
  },
  {
    alt: "django",
    platform: "Django",
    link: "/"
  },
  {
    alt: "laravel",
    platform: "Laravel",
    link: "/"
  },
  {
    alt: "next",
    platform: "NextJS",
    link: "/"
  },
  {
    alt: "netcore",
    platform: ".NET",
    link: "/"
  },
  {
    alt: "docker",
    platform: "Docker",
    link: "/"
  },
  {
    alt: "vue",
    platform: "Vue",
    link: "/"
  },
  {
    alt: "react",
    platform: "React",
    link: "/"
  }
];

const PRODUCTS = [
  {
    title: "پلتفرم یا PaaS",
    icon: <GoContainer />,
    desc: "اطلاعات در مورد پلتفرم‌ها و نحوه راه‌اندازی آن‌ها در لیارا",
    link: "/"
  },
  {
    title: "برنامه های آماده و یک کلیکی",
    icon: <GoRocket />,
    desc:
      "اطلاعات در مورد شخصی‌سازی و نحوه کار با برنامه‌هایی که فقط با یک کلیک، در لیارا به شما تحویل داده می‌شوند.",
    link: "/"
  },
  {
    title: "دیتابیس یا DBaaS",
    icon: <GoDatabase />,
    desc: "اطلاعات مربوط به دیتابیس‌ها و استفاده اصولی از آن‌ها",
    link: "/"
  },
  {
    title: "ذخیره‌سازی ابری یا Object Storage",
    icon: <GoServer />,
    desc:
      "جزئیات دقیق مربوط به سرویس ذخیره‌سازی ابری لیارا، نحوه استفاده از آن و مدیریت باکت‌ها",
    link: "/"
  },
  {
    title: "ایمیل سرور",
    icon: <GoMail />,
    desc:
      "اطلاعات مربوط به سرویس ایمیل لیارا، نحوه راه‌اندازی، اتصال برنامه به ایمیل سرور و مدیریت ایمیل‌ها",
    link: "/"
  },
  {
    title: "سرویس مدیریت دامنه یا DNS",
    icon: <GoGlobe />,
    desc:
      "اطلاعات مربوط به سرویس ایمیل لیارا، نحوه راه‌اندازی، اتصال برنامه به ایمیل سرور و مدیریت ایمیل‌ها",
    link: "/"
  }
];

const MOST_VISITED_LINKS = [
  {
    title: "رفع خطای CORS در NodeJS",
    alt: "nodejs-cors",
    href: "/"
  },
  {
    title: "تنظیمات اختصاصی php.ini",
    alt: "php-ini",
    href: "/"
  },
  {
    title: "اتصال دامنه به برنامه‌‌های مختلف در لیارا",
    alt: "domains",
    href: "/"
  },
  {
    title: "راه‌اندازی CI/CD به وسیله GitHub",
    alt: "ci-cd-gitHub",
    href: "/"
  },
  {
    title: "رفع خطای CORS در NodeJS",
    alt: "nodejs-cors",
    href: "/"
  },
  {
    title: "تنظیمات اختصاصی php.ini",
    alt: "php-ini",
    href: "/"
  },
  {
    title: "اتصال دامنه به برنامه‌‌های مختلف در لیارا",
    alt: "domains",
    href: "/"
  },
  {
    title: "راه‌اندازی CI/CD به وسیله GitHub",
    alt: "ci-cd-gitHub",
    href: "/"
  }
];

export default function Home() {
  return (
    <Layout>
      <div>
        <div
          id="welcome-continer"
          className="bg-[url('/static/images/bg-main.webp')] border border-[#c4c4c4] relative p-8 h-[250px] w-[1050px] flex flex-col justify-center rounded-lg"
        >
          <h1 className="text-[35px]"> به مستندات لیارا خوش‌آمدید 👋🏼</h1>
          <p className="mt-2 w-[50%] eading-7">
            راه‌اندازی و شروع به کار با لیارا از طریق آموزش‌ها، API‌ها و منابع
            پلتفرم امکان‌پذیر است. استفاده از این منابع، می‌توانید به سرعت
          </p>
          <div className="mt-4">
            <Button>شروع کنید</Button>
          </div>
        </div>
        <Section
          id="home-getting-started"
          title={"همین حالا استقرار را شروع کنید"}
        >
          <div className="grid grid-cols-4 gap-4">
            {GETTING_STARTED_ITEMS.map(item =>
              <Card className="flex w-full items-center justify-between">
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
            )}
          </div>
        </Section>
        <Section id="home-products" title={"محصولات لیارا"}>
          <div className="grid grid-cols-3 gap-4">
            {PRODUCTS.map(item =>
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
                <Button variant="link">بیشتر بدانید</Button>
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
                  textDecoration: "underline",
                  textDecorationColor: "#9ca3af"
                }}
              >
                <Link
                  className="flex w-[max-content] items-center gap-2 text-[18px]  mt-4"
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
      </div>
    </Layout>
  );
}
