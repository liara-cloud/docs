import React from "react";
import Button from "./button";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

const NextPage = ({ next = "/" }) => {
  return (
    <div dir="ltr" className="mt-5">
      <Link href={next}>
        <Button className="flex items-center gap-1">
          <GoArrowLeft />
          متوجه شدم، برو گام بعدی
        </Button>
      </Link>
    </div>
  );
};

export default NextPage;
