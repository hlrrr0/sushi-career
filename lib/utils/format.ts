/**
 * LINE応募用URL生成ユーティリティ
 */

import { Job } from '@/lib/types/job';

/**
 * LINE公式アカウントへの応募メッセージURLを生成
 */
export function generateLineApplyUrl(job: Job): string {
  // クライアントサイドでもサーバーサイドでも同じ値を使用
  const LINE_OFFICIAL_ID = process.env.NEXT_PUBLIC_LINE_OFFICIAL_ID || process.env.LINE_OFFICIAL_ID;
  
  if (!LINE_OFFICIAL_ID || LINE_OFFICIAL_ID === '@your_line_id') {
    console.warn('LINE_OFFICIAL_ID is not configured properly');
    return '#';
  }

  const message = `求人ID: ${job.id}
求人名: ${job.title}
を見て連絡しました。詳細を聞きたいです。`;

  const encodedMessage = encodeURIComponent(message);
  return `https://line.me/R/oaMessage/${LINE_OFFICIAL_ID}/?${encodedMessage}`;
}

/**
 * 雇用形態の表示名を取得
 */
export function getEmploymentTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'full-time': '正社員',
    'part-time': 'アルバイト・パート',
    'contract': '契約社員',
    'temporary': '派遣社員',
    'intern': 'インターン',
  };
  return labels[type] || type;
}

/**
 * 給与情報をフォーマット
 */
export function formatSalary(salary?: Job['salary']): string {
  if (!salary) return '応相談';
  
  const { type, min, max, note } = salary;

  let salaryText = '';

  if (min && max) {
    salaryText = `${min.toLocaleString()}円 〜 ${max.toLocaleString()}円`;
  } else if (min) {
    salaryText = `${min.toLocaleString()}円〜`;
  } else if (max) {
    salaryText = `〜${max.toLocaleString()}円`;
  }

  if (type && salaryText) {
    const typeLabel = type === '時給' || type === 'hourly' ? '時給' : 
                      type === '月給' || type === 'monthly' ? '月給' : 
                      type === '年収' || type === 'annual' ? '年収' : type;
    salaryText = `${typeLabel} ${salaryText}`;
  }

  if (note) {
    salaryText = salaryText ? `${salaryText} ${note}` : note;
  }

  return salaryText || '応相談';
}

/**
 * 勤務地をフォーマット
 */
export function formatLocation(location?: Job['location'], storeAddress?: string): string {
  if (!location && !storeAddress) return '';
  
  if (storeAddress) return storeAddress;
  
  if (!location) return '';
  
  const parts = [];
  if (location.prefecture) parts.push(location.prefecture);
  if (location.city) parts.push(location.city);
  if (location.address) parts.push(location.address);
  
  return parts.join(' ');
}

/**
 * Google Maps URLを生成
 */
export function generateGoogleMapsUrl(latitude?: number, longitude?: number, address?: string): string {
  if (latitude && longitude) {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  }
  if (address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }
  return '';
}

/**
 * 日付をフォーマット
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
