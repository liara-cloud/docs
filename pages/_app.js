import ThemeProvider from "../components/root/theme.context";

import "highlight.js/styles/atom-one-dark.css";
import "../styles/asciinema-player.css";
import "../styles/layout.css";
import "../styles/fontiran.css";
import "../styles/header.css";
import "../styles/notice.css";
import "../styles/sidebar.css";
import "../styles/label.css";
import "../styles/api.css";
import "../styles/404.css";
import "../styles/desktop.css";
import "../styles/mega.css";
import "../styles/theme-dark.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
