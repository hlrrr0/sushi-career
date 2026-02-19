import Link from 'next/link';
import ExitIntentPopupBeginner from '@/components/ExitIntentPopupBeginner';
import DeviceAwareLink from '@/components/DeviceAwareLink';

export const metadata = {
  title: '未経験から寿司職人へ | 鮨キャリ',
  description: '未経験歓迎の求人多数！充実の研修制度で、ゼロから一流の寿司職人を目指せます。',
};

export default function BeginnerLP() {
  return (
    <>
      <link rel="stylesheet" href="/lp/css/style.css" />
      <link rel="stylesheet" href="/lp/css/begineer-custom.css" />
      <ExitIntentPopupBeginner />
      
      <main className="l-main">
        <div className="p-fv">
          <picture className="p-fv__img">
            <source media="(min-width: 768px)" srcSet="/lp/img/fv-pc.jpg" />
            <img src="/lp/img/sp/fv-sp.jpg" alt="寿司職人" width={390} height={848} />
          </picture>
          <h1 className="p-fv__logo">
            <img src="/lp/img/logo-white.png" alt="鮨キャリ" />
          </h1>
          <div className="p-fv__text-wrapper p-fv__text-wrapper--5chars">
            <p className="p-fv__lead">
              <img src="/lp/img/fv-text.svg" alt="寿司職人" />で、<br />
              <span className="--margin">
                <span className="p-fv__carrier-up">新</span>
                <span className="p-fv__carrier-up">た</span>
                <span className="p-fv__carrier-up">な</span>
                <span className="p-fv__carrier-up">人</span>
                <span className="p-fv__carrier-up">生</span>
                <span className="--space">を</span>
              </span>
              <br /><span className="--height">スタートするなら。</span>
            </p>
            <div className="p-fv__text">
              未経験歓迎の求人多数！<br />充実の研修制度で、<br className="u-sp" />ゼロから一流の技術を習得！<br />手に職をつけて新しいキャリアを！
            </div>
          </div>
          <div className="p-fv__box">
            <p className="p-fv__message">
              「寿司職人専門」のアドバイザーが、<br />未経験からの就職を無料サポート！
            </p>
            <div className="c-button">
              <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
              <DeviceAwareLink 
                mobileUrl="/apply-0219"
                desktopUrl="/apply-0219"
              >
                私にもできる？無料診断してみる
              </DeviceAwareLink>
            </div>
          </div>
        </div>

        <section className="p-feature">
          <div className="l-inner">
            <h2 className="c-heading">"鮨キャリ"の特徴</h2>
            <div className="p-feature__boxes">
              <div className="p-feature__box --01">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">企業負担で<br />寿司学校に通える</span>
                  <span className="p-feature__heading-bottom">特待生制度あり</span>
                </h3>
                <p className="p-feature__text --01">提携している寿司学校に、就職する企業のお金で通える「特待生制度」があります。<br />学費無料で、未経験からプロの技術をゼロから学べます！</p>
                <div className="p-feature__number"><img src="/lp/img/feature-01.svg" alt="01" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">お取引社数</span>
                  <span className="p-feature__heading-bottom">200社以上</span>
                </h3>
                <p className="p-feature__text">業界のプロが厳選した、オススメの求人のみを取り扱っております。<br />未経験でも安心して働ける研修制度が充実した店舗や、丁寧な指導で定評のある老舗店まで様々なジャンルの求人がございます。</p>
                <div className="p-feature__number"><img src="/lp/img/feature-02.svg" alt="02" /></div>
              </div>
              <div className="p-feature__box">
                <h3 className="p-feature__heading">
                  <span className="p-feature__heading-top">豊富な</span>
                  <span className="p-feature__heading-bottom">サポート体制</span>
                </h3>
                <p className="p-feature__text --03">面倒な履歴書・職務経歴書の作成や採用担当との日程調整などはお任せください！<br />「未経験だけど大丈夫かな？」といった不安もしっかりお聞きして、あなたに合った研修制度のある店舗をご紹介します。</p>
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
              <DeviceAwareLink 
                mobileUrl="/apply-0219"
                desktopUrl="/apply-0219"
                className="p-job__box"
              >
                <div className="p-job__img">
                  <img className="u-pc" src="/lp/img/job-4.png" alt="" />
                  <img className="u-sp" src="/lp/img/sp/job-4-sp.png" alt="" />
                </div>
                <div className="p-job__contents">
                  <h3 className="p-job__title">研修充実の人気店で「見習いスタッフ」</h3>
                  <div className="p-job__container">
                    <div className="p-job__wrapper">
                      <span className="p-job__tag">月給</span>
                      <span className="p-job__text">23万円〜 </span>
                    </div>
                    <div className="p-job__wrapper">
                      <span className="p-job__tag">休日</span>
                      <span className="p-job__text">週休2日 </span>
                    </div>
                  </div>
                </div>
                <p className="p-job__place">東京</p>
              </DeviceAwareLink>
              <DeviceAwareLink 
                mobileUrl="/apply-0219"
                desktopUrl="/apply-0219"
                className="p-job__box"
              >
                <div className="p-job__img">
                  <img className="u-pc" src="/lp/img/job-4.png" alt="" />
                  <img className="u-sp" src="/lp/img/sp/job-4-sp.png" alt="" />
                </div>
                <div className="p-job__contents">
                  <h3 className="p-job__title">丁寧な指導が自慢の老舗店「調理サポート」</h3>
                  <div className="p-job__container">
                    <div className="p-job__wrapper">
                      <span className="p-job__tag">月給</span>
                      <span className="p-job__text">25万円〜 </span>
                    </div>
                    <div className="p-job__wrapper">
                      <span className="p-job__tag">休日</span>
                      <span className="p-job__text">週休2日 </span>
                    </div>
                  </div>
                </div>
                <p className="p-job__place">大阪</p>
              </DeviceAwareLink>
              <DeviceAwareLink 
                mobileUrl="/apply-0219"
                desktopUrl="/apply-0219"
                className="p-job__box"
              >
                <div className="p-job__img">
                  <img className="u-pc" src="/lp/img/job-4.png" alt="" />
                  <img className="u-sp" src="/lp/img/sp/job-4-sp.png" alt="" />
                </div>
                <div className="p-job__contents">
                  <h3 className="p-job__title">未経験大歓迎！<br />急成長中の回転寿司チェーン「見習い」</h3>
                  <div className="p-job__container">
                    <div className="p-job__wrapper">
                      <span className="p-job__tag">月給</span>
                      <span className="p-job__text">24万円〜 </span>
                    </div>
                    <div className="p-job__wrapper">
                      <span className="p-job__tag">休日</span>
                      <span className="p-job__text">週休2日 </span>
                    </div>
                  </div>
                </div>
                <p className="p-job__place">名古屋</p>
              </DeviceAwareLink>
              <DeviceAwareLink 
                mobileUrl="/apply-0219"
                desktopUrl="/apply-0219"
                className="p-job__box"
              >
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
              </DeviceAwareLink>
            </div>
          </div>
        </section>

        <section className="p-cta">
          <p className="p-cta__message">「寿司職人専門」のアドバイザーが、<br />未経験からのキャリアを無料サポート！</p>
          <div className="p-cta__button c-button">
            <img src="/lp/img/icon-cta.svg" alt="簡単!30秒" />
            <DeviceAwareLink 
              mobileUrl="/apply-0219"
              desktopUrl="/apply-0219"
            >
              私にもできる？無料診断してみる
            </DeviceAwareLink>
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
                      面接調整<br />研修内容の確認
                    </p>
                    <p className="p-flow__text u-sp">
                      面接調整・研修内容の確認
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
                    <p className="p-flow__text">キャリアアップ<br className="u-pc" />相談</p>
                  </div>
                  <div className="p-flow__img">
                    <img className="u-pc" src="/lp/img/flow-icon6.png" alt="ステップ" />
                    <img className="u-sp" src="/lp/img/sp/flow-icon6-sp.png" alt="ステップ" />
                  </div>
                  <p className="p-flow__message">
                    入社後のキャリアアップも<br className="u-pc" />継続してサポートします!
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
                <p className="p-case__heading">未経験から寿司職人に転身。<br className="u-pc" />今では握りを任されるように！</p>
                <p className="p-case__text">前職は営業職で、調理経験はゼロでした。でも「手に職をつけたい」という思いで応募。鮨キャリのアドバイザーが未経験でも丁寧に指導してくれる店を紹介してくれて、今では握りを任されるまでに成長しました。研修制度が充実していたので安心して学べました。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />3ヶ月の研修で基礎を習得</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />先輩職人の丁寧な指導</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />1年で握りを任されるように</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">東京都 / 20代 / 男性</p>
                </div>
              </div>
              <div className="p-case__box">
                <p className="p-case__heading">異業種から転職し、<br className="u-pc" />やりがいのある仕事に出会えました！</p>
                <p className="p-case__text">事務職から飲食業界への転職は不安でしたが、未経験OKの求人を見つけて挑戦しました。最初は魚の名前も分からなかったですが、店長や先輩が優しく教えてくれて、今では仕込みから任されています。毎日成長を実感できて、転職して本当に良かったです。</p>
                <ul className="p-case__list">
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />充実した研修プログラム</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />働きやすい職場環境</li>
                  <li className="p-case__item"><img src="/lp/img/check.svg" alt="" />毎日成長を実感できる</li>
                </ul>
                <div className="p-case__profile">
                  <div className="p-case__icon"><img src="/lp/img/case-icon.svg" alt="顔アイコン" /></div>
                  <p className="p-case__category">大阪府 / 30代 / 女性</p>
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
                  <p className="p-faq__q">本当に未経験でも大丈夫ですか？</p>
                  <p className="p-faq__a">未経験大歓迎です！研修制度が充実した店舗をご紹介します</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">一人前になるまでどれくらいかかる？</p>
                  <p className="p-faq__a">店舗によりますが、平均1〜2年で基本的な技術を習得できます</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">年齢制限はありますか？</p>
                  <p className="p-faq__a">10代〜30代まで幅広く未経験者を受け入れている店舗があります</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q --word">働きながら技術を学べますか？</p>
                  <p className="p-faq__a">はい、OJTで実践的に学びながら給与も得られます</p>
                </div>
              </div>
              <div className="p-faq__box">
                <div className="p-faq__item">
                  <img src="/lp/img/faq-q.svg" alt="Q" />
                </div>
                <div className="p-faq__text">
                  <p className="p-faq__q">寿司職人の将来性は？</p>
                  <p className="p-faq__a">海外でも需要が高く、手に職をつけられる一生の仕事です</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-footer-cta">
          <div className="l-inner">
            <div className="p-footer-cta__contents">
              <p className="p-footer-cta__text--sub">「寿司職人専門」のアドバイザーが、<br className="u-sp" />未経験からの就職を無料サポート！</p>
              <p className="p-footer-cta__text--main">まずは無料で診断して<br className="u-sp" />寿司職人としての適正をチェック！</p>
              <div className="p-footer-cta__button c-button --large">
                <img src="/lp/img/icon-cta-lg.svg" alt="簡単!30秒" />
                <DeviceAwareLink 
                  mobileUrl="/apply-0219"
                  desktopUrl="/apply-0219"
                >
                  私にもできる？無料診断してみる
                </DeviceAwareLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="l-footer p-footer">
        <div className="p-footer__inner">
          <div className="p-footer__left">
            <div className="p-footer__logo">
              <img src="/lp/img/logo.png" alt="鮨キャリ" width={229} height={32} />
            </div>
            <div className="p-footer__info">
              <div className="p-footer__button">
                <a href="/contact" className="p-footer__link">お問い合わせ</a>
              </div>
            </div>
          </div>
          <div className="p-footer__right">
            <ul className="p-footer__list">
              <li className="p-footer__item"><Link href="/terms">利用規約</Link></li>
              <li className="p-footer__item"><Link href="/privacy">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="p-footer__copyright">
          <small className="u-pc">copyright &copy; 鮨キャリ, all rights reserved.</small>
          <small className="u-sp">copyright<br />&copy; 鮨キャリ, all rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
