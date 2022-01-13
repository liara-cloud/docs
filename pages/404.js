import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";

export default function notFound() {
  console.log(useRouter());
  return (
    <Layout>
      <img className="not_found-image" src="/static/404.svg" />
      <p>.متاسفانه صفحه‌ی مورد نظر شما را پیدا نکردیم</p>
    </Layout>
  );
}
