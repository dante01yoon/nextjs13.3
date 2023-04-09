export default async function sitemap() {
  const posts = [
    {
      url: `https://acme.com/blog/1`,
      lastModified: new Date().toTimeString()
    },
    {
      url: `https://acme.com/blog/2`,
      lastModified: new Date().toTimeString()
    }
  ]
  return posts
}