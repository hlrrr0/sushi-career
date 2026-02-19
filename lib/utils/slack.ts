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

  console.log('[Slack] Sending notification:', message.text);

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

    console.log('[Slack] Notification sent successfully');
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
      type: 'divider',
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
    blocks.push(
      {
        type: 'divider',
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*会社名:*\n${data.company_name}`,
          },
        ],
      }
    );
  }

  // 求職者の場合は希望職種と経験年数を追加
  if (data.user_type === 'jobseeker') {
    blocks.push(
      {
        type: 'divider',
      },
      {
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
      }
    );
  }

  // メッセージを追加
  blocks.push(
    {
      type: 'divider',
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*メッセージ:*\n${data.message}`,
      },
    }
  );

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
      type: 'divider',
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
      type: 'divider',
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

  // 管理画面へのリンクを追加
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || 'https://sushi-career.vercel.app';
  if (baseUrl && !baseUrl.startsWith('http')) {
    baseUrl = `https://${baseUrl}`;
  }
  blocks.push(
    {
      type: 'divider',
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `<${baseUrl}/admin/users|📊 管理画面で確認する>`,
        },
      ],
    }
  );

  await sendSlackNotification({
    text: `新しい応募完了: ${data.name || '名前未入力'}`,
    blocks,
  });
}

/**
 * 適正検査応募完了通知をSlackに送信
 */
export async function notifyAptitudeTestCompleted(data: {
  name?: string;
  email?: string;
  phone?: string;
  birth_date?: string;
  aptitude_test_results?: {
    percentage: number;
    level: string;
    score: number;
    message: string;
    answers: {
      dexterity?: string;
      physicalStrength?: string;
      learningAttitude?: string;
      patience?: string;
      communication?: string;
      passion?: string;
      salaryKnowledge?: string;
      aiDemand?: string;
      futureVision?: string;
    };
  };
  completed_at: string;
}) {
  const aptitude = data.aptitude_test_results;
  
  const blocks: any[] = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '🍣 新しい応募完了（適正検査）',
        emoji: true,
      },
    },
    {
      type: 'divider',
    },
  ];

  // 適性度を目立つように表示
  if (aptitude) {
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*🎯 適性度: ${aptitude.percentage}%*\n_${aptitude.level}_`,
      },
    });
    blocks.push({
      type: 'divider',
    });
  }

  // 基本情報
  blocks.push(
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
    }
  );

  // 適性検査の回答内容
  if (aptitude?.answers) {
    blocks.push(
      {
        type: 'divider',
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*📋 適性検査回答*',
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*手先の器用さ:*\n${aptitude.answers.dexterity || '-'}`,
          },
          {
            type: 'mrkdwn',
            text: `*体力:*\n${aptitude.answers.physicalStrength || '-'}`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*学習意欲:*\n${aptitude.answers.learningAttitude || '-'}`,
          },
          {
            type: 'mrkdwn',
            text: `*忍耐力:*\n${aptitude.answers.patience || '-'}`,
          },
        ],
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*コミュニケーション:*\n${aptitude.answers.communication || '-'}`,
          },
          {
            type: 'mrkdwn',
            text: `*情熱:*\n${aptitude.answers.passion || '-'}`,
          },
        ],
      }
    );

    // 追加質問の回答
    if (aptitude.answers.salaryKnowledge || aptitude.answers.aiDemand || aptitude.answers.futureVision) {
      blocks.push(
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*💭 追加質問回答*',
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*初任給の知識:*\n${aptitude.answers.salaryKnowledge || '-'}`,
            },
            {
              type: 'mrkdwn',
              text: `*AI時代の需要:*\n${aptitude.answers.aiDemand || '-'}`,
            },
          ],
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*5年後の未来:*\n${aptitude.answers.futureVision || '-'}`,
            },
          ],
        }
      );
    }
  }

  // 管理画面へのリンクを追加
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || 'https://sushi-career.vercel.app';
  if (baseUrl && !baseUrl.startsWith('http')) {
    baseUrl = `https://${baseUrl}`;
  }
  blocks.push(
    {
      type: 'divider',
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `<${baseUrl}/admin/users|📊 管理画面で確認する>`,
        },
      ],
    }
  );

  await sendSlackNotification({
    text: `🍣 適正検査応募完了: ${data.name || '名前未入力'}（適性度: ${aptitude?.percentage || 0}%）`,
    blocks,
  });
}
