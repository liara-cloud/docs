import React, { Fragment, useState } from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { Dialog, Section } from "..";
import Link from "next/link";
import Alert from "@/components/Common/alert";
import Button from "@/components/Common/button";

const INIT_OPEN_DIALOG = { isOpen: false, src: "" };

const Django = () => {
  const [openDialog, setOpenDialog] = useState(INIT_OPEN_DIALOG);

  return (
    <Layout>
      <Head>
        <title>مستندات - آموزش استفاده از لیارا</title>
        <meta property="og:title" content="مستندات خدمات رایانش ابری لیارا" />
        <meta property="og:description" content="دوره آموزش صفر تا صد استقرار پلتفرم Django"  />
        <meta property="og:image" content="https://files.liara.ir/liara/logos/liara-poster.jpg" />
      </Head>

      <Button className="mb-2 py-1 px-4 rounded-md">
        <Link id="init-a" href={"/tv"}>
          <span>بازگشت</span>
        </Link>
      </Button>

      <img
        style={{ borderColor: "#ffffff22", marginLeft: 20 }}
        src="/static/course/django.png"
      />
      <Section
        name={"صفر تا صد استقرار برنامه‌های Django در لیارا"}
        style={{ marginTop: 40 }}
        badge={"Django Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "جلسه 0: مقدمه‌ای بر پروژه",
            link:
              "https://files.liara.ir/liara/django/cource/e0-intro-to-project.mp4"
          },
          {
            videoTitle: "جلسه 1: اتصال به سرویس DNS و Email",
            link:
              "https://files.liara.ir/liara/django/cource/e1-dns-and-email-services.mp4"
          },
          {
            videoTitle: "جلسه 2: استقرار برنامه در لیارا",
            link:
              "https://files.liara.ir/liara/django/cource/e2-deployment-in-liara.mp4"
          },
          {
            videoTitle: "جلسه 3: فعال‌سازی حالت Live ایمیل",
            link:
              "https://files.liara.ir/liara/django/cource/e3-convert-email-to-live-mode.mp4"
          },
          {
            videoTitle: "جلسه 4: اتصال دامنه به برنامه",
            link:
              "https://files.liara.ir/liara/django/cource/e4-connect-to-domain.mp4"
          },
          {
            videoTitle: "جلسه 5: مدیریت دیسک‌ها با دسترسی FTP",
            link:
              "https://files.liara.ir/liara/django/cource/e5-managing-disks-using-ftp-access.mp4"
          },
          {
            videoTitle: "جلسه 6: استفاده از باکت لیارا به جای دیسک‌ها",
            link:
              "https://files.liara.ir/liara/django/cource/e6-using-s3-instead-of-disks.mp4"
          },
          {
            videoTitle: "جلسه 7: راه‌اندازی CI/CD در برنامه",
            link:
              "https://files.liara.ir/liara/django/cource/e7-using-cicd-feature.mp4"
          }
        ]}
      />
      <br />
      <Alert variant="info">
        پروژه مورد استفاده در دوره فوق در{" "}
        <Link href="https://github.com/liara-cloud/django-getting-started/tree/django-blog">
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

export default Django;
