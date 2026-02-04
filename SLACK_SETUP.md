# Slack通知の設定手順

## 1. Slack Incoming Webhookの作成

1. [Slack API](https://api.slack.com/apps) にアクセス
2. 「Create New App」をクリック
3. 「From scratch」を選択
4. App名（例: 鮨キャリ通知）とワークスペースを選択して作成
5. 左サイドバーから「Incoming Webhooks」を選択
6. 「Activate Incoming Webhooks」をONにする
7. 「Add New Webhook to Workspace」をクリック
8. 通知を送信するチャンネルを選択
9. 生成されたWebhook URL（`https://hooks.slack.com/services/...`）をコピー

## 2. 環境変数の設定

`.env.local`ファイルに以下を追加：

```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

## 3. 動作確認

### 問い合わせフォーム
1. `/contact` ページから問い合わせを送信
2. Slackの指定したチャンネルに通知が届くことを確認

### チャット応募フォーム
1. `/apply` ページでチャットを最後まで完了
2. Slackの指定したチャンネルに通知が届くことを確認

## 通知される情報

### 問い合わせフォーム
- 種別（企業/求職者/その他）
- 名前
- メールアドレス
- 電話番号
- 会社名（企業の場合）
- 希望職種・経験年数（求職者の場合）
- メッセージ

### チャット応募フォーム（完了時のみ）
- 名前
- 生年月日
- メールアドレス
- 電話番号
- 転職希望時期
- 経験
- 希望勤務地

## 注意事項

- Webhook URLが設定されていない場合、通知はスキップされます（エラーにはなりません）
- Slack通知の失敗はユーザー体験に影響しないよう、非同期で処理されます
- チャット応募は、完了（`status: 'completed'`）した時のみ通知されます（途中保存では通知されません）

## トラブルシューティング

### 通知が届かない場合

1. `.env.local` に `SLACK_WEBHOOK_URL` が正しく設定されているか確認
2. 開発サーバーを再起動（環境変数の変更後に必要）
3. サーバーログを確認して「Failed to send Slack notification」エラーがないかチェック
4. Webhook URLが有効か、Slack APIページで確認

### 本番環境への設定

Vercel等にデプロイする場合：
1. プロジェクト設定の環境変数に `SLACK_WEBHOOK_URL` を追加
2. 再デプロイ
