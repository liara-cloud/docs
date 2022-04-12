import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import Notice from "../../components/Notice";

export default function Desktop() {
  // TODO : Combine videos in mobile device

  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [durationEnded, setDurationEnded] = useState(false);

  const firstVideo = useRef();
  const secondVideo = useRef();

  useEffect(() => {
    const duration = Math.round(firstVideo.current.duration);
    if (currentTime == duration) {
      setShowSecondVideo(true);
      secondVideo.current.play();
    }
  }, [currentTime]);

  const handleEndVideo = () => {
    setCurrentTime(Math.round(firstVideo.current.currentTime));
  };

  const handleReplayVideo = () => {
    // Clear state
    setShowSecondVideo(false);
    setDurationEnded(false);
    setCurrentTime("");

    firstVideo.current.play();
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
          className={`first-video shadow-none ${showSecondVideo && `blur`}`}
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
          onEnded={() => setDurationEnded(true)}
          muted
          ref={secondVideo}
          onCa
          className={`video-deploy shadow-none ${showSecondVideo && `show`}`}
        >
          <source
            src="https://files.liara.ir/docs/desktop/deploy-with-liara-desktop.mp4"
            type="video/mp4"
          />
          laira desktop
        </video>
        {durationEnded && (
          <button onClick={handleReplayVideo} className="replay-video">
            <div>
              <span>&#8635;</span>
              دوباره
            </div>
          </button>
        )}
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
        <div />
        <button className="windows">
          <a href="https://desktop.liara.ir/releases/Liara-Desktop-latest-win-x64.exe.zip">
            <img src="/static/windows.svg" width="20" />
            دانلود برای ویندوز
          </a>
        </button>

        <Notice>نسخه مک و لینوکس لیارا دسکتاپ بزودی منتشر می‌شود.</Notice>
      </section>
    </Layout>
  );
}
