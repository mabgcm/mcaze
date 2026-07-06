const robots = `User-agent: *
Allow: /

Sitemap: https://mcaze.ca/sitemap.xml
`;

export function GET() {
  return new Response(robots, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
