export async function GET(request: Request) {
  return new Response(
    JSON.stringify([{
    slug: 1,
  }, {
    slug: 2,
  }]))
}
