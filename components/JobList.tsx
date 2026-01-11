'use client';

import { useState, useMemo } from 'react';
import { Job, JobFilters } from '@/lib/types/job';
import JobCard from './JobCard';
import { getEmploymentTypeLabel } from '@/lib/utils/format';

interface JobListProps {
  jobs: Job[];
}

const JOBS_PER_PAGE = 21;

export default function JobList({ jobs }: JobListProps) {
  const [filters, setFilters] = useState<JobFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // 都道府県リストを抽出
  const prefectures = useMemo(() => {
    const prefs = new Set<string>();
    jobs.forEach((job) => {
      // location.prefecture から抽出
      if (job.location?.prefecture) {
        // 郵便番号や数字を除外
        const cleanPref = job.location.prefecture.replace(/[0-9〒\-]/g, '').trim();
        if (cleanPref && cleanPref.match(/[都道府県]/)) {
          prefs.add(cleanPref);
        }
      }
      // stores からも都道府県を抽出
      job.stores?.forEach((store) => {
        const address = store.address || store.location?.prefecture;
        if (address) {
          // 住所から都道府県を抽出（郵便番号を除外）
          const cleanAddress = address.replace(/^[0-9〒\-\s]+/, ''); // 先頭の郵便番号を削除
          const match = cleanAddress.match(/^(.+?[都道府県])/);
          if (match) {
            const pref = match[1].replace(/[0-9〒\-]/g, '').trim();
            if (pref) prefs.add(pref);
          }
        }
      });
    });
    return Array.from(prefs).sort();
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
