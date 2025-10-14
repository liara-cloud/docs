import React, { useState } from "react";
import clsx from "clsx";
import Section from "./section";
import { GoChevronDown, GoDiscussionClosed } from "react-icons/go";

const QuestionBox = ({ id, question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id={id}
      className={clsx(
        "p-4 rounded-lg mt-4 border transition-all  cursor-pointer",
        "border-black/10 ", // light
        "dark:border-white/10 dark:bg-[#1e1e1e]" // dark
      )}
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between select-none"
      >
        <div className="flex items-center gap-3">
          <div className="bg-[#222] text-sm h-max w-max text-white p-1 rounded-md">
            <GoDiscussionClosed className="" />
          </div>
          <h3 className="text-base border-r border-[#bababa88] px-3">{question}</h3>
        </div>
        <GoChevronDown
          className={clsx(
            "w-5 h-5 transition-transform duration-300",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </div>

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
    </div>
  );
};

export default QuestionBox;
