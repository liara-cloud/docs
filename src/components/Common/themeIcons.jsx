import React, { useEffect, useState } from "react";
import PlatformIcon from "@/components/Common/icons";

export default function ThemePlatformIcon({ light, dark, ...props }) {
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <PlatformIcon
      platform={isDark ? dark : light}
      {...props}
    />
  );
}