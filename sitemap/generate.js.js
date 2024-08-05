const fs = require("fs").promises;
const path = require("path");

async function walk(dir) {
  const results = [];
  const list = await fs.readdir(dir);
  for (const file of list) {
    const filePath = path.resolve(dir, file);
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
      const subResults = await walk(filePath);
      results.push(...subResults);
    } else {
      results.push(filePath);
    }
  }
  return results;
}

async function generateSitemap() {
  try {
    const dir = path.join(__dirname, "../src/pages");
    const results = await walk(dir);

    const siteUrl = "https://docs.liara.ir";
    const ignoredPages = [
      "/404",
      "/_app",
      "/sitemap.xml/index",
      "/index",
      "/_document",
      "/sitemap.xml"
    ];

    const content = results
      .map(filePath =>
        filePath.replace(/\\/g, "/").split("pages").pop().slice(0, -3)
      )
      .filter(staticPage => !ignoredPages.includes(staticPage));

    content.push("/");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${content
        .map(url => {
          const ـurl = url.replace(/\.$/, "");
          return `
            <url>
              <loc>${siteUrl + path.posix.join(ـurl, "/")}</loc>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

    await fs.writeFile("./public/sitemap.xml", sitemap);
    console.log("Generating sitemap...");
  } catch (err) {
    console.error("Error generating sitemap:", err);
  }
}

generateSitemap();
