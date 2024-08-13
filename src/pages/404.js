import Button from "@/components/Common/button";
import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <Layout>
      <div className="flex h-[500px] items-center justify-center flex-col">
        <h1 className="text-[72px] md:text-[120px] font-mono  font-bold">404</h1>
        <p className="text-[20px] md:text-[32px] mt-[-20px] text-[gray]">
          صفحه مورد نظر یافت نشد :(
        </p>
        <Link href="/">
          <Button className="mt-6">برگشت به خانه</Button>
        </Link>
      </div>
    </Layout>
  );
}