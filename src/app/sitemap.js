export default async function sitemap() {
  // const res = await fetch("/api/hello")
  // const allPosts = await res.json();
  
  // const posts = allPosts.map((post) => ({
  //   url: `https://acme.com/blog/${post.slug}`,
  //   lastModified: new Date().toTimeString()
  // }))

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
  // console.log("posts: ", posts)
  return posts
}