import { writeFile } from "fs/promises";

import { load } from "cheerio";
import got from "got";
import { v4 as uuidv4 } from "uuid";

// data
const data = [];
const links = [];
const url = "https://docs.liara.ir/";
// collect data
export async function crawlingDocData() {
  // Get all link
  const { body } = await got.get(url);
  const $ = load(body);
  $("a.nav__link").each(function (i, el) {
    links.push($(this).attr("href"));
  });

  await Promise.all(
    links.map(async link => {
      const { body } = await got.get(url + link);
      const $ = load(body);
      if (!$("h4").text()) {
        $("article > h3,h4").each(function (i, el) {
          const platform = $(".page-icon").attr("src");
          data.push({
            id: uuidv4(),
            url: link,
            platform:
              typeof platform != "undefined"
                ? platform
                    .split("/")
                    [platform.split("/").length - 1].split(".")[0]
                : undefined,
            title: $(this).text(),
            body: $(this).nextUntil("h3").text(),
          });
        });
      }
      if ($("h4").next().is("ul")) {
        $("article > *").each(function (i, el) {
          if (typeof $(this).attr("id") != "undefined") {
            const platform = $(".page-icon").attr("src");
            data.push({
              id: uuidv4(),
              url: link,
              platform:
                typeof platform != "undefined"
                  ? platform
                      .split("/")
                      [platform.split("/").length - 1].split(".")[0]
                  : undefined,
              element: `#${$(this).attr("id")}`,
              title: $(this).text(),
              body: $(this).nextUntil("h3").text(),
            });
          }
        });
      }
    })
  );

  await writeFile("data/docData.json", JSON.stringify(data));
  return data;
}
