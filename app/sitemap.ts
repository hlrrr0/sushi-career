import { MetadataRoute } from 'next';
import { fetchAllJobs } from '@/lib/api/agent-system';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://careers.osushi.studio';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 全求人を取得
  const jobs = await fetchAllJobs();

  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/jobs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // 求人詳細ページ
  const jobPages: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${SITE_URL}/jobs/${job.id}`,
    lastModified: new Date(job.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...jobPages];
}
