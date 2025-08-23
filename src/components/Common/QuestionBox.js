import React, { useState } from "react";
import clsx from "clsx";
import Section from "./section";
import { GoChevronDown } from "react-icons/go";

const QuestionBox = ({ id, question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <Section
      id={id}
      title=""
      as="section"
      headingTag="h3"
      className={clsx(
        "p-6 rounded-2xl border transition-all shadow-sm hover:shadow-md cursor-pointer",
        "border-black/10 bg-white", // light
        "dark:border-white/10 dark:bg-[#1e1e1e]" // dark
      )}
    >
      {/* Header row */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between select-none"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <GoChevronDown
          className={clsx(
            "w-5 h-5 transition-transform duration-300",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </div>

      {/* Answer (animated) */}
      <div
        className={clsx(
          "overflow-hidden transition-all duration-500 ease-in-out",
          open ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        )}
      >
        <div
          className={clsx(
            "p-4 rounded-xl border",
            "border-black/10 text-sm leading-7 text-[#181818]", // light
            "dark:border-white/10 dark:text-[#ddd]" // dark
          )}
        >
          {answer}
        </div>
      </div>
    </Section>
  );
};

export default QuestionBox;
