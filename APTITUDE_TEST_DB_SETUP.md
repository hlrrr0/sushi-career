# 適正検査結果の保存機能追加

## 概要
適正検査（寿司職人適正検査）のすべての回答と結果をデータベースに保存できるようにする機能を追加しました。

## 変更内容

### 1. データベーススキーマの変更
- `job_applications`テーブルに`aptitude_test_results`カラム（JSONB型）を追加
- マイグレーションファイル: `/supabase/add-aptitude-test-results.sql`

### 2. 保存されるデータ構造

```json
{
  "answers": {
    "dexterity": "料理やハンドメイド作品を作るのが得意",
    "physicalStrength": "体力には自信がある",
    "learningAttitude": "積極的に学びたい・成長したい",
    "patience": "何年かかっても一人前になりたい",
    "communication": "接客経験があり得意",
    "passion": "寿司が大好きで、自分で作りたい",
    "salaryKnowledge": "はい",
    "aiDemand": "知っている",
    "futureVision": "一流店で腕を磨いている"
  },
  "score": 30,
  "percentage": 100,
  "level": "非常に高い適性",
  "message": "あなたは寿司職人に非常に向いています！素晴らしい資質をお持ちです。",
  "timestamp": "2026-02-19T12:34:56.789Z"
}
```

### 3. 更新されたファイル
- `/supabase/add-aptitude-test-results.sql` - マイグレーションSQL（新規作成）
- `/lib/types/database.ts` - TypeScript型定義の更新
- `/components/SushiAptitudeTestForm.tsx` - 保存ロジックの更新

## セットアップ手順

### Supabaseへのマイグレーション適用

1. Supabaseダッシュボードにログイン
2. プロジェクトを選択
3. 左メニューから「SQL Editor」を選択
4. 以下のSQLを実行:

```sql
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
```

5. 「Run」ボタンをクリックして実行

## データの確認方法

### SQL Editorで確認
```sql
SELECT 
  id,
  name,
  email,
  aptitude_test_results->>'percentage' as 適性度,
  aptitude_test_results->>'level' as 適性レベル,
  aptitude_test_results->'answers'->>'passion' as 志望動機,
  created_at
FROM job_applications
WHERE aptitude_test_results IS NOT NULL
ORDER BY created_at DESC;
```

### 特定の回答でフィルタリング
```sql
-- 適性度が75%以上の応募者を抽出
SELECT 
  name,
  email,
  (aptitude_test_results->>'percentage')::int as percentage
FROM job_applications
WHERE (aptitude_test_results->>'percentage')::int >= 75
ORDER BY (aptitude_test_results->>'percentage')::int DESC;
```

## 注意事項

- 既存の`desired_timing`、`experience`、`location`フィールドは適正検査では使用しなくなりました
- これらのフィールドは通常の/applyページ用に残されています
- 適正検査の結果は`aptitude_test_results`カラムに完全な形で保存されます
- データは自動的にStep 15（完了時）に保存されます

## ロールバック方法

マイグレーションを元に戻す場合:
```sql
ALTER TABLE job_applications DROP COLUMN IF EXISTS aptitude_test_results;
DROP INDEX IF EXISTS idx_job_applications_aptitude_test_results;
```
