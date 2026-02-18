# コラム機能セットアップガイド

## 概要

Supabaseベースの記事管理システムです。非エンジニアでもブラウザから記事の作成・編集・公開が可能です。

## 機能

- ✅ **記事管理**: 作成・編集・削除・公開/下書き切り替え
- ✅ **WYSIWYGエディタ**: 直感的なビジュアルエディタ（TipTap）
- ✅ **リッチテキスト**: 太字、斜体、見出し、リスト、画像、リンク対応
- ✅ **公開ページ**: 記事一覧・詳細ページ（ISR対応）
- ✅ **管理画面**: BASIC認証で保護された管理UI
- ✅ **SEO対応**: メタデータ、OGP画像
- ✅ **タグ機能**: 記事の分類
- ✅ **サムネイル**: アイキャッチ画像

## セットアップ手順

### 1. Supabaseにテーブルを作成

Supabase Dashboard (https://supabase.com/dashboard) にアクセスし、以下のSQLを実行してください。

**SQL Editor** → **New Query** → 以下のSQLを貼り付けて実行:

```bash
# ファイルの内容を確認
cat supabase/articles-schema.sql
```

または、Supabase CLIを使用する場合:

```bash
# Supabase CLIのインストール（未インストールの場合）
npm install -g supabase

# スキーマを適用
supabase db push
```

### 2. 環境変数の確認

`.env.local` に以下の環境変数が設定されていることを確認:

```env
# Supabase設定（既存）
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# BASIC認証（既存）
BASIC_AUTH_USER=admin
BASIC_AUTH_PASSWORD=sushi2024
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

## 使い方

### 管理画面にアクセス

```
http://localhost:3000/admin/columns
```

BASIC認証:
- ユーザー名: `admin`
- パスワード: `sushi2024`

### 記事の作成

1. **新規作成**ボタンをクリック
2. 必須項目を入力:
   - タイトル
   - スラッグ（URL用。半角英数字とハイフン）
   - 本文（HTML形式）
3. オプション項目:
   - 説明（SEO用）
   - サムネイル画像URL
   - 著者
   - タグ（カンマ区切り）
4. 「この記事を公開する」にチェックで即公開
5. **作成する**ボタンをクリック

### 記事の編集

1. 記事一覧から**編集**をクリック
2. 内容を修正
3. **更新する**ボタンをクリック

### 公開/下書き切り替え

記事一覧の「公開中」「下書き」バッジをクリックすると、即座に状態が切り替わります。

### 記事の削除

記事一覧から**削除**をクリック → 確認ダイアログで**OK**

## 公開ページ

### 記事一覧
```
http://localhost:3000/columns
```

### 記事詳細
```
http://localhost:3000/columns/[スラッグ]
```

例: `http://localhost:3000/columns/my-first-article`

## WYSIWYGエディタの使い方

記事の本文は直感的なビジュアルエディタで作成できます。Wordのような感覚で記事を書けます。

### ツールバー機能

#### テキスト装飾
- **B** - 太字
- **I** - 斜体
- **U** - 下線
- **S** - 取り消し線

#### 見出し
- **P** - 通常の段落
- **H2** - 大見出し
- **H3** - 中見出し
- **H4** - 小見出し

#### リスト
- **• リスト** - 箇条書き（順序なし）
- **1. リスト** - 番号付きリスト（順序あり）

#### 整列
- **←** - 左揃え
- **↔** - 中央揃え
- **→** - 右揃え

#### その他
- **" 引用** - 引用ブロック
- **<>** - コードブロック（プログラムコード用）
- **―** - 水平線（区切り線）

#### リンクと画像
- **🔗** - リンク挿入（テキストを選択してクリック）
- **🖼️** - 画像挿入（画像URLを入力）

### 使い方の例

1. **見出しを追加**
   - テキストを入力 → 行を選択 → H2ボタンをクリック

2. **太字にする**
   - テキストを選択 → Bボタンをクリック

3. **リンクを追加**
   - リンクにしたいテキストを選択 → 🔗ボタンをクリック → URLを入力

4. **画像を挿入**
   - 🖼️ボタンをクリック → 画像のURLを入力
   - ※画像は事前に別サービス（Imgur、Cloudinaryなど）にアップロードしておく必要があります

5. **リストを作成**
   - テキストを入力 → • リストボタンをクリック → Enterで次の項目

### 画像のアップロードについて

エディタには画像アップロード機能がありません。以下のサービスで画像をアップロードしてURLを取得してください：

- **Imgur** (https://imgur.com/) - 無料、登録不要
- **Cloudinary** (https://cloudinary.com/) - 無料プランあり
- **Supabase Storage** - 既存のSupabaseプロジェクトで使用可能

### HTMLソースを直接編集したい場合

ブラウザの開発者ツールを使用するか、一旦Markdown形式でテキストエディタで編集してからペーストすることもできます。

## ディレクトリ構造

```
supabase/
  articles-schema.sql         # DBスキーマ

lib/
  types/
    article.ts                # 記事の型定義
  api/
    articles.ts               # 記事API関数

components/
  RichTextEditor.tsx          # WYSIWYGエディタコンポーネント

app/
  columns/                    # 公開ページ
    page.tsx                  # 記事一覧
    [slug]/
      page.tsx                # 記事詳細
      not-found.tsx           # 404ページ
  
  admin/                      # 管理画面
    columns/
      page.tsx                # 記事管理一覧
      new/
        page.tsx              # 新規作成
      [id]/
        page.tsx              # 編集
  
  api/                        # API Routes
    admin/
      articles/
        route.ts              # 記事一覧・作成API
        [id]/
          route.ts            # 記事取得・更新・削除API
```

## デプロイ時の注意

### Vercel

1. 環境変数の設定:
   - Vercel Dashboard → Settings → Environment Variables
   - `.env.local`の内容をコピー

2. デプロイ:
```bash
vercel --prod
```

### ISR（Incremental Static Regeneration）

記事ページは1時間ごとに自動再生成されます（`revalidate = 3600`）。

即座に更新を反映したい場合:
- 記事を公開/更新後、該当ページにアクセス
- または On-Demand Revalidation を実装

## トラブルシューティング

### 記事が表示されない

1. Supabaseでテーブルが作成されているか確認
2. 記事が「公開」状態になっているか確認
3. ブラウザのキャッシュをクリア

### 管理画面にアクセスできない

1. BASIC認証の認証情報を確認
2. ブラウザのシークレットモードで試す

### Supabaseエラー

1. `.env.local`の環境変数を確認
2. Supabase Dashboardでプロジェクトの状態を確認
3. RLS（Row Level Security）ポリシーを確認

## サポート

質問や問題がある場合は、開発チームまでお問い合わせください。
