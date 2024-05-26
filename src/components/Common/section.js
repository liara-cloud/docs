import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GoHash } from "react-icons/go";

const Section = ({ children, as = "section", id, title }) => {
  const router = useRouter();
  const link = `${router.pathname}#${id}`;

  const Tag = as;

  return (
    <Tag className="mt-10">
      <h2
        id="section-title"
        className="mb-5 transition-all flex items-center gap-2 cursor-pointer"
      >
        {title}
        <Link href={link}>
          <GoHash className="text-[#1818181] text-[18px] opacity-0 border-b border-[#0002]" />
        </Link>
      </h2>
      {as === "section" &&
        <div id={id}>
          {children}
        </div>}
    </Tag>
  );
};

export default Section;
