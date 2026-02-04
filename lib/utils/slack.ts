/**
 * Slackに通知を送信する関数
 */
export async function sendSlackNotification(message: {
  text: string;
  blocks?: any[];
}): Promise<boolean> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn('SLACK_WEBHOOK_URL is not set. Skipping Slack notification.');
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      console.error('Failed to send Slack notification:', response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending Slack notification:', error);
    return false;
  }
}

/**
 * 問い合わせ通知をSlackに送信
 */
export async function notifyContactInquiry(data: {
  user_type: string;
  name: string;
  email: string;
  phone?: string;
  company_name?: string;
  desired_position?: string;
  experience_years?: string;
  message: string;
  created_at: string;
}) {
  const userTypeLabel = 
    data.user_type === 'employer' ? '企業' :
    data.user_type === 'jobseeker' ? '求職者' : 'その他';

  const blocks: any[] = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '📬 新しい問い合わせ',
        emoji: true,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*種別:*\n${userTypeLabel}`,
        },
        {
          type: 'mrkdwn',
          text: `*名前:*\n${data.name}`,
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*メールアドレス:*\n${data.email}`,
        },
        {
          type: 'mrkdwn',
          text: `*電話番号:*\n${data.phone || 'なし'}`,
        },
      ],
    },
  ];

  // 企業の場合は会社名を追加
  if (data.user_type === 'employer' && data.company_name) {
    blocks.push({
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*会社名:*\n${data.company_name}`,
        },
      ],
    });
  }

  // 求職者の場合は希望職種と経験年数を追加
  if (data.user_type === 'jobseeker') {
    blocks.push({
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*希望職種:*\n${data.desired_position || 'なし'}`,
        },
        {
          type: 'mrkdwn',
          text: `*経験年数:*\n${data.experience_years || 'なし'}`,
        },
      ],
    });
  }

  // メッセージを追加
  blocks.push({
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: `*メッセージ:*\n${data.message}`,
    },
  });

  await sendSlackNotification({
    text: `新しい問い合わせ: ${data.name}（${userTypeLabel}）`,
    blocks,
  });
}

/**
 * チャット応募完了通知をSlackに送信
 */
export async function notifyApplicationCompleted(data: {
  name?: string;
  email?: string;
  phone?: string;
  birth_date?: string;
  desired_timing?: string;
  experience?: string;
  location?: string;
  completed_at: string;
}) {
  const blocks: any[] = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '✅ 新しい応募完了',
        emoji: true,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*名前:*\n${data.name || '未入力'}`,
        },
        {
          type: 'mrkdwn',
          text: `*生年月日:*\n${data.birth_date || '未入力'}`,
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*メールアドレス:*\n${data.email || '未入力'}`,
        },
        {
          type: 'mrkdwn',
          text: `*電話番号:*\n${data.phone || '未入力'}`,
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*転職希望時期:*\n${data.desired_timing || '未入力'}`,
        },
        {
          type: 'mrkdwn',
          text: `*経験:*\n${data.experience || '未入力'}`,
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*希望勤務地:*\n${data.location || '未入力'}`,
        },
      ],
    },
  ];

  await sendSlackNotification({
    text: `新しい応募完了: ${data.name || '名前未入力'}`,
    blocks,
  });
}
