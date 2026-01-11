import Link from 'next/link';

export const metadata = {
  title: '鮨キャリ | 寿司職人専門の求人サイト',
  description: '寿司職人専門のキャリアアドバイザーが、あなたのキャリアを無料サポート！国内最高峰の鮨求人を厳選紹介。',
};

export default function LandingPage() {
  return (
    <>
      <link rel="stylesheet" href="/lp/css/style.css" />
      
      <main className="l-main">
        <div className="p-fv">
          <picture className="p-fv__img">
            <source media="(min-width: 768px)" srcSet="/lp/img/fv-pc.jpg" />
            <img src="/lp/img/sp/fv-sp.jpg" alt="寿司職人" width={390} height={848} />
          </picture>
          <h1 className="p-fv__logo">
            <img src="/lp/img/logo-white.png" alt="飲食人・寿司キャリア" />
          </h1>
          <div className="p-fv__text-wrapper">
            <p className="p-fv__lead">
              <img src="/lp/img/fv-text.svg" alt="寿司職人" />で、<br />
              <span className="--margin">
                <span className="p-fv__carrier-up">キ</span>
                <span className="p-fv__carrier-up">ャ</span>
                <span className="p-fv__carrier-up">リ</span>
                <span className="p-fv__carrier-up">ア</span>
                <span className="p-fv__carrier-up">ア</span>
                <span className="p-fv__carrier-up">ッ</span>
                <span className="p-fv__carrier-up">プ</span>
                <span className="--space">を</span>
              </span>
              <br /><span className="--height">目指すなら。</span>
            </p>
            <div className="p-fv__text">
              磨いた腕を活かすチャンス。<br />あなたの技術を必要としている、国内最高峰の<br className="u-sp" />鮨求人を厳選紹介！<br />将来は海外にも挑戦可能！
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              「寿司職人専門」のキャリアアドバイザーが、<br />あなたのキャリアを無料サポート！
            </p>
            <div className="c-button">
              <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
              <Link href="/jobs">求人を見てみる (無料)</Link>
            </div>
          </div>
        </div>

        <section className="p-feature">
          <div className="l-inner">
            <h2 className="c-heading">"飲食人・<br className="u-sp" />寿司キャリア"の特徴</h2>
            <div className="p-feature__boxes">
              <div className="p-feature__box --01">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">将来のキャリアプランの<br />希望に沿って</span>
                  <span className="p-feature__heading-bottom">コンサルトが併走</span>
                </h3>
                <p className="p-feature__text --01">元経営者や採用担当、業界での経験豊富な<br />コンサルタントが内定まで併走いたします！</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">お取引社数</span>
                  <span className="p-feature__heading-bottom">200社以上</span>
                </h3>
                <p className="p-feature__text">業界のプロが厳選した、オススメの求人のみを取り扱っております。<br />直近で海外展開しようとしている企業様や、オープン予定の新店舗、老舗の大人気店まで様々なジャンルの求人がございます。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">豊富な</span>
                  <span className="p-feature__heading-bottom">サポート体制</span>
                </h3>
                <p className="p-feature__text --03">面倒な履歴書・職務経歴書の作成や採用担当との日程調整などはお任せください！<br />「将来、海外で働きたいんだよな。」などといった希望もあれば、ビザの取得難易度などもお伝えいたします。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-03.svg" alt="03" /></div>
              </div>
            </div>
          </div>
          <div className="p-feature__deco"><img src="/lp/img/feature-deco.png" alt="" /></div>
        </section>

        <section className="l-section p-job">
          <div className="l-inner">
            <h2 className="c-heading --job">求人例</h2>
            <div className="p-job__boxes">
              <Link href="/jobs" className="p-job__box">
                <div className="p-job__img">
                  <img className="u-pc" src="/lp/img/job-1.png" alt="" />
                  <img className="u-sp" src="/lp/img/sp/job-1-sp.png" alt="" />
                </div>
                <div className="p-job__contents">
                  <h3 className="p-job__title">新店舗OPENをお任せできる「大将候補」</h3>
                  <div className="p-job__wrapper">
                    <span className="p-job__tag">月給</span>
                    <span className="p-job__text">45万円〜 &nbsp;+ [賞与]</span>
                  </div>
                </div>
                <p className="p-job__place">東京</p>
              </Link>
              <Link href="/jobs" className="p-job__box">
                <div className="p-job__img">
                  <img className="u-pc" src="/lp/img/job-2.png" alt="" />
                  <img className="u-sp" src="/lp/img/sp/job-2-sp.png" alt="" />
                </div>
                <div className="p-job__contents">
                  <h3 className="p-job__title">老舗人気店の「副料理長候補」</h3>
                  <div className="p-job__wrapper">
                    <span className="p-job__tag">月給</span>
                    <span className="p-job__text">38万円〜 &nbsp;+ [賞与]</span>
                  </div>
                </div>
                <p className="p-job__place">東京</p>
              </Link>
              <Link href="/jobs" className="p-job__box">
                <div className="p-job__img">
                  <img className="u-pc" src="/lp/img/job-3.png" alt="" />
                  <img className="u-sp" src="/lp/img/sp/job-3-sp.png" alt="" />
                </div>
                <div className="p-job__contents">
                  <h3 className="p-job__title">大手企業の海外店舗の「スーシェフ候補」</h3>
                  <div className="p-job__wrapper">
                    <span className="p-job__tag">月給</span>
                    <span className="p-job__text">80万円〜 </span>
                  </div>
                </div>
                <p className="p-job__place">アメリカ</p>
              </Link>
              <Link href="/jobs" className="p-job__box">
                <div className="p-job__img">
                  <img className="u-pc" src="/lp/img/job-4.png" alt="" />
                  <img className="u-sp" src="/lp/img/sp/job-4-sp.png" alt="" />
                </div>
                <div className="p-job__contents">
                  <h3 className="p-job__title">SNSで話題の<br />あのお店の「調理サポートスタッフ」</h3>
                  <div className="p-job__container">
                    <div className="p-job__wrapper">
                      <span className="p-job__tag">月給</span>
                      <span className="p-job__text">25万円〜 </span>
                    </div>
                    <div className="p-job__wrapper">
                      <span className="p-job__tag">休日</span>
                      <span className="p-job__text">週休3日 </span>
                    </div>
                  </div>
                </div>
                <p className="p-job__place">東京</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="p-cta">
          <p className="p-cta__message">「寿司職人専門」のキャリアアドバイザーが、<br />あなたのキャリアを無料サポート！</p>
          <div className="p-cta__button c-button">
            <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
            <Link href="/jobs">求人を見てみる (無料)</Link>
          </div>
        </section>

        <section className="l-section p-flow">
          <div className="l-inner p-flow__inner">
            <h2 className="c-heading --white">
              サービス登録から<br className="u-sp" />入社までの流れ
            </h2>
            <div className="p-flow__steps">
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">01</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text">会員登録（無料）</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon1.png" alt="登録" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon1-sp.png" alt="登録" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">02</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text">カウンセリング</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon2.png" alt="カウンセリング" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon2-sp.png" alt="カウンセリング" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">03</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text">求人紹介・応募</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon3.png" alt="応募" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon3-sp.png" alt="応募" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">04</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text u-pc">
                      面接調整<br />給与交渉サポート
                    </p>
                    <p className="p-flow__text u-sp">
                      面接調整・給与交渉サポート
                    </p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon4.png" alt="サポート" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon4-sp.png" alt="サポート" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">05</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow.svg" alt="" />
                    </div>
                    <p className="p-flow__text">
                      内定・入社までの<br className="u-pc" />サポート
                    </p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon5.png" alt="握手" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon5-sp.png" alt="握手" />
                  </div>
                </div>
              </div>
              <div className="p-flow__step">
                <div className="p-flow__symbol u-sp">
                  <img src="/lp/img/sp/flow-arrow-dash-sp.svg" alt="" />
                </div>
                <div className="p-flow__wrapper">
                  <div className="p-flow__head">
                    <p className="p-flow__number">06</p>
                    <div className="p-flow__symbol u-pc">
                      <img src="/lp/img/flow-arrow-dash.svg" alt="" />
                    </div>
                    <p className="p-flow__text">海外展開の説明</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon6.png" alt="ステップ" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon6-sp.png" alt="ステップ" />
                  </div>
                  <p className="p-flow__message">
                    海外勤務を希望の方は<br className="u-pc" />別途サポートいたします!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="l-section p-case">
          <div className="p-case__inner">
            <h2 className="c-heading --case">利用者の声・<br className="u-sp" />成功事例</h2>
            <div className="p-case__boxes">
              <div className="p-case__box">
                <p className="p-case__heading">このサイトで国内有名店に就職でき、<br className="u-pc" />将来的には海外支店への道も準備中です！</p>
                <p className="p-case__text">登録も簡単で、専任のコンサルタントがうんちゃらかんちゃら。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />月給が20万円アップ</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />休日・待遇が充実</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />技術をさらに磨ける環境に転職</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">東京都 / 40代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">このサイトで国内有名店に就職でき、<br className="u-pc" />将来的には海外支店への道も準備中です！</p>
                <p className="p-case__text">登録も簡単で、専任のコンサルタントがうんちゃらかんちゃら。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />月給が20万円アップ</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />休日・待遇が充実</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />技術をさらに磨ける環境に転職</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">東京都 / 40代 / 男性</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="l-section p-faq">
          <div className="l-inner">
            <h2 className="c-heading --faq">よくある質問</h2>
            <div className="p-faq__contents">
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">本当に無料で利用できますか？</p>
                  <p className="p-faq__a">完全無料でご利用いただけます</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">転職にかかる期間はどれくらい？</p>
                  <p className="p-faq__a">平均3ヵ月、最短で2週間で入社に至る事例も</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">経験年数が少なくても大丈夫？</p>
                  <p className="p-faq__a">未経験のみしか応募できない求人から、即戦力のみ求人もあり。まずはご相談ください</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">地方在住ですが登録できますか？</p>
                  <p className="p-faq__a">全国各地の求人を扱っています。遠方からの面接調整も可能</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">海外に挑戦するには何か準備が必要？</p>
                  <p className="p-faq__a">国によってビザの取得要件などが異なるので、ご相談ください。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-footer-cta">
          <div className="l-inner">
            <div className="p-footer-cta__contents">
              <p className="p-footer-cta__text--sub">「寿司職人専門」のキャリアアドバイザーが、<br className="u-sp" />あなたのキャリアを無料サポート！</p>
              <p className="p-footer-cta__text--main">まずは無料の会員登録をして<br className="u-sp" />求人をチェック！</p>
              <div className="p-footer-cta__button c-button --large">
                <img src="/lp/img/icon-cta-lg.svg" alt="簡単!30秒" />
                <Link href="/jobs">求人を見てみる (無料)</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="l-footer p-footer">
        <div className="p-footer__inner">
          <div className="p-footer__left">
            <div className="p-footer__logo">
              <img src="/lp/img/logo.png" alt="飲食人・寿司キャリア" width={229} height={32} />
            </div>
            <div className="p-footer__info">
              <div className="p-footer__button">
                <a href="mailto:contact@osushi.studio" className="p-footer__link">お問い合わせ</a>
              </div>
            </div>
          </div>
          <div className="p-footer__right">
            <ul className="p-footer__list">
              <li className="p-footer__item"><Link href="/terms">利用規約</Link></li>
              <li className="p-footer__item"><Link href="/privacy">プライバシーポリシー</Link></li>
            </ul>
            <ul className="p-footer__sns">
              <li className="p-footer__sns-item">
                <a href="#" target="_blank" rel="nofollow noopener">
                  <img src="/lp/img/Instagram.svg" alt="インスタグラム" width={40} height={40} />
                </a>
              </li>
              <li className="p-footer__sns-item">
                <a href="#" target="_blank" rel="nofollow noopener">
                  <img src="/lp/img/X.svg" alt="X" width={40} height={40} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-footer__copyright">
          <small className="u-pc">copyright &copy; inshokufin daigaku, all rights reserved.</small>
          <small className="u-sp">copyright<br />&copy; inshokufin daigaku, all rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
