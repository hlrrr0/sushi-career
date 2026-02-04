-- 求職者応募データテーブル
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  current_step INTEGER NOT NULL DEFAULT 1,
  desired_timing TEXT,
  experience TEXT,
  location TEXT,
  name TEXT,
  birth_date TEXT,
  email TEXT,
  phone TEXT,
  status TEXT DEFAULT 'in_progress', -- in_progress, completed, abandoned
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- インデックス
CREATE INDEX IF NOT EXISTS idx_job_applications_session_id ON job_applications(session_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at DESC);

-- 問い合わせデータテーブル
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_type TEXT NOT NULL, -- employer, jobseeker, other
  -- 企業用フィールド
  company_name TEXT,
  -- 求職者用フィールド
  desired_position TEXT,
  experience_years TEXT,
  -- 共通フィールド
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- new, in_progress, resolved
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- インデックス
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_user_type ON contact_inquiries(user_type);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at DESC);

-- 更新日時を自動更新するトリガー関数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- トリガーの設定
DROP TRIGGER IF EXISTS update_job_applications_updated_at ON job_applications;
CREATE TRIGGER update_job_applications_updated_at
  BEFORE UPDATE ON job_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_contact_inquiries_updated_at ON contact_inquiries;
CREATE TRIGGER update_contact_inquiries_updated_at
  BEFORE UPDATE ON contact_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) の有効化
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- 全てのユーザーが挿入できるポリシー
CREATE POLICY "Anyone can insert job applications" ON job_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can insert contact inquiries" ON contact_inquiries
  FOR INSERT WITH CHECK (true);

-- セッションIDで自分のデータを更新できるポリシー
CREATE POLICY "Users can update their own job applications" ON job_applications
  FOR UPDATE USING (true);

-- 管理者のみが全てのデータを閲覧できるポリシー（service_roleキーを使用）
CREATE POLICY "Service role can view all job applications" ON job_applications
  FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Service role can view all contact inquiries" ON contact_inquiries
  FOR SELECT USING (auth.role() = 'service_role');
