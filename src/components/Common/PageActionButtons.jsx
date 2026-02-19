import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import {
  GoLink,
  GoPaperAirplane,
  GoCommentDiscussion,
  GoZap,
  GoChevronDown,
  GoCheck,
  GoPencil,
  GoFileCode,
} from "react-icons/go";

const PageActionButtons = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);

  const currentUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${router.asPath}`
      : "";

  const pageTitle =
    typeof document !== "undefined" ? document.title : "مستندات لیارا";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const editOnGitHub = () => {
    const path = router.asPath.replace(/\/$/, "").split("/#")[0];
    const githubUrl = `https://github.com/liara-cloud/docs/edit/master/src/pages${path}.mdx`;
    window.open(githubUrl, "_blank");
    setIsOpen(false);
  };

  const shareOnTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(pageTitle)}`;
    window.open(telegramUrl, "_blank");
    setIsOpen(false);
  };

  const askChatGPT = () => {
    const question = `سوال در مورد این صفحه مستندات لیارا: ${pageTitle} - ${currentUrl}`;
    const chatGPTUrl = `https://chat.openai.com/?q=${encodeURIComponent(
      question
    )}`;
    window.open(chatGPTUrl, "_blank");
    setIsOpen(false);
  };

  const askGrok = () => {
    const question = `سوال در مورد این صفحه مستندات لیارا: ${pageTitle} - ${currentUrl}`;
    const grokUrl = `https://x.com/i/grok?q=${encodeURIComponent(question)}`;
    window.open(grokUrl, "_blank");
    setIsOpen(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setIsOpen(false);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const viewMarkdown = () => {
    const path = router.asPath.replace(/\/$/, ""); // Remove trailing slash
    const mdUrl = `${window.location.origin}/llms${path}.md`;
    window.open(mdUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="relative mb-4" ref={dropdownRef}>
      <div
        className="flex items-center border border-gray-600 rounded-md overflow-hidden"
        style={{ backgroundColor: "#333" }}
      >
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-2 text-sm text-white hover:opacity-80 transition-colors"
        >
          {copied ? <GoCheck /> : <GoLink />}
          {copied ? "کپی شد!" : "کپی لینک"}
        </button>

        <div className="w-px h-6 bg-gray-600"></div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-2 py-2 text-sm text-white hover:opacity-80 transition-colors"
        >
          <GoChevronDown
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

        {isOpen && (
          <div
            className="absolute top-full left-0 mt-1 w-64 border border-gray-600 rounded-md shadow-lg z-50"
            style={{ backgroundColor: "#333" }}
          >
            <div className="py-1">
              <button
                onClick={viewMarkdown}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:opacity-80 transition-colors"
              >
                <GoFileCode className="text-gray-400" />
                <div className="text-right">
                  <div className="text-white">نمایش MarkDown</div>
                  <div className="text-gray-400 text-xs">
                    مشاهده فایل MarkDown این صفحه
                  </div>
                </div>
              </button>

              <button
                onClick={editOnGitHub}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:opacity-80 transition-colors"
              >
                <GoPencil className="text-gray-400" />
                <div className="text-right">
                  <div className="text-white">ویرایش در گیت‌هاب</div>
                  <div className="text-gray-400 text-xs">
                    ویرایش این صفحه در گیت‌هاب
                  </div>
                </div>
              </button>

              <button
                onClick={askChatGPT}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:opacity-80 transition-colors"
              >
                <GoCommentDiscussion className="text-gray-400" />
                <div className="text-right">
                  <div className="text-white">باز کردن در ChatGPT</div>
                  <div className="text-gray-400 text-xs">
                    سوال در مورد این صفحه
                  </div>
                </div>
              </button>

              <button
                onClick={askGrok}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:opacity-80 transition-colors"
              >
                <GoZap className="text-gray-400" />
                <div className="text-right">
                  <div className="text-white">باز کردن در Grok</div>
                  <div className="text-gray-400 text-xs">
                    سوال در مورد این صفحه
                  </div>
                </div>
              </button>

              <button
                onClick={shareOnTelegram}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:opacity-80 transition-colors"
              >
                <GoPaperAirplane className="text-gray-400" />
                <div className="text-right">
                  <div className="text-white">اشتراک در تلگرام</div>
                  <div className="text-gray-400 text-xs">
                    اشتراک این صفحه در تلگرام
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
  );
};

export default PageActionButtons;
