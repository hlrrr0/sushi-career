# Vercel 環境変数の設定

## 必須の環境変数

以下の環境変数をVercelのプロジェクト設定で追加してください。

### 1. Supabase関連

```
NEXT_PUBLIC_SUPABASE_URL=https://iztocruuvqehwroabtgp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_T_J8yGfp5mSqkvvCrbGn8w_J0k4kC-M
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dG9jcnV1dnFlaHdyb2FidGdwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDIwNjg4NSwiZXhwIjoyMDg1NzgyODg1fQ.jdzu23SIOmsEnjwAfXur2Yu1ibBZQfyPOpe_Ng0IkPU
```

### 2. Slack通知（オプション）

```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 3. その他

```
NEXT_PUBLIC_SITE_NAME=鮨キャリ
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
BASIC_AUTH_USER=admin
BASIC_AUTH_PASSWORD=sushi2024
```

## 設定手順

1. [Vercel Dashboard](https://vercel.com/dashboard) にログイン
2. プロジェクトを選択
3. 「Settings」タブをクリック
4. 左サイドバーから「Environment Variables」を選択
5. 各環境変数を以下の形式で追加:
   - **Key**: 環境変数名（例: `NEXT_PUBLIC_SUPABASE_URL`）
   - **Value**: 対応する値
   - **Environment**: Production, Preview, Development すべてにチェック
6. 「Save」をクリック
7. 最新のコミットを再デプロイ

## 注意事項

- `NEXT_PUBLIC_` で始まる環境変数はクライアントサイドでも使用可能
- `SUPABASE_SERVICE_ROLE_KEY` と `SLACK_WEBHOOK_URL` はサーバーサイド専用（漏洩注意）
- 環境変数を追加・変更した後は必ず再デプロイが必要

## 確認方法

デプロイ後、以下を確認:
1. トップページが正常に表示される
2. `/apply` ページでチャットフォームが動作する
3. `/contact` ページで問い合わせフォームが動作する
4. データがSupabaseに保存される
5. Slackに通知が届く（設定している場合）
