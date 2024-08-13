import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/
});

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
};

export default withMDX(nextConfig);