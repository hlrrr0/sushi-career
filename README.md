# Agent System連携 鮨キャリ

Agent SystemのPublic APIを利用した、LINE応募特化型の求人メディアサイトです。

## 🎯 プロジェクト概要

- **コンセプト**: 寿司業界特化の求人サイト
- **技術スタック**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **ホスティング**: Vercel推奨
- **データソース**: Agent System Public API
- **特徴**: DBレス、ISR活用、モバイルファースト

## 📁 プロジェクト構造

```
sushi-career/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # トップページ（求人一覧）
│   ├── jobs/
│   │   └── [jobId]/
│   │       ├── page.tsx     # 求人詳細ページ
│   │       └── not-found.tsx # 404ページ
│   ├── privacy/
│   │   └── page.tsx         # プライバシーポリシー
│   └── terms/
│       └── page.tsx         # 利用規約
├── components/              # Reactコンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── JobCard.tsx
│   ├── JobList.tsx
│   └── LineApplyButton.tsx
├── lib/
│   ├── api/
│   │   └── agent-system.ts  # API クライアント
│   ├── types/
│   │   └── job.ts           # 型定義
│   └── utils/
│       ├── format.ts        # フォーマット関数
│       └── schema.ts        # 構造化データ生成
└── .env.local               # 環境変数（要作成）
```

## 🚀 セットアップ手順

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd sushi-career
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.local.example` を `.env.local` にコピーして、必要な値を設定してください。

```bash
cp .env.local.example .env.local
```

`.env.local` の内容を編集：

```env
# Agent System API Configuration
AGENT_SYSTEM_API_KEY=your_api_key_here
AGENT_SYSTEM_API_URL=https://api.agent-system.example.com

# LINE Configuration
LINE_OFFICIAL_ID=@your_line_id

# Site Configuration
NEXT_PUBLIC_SITE_NAME=鮨キャリ
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 📝 必要な情報

開発を開始する前に、以下の情報を取得してください：

1. **Agent System API Key**: 管理者より発行されたAPIキー
2. **Agent System API URL**: APIのベースURL
3. **LINE公式アカウントID**: `@`から始まるID（例: `@job_agent`）
4. **サイト基本情報**: サイト名、問い合わせ先メールアドレス

## 🏗️ 主な機能

### 1. 求人一覧ページ (`/`)
- Agent System APIから全求人データを取得
- ISR（1時間ごとに再生成）
- クライアントサイドでの絞り込み機能
  - エリア（都道府県）
  - 雇用形態
- 新着順にソート

### 2. 求人詳細ページ (`/jobs/[jobId]`)
- 求人情報の詳細表示
- Google Maps連携（勤務地表示）
- LINE応募ボタン（固定配置）
- Google for Jobs対応（JSON-LD構造化データ）
- ISR対応

### 3. LINE応募機能
- 求人IDと求人名を含むメッセージテンプレート
- LINE URLスキームでLINEアプリを起動

### 4. SEO対策
- メタデータ動的生成
- OGP対応
- JSON-LD構造化データ（JobPosting）
- Google しごと検索対応

## 🔧 技術仕様

### ISR（Incremental Static Regeneration）
- 再生成間隔: 3600秒（1時間）
- キャッシュ戦略: stale-while-revalidate

### API連携
- エンドポイント: `/api/public/jobs/export`
- レート制限考慮: Free 10回/日, Standard 50回/日
- エラーハンドリング: 前回キャッシュを保持

### デザイン
- モバイルファースト設計
- Tailwind CSS使用
- レスポンシブデザイン
- LINEブランドカラー（#06C755）使用

## 🚢 デプロイ（Vercel）

### 1. Vercelプロジェクトの作成

```bash
npm install -g vercel
vercel
```

### 2. 環境変数の設定

Vercel ダッシュボードで以下の環境変数を設定：

- `AGENT_SYSTEM_API_KEY`
- `AGENT_SYSTEM_API_URL`
- `LINE_OFFICIAL_ID`
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`

### 3. デプロイ

```bash
vercel --prod
```

## 📊 パフォーマンス目標

- **LCP (Largest Contentful Paint)**: 2.5秒以内
- **画像最適化**: WebP形式、Lazy Load
- **バンドルサイズ**: 最小化

## 🔒 セキュリティ

- APIキーは環境変数で管理（`.env.local`）
- クライアントサイドへのAPIキー露出なし
- 常時SSL/TLS化（Vercel標準）

## 📱 対応ブラウザ

- Chrome（最新版）
- Safari（最新版）
- Edge（最新版）
- Firefox（最新版）
- iOS Safari（iOS 14+）
- Android Chrome（Android 8+）

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番ビルドのプレビュー
npm start

# リント
npm run lint
```

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 🤝 サポート

質問や問題がある場合は、以下にご連絡ください：

- Email: contact@example.com
- Issue: [GitHub Issues](https://github.com/your-repo/issues)

## 📝 更新履歴

### v1.0.0 (2026-01-09)
- 初期リリース
- 求人一覧・詳細ページ実装
- LINE応募機能実装
- SEO対応（Google for Jobs）
- モバイルファーストUI実装

---

**Built with ❤️ using Next.js & Vercel**

