/**
 * Agent System API型定義
 */

export interface Job {
  id: string;
  title: string;
  status: 'draft' | 'published' | 'closed' | 'active';
  employmentType: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  qualifications?: string[];
  benefits?: string[];
  workingHours?: {
    start?: string;
    end?: string;
    note?: string;
    notes?: string;
  };
  salary?: {
    type?: string;
    min?: number;
    max?: number;
    note?: string;
  };
  holidays?: string;
  welfare?: string;
  selectionProcess?: string;
  location?: {
    prefecture?: string;
    city?: string;
    address?: string;
    building?: string;
    zipCode?: string;
  };
  companyId?: string;
  company?: Company;
  stores?: Store[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  publicUrl?: string;
  ageLimit?: boolean;
  ageLimitReason?: string;
  recommendedPoints?: string;
}

export interface Company {
  id: string;
  name: string;
  description?: string;
  industry?: string;
  website?: string;
  establishedYear?: number;
  employeeCount?: number;
}

export interface Store {
  id: string;
  name: string;
  address?: string;
  location?: {
    prefecture?: string;
    city?: string;
    address?: string;
    building?: string;
    zipCode?: string;
  };
  latitude?: number;
  longitude?: number;
}

export interface JobsExportResponse {
  jobs: Job[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface JobFilters {
  prefecture?: string;
  employmentType?: string;
}
