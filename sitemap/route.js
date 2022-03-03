var fs = require("fs");
var path = require("path");

function walk(dir, done) {
  var results = [];
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function (err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
}

let content = [];
walk(path.join(__dirname, "../pages"), function (err, results) {
  const siteUrl = "https://docs.liara.ir";
  if (err) throw err;
  for (let i = 0; i < results.length; i++) {
    const replaceSlash = results[i].replace(/\\/g, "/");
    const sort = replaceSlash.split("pages")[1].slice(0, -3);

    content.push(sort);
  }
  const Final = content.filter(staticPage => {
    return ![
      "/404",
      "/_app",
      "/sitemap.xml/index",
      "/index",
      "/sitemap.xml",
    ].includes(staticPage);
  });
  Final.push("/");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${Final.map(url => {
      return `
          <url>
            <loc>${siteUrl + url}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `;
    }).join("")}
  </urlset>
`;

  fs.writeFile("./public/sitemap.xml", sitemap, function (err) {
    if (err) throw err;
    console.log("Create...");
  });
});
