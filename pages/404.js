import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function notFound() {
  return (
    <Layout>
      <div className="notfound-container">
        <section>
          <img src="/static/404.png" style={{ marginTop: "-20px" }} />
          <h3>صفحه مورد نظر یافت نشد :(</h3>
          <div style={{ position: "relative", zIndex: 22 }}>
            <Link href="/" legacyBehavior>
              <button className="grad" style={{ padding: "10px 40px" }}>
                برو به خانه
              </button>
            </Link>
          </div>
        </section>
        <img className="no-signal" src="/static/noSignal.webp" />
      </div>
    </Layout>
  );
}
