import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";

export default function Desktop() {
  const [secondVideo, setSecondVideo] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const firstVideo = useRef();

  useEffect(() => {
    const duration = Math.round(firstVideo.current.duration);
    if (currentTime === duration) {
      setSecondVideo(true);
    }
  }, [currentTime]);

  const handleEndVideo = () => {
    setCurrentTime(Math.round(firstVideo.current.currentTime));
  };

  return (
    <Layout>
      <Head>
        <title>مستندات نصب و راه‌اندازی نرم‌افزار دسکتاپ لیارا</title>
      </Head>
      <div className="page-head">
        <div className="page-title">
          <h1>نرم‌افزار دسکتاپ لیارا</h1>
          <span className="page-description">(لیارا Desktop)</span>
        </div>
      </div>

      <div className="video-desktop-container">
        <video
          width="400"
          height="240"
          onEnded={handleEndVideo}
          autoPlay
          muted
          ref={firstVideo}
          className={`first-video ${secondVideo && `blur`}`}
        >
          <source
            src="https://files.liara.ir/docs/desktop/login-with-liara-desktop.mp4"
            type="video/mp4"
          />
          laira desktop
        </video>

        <video
          width="400"
          height="240"
          autoPlay
          muted
          loop
          className={`video-deploy ${secondVideo && `show`}`}
        >
          <source
            src="https://files.liara.ir/docs/desktop/deploy-with-liara-desktop.mp4"
            type="video/mp4"
          />
          laira desktop
        </video>
      </div>
      <section>
        <h1>نصب برنامه</h1>
        <p>
          نرم‌افزار دسکتاپ این امکان را به شما می‌دهد که با Drag & Drop، پروژه‌ی
          خود را در هاست ابری لیارا مستقر کنید.
        </p>
      </section>
      <section className="download">
        <h3>لینک های دانلود</h3>

        <button className="windows">
          <a href="#link-download">
            <img src="/static/windows.svg" width="20" />
            دانلود برای ویندوز
          </a>
        </button>
        <span className="alert-text">
          (نسخه مک و لینوکس لیارا دسکتاپ بزودی منتشر میشود)
        </span>
      </section>
    </Layout>
  );
}
