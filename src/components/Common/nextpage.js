import React from "react";
import Button from "./button";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

const NextPage = ({ next = "/" }) => {
  return (
    <Link href={next}>
      <Button className="flex items-center gap-1" variant="link">
        متوجه شدم، برو گام بعدی
        <GoArrowLeft />
      </Button>
    </Link>
  );
};

export default NextPage;
