import got from 'got';
import cheerio from 'cheerio';

const sitemapUrl = 'https://docs.liara.ir/sitemap.xml';

async function fetchSitemap(url) {
  try {
    const { body } = await got.get(url);
    return body;
  } catch (error) {
    console.error(`Error fetching the sitemap: ${error}`);
    return null;
  }
}

const parseSitemap = (xml) => {
  const $ = cheerio.load(xml, { xmlMode: true });

  const urls = {
    paas: [],
    dbass: [],
    mail: [],
    dns: [],
    objectStorage: [],
    oneClickApp: [],
    references: [],
    overview: [],
  };

  $('url loc').each((i, elem) => {
    const url = $(elem).text().slice(0, -1);

    if (url.includes('/paas')) urls.paas.push(url);

    if (url.includes('/dbaas')) urls.dbass.push(url);

    if (url.includes('/overview')) urls.overview.push(url);

    if (url.includes('/email-server')) urls.mail.push(url);

    if (url.includes('/references')) urls.references.push(url);

    if (url.includes('/one-click-apps')) urls.oneClickApp.push(url);

    if (url.includes('/dns-management-system')) urls.dns.push(url);

    if (url.includes('/object-storage')) urls.objectStorage.push(url);
  });

  return urls;
};

export default parseSitemap(await fetchSitemap(sitemapUrl));
