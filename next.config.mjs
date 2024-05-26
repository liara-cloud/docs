import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/
});

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);