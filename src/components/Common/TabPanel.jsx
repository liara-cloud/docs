import React, { cloneElement, isValidElement } from "react";

// The site is a static export, so there is no server at runtime: this is true
// while `next build` (or `next dev`) renders the page into HTML in Node.js,
// and false in the visitor's browser.
const isServer = typeof window === "undefined";

const isPlainObject = (value) =>
  value !== null &&
  typeof value === "object" &&
  Object.getPrototypeOf(value) === Object.prototype;

const deferMedia = (node) => {
  if (Array.isArray(node)) return node.map(deferMedia);
  if (!isValidElement(node)) {
    if (!isPlainObject(node)) return node;
    return Object.fromEntries(
      Object.entries(node).map(([key, value]) => [key, deferMedia(value)])
    );
  }

  if (node.type === "img" || node.type === "iframe") {
    return cloneElement(node, { loading: "lazy" });
  }
  if (node.type === "video") return cloneElement(node, { preload: "none" });

  const { children, ...props } = node.props;
  const nextProps = deferMedia(props);
  if (children === undefined) return cloneElement(node, nextProps);

  const nextChildren = deferMedia(children);
  return Array.isArray(nextChildren)
    ? cloneElement(node, nextProps, ...nextChildren)
    : cloneElement(node, nextProps, nextChildren);
};

const TabPanel = ({ active, children }) => {
  if (active) return <div>{children}</div>;
  if (isServer) return <div hidden>{deferMedia(children)}</div>;

  return (
    <div
      hidden
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: "" }}
    />
  );
};

export default TabPanel;
