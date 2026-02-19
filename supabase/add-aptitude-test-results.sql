-- 適正検査の結果を保存するためのカラムを追加
ALTER TABLE job_applications 
ADD COLUMN IF NOT EXISTS aptitude_test_results JSONB;

-- インデックスを追加（JSONBの検索を高速化）
CREATE INDEX IF NOT EXISTS idx_job_applications_aptitude_test_results 
ON job_applications USING GIN (aptitude_test_results);

-- コメントを追加
COMMENT ON COLUMN job_applications.aptitude_test_results IS '適正検査の全回答と結果を格納するJSONデータ。
含まれる情報: 
- answers: 各質問への回答
- score: 適性スコア（0-30点）
- percentage: 適性度（パーセンテージ）
- level: 適性レベル
- timestamp: 回答完了日時';
