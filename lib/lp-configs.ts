export type LPConfig = {
  // 訴求タイプ(URL slugとして使用)
  appeal: string;
  
  // メタデータ
  title: string;
  description: string;
  
  // ファーストビュー
  fv: {
    pcImage: string;
    spImage: string;
    leadText: {
      line1: string; // "寿司職人"の部分
      line2: string; // "キャリアアップ"の部分
      line3: string; // "を目指すなら。"の部分
    };
    subText: string; // 下部のテキスト
    message: string; // ボックス内のメッセージ
  };
  
  // CTAボタン
  cta: {
    mobileUrl: string;
    desktopUrl: string;
    buttonText: string;
  };
};

// LP設定のマップ
export const LP_CONFIGS: Record<string, LPConfig> = {
  // デフォルト(トップページ)
  default: {
    appeal: 'default',
    title: '鮨キャリ | 寿司職人専門の求人サイト',
    description: '寿司職人専門のキャリアアドバイザーが、あなたのキャリアを無料サポート！国内最高峰の鮨求人を厳選紹介。',
    fv: {
      pcImage: '/lp/img/fv-pc.jpg',
      spImage: '/lp/img/sp/fv-sp.jpg',
      leadText: {
        line1: '寿司職人',
        line2: 'キャリアアップ',
        line3: 'を目指すなら。',
      },
      subText: '磨いた腕を活かすチャンス。<br />あなたの技術を必要としている、国内最高峰の<br class="u-sp" />鮨求人を厳選紹介！<br />将来は海外にも挑戦可能！',
      message: '「寿司職人専門」のキャリアアドバイザーが、<br />あなたのキャリアを無料サポート！',
    },
    cta: {
      mobileUrl: 'https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK',
      desktopUrl: '/apply',
      buttonText: '求人を見てみる (無料)',
    },
  },
  
  // 例: 高収入訴求
  'high-salary': {
    appeal: 'high-salary',
    title: '寿司職人で年収アップ | 鮨キャリ',
    description: '月給50万円以上も多数！寿司職人専門のキャリアアドバイザーが、高収入の鮨求人を厳選紹介。',
    fv: {
      pcImage: '/lp/img/fv-pc.jpg', // 別画像に変更可能
      spImage: '/lp/img/sp/fv-sp.jpg',
      leadText: {
        line1: '寿司職人',
        line2: '年収アップ',
        line3: 'を実現するなら。',
      },
      subText: '月給50万円以上の求人多数！<br />あなたの技術に見合った<br class="u-sp" />高収入求人を厳選紹介！<br />キャリアと収入を両立！',
      message: '「寿司職人専門」のキャリアアドバイザーが、<br />高収入のキャリアを無料サポート！',
    },
    cta: {
      mobileUrl: 'https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK',
      desktopUrl: '/apply',
      buttonText: '高収入求人を見る (無料)',
    },
  },
  
  // 例: 海外勤務訴求
  'overseas': {
    appeal: 'overseas',
    title: '海外で寿司職人として活躍 | 鮨キャリ',
    description: '世界で活躍できる寿司職人に！海外勤務の求人を専門キャリアアドバイザーが厳選紹介。',
    fv: {
      pcImage: '/lp/img/fv-pc.jpg',
      spImage: '/lp/img/sp/fv-sp.jpg',
      leadText: {
        line1: '寿司職人',
        line2: '海外進出',
        line3: 'を実現するなら。',
      },
      subText: '世界で活躍するチャンス！<br />あなたの技術を海外で活かせる<br class="u-sp" />求人を厳選紹介！<br />ビザ取得もサポート！',
      message: '「寿司職人専門」のキャリアアドバイザーが、<br />海外でのキャリアを無料サポート！',
    },
    cta: {
      mobileUrl: 'https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK',
      desktopUrl: '/apply',
      buttonText: '海外求人を見る (無料)',
    },
  },
  
  // 例: 未経験者向け訴求
  'beginner': {
    appeal: 'beginner',
    title: '未経験から寿司職人に | 鮨キャリ',
    description: '未経験から寿司職人を目指せる！充実の研修制度がある求人を専門アドバイザーが紹介。',
    fv: {
      pcImage: '/lp/img/fv-pc.jpg',
      spImage: '/lp/img/sp/fv-sp.jpg',
      leadText: {
        line1: '未経験から',
        line2: '寿司職人デビュー',
        line3: 'を目指すなら。',
      },
      subText: '丁寧な研修で一人前に！<br />未経験OKの求人を<br class="u-sp" />厳選紹介！<br />充実のサポート体制で安心スタート！',
      message: '「寿司職人専門」のキャリアアドバイザーが、<br />未経験からのキャリアを無料サポート！',
    },
    cta: {
      mobileUrl: 'https://s.lmes.jp/landing-qr/2007732519-iZrbg9ES?uLand=Q42IOK',
      desktopUrl: '/apply',
      buttonText: '未経験OK求人を見る (無料)',
    },
  },
};

// 指定されたappealのLP設定を取得(存在しない場合はnull)
export function getLPConfig(appeal: string): LPConfig | null {
  return LP_CONFIGS[appeal] || null;
}

// すべてのLP appealのリストを取得
export function getAllLPAppeals(): string[] {
  return Object.keys(LP_CONFIGS).filter(key => key !== 'default');
}
