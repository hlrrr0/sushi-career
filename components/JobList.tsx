'use client';

import { useState, useMemo } from 'react';
import { Job, JobFilters } from '@/lib/types/job';
import JobCard from './JobCard';
import { getEmploymentTypeLabel } from '@/lib/utils/format';

interface JobListProps {
  jobs: Job[];
}

const JOBS_PER_PAGE = 21;

// 都道府県コード（JIS X 0401準拠）
const PREFECTURE_CODES: Record<string, number> = {
  '北海道': 1,
  '青森県': 2,
  '岩手県': 3,
  '宮城県': 4,
  '秋田県': 5,
  '山形県': 6,
  '福島県': 7,
  '茨城県': 8,
  '栃木県': 9,
  '群馬県': 10,
  '埼玉県': 11,
  '千葉県': 12,
  '東京都': 13,
  '神奈川県': 14,
  '新潟県': 15,
  '富山県': 16,
  '石川県': 17,
  '福井県': 18,
  '山梨県': 19,
  '長野県': 20,
  '岐阜県': 21,
  '静岡県': 22,
  '愛知県': 23,
  '三重県': 24,
  '滋賀県': 25,
  '京都府': 26,
  '大阪府': 27,
  '兵庫県': 28,
  '奈良県': 29,
  '和歌山県': 30,
  '鳥取県': 31,
  '島根県': 32,
  '岡山県': 33,
  '広島県': 34,
  '山口県': 35,
  '徳島県': 36,
  '香川県': 37,
  '愛媛県': 38,
  '高知県': 39,
  '福岡県': 40,
  '佐賀県': 41,
  '長崎県': 42,
  '熊本県': 43,
  '大分県': 44,
  '宮崎県': 45,
  '鹿児島県': 46,
  '沖縄県': 47,
};

export default function JobList({ jobs }: JobListProps) {
  const [filters, setFilters] = useState<JobFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // 都道府県リストを抽出
  const prefectures = useMemo(() => {
    const prefs = new Set<string>();
    
    // 都道府県名の正規表現パターン
    const prefecturePattern = /(北海道|青森県|岩手県|宮城県|秋田県|山形県|福島県|茨城県|栃木県|群馬県|埼玉県|千葉県|東京都|神奈川県|新潟県|富山県|石川県|福井県|山梨県|長野県|岐阜県|静岡県|愛知県|三重県|滋賀県|京都府|大阪府|兵庫県|奈良県|和歌山県|鳥取県|島根県|岡山県|広島県|山口県|徳島県|香川県|愛媛県|高知県|福岡県|佐賀県|長崎県|熊本県|大分県|宮崎県|鹿児島県|沖縄県)/;
    
    jobs.forEach((job) => {
      // location.prefecture から抽出
      if (job.location?.prefecture) {
        const match = job.location.prefecture.match(prefecturePattern);
        if (match) {
          prefs.add(match[1]);
        }
      }
      
      // stores からも都道府県を抽出
      job.stores?.forEach((store) => {
        const address = store.address || store.location?.prefecture;
        if (address) {
          const match = address.match(prefecturePattern);
          if (match) {
            prefs.add(match[1]);
          }
        }
      });
    });
    
    // コード順にソート
    return Array.from(prefs).sort((a, b) => {
      const codeA = PREFECTURE_CODES[a] || 999;
      const codeB = PREFECTURE_CODES[b] || 999;
      return codeA - codeB;
    });
  }, [jobs]);

  // 雇用形態リストを抽出
  const employmentTypes = useMemo(() => {
    const types = new Set(jobs.map((job) => job.employmentType));
    return Array.from(types).sort();
  }, [jobs]);

  // フィルタリングされた求人
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (filters.prefecture) {
        const jobPrefecture = job.location?.prefecture;
        const storePrefecture = job.stores?.[0]?.address?.match(/^(.+?[都道府県])/)?.[1];
        if (jobPrefecture !== filters.prefecture && storePrefecture !== filters.prefecture) {
          return false;
        }
      }
      if (filters.employmentType && job.employmentType !== filters.employmentType) {
        return false;
      }
      return true;
    });
  }, [jobs, filters]);

  const handleFilterChange = (key: keyof JobFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value === '' ? undefined : value,
    }));
    setCurrentPage(1); // フィルター変更時はページを1に戻す
  };

  const clearFilters = () => {
    setFilters({});
    setCurrentPage(1); // フィルタークリア時もページを1に戻す
  };

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  // ページネーション処理
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const endIndex = startIndex + JOBS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-4">
      {/* フィルターボタン（モバイル） */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {filteredJobs.length}件の求人
          {activeFilterCount > 0 && (
            <span className="ml-2 text-blue-600">
              （{activeFilterCount}件のフィルター適用中）
            </span>
          )}
        </p>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          絞り込み
          {activeFilterCount > 0 && (
            <span className="flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs rounded-full">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* フィルターパネル */}
      <div
        className={`${
          showFilters ? 'block' : 'hidden'
        } sm:block bg-white rounded-lg shadow-sm border border-gray-200 p-4`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">絞り込み条件</h3>
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              クリア
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* エリア選択 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              エリア
            </label>
            <select
              value={filters.prefecture || ''}
              onChange={(e) => handleFilterChange('prefecture', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">すべて</option>
              {prefectures.map((pref) => (
                <option key={pref} value={pref}>
                  {pref}
                </option>
              ))}
            </select>
          </div>

          {/* 雇用形態選択 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              雇用形態
            </label>
            <select
              value={filters.employmentType || ''}
              onChange={(e) => handleFilterChange('employmentType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">すべて</option>
              {employmentTypes.map((type) => (
                <option key={type} value={type}>
                  {getEmploymentTypeLabel(type)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 求人一覧 */}
      {filteredJobs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* ページネーション */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {/* 前へボタン */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === 1
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                前へ
              </button>

              {/* ページ番号 */}
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // 最初、最後、現在のページ前後2つを表示
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 2 && page <= currentPage + 2);

                  // 省略記号を表示
                  const showEllipsisBefore = page === currentPage - 3 && currentPage > 4;
                  const showEllipsisAfter = page === currentPage + 3 && currentPage < totalPages - 3;

                  if (showEllipsisBefore || showEllipsisAfter) {
                    return (
                      <span key={page} className="px-3 py-2 text-gray-500">
                        ...
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[40px] px-3 py-2 rounded-lg ${
                        currentPage === page
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* 次へボタン */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === totalPages
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                次へ
              </button>
            </div>
          )}

          {/* ページ情報 */}
          <div className="mt-4 text-center text-sm text-gray-600">
            {filteredJobs.length}件中 {startIndex + 1}〜{Math.min(endIndex, filteredJobs.length)}件を表示
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            条件に合う求人が見つかりません
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            フィルター条件を変更してお試しください
          </p>
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              フィルターをクリア
            </button>
          )}
        </div>
      )}
    </div>
  );
}
