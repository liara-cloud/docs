import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { GoSearch, GoRows } from "react-icons/go";
import { GoSun, GoMoon } from "react-icons/go";
import Button from "../Common/button";
import PlatformIcon from "../Common/icons";
import MeiliSearch from "meilisearch";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import UAParser from "ua-parser-js";
import Link from "next/link";

const client = new MeiliSearch({
  host: "https://search.liara.ir",
  apiKey: "53c93d9ce3308e48a7ad701d4b402d3190324a09e1607f14baae9bd4f805bb11"
});

const Header = ({ setShowSidebar }) => {
  const [results, setResults] = useState([]);
  const [defaultActive, setDefaultActive] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();
  const valueRef = useRef();

  const isBrowser = typeof window !== "undefined";

  const [darkMode, setDarkMode] = useState(() => {
    if (isBrowser) {
      const storedDarkMode = localStorage.getItem("dark");
      return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    }
    return false;
  });

  useEffect(() => {
    const handleKeydown = event => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setSearchOpen(prev => !prev);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

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

  const handleMeiliSearch = value => {
    const userAgent = new UAParser(window.navigator.userAgent);
    const eventData = {
      term: value,
      browser: userAgent.getBrowser().name,
      browserVersion: userAgent.getBrowser().version,
      os: userAgent.getOS().name,
      osVersion: userAgent.getOS().version
    };

    return client.index("docs").search(value, { limit: 10 }).then(res => {
      setResults(res.hits);
      setNotFound(value != "" && res.hits.length == 0);
      if (res.hits.length == 0) {
        setCurrent(undefined);
      }
    });
  };

  const handleChangeValue = e => {
    const { value } = e.target;
    setValue(value);
    if (value != "") {
      handleMeiliSearch(value);
    }
    setResults("");
  };
  const debouncedSave = useCallback(debounce(handleChangeValue, 150), []);

  const handleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleArrow = arrow => {
    switch (arrow.keyCode) {
      case 38:
        const Negative = index > 0 ? index - 1 : results.length - 1;
        setIndex(Negative);
        break;
      case 40:
        const Positive = index < results.length - 1 ? index + 1 : 0;
        setIndex(Positive);
        break;
      case 13:
        const path =
          current != undefined && current.element
            ? current.url + current.element
            : current != undefined && current.url;

        current != undefined && router.push(path);
        setSearchOpen(false);
        break;
    }
  };
  useEffect(
    () => {
      if (results.length == 0) return;
      setCurrent(results.filter((_, idx) => idx == index)["0"]);
      if (value == "") {
        setValue(false);
      }
    },
    [results, index]
  );

  const handleHover = item => {
    setCurrent(results.filter((_, idx) => idx == item)["0"]);
  };
  const handleSuggestion = value => {
    handleMeiliSearch(value);
    return (valueRef.current.value = value);
  };

  return (
    <header className="h-[55px] bg-[#fbfbfb] fixed md:mr-[300px]  top-0 p-2 w-[100vw] md:w-[100%] border-b text-[#707070] border-[#00000015]">
      <nav className="max-w-[1350px] md:pl-[300px] h-full flex items-center justify-between mx-auto ">
        <Link
          href="/"
          className="flex md:hidden mt-4  mb-3 items-center gap-2 font-semibold"
        >
          <img className="logo-sidebar" src={"/static/logo.svg"} width="55" />
          <span className="text-[11px] px-1 py-0 font-medium text-[#fff] bg-[#333] rounded">
            مستندات
          </span>
        </Link>

        <button
          onClick={() => setSearchOpen(true)}
          id="search"
          className="hidden md:block ml-12 md:ml-0 md:w-[350px] px-2 py-1 relative text-[#707070] hover:bg-[#00000008]  border border-[#0002] rounded-md"
        >
          <div className="hidden md:flex items-center gap-2">
            <GoSearch />
            جستجو کنید
          </div>
          <div className="badge-cmd-k hidden absolute md:block top-[5px]  left-[5px] text-[15px] h-[21px] w-[40px] text-[#707070] bg-[#ededed] px-1 rounded  border border-[#d7d7d7]">
            K
            <span className="text-[10px] mr-[5px]">⌘</span>
          </div>
        </button>

        <div
          onClick={() => setSearchOpen(true)}
          className="flex md:hidden bg-blue-600 text-white p-2 text-[20px] fixed bottom-4 left-4 rounded-full items-center gap-2"
        >
          <GoSearch />
        </div>

        <Button
          onClick={() => setShowSidebar(true)}
          className="w-[35px] flex justify-center absolute md:hidden left-4  border border-[#0002] rounded-md"
        >
          <GoRows />
        </Button>

        <button
          onClick={toggleDarkMode}
          className="text-[18px]  absolute md:hidden left-14 hover:bg-[#0001] transition-all p-1 rounded-full"
        >
          {darkMode ? <GoMoon /> : <GoSun />}
        </button>

        <div className="hidden md:flex items-center gap-3 ">
          <a href="https://console.liara.ir" target="_blank">
            <Button>ورود به پنل کاربری</Button>
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-[18px]  hover:bg-[#0001] transition-all p-1 rounded-full"
          >
            {darkMode ? <GoMoon /> : <GoSun />}
          </button>
        </div>
      </nav>
      {searchOpen &&
        <Fragment>
          <div className="search-box" onKeyDown={e => handleArrow(e)}>
            <input
              ref={valueRef}
              placeholder="جستجو"
              className="search-input"
              autoFocus
              onChange={debouncedSave}
            />
            <div className="suggestion">
              <button onClick={() => handleSuggestion("cors")}>cors</button>
              <button onClick={() => handleSuggestion("php.ini")}>
                php.ini
              </button>
              <button onClick={() => handleSuggestion("اتصال دامنه")}>
                اتصال دامنه
              </button>
              <button onClick={() => handleSuggestion("ci/cd")}>ci/cd</button>
              <button onClick={() => handleSuggestion("ارسال ایمیل")}>
                ارسال ایمیل
              </button>
              <button onClick={() => handleSuggestion("شبکه‌ی خصوصی")}>
                شبکه‌ی خصوصی
              </button>
              <button onClick={() => handleSuggestion("cron job")}>
                cron job
              </button>
            </div>
            <div className="results">
              <ul>
                {results != "" &&
                  results.map((item, index) =>
                    <li key={index}>
                      <Link
                        href={item.element ? item.url + item.element : item.url}
                        onClick={() => setSearchOpen(false)}
                        className={`url_results ${current != undefined &&
                          item.id == current.id &&
                          `current-result `}`}
                        onMouseEnter={() => handleHover(index)}
                      >
                        <div className="platform_container">
                          {item.platform &&
                            <div className="w-[30px] p-1 ml-3  bg-[#333] rounded-md">
                              <PlatformIcon platform={item.platform} />
                            </div>}
                          <p className="">
                            {item.title}
                            {item.type === "video" &&
                              <Fragment>
                                {" "}-{" "}
                                <span className="bg-[#2563eb22] px-2 text-[12px] py-1 rounded-lg">
                                  ویدیو
                                </span>
                              </Fragment>}
                          </p>
                        </div>
                        <img
                          src="/static/images/arrow.svg"
                          className="arrow-icon_result"
                        />
                      </Link>
                    </li>
                  )}
                {notFound &&
                  <li>
                    <a className="url_results">
                      <div className="platform_container">
                        <p className="">
                          متاسفانه نتیجه‌ای برای عبارتی که وارد کردید پیدا
                          نکردیم.
                        </p>
                      </div>
                    </a>
                  </li>}
              </ul>
            </div>
          </div>
          <span className="search-box-effect" onClick={handleSearch} />
        </Fragment>}
    </header>
  );
};

export default Header;
