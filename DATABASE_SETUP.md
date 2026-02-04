# データベース設定ガイド

このプロジェクトは問い合わせ情報とチャット進捗を管理するためにSupabaseを使用しています。

## セットアップ手順

### 1. Supabaseプロジェクトの作成

1. [Supabase](https://supabase.com)にアクセスしてアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトの設定からAPI設定を確認

### 2. 環境変数の設定

`.env.local`ファイルに以下の値を設定してください：

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

- `NEXT_PUBLIC_SUPABASE_URL`: プロジェクトURL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: 匿名キー（Settings > API）
- `SUPABASE_SERVICE_ROLE_KEY`: サービスロールキー（Settings > API）

### 3. データベーススキーマの適用

Supabaseダッシュボードの「SQL Editor」で`supabase/schema.sql`の内容を実行してください。

これにより以下のテーブルが作成されます：

#### `job_applications` テーブル
求職者の応募情報とチャット進捗を保存

- `id`: UUID（主キー）
- `session_id`: セッションID
- `current_step`: 現在のステップ（1-8）
- `desired_timing`: 転職希望時期
- `experience`: 経験
- `location`: 希望勤務地
- `name`: 名前
- `birth_date`: 生年月日
- `email`: メールアドレス
- `phone`: 電話番号
- `status`: ステータス（in_progress, completed, abandoned）
- `created_at`: 作成日時
- `updated_at`: 更新日時
- `completed_at`: 完了日時

#### `contact_inquiries` テーブル
問い合わせ情報を保存

- `id`: UUID（主キー）
- `user_type`: ユーザータイプ（employer, jobseeker, other）
- `company_name`: 会社名（企業の場合）
- `desired_position`: 希望職種（求職者の場合）
- `experience_years`: 経験年数（求職者の場合）
- `name`: 名前
- `email`: メールアドレス
- `phone`: 電話番号
- `message`: お問い合わせ内容
- `status`: ステータス（new, in_progress, resolved）
- `created_at`: 作成日時
- `updated_at`: 更新日時

### 4. パッケージのインストール

```bash
npm install @supabase/supabase-js
```

## 機能

### チャット進捗追跡

チャット形式の応募フォームでは、各ステップで自動的にデータベースに進捗が保存されます：

- ユーザーが各質問に回答するたびにデータが保存される
- セッションIDで個別のユーザーを追跡
- どのステップで離脱したかを`current_step`で確認可能
- ステータスで完了・進行中・放棄を管理

### 離脱分析

データベースから以下の分析が可能：

```sql
-- ステップごとの離脱率
SELECT 
  current_step,
  COUNT(*) as count,
  COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () as percentage
FROM job_applications
WHERE status = 'in_progress' OR status = 'abandoned'
GROUP BY current_step
ORDER BY current_step;

-- 完了率
SELECT 
  status,
  COUNT(*) as count
FROM job_applications
GROUP BY status;
```

### 問い合わせ管理

問い合わせフォームから送信されたデータは`contact_inquiries`テーブルに保存されます：

```sql
-- 新規問い合わせ一覧
SELECT *
FROM contact_inquiries
WHERE status = 'new'
ORDER BY created_at DESC;

-- ユーザータイプ別の問い合わせ数
SELECT 
  user_type,
  COUNT(*) as count
FROM contact_inquiries
GROUP BY user_type;
```

## データアクセス

### クライアントサイド
匿名キーを使用してデータの挿入・更新が可能

### サーバーサイド
サービスロールキーを使用して全データへのアクセスが可能（管理画面用）

## セキュリティ

Row Level Security (RLS) により：
- 誰でもデータを挿入可能
- サービスロールのみが全データを閲覧可能
- ユーザーは自分のセッションのデータのみ更新可能
