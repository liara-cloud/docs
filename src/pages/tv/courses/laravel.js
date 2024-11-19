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
        <meta property="og:description" content="دوره آموزش صفر تا صد استقرار پلتفرم Laravel"  />
        <meta property="og:image" content="https://files.liara.ir/liara/logos/liara-poster.jpg" />
      </Head>

      <Button className="mb-2 py-1 px-4 rounded-md">
        <Link id="init-a" href={"/tv"}>
          <span>بازگشت</span>
        </Link>
      </Button>

      <img
        style={{ borderColor: "#ffffff22", marginLeft: 20 }}
        src="/static/course/laravel.png"
      />
      <Section
        name={"صفر تا صد استقرار برنامه‌های Laravel در لیارا"}
        style={{ marginTop: 40 }}
        badge={"Laravel Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "جلسه 0: مقدمه‌ای بر پروژه",
            link:
              "https://files.liara.ir/liara/laravel/cource/e00-intro-to-project.mp4"
          },
          {
            videoTitle: "جلسه 1: اتصال به دیتابیس لیارا از Local",
            link:
              "https://files.liara.ir/liara/laravel/cource/e01-connect-to-liara-db.mp4"
          },
          {
            videoTitle: "جلسه 2: بازیابی دیتابیس در لیارا",
            link:
              "https://files.liara.ir/liara/laravel/cource/e02-restoring-liara-database.mp4"
          },
          {
            videoTitle: "جلسه 3:اتصال به DNS و Email Server",
            link:
              "https://files.liara.ir/liara/laravel/cource/e03-connect-to-emailserver.mp4"
          },
          {
            videoTitle: "جلسه 4: استقرار پروژه در لیارا",
            link:
              "https://files.liara.ir/liara/laravel/cource/e04-deployment-in-liara.mp4"
          },
          {
            videoTitle: "جلسه 5: استفاده از Diskها در پروژه ",
            link:
              "https://files.liara.ir/liara/laravel/cource/e05-using-disks-in-liara.mp4"
          },
          {
            videoTitle: "جلسه 6: استفاده از باکت لیارا به جای دیسک‌ها",
            link:
              "https://files.liara.ir/liara/laravel/cource/e06-using-buckets-in-liara.mp4"
          },
          {
            videoTitle: "جلسه 7: اتصال دامنه به برنامه در لیارا",
            link:
              "https://files.liara.ir/liara/laravel/cource/e07-domains-and-more-options.mp4"
          },
          {
            videoTitle: "جلسه 8: راه‌اندازی CI/CD در برنامه",
            link:
              "https://files.liara.ir/liara/laravel/cource/e08-cicd-feature-in-liara.mp4"
          }
        ]}
      />
      <br />
      <Alert variant="info">
        پروژه مورد استفاده در دوره فوق در{" "}
        <Link href="https://github.com/liara-cloud/laravel-getting-started/tree/laravel-social-media">
          گیت‌هاب لیارا
        </Link>{" "}
        قابل دسترسی می‌باشد.{" "}
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
