import type { MetadataRoute } from "next"
import getPostMetadata from "../../utils/getPostMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sauravdhakal.com.np";
  const metaData = getPostMetadata();

  const blogUrls = metaData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.5,
  })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
  ]
}
