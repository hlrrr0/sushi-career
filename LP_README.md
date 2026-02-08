# LP複製管理ガイド

ページ複製方式でランディングページを管理します。

## 📁 構成

```
/app/
  page.tsx                    # トップページ(オリジナル)
  /lp/
    /high-salary/
      page.tsx                # 高収入訴求LP(サンプル)
    # 以下、必要に応じて追加
    # /overseas/
    #   page.tsx              # 海外勤務訴求LP
    # /beginner/
    #   page.tsx              # 未経験者訴求LP
```

## 🚀 新しいLPの作成方法

### 1. ベースページをコピー

トップページまたは既存のLPをコピーして新しいLPを作成します。

```bash
# 新しいLP用のディレクトリを作成してコピー
mkdir -p app/lp/new-appeal
cp app/page.tsx app/lp/new-appeal/page.tsx

# または既存のLPをコピー
cp app/lp/high-salary/page.tsx app/lp/new-appeal/page.tsx
```

### 2. メタデータを変更

`app/lp/new-appeal/page.tsx` を開いて、以下を編集:

```tsx
export const metadata = {
  title: 'あなたの訴求タイトル | 鮨キャリ',
  description: 'あなたの訴求の説明文。SEOに表示されます。',
};
```

### 3. ファーストビューのテキストを変更

#### メインコピー(アニメーション部分)
```tsx
<span className="--margin">
  <span className="p-fv__carrier-up">年</span>  {/* 1文字ずつ指定 */}
  <span className="p-fv__carrier-up">収</span>
  <span className="p-fv__carrier-up">ア</span>
  <span className="p-fv__carrier-up">ッ</span>
  <span className="p-fv__carrier-up">プ</span>
  <span className="--space">を</span>
</span>
<br /><span className="--height">実現するなら。</span>
```

#### サブテキスト
```tsx
<div className="p-fv__text">
  あなたの訴求に合ったテキスト<br />
  改行も自由に設定できます<br className="u-sp" />
  複数行対応！
</div>
```

#### メッセージとCTA
```tsx
<p className="p-fv__message">
  「寿司職人専門」のキャリアアドバイザーが、<br />
  あなたの訴求に合わせたメッセージ！
</p>

<DeviceAwareLink 
  mobileUrl="https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK"
  desktopUrl="/apply"
>
  あなたのCTAテキスト (無料)
</DeviceAwareLink>
```

### 4. CTAボタンのテキストを一括変更

ページ内のすべてのCTAボタンのテキストを統一して変更します。

**変更箇所:**
- FVのCTAボタン
- 中盤のCTAセクション
- フッター前のCTAボタン

```tsx
// 検索して一括置換
// 例: "求人を見てみる (無料)" → "高収入求人を見る (無料)"
```

### 5. 画像を変更(オプション)

異なるFV画像を使う場合:

```bash
# 画像を配置
cp your-pc-image.jpg public/lp/img/fv-pc-new-appeal.jpg
cp your-sp-image.jpg public/lp/img/sp/fv-sp-new-appeal.jpg
```

ページ内で画像パスを変更:
```tsx
<picture className="p-fv__img">
  <source media="(min-width: 768px)" srcSet="/lp/img/fv-pc-new-appeal.jpg" />
  <img src="/lp/img/sp/fv-sp-new-appeal.jpg" alt="寿司職人" width={390} height={848} />
</picture>
```

## 📝 主な変更箇所チェックリスト

新しいLPを作成する際は、以下の箇所を必ず確認・変更してください:

### ✅ 必須
- [ ] メタデータ(`title`, `description`)
- [ ] FVメインコピー(アニメーション部分)
- [ ] FVサブテキスト
- [ ] FVメッセージ
- [ ] CTAボタンテキスト(全箇所)

### 🎨 オプション
- [ ] FV画像(PC/SP)
- [ ] 成功事例の内容
- [ ] FAQの内容
- [ ] 求人例の内容

## 🌐 アクセスURL

作成したLPは以下のURLでアクセスできます:

- トップページ: `https://yourdomain.com/`
- 高収入訴求: `https://yourdomain.com/lp/high-salary`
- (例)海外勤務: `https://yourdomain.com/lp/overseas`
- (例)未経験者: `https://yourdomain.com/lp/beginner`

## 💡 Tips

### 効率的な編集方法

1. **一括置換を活用**
   - VSCodeの検索置換機能(`Cmd+Shift+H`)で、ページ内のCTAテキストなどを一括変更

2. **コンポーネント名の変更**
   - 関数名を訴求に合わせて変更すると管理しやすい
   - 例: `export default function HighSalaryLP()`

3. **Git管理**
   - 各LPは独立したファイルなので、変更履歴が追いやすい
   - ブランチを切って作業すると安全

### よくある訴求パターン

#### 高収入訴求
- キーワード: 年収アップ、高待遇、月給50万円以上
- ターゲット: 収入を重視する経験者

#### 海外勤務訴求
- キーワード: 海外進出、グローバル、ビザサポート
- ターゲット: 海外で働きたい職人

#### 未経験者訴求
- キーワード: 未経験OK、研修充実、一人前に
- ターゲット: キャリアチェンジ希望者

#### ワークライフバランス訴求
- キーワード: 週休3日、残業なし、プライベート重視
- ターゲット: 働き方を重視する職人

## ⚠️ 注意事項

1. **各LPは完全に独立**
   - ファイル間で共通部分がないため、共通の修正は全ファイルで行う必要があります
   - 例: フッターの会社情報変更 → すべてのLPで変更が必要

2. **共通部分の大規模変更**
   - 複数LPで共通の大きな変更が必要になった場合は、一時的にコンポーネント化を検討してください

3. **ファイル管理**
   - LPが増えてきたら、定期的に使用していないLPを整理しましょう
   - アクセス解析と併せて効果測定を行い、効果の低いLPは削除を検討

## 🔧 開発

### ローカル開発サーバー
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### 型チェック
```bash
npm run type-check
```

## 📊 運用

### A/Bテスト
複数の訴求を作成して、広告運用でA/Bテストを実施できます。

### 効果測定
各LPのURLごとにGoogle Analyticsでトラッキングし、CVRを比較しましょう。
