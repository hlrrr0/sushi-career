'use client';

import { useState, useMemo } from 'react';
import { Job, JobFilters } from '@/lib/types/job';
import JobCard from './JobCard';
import { getEmploymentTypeLabel } from '@/lib/utils/format';

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  const [filters, setFilters] = useState<JobFilters>({});
  const [showFilters, setShowFilters] = useState(false);

  // 都道府県リストを抽出
  const prefectures = useMemo(() => {
    const prefs = new Set<string>();
    jobs.forEach((job) => {
      if (job.location?.prefecture) {
        prefs.add(job.location.prefecture);
      }
      // stores からも都道府県を抽出
      job.stores?.forEach((store) => {
        const address = store.address || store.location?.prefecture;
        if (address) {
          // 住所から都道府県を抽出（簡易版）
          const match = address.match(/^(.+?[都道府県])/);
          if (match) prefs.add(match[1]);
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
  };

  const clearFilters = () => {
    setFilters({});
  };

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
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
