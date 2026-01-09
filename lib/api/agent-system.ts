/**
 * Agent System Public API クライアント
 */

import { Job, JobsExportResponse } from '@/lib/types/job';

const API_BASE_URL = process.env.AGENT_SYSTEM_API_URL;
const API_KEY = process.env.AGENT_SYSTEM_API_KEY;

// 開発環境用のモックデータフラグ
const USE_MOCK_DATA = !API_BASE_URL || !API_KEY || API_BASE_URL.includes('example.com');

if (USE_MOCK_DATA) {
  console.warn('⚠️  Using mock data - API credentials are not configured properly');
  console.warn('Please set AGENT_SYSTEM_API_KEY and AGENT_SYSTEM_API_URL in .env.local');
}

if (USE_MOCK_DATA) {
  console.warn('⚠️  Using mock data - API credentials are not configured properly');
  console.warn('Please set AGENT_SYSTEM_API_KEY and AGENT_SYSTEM_API_URL in .env.local');
}

/**
 * モックデータ生成
 */
function generateMockJobs(): Job[] {
  return [
    {
      id: 'mock-job-1',
      title: '飲食店ホールスタッフ募集',
      status: 'published',
      employmentType: 'part-time',
      description: '笑顔溢れるカフェでホールスタッフを募集しています。未経験者歓迎！丁寧な研修があるので安心してスタートできます。',
      responsibilities: [
        'お客様のご案内・注文受付',
        '料理・ドリンクの提供',
        'レジ対応',
        '店内清掃',
      ],
      requirements: [
        '未経験歓迎',
        '高校生・大学生歓迎',
        '週2日〜OK',
        '土日勤務できる方歓迎',
      ],
      benefits: [
        '交通費支給（月2万円まで）',
        'まかない付き',
        '制服貸与',
        '昇給あり',
      ],
      workingHours: {
        start: '09:00',
        end: '22:00',
        notes: 'シフト制（週2日〜、1日4時間〜OK）',
      },
      salary: {
        type: 'hourly',
        min: 1100,
        max: 1400,
        note: '研修期間（2ヶ月）は時給1050円',
      },
      location: {
        prefecture: '東京都',
        city: '渋谷区',
        address: '道玄坂1-2-3',
        building: '渋谷ビル2F',
        zipCode: '150-0043',
      },
      companyId: 'mock-company-1',
      company: {
        id: 'mock-company-1',
        name: 'カフェ＆ダイニング株式会社',
        description: '都内を中心に飲食店を展開しています。アットホームな雰囲気が自慢です。',
        industry: '飲食業',
        website: 'https://example.com',
        establishedYear: 2010,
        employeeCount: 50,
      },
      stores: [
        {
          id: 'mock-store-1',
          name: 'カフェ渋谷店',
          location: {
            prefecture: '東京都',
            city: '渋谷区',
            address: '道玄坂1-2-3',
            building: '渋谷ビル2F',
            zipCode: '150-0043',
          },
          latitude: 35.6595,
          longitude: 139.6982,
        },
      ],
      createdAt: '2026-01-08T10:00:00Z',
      updatedAt: '2026-01-09T10:00:00Z',
      publishedAt: '2026-01-08T10:00:00Z',
    },
    {
      id: 'mock-job-2',
      title: '正社員募集！ITエンジニア',
      status: 'published',
      employmentType: 'full-time',
      description: 'Web開発を中心に、自社サービスの開発・運用を担当していただきます。スキルアップをサポートする環境が整っています。',
      responsibilities: [
        'Webアプリケーションの開発',
        'システムの保守・運用',
        'データベース設計',
        '新規機能の企画・提案',
      ],
      requirements: [
        'プログラミング経験（言語不問）',
        'チーム開発経験歓迎',
        '新しい技術に興味がある方',
      ],
      benefits: [
        '社会保険完備',
        '交通費全額支給',
        'リモートワーク可',
        '書籍購入費補助',
        '資格取得支援制度',
      ],
      workingHours: {
        start: '10:00',
        end: '19:00',
        notes: 'フレックスタイム制（コアタイム11:00-16:00）',
      },
      salary: {
        type: 'monthly',
        min: 300000,
        max: 500000,
        note: '経験・スキルに応じて優遇',
      },
      location: {
        prefecture: '東京都',
        city: '港区',
        address: '六本木3-4-5',
        building: '六本木タワー10F',
        zipCode: '106-0032',
      },
      companyId: 'mock-company-2',
      company: {
        id: 'mock-company-2',
        name: 'テックソリューション株式会社',
        description: '自社サービスの開発・運用を行うIT企業です。',
        industry: 'IT・情報通信',
        website: 'https://example-tech.com',
        establishedYear: 2015,
        employeeCount: 30,
      },
      stores: [
        {
          id: 'mock-store-2',
          name: '本社オフィス',
          location: {
            prefecture: '東京都',
            city: '港区',
            address: '六本木3-4-5',
            building: '六本木タワー10F',
            zipCode: '106-0032',
          },
          latitude: 35.6628,
          longitude: 139.7305,
        },
      ],
      createdAt: '2026-01-07T10:00:00Z',
      updatedAt: '2026-01-09T10:00:00Z',
      publishedAt: '2026-01-07T10:00:00Z',
    },
    {
      id: 'mock-job-3',
      title: '販売スタッフ募集（アパレル）',
      status: 'published',
      employmentType: 'part-time',
      description: '人気アパレルブランドの販売スタッフを募集します。ファッションが好きな方、接客が好きな方大歓迎！',
      responsibilities: [
        '接客・販売',
        '商品陳列・ディスプレイ',
        'レジ対応',
        '在庫管理',
      ],
      requirements: [
        '未経験OK',
        'ファッションに興味がある方',
        '明るく元気な接客ができる方',
      ],
      benefits: [
        '社員割引あり',
        '交通費支給',
        '制服貸与',
      ],
      workingHours: {
        start: '10:00',
        end: '21:00',
        notes: 'シフト制（週3日〜、1日6時間〜）',
      },
      salary: {
        type: 'hourly',
        min: 1200,
        max: 1500,
      },
      location: {
        prefecture: '神奈川県',
        city: '横浜市',
        address: '西区みなとみらい2-3-4',
        building: 'ショッピングモール3F',
        zipCode: '220-0012',
      },
      companyId: 'mock-company-3',
      company: {
        id: 'mock-company-3',
        name: 'ファッションリテール株式会社',
        description: 'アパレル・雑貨の企画・販売を行っています。',
        industry: '小売業',
        establishedYear: 2008,
        employeeCount: 100,
      },
      stores: [
        {
          id: 'mock-store-3',
          name: '横浜みなとみらい店',
          location: {
            prefecture: '神奈川県',
            city: '横浜市',
            address: '西区みなとみらい2-3-4',
            building: 'ショッピングモール3F',
            zipCode: '220-0012',
          },
          latitude: 35.4590,
          longitude: 139.6317,
        },
      ],
      createdAt: '2026-01-06T10:00:00Z',
      updatedAt: '2026-01-09T10:00:00Z',
      publishedAt: '2026-01-06T10:00:00Z',
    },
  ];
}

/**
 * 全求人データを取得
 */
export async function fetchAllJobs(): Promise<Job[]> {
  // モックデータを使用
  if (USE_MOCK_DATA) {
    // 実際のAPIのような遅延をシミュレート
    await new Promise(resolve => setTimeout(resolve, 500));
    return generateMockJobs();
  }

  try {
    // まず /api/public/jobs/export を試す
    let url = new URL('/api/public/jobs/export', API_BASE_URL);
    url.searchParams.append('limit', '50');
    url.searchParams.append('includeCompanies', 'true');
    url.searchParams.append('includeStores', 'true');
    // status パラメータは削除（APIが返す active のものをそのまま使用）

    console.log('Fetching jobs from:', url.toString());

    let response = await fetch(url.toString(), {
      headers: {
        'X-API-Key': API_KEY!,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // 開発時はキャッシュを無効化
    });

    // 404の場合、別のエンドポイントを試す
    if (response.status === 404) {
      console.log('Trying alternative endpoint: /api/public/jobs');
      url = new URL('/api/public/jobs', API_BASE_URL);
      url.searchParams.append('limit', '50');
      // status パラメータは削除
      
      response = await fetch(url.toString(), {
        headers: {
          'X-API-Key': API_KEY!,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });
    }

    if (!response.ok) {
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response structure:', {
      isArray: Array.isArray(data),
      keys: Object.keys(data),
      hasJobs: 'jobs' in data,
      hasData: 'data' in data,
      dataType: typeof data,
    });
    
    // レスポンス形式を判定
    let jobs: Job[];
    if (Array.isArray(data)) {
      // レスポンスが配列の場合
      console.log('Response is array, length:', data.length);
      jobs = data;
    } else if (data.data && data.data.jobs && Array.isArray(data.data.jobs)) {
      // レスポンスが { success: true, data: { jobs: [...] } } 形式の場合
      console.log('Response has data.jobs property, length:', data.data.jobs.length);
      jobs = data.data.jobs;
    } else if (data.jobs && Array.isArray(data.jobs)) {
      // レスポンスがオブジェクトで jobs プロパティを持つ場合
      console.log('Response has jobs property, length:', data.jobs.length);
      jobs = data.jobs;
    } else if (data.data && Array.isArray(data.data)) {
      // レスポンスが data プロパティを持つ場合
      console.log('Response has data property, length:', data.data.length);
      jobs = data.data;
    } else {
      console.error('Unexpected API response format:', data);
      console.log('Full response:', JSON.stringify(data, null, 2));
      // 空のレスポンスの場合はモックデータを返す
      console.warn('Falling back to mock data');
      return generateMockJobs();
    }
    
    // status フィルタリング: API の "active" を "published" として扱う
    const publishedJobs = jobs.filter(job => job.status === 'active' || job.status === 'published');
    console.log(`Found ${publishedJobs.length} active jobs out of ${jobs.length} total`);
    return publishedJobs;
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    // エラー時はモックデータを返す
    console.warn('Falling back to mock data due to error');
    return generateMockJobs();
  }
}

/**
 * 特定の求人詳細を取得
 */
export async function fetchJobById(jobId: string): Promise<Job | null> {
  // モックデータを使用
  if (USE_MOCK_DATA) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const mockJobs = generateMockJobs();
    return mockJobs.find(job => job.id === jobId) || null;
  }

  try {
    const url = new URL(`/api/public/jobs/${jobId}`, API_BASE_URL);
    url.searchParams.append('includeCompany', 'true');
    url.searchParams.append('includeStores', 'true');

    console.log('Fetching job detail from:', url.toString());

    const response = await fetch(url.toString(), {
      headers: {
        'X-API-Key': API_KEY!,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // 開発時はキャッシュを無効化
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.log('Job not found:', jobId);
        return null;
      }
      console.error(`API Error: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Job detail response structure:', {
      keys: Object.keys(data),
      hasJob: 'job' in data,
      hasData: 'data' in data,
    });
    
    // レスポンス形式を判定
    let job: Job;
    if (data.data && data.data.job) {
      job = data.data.job;
    } else if (data.job) {
      job = data.job;
    } else if (data.data) {
      job = data.data;
    } else {
      job = data;
    }
    
    console.log('Fetched job:', job.id, job.title, 'status:', job.status);
    
    // 公開中の求人のみ返す (active または published)
    if (job.status !== 'active' && job.status !== 'published') {
      console.log('Job is not active/published:', job.status);
      return null;
    }

    return job;
  } catch (error) {
    console.error(`Failed to fetch job ${jobId}:`, error);
    return null;
  }
}

/**
 * 全求人IDを取得（generateStaticParams用）
 */
export async function fetchAllJobIds(): Promise<string[]> {
  const jobs = await fetchAllJobs();
  return jobs.map(job => job.id);
}

