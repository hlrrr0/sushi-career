/**
 * Google for Jobs用 JSON-LD 構造化データ生成
 */

import { Job } from '@/lib/types/job';
import { formatSalary, formatLocation } from '@/lib/utils/format';

export function generateJobPostingSchema(job: Job) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const jobUrl = `${siteUrl}/jobs/${job.id}`;

  // 勤務地情報を取得（location または stores から）
  const location = job.location || job.stores?.[0]?.location;
  const address = job.stores?.[0]?.address || location?.address;
  const city = location?.city;
  const prefecture = location?.prefecture;
  const zipCode = location?.zipCode;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: job.company?.name || '企業名',
      value: job.id,
    },
    datePosted: job.publishedAt || job.createdAt,
    validThrough: undefined, // 掲載終了日があれば設定
    employmentType: job.employmentType.toUpperCase().replace('-', '_'),
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company?.name || '企業名',
      sameAs: job.company?.website,
      logo: undefined, // ロゴがあれば設定
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: address,
        addressLocality: city,
        addressRegion: prefecture,
        postalCode: zipCode,
        addressCountry: 'JP',
      },
    },
    baseSalary: generateBaseSalary(job.salary),
    url: jobUrl,
  };

  return schema;
}

function generateBaseSalary(salary?: Job['salary']) {
  if (!salary || (!salary.min && !salary.max)) {
    return undefined;
  }

  const unitText = salary.type === '時給' || salary.type === 'hourly' ? 'HOUR' : 
                   salary.type === '月給' || salary.type === 'monthly' ? 'MONTH' : 'YEAR';

  return {
    '@type': 'MonetaryAmount',
    currency: 'JPY',
    value: {
      '@type': 'QuantitativeValue',
      minValue: salary.min,
      maxValue: salary.max,
      unitText,
    },
  };
}
