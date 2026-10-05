import { useEffect } from "react";
import { useRouter } from "next/router";

// Images narrower than the content column are stretched to full width with a
// dark background behind them (see .img-fit in globals.css), so they line up
// with the rest of the page. Add the `no-fit` class to an image to opt out.

const MIN_WIDTH = 300; // ignore icons and small inline images
const TOLERANCE = 24; // px of difference that is not worth padding

const fitImage = (img) => {
  if (img.classList.contains("no-fit") || img.closest("a, button, .no-fit")) {
    return;
  }

  // images that were sized on purpose keep their size
  const hasExplicitWidth =
    img.hasAttribute("width") ||
    (img.style.width && img.style.width !== "100%") ||
    /(^|\s)(max-)?w-/.test(img.className.replace("img-fit", ""));
  if (hasExplicitWidth) return;

  const { naturalWidth, naturalHeight } = img;
  if (!naturalWidth || naturalWidth < MIN_WIDTH) return;

  const containerWidth = img.parentElement?.clientWidth || 0;
  const shouldFit = containerWidth - naturalWidth > TOLERANCE;

  if (shouldFit) {
    img.classList.add("img-fit");
    img.style.height = `${naturalHeight}px`;
    if (img.dataset.fitBg) img.style.backgroundColor = img.dataset.fitBg;
  } else if (img.classList.contains("img-fit")) {
    img.classList.remove("img-fit");
    img.style.height = "";
    img.style.backgroundColor = "";
  }
};

const FitImages = ({ containerRef }) => {
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handle = (img) => {
      if (img.complete) fitImage(img);
      else img.addEventListener("load", () => fitImage(img), { once: true });
    };

    const fitAll = () => container.querySelectorAll("img").forEach(handle);
    fitAll();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) =>
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.tagName === "IMG") handle(node);
          else node.querySelectorAll?.("img").forEach(handle);
        })
      );
    });
    mutationObserver.observe(container, { childList: true, subtree: true });

    const resizeObserver = new ResizeObserver(fitAll);
    resizeObserver.observe(container);

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, [containerRef, router.asPath]);

  return null;
};

export default FitImages;
