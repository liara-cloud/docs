import React, { Fragment, useState } from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { Dialog, Section } from "..";
import Link from "next/link";
import Button from "@/components/Common/button";
import Alert from "@/components/Common/alert";

const INIT_OPEN_DIALOG = { isOpen: false, src: "" };

const dotnet = () => {
  const [openDialog, setOpenDialog] = useState(INIT_OPEN_DIALOG);

  return (
    <Layout>
      <Head>
        <title>مستندات - آموزش استفاده از لیارا</title>
        <meta property="og:title" content="مستندات خدمات رایانش ابری لیارا" />
        <meta property="og:description" content="دوره آموزش صفر تا صد استقرار پلتفرم dotNET"  />
        <meta property="og:image" content="https://files.liara.ir/liara/logos/liara-poster.jpg" />
      </Head>

      <Button className="mb-2 py-1 px-4 rounded-md">
        <Link id="init-a" href={"/tv"}>
          <span>بازگشت</span>
        </Link>
      </Button>

      <img
        style={{ borderColor: "#ffffff22", marginLeft: 20 }}
        src="/static/course/dotnet.png"
      />
      <Section
        name={"صفر تا صد استقرار برنامه‌های Net. در لیارا"}
        style={{ marginTop: 40 }}
        badge={"DotNet Platform"}
        setOpenDialog={setOpenDialog}
        links={[
          {
            videoTitle: "جلسه 0: مقدمه‌ای بر پروژه",
            link:
              "https://files.liara.ir/liara/dotnet/cource/e00-intro-to-project.mp4"
          },
          {
            videoTitle: "جلسه 1: اتصال به سرویس DNS و Email",
            link:
              "https://files.liara.ir/liara/dotnet/cource/e01-email-and-dns.mp4"
          },
          {
            videoTitle: "جلسه 2: اتصال به Object Storage",
            link: "https://files.liara.ir/liara/dotnet/cource/e02-bucket.mp4"
          },
          {
            videoTitle: "جلسه 3: استقرار کامل برنامه در لیارا",
            link:
              "https://files.liara.ir/liara/dotnet/cource/e03-deployment-in-liara.mp4"
          },
          {
            videoTitle: "جلسه 4: بارگذاری متغیرهای محیطی در لیارا",
            link:
              "https://files.liara.ir/liara/dotnet/cource/e04-loading-env-variables.mp4"
          },
          {
            videoTitle: "جلسه 5: اتصال دامنه به برنامه در لیارا",
            link: "https://files.liara.ir/liara/dotnet/cource/e05-domain.mp4"
          },
          {
            videoTitle: "جلسه 6: راه‌اندازی CI/CD در برنامه",
            link:
              "https://files.liara.ir/liara/dotnet/cource/e06-cicd-feature.mp4"
          }
        ]}
      />

      <br />
      <Alert variant="info">
        پروژه و کدهای مورد استفاده در دوره فوق در{" "}
        <Link href="https://github.com/liara-cloud/dotnet-getting-started/tree/blog">
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

export default dotnet;
