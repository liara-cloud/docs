import "@/styles/globals.css";
import "@/styles/fonts.css";
import "@/styles/asciinema.css";
import "@/styles/dark.css";
import "highlight.js/styles/solarized-light.css";

import { MDXProvider } from "@mdx-js/react";

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider>
      <Component {...pageProps} />{" "}
    </MDXProvider>
  );
}
