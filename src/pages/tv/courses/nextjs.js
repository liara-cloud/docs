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
        <meta property="og:description" content="دوره آموزش صفر تا صد استقرار پلتفرم NextJS"  />
        <meta property="og:image" content="https://files.liara.ir/liara/logos/liara-poster.jpg" />
      </Head>

      <Button
        style={{ background: "#cccccc11" }}
        className="mb-2 py-1 px-4 rounded-md"
      >
        <Link id="init-a" href={"/tv"}>
          <span>بازگشت</span>
        </Link>
      </Button>

      <img
        style={{ borderColor: "#ffffff22", marginLeft: 20 }}
        src="/static/course/next.png"
      />
      <Section
        name={"صفر تا صد استقرار برنامه‌های NextJS در لیارا"}
        style={{ marginTop: 40 }}
        badge={"NextJS Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "جلسه 0: مقدمه‌ای بر پروژه",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e01.mp4",
          },
          {
            videoTitle: "جلسه 1: اتصال به دیتابیس لیارا از Local",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e02.mp4",
          },
          {
            videoTitle: "جلسه 2: اتصال به ایمیل‌سرور لیارا",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e03.mp4",
          },
          {
            videoTitle: "جلسه 3: بازیابی دیتابیس MongoDB",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e04.mp4",
          },
          {
            videoTitle: "جلسه 4: اتصال به Object Storage",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e05.mp4",
          },
          {
            videoTitle: "جلسه 5: استقرار برنامه در لیارا",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e06.mp4",
          },
          {
            videoTitle: "جلسه 6: اجرای موفق برنامه در لیارا",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e07.mp4",
          },
          {
            videoTitle: "جلسه 7: قراردهی برنامه در حالت Production",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e08.mp4",
          },
          {
            videoTitle: "جلسه 8: اتصال دامنه به برنامه",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e09.mp4",
          },
          {
            videoTitle: "جلسه 9: راه‌اندازی CI/CD در برنامه",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e10.mp4",
          },
          {
            videoTitle: "جلسه 10: توضیحات و نکات تکمیلی",
            link: "https://files.liara.ir/liara/nextjs/course/nextjs-e11.mp4",
          },
        ]}
      />
      <br></br>
      <Alert variant="info">
        پروژه مورد استفاده در دوره فوق در{" "}
        <Link href="https://github.com/liara-cloud/nextjs-getting-started/tree/blog">
          گیت‌هاب لیارا
        </Link>{" "}
        قابل دسترسی می‌باشد.{" "}
      </Alert>

      {openDialog.isOpen && (
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
            ></video>
          </Dialog>
          <div
            className="bg-disable-dialog"
            onClick={() => setOpenDialog(INIT_OPEN_DIALOG)}
          ></div>
        </Fragment>
      )}
    </Layout>
  );
};

export default Laravel;