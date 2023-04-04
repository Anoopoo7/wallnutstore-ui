import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.9 },
    { url: '/sitemap.xml', changefreq: 'daily', priority: 0.5 },
  ]

  const stream = new SitemapStream({
    hostname: `https://${req.headers.host}`,
  })

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  })

  const sitemapOutput = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data) => data.toString())

  res.end(sitemapOutput)
}
