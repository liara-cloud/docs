import React, { Fragment, useState } from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { Dialog, Section } from "..";
import Link from "next/link";
import Alert from "@/components/Common/alert";
import Button from "@/components/Common/button";

const INIT_OPEN_DIALOG = { isOpen: false, src: "" };

const Laravel = () => {
  const [openDialog, setOpenDialog] = useState(INIT_OPEN_DIALOG);

  return (
    <Layout>
      <Head>
        <title>مستندات - آموزش استفاده از لیارا</title>
        <meta property="og:title" content="مستندات خدمات رایانش ابری لیارا" />
        <meta property="og:description" content="دوره آموزش صفر تا صد استقرار پلتفرم PHP"  />
        <meta property="og:image" content="https://files.liara.ir/liara/logos/liara-poster.jpg" />
      </Head>

      <Button className="mb-2 py-1 px-4 rounded-md">
        <Link id="init-a" href={"/tv"}>
          <span>بازگشت</span>
        </Link>
      </Button>

      <img
        style={{ borderColor: "#ffffff22", marginLeft: 20 }}
        src="/static/course/php.png"
      />
      <Section
        name={"صفر تا صد استقرار برنامه‌های PHP در لیارا"}
        style={{ marginTop: 40 }}
        badge={"PHP Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "جلسه 0: مقدمه‌ای بر پروژه",
            link: "https://files.liara.ir/liara/php/course/php-e0.mp4"
          },
          {
            videoTitle: "جلسه 1: راه‌اندازی دیتابیس در لیارا",
            link: "https://files.liara.ir/liara/php/course/php-e1.mp4"
          },
          {
            videoTitle: "جلسه 2: بازیابی دیتابیس حذف‌شده",
            link: "https://files.liara.ir/liara/php/course/php-e2.mp4"
          },
          {
            videoTitle: "جلسه 3: راه‌اندازی DNS و Email Server",
            link: "https://files.liara.ir/liara/php/course/php-e3.mp4"
          },
          {
            videoTitle: "جلسه 4: استقرار برنامه در لیارا",
            link: "https://files.liara.ir/liara/php/course/php-e4.mp4"
          },
          {
            videoTitle: "جلسه 5: رفع خطاهای اجرای برنامه",
            link: "https://files.liara.ir/liara/php/course/php-e5.mp4"
          },
          {
            videoTitle: "جلسه 6: منوهای برنامه در لیارا",
            link: "https://files.liara.ir/liara/php/course/php-e6.mp4"
          },
          {
            videoTitle: "جلسه 7: استفاده از دیسک‌ها در برنامه",
            link: "https://files.liara.ir/liara/php/course/php-e7.mp4"
          },
          {
            videoTitle: "جلسه 8: دسترسی به دیسک با  FTP",
            link: "https://files.liara.ir/liara/php/course/php-e8.mp4"
          },
          {
            videoTitle: "جلسه 9: اتصال به Object Storage",
            link: "https://files.liara.ir/liara/php/course/php-e9.mp4"
          },
          {
            videoTitle: "جلسه 10: اتصال دامنه به برنامه",
            link: "https://files.liara.ir/liara/php/course/php-e10.mp4"
          },
          {
            videoTitle: "جلسه 11: راه‌اندازی CI/CD",
            link: "https://files.liara.ir/liara/php/course/php-e11.mp4"
          }
        ]}
      />
      <br />
      <Alert variant="info">
        پروژه و کدهای مورد استفاده در دوره فوق در{" "}
        <Link href="https://github.com/liara-cloud/php-getting-started/tree/blog">
          گیت‌هاب لیارا
        </Link>{" "}
        قابل مشاهده و دسترسی می‌باشد.{" "}
      </Alert>

      {openDialog.isOpen &&
        <Fragment>
          <Dialog>
            <div>
              <button onClick={() => setOpenDialog(INIT_OPEN_DIALOG)}>
                <img src={"/static/close.svg"} />
                بستن
              </button>
            </div>
            <video
              autoPlay
              src={openDialog.src}
              controls="controls"
              className="block w-full"
              width="100%"
            />
          </Dialog>
          <div
            className="bg-disable-dialog"
            onClick={() => setOpenDialog(INIT_OPEN_DIALOG)}
          />
        </Fragment>}
    </Layout>
  );
};

export default Laravel;
