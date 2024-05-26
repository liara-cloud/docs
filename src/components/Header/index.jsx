import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { GoSun, GoMoon } from "react-icons/go";
import Button from "../Common/button";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(
    () => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("dark", JSON.stringify(darkMode));
    },
    [darkMode]
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
  };

  return (
    <header className="h-[55px] bg-[#fbfbfb] fixed mr-[300px] top-0 p-2 w-[100%] border-b text-[#707070] border-[#00000015]">
      <nav className="max-w-[1350px]  pl-[300px] h-full flex items-center justify-between mx-auto ">
        <button id="search" className="w-[350px] px-2 py-1 relative text-[#707070] hover:bg-[#00000008]  border border-[#0002] rounded-md">
          <div className="flex items-center gap-2">
            <GoSearch />
            جستجو کنید...
          </div>
          <div className="badge-cmd-k absolute top-[5px]  left-[5px] text-[15px] h-[21px] w-[40px] text-[#707070] bg-[#ededed] px-1 rounded  border border-[#d7d7d7]">
            K
            <span className="text-[10px] mr-[5px]">⌘</span>
          </div>
        </button>
        <div className="flex items-center gap-3 ">
          <Button>ورود به پنل کاربری</Button>
          <button
            onClick={toggleDarkMode}
            className="text-[18px]  hover:bg-[#0001] transition-all p-1 rounded-full"
          >
            {darkMode ? <GoMoon /> : <GoSun />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
