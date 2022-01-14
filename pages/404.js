import React from "react";
import Layout from "../components/Layout";

export default function notFound() {
  return (
    <Layout>
      <img className="not_found-image" src="/static/404.svg" />
      <p>.متاسفانه صفحه‌ی مورد نظر شما را پیدا نکردیم</p>
    </Layout>
  );
}
